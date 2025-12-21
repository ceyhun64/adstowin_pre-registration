// app/api/pre-register/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongoose";
import PreRegistration from "@/models/PreRegistration";

// CORS headers for better compatibility
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB with timeout protection
    const connectionTimeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Database connection timeout")), 10000)
    );

    await Promise.race([connectDB(), connectionTimeout]);

    // Parse request body with error handling
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400, headers: corsHeaders }
      );
    }

    const { email, userType } = body;

    // Validation
    if (!email || !userType) {
      return NextResponse.json(
        { error: "Email and user type are required" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400, headers: corsHeaders }
      );
    }

    // User type validation
    if (!["business", "earner"].includes(userType)) {
      return NextResponse.json(
        { error: "Invalid user type" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Get IP Address and User Agent
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const userAgent = request.headers.get("user-agent") || "unknown";

    // Check for existing registration with same email
    const existingRegistration = await PreRegistration.findOne({
      email: email.toLowerCase().trim(),
    });

    if (existingRegistration) {
      return NextResponse.json(
        {
          error: "This email has already been registered",
        },
        { status: 409, headers: corsHeaders }
      );
    }

    // Create new registration
    const preRegistration = await PreRegistration.create({
      email: email.toLowerCase().trim(),
      userType,
      ipAddress,
      userAgent,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registration completed successfully",
        data: {
          id: preRegistration._id,
          email: preRegistration.email,
          userType: preRegistration.userType,
          registeredAt: preRegistration.registeredAt,
        },
      },
      { status: 201, headers: corsHeaders }
    );
  } catch (error: any) {
    console.error("Pre-registration error:", error);

    // Database connection error
    if (error.message === "Database connection timeout") {
      return NextResponse.json(
        {
          error: "Service temporarily unavailable. Please try again.",
        },
        { status: 503, headers: corsHeaders }
      );
    }

    // Mongoose validation error
    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          error: "Invalid data format",
          details: error.message,
        },
        { status: 400, headers: corsHeaders }
      );
    }

    // Duplicate key error
    if (error.code === 11000) {
      return NextResponse.json(
        {
          error: "This email has already been registered",
        },
        { status: 409, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      {
        error: "Server error. Please try again later.",
      },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const connectionTimeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Database connection timeout")), 10000)
    );

    await Promise.race([connectDB(), connectionTimeout]);

    const searchParams = request.nextUrl.searchParams;
    const userType = searchParams.get("userType");

    const totalCount = await PreRegistration.countDocuments();
    const businessCount = await PreRegistration.countDocuments({
      userType: "business",
    });
    const earnerCount = await PreRegistration.countDocuments({
      userType: "earner",
    });

    if (userType && ["business", "earner"].includes(userType)) {
      const registrations = await PreRegistration.find({ userType })
        .select("email userType registeredAt status")
        .sort({ registeredAt: -1 })
        .limit(100);

      return NextResponse.json(
        {
          success: true,
          count: registrations.length,
          data: registrations,
        },
        { headers: corsHeaders }
      );
    }

    return NextResponse.json(
      {
        success: true,
        stats: {
          total: totalCount,
          business: businessCount,
          earners: earnerCount,
        },
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("Get pre-registrations error:", error);
    return NextResponse.json(
      {
        error: "An error occurred while fetching statistics",
      },
      { status: 500, headers: corsHeaders }
    );
  }
}
