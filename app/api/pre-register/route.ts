// app/api/pre-register/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongoose";
import PreRegistration from "@/models/PreRegistration";

export async function POST(request: NextRequest) {
  try {
    // MongoDB'ye bağlan
    await connectDB();

    // Request body'yi parse et
    const body = await request.json();
    const { email, userType } = body;

    // Validasyon
    if (!email || !userType) {
      return NextResponse.json(
        { error: "E-posta ve kullanıcı tipi gereklidir" },
        { status: 400 }
      );
    }

    // E-posta formatı kontrolü
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Geçerli bir e-posta adresi giriniz" },
        { status: 400 }
      );
    }

    // User type kontrolü
    if (!["business", "earner"].includes(userType)) {
      return NextResponse.json(
        { error: "Geçersiz kullanıcı tipi" },
        { status: 400 }
      );
    }

    // IP adresi ve User Agent bilgilerini al
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Aynı e-posta ile daha önce kayıt olup olmadığını kontrol et
    const existingRegistration = await PreRegistration.findOne({ email });

    if (existingRegistration) {
      return NextResponse.json(
        { error: "Bu e-posta adresi ile daha önce kayıt olunmuş" },
        { status: 409 }
      );
    }

    // Yeni kayıt oluştur
    const preRegistration = await PreRegistration.create({
      email,
      userType,
      ipAddress,
      userAgent,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Kayıt başarıyla tamamlandı",
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

    // Mongoose validation hatası
    if (error.name === "ValidationError") {
      return NextResponse.json(
        { error: "Geçersiz veri formatı", details: error.message },
        { status: 400 }
      );
    }

    // Duplicate key hatası (e-posta zaten var)
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Bu e-posta adresi ile daha önce kayıt olunmuş" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Sunucu hatası. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}

// GET endpoint - istatistikler için (opsiyonel)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // URL'den query parametrelerini al
    const searchParams = request.nextUrl.searchParams;
    const userType = searchParams.get("userType");

    // Toplam kayıt sayısı
    const totalCount = await PreRegistration.countDocuments();

    // Kullanıcı tipine göre sayılar
    const businessCount = await PreRegistration.countDocuments({
      userType: "business",
    });
    const earnerCount = await PreRegistration.countDocuments({
      userType: "earner",
    });

    // Eğer userType parametresi varsa, sadece o tipteki kayıtları getir
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

    // Genel istatistikler
    return NextResponse.json({
      success: true,
      stats: {
        total: totalCount,
        businesss: businessCount,
        earners: earnerCount,
      },
    });
  } catch (error) {
    console.error("Get pre-registrations error:", error);
    return NextResponse.json(
      { error: "İstatistikler alınırken bir hata oluştu" },
      { status: 500 }
    );
  }
}
