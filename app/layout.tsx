import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

// FONTS
import { Orbitron, Space_Grotesk } from "next/font/google";

const mainFont = Orbitron({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  // 🔥 DÜZELTME: Sondaki eğik çizgi kaldırıldı (Next.js kendisi ekler)
  metadataBase: new URL("https://adstowin-pre-registration.vercel.app"),

  title: "AdsToWin – Pre-Registration | Earn Rewards From Ads",
  description:
    "Earn rewards by watching ads with AdsToWin. Pre-register now and grab the early access benefits!",
  keywords: [
    "AdsToWin",
    "ad rewards",
    "advertising app",
    "earn money from ads",
    "watch ads earn rewards",
    "pre registration",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    // 🔥 DÜZELTME: Sondaki eğik çizgi kaldırıldı
    canonical: "https://adstowin-pre-registration.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_EN",
    // 🔥 DÜZELTME: Sondaki eğik çizgi kaldırıldı
    url: "https://adstowin-pre-registration.vercel.app",
    siteName: "AdsToWin",
    title: "AdsToWin – Pre-Registration",
    description: "Earn rewards by watching ads with AdsToWin. Register now!",
    images: [
      {
        // 🔥 DÜZELTME: Çift eğik çizgi kaldırıldı
        url: "https://adstowin-pre-registration.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg", // Varsayılan tip olarak eklendi (Gerekirse değiştirin)
        alt: "AdsToWin Pre-Registration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdsToWin – Pre-Registration",
    description:
      "Earn rewards by watching ads with AdsToWin. Take advantage of early registration!",
    // 🔥 DÜZELTME: Çift eğik çizgi kaldırıldı
    images: ["https://adstowin-pre-registration.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AdsToWin",
    // 🔥 DÜZELTME: Sondaki eğik çizgi kaldırıldı
    url: "https://adstowin-pre-registration.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      // 🔥 DÜZELTME: Çift eğik çizgi kaldırıldı
      target:
        "https://adstowin-pre-registration.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={`${mainFont.variable} ${bodyFont.variable}`}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* 🔥 MANUAL FALLBACK OG TAGS (Her platformda %100 çıkar) */}
        <meta property="og:title" content="AdsToWin – Pre-Registration" />
        <meta
          property="og:description"
          content="Earn rewards by watching ads with AdsToWin. Pre-register now!"
        />
        {/* BU KISIM ZATEN DOĞRUYDU: Çift eğik çizgi yok. */}
        <meta
          property="og:image"
          content="https://adstowin-pre-registration.vercel.app/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" /> {/* Eklendi */}
        <meta
          property="og:url"
          content="https://adstowin-pre-registration.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://adstowin-pre-registration.vercel.app/og-image.jpg"
        />
        {/* GLOBAL FONT STYLES */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                font-family: var(--font-body), system-ui, sans-serif;
              }
              
              h1, h2, h3, h4, h5, h6,
              button, .font-main {
                font-family: var(--font-main), system-ui, sans-serif;
                letter-spacing: 0.02em;
                font-weight: 700;
              }
            `,
          }}
        />
      </head>

      <body>
        {children}

        <Toaster
          richColors
          position="bottom-right"
          toastOptions={{
            style: { zIndex: 999999 },
          }}
        />
      </body>
    </html>
  );
}
