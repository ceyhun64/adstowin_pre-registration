// app/api/pre-register/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongoose";
import PreRegistration from "@/models/PreRegistration";

export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connectDB();

    // Parse request body
    const body = await request.json();
    const { email, userType } = body;

    // Validation
    if (!email || !userType) {
      return NextResponse.json(
        { error: "Email and user type are required" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // User type validation
    if (!["business", "earner"].includes(userType)) {
      return NextResponse.json({ error: "Invalid user type" }, { status: 400 });
    }

    // Get IP Address and User Agent
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const userAgent = request.headers.get("user-agent") || "unknown";

    // Check for existing registration with same email
    const existingRegistration = await PreRegistration.findOne({ email });

    if (existingRegistration) {
      return NextResponse.json(
        { error: "This email has already been registered" },
      );
    }

    // Create new registration
    const preRegistration = await PreRegistration.create({
      email,
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
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Pre-registration error:", error);

    // Mongoose validation error
    if (error.name === "ValidationError") {
      return NextResponse.json(
        { error: "Invalid data format", details: error.message },
      );
    }

    // Duplicate key error (email already exists)
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "This email has already been registered" },
      );
    }

    return NextResponse.json(
      { error: "Server error. Please try again later." },
    );
  }
}

// GET endpoint - optional statistics
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Get query params
    const searchParams = request.nextUrl.searchParams;
    const userType = searchParams.get("userType");

    // Total registrations
    const totalCount = await PreRegistration.countDocuments();

    // Count by user type
    const businessCount = await PreRegistration.countDocuments({
      userType: "business",
    });

    const earnerCount = await PreRegistration.countDocuments({
      userType: "earner",
    });

    // If userType param is provided, return filtered registrations
    if (userType && ["business", "earner"].includes(userType)) {
      const registrations = await PreRegistration.find({ userType })
        .select("email userType registeredAt status")
        .sort({ registeredAt: -1 })
        .limit(100);

      return NextResponse.json({
        success: true,
        count: registrations.length,
        data: registrations,
      });
    }

    // General statistics
    return NextResponse.json({
      success: true,
      stats: {
        total: totalCount,
        business: businessCount,
        earners: earnerCount,
      },
    });
  } catch (error) {
    console.error("Get pre-registrations error:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching statistics" },
    );
  }
}
