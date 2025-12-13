import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adstowin.com"),
  title: "AdsToWin – Pre-Registration | Earn Rewards From Ads",
  description:
    "Earn rewards by watching ads with AdsToWin. Pre-register now and grab the early access benefits!", // Çeviri: "AdsToWin ile reklam izleyerek ödüller kazanın. Şimdi ön kayıt olun ve erken erişim avantajlarını yakalayın!"
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
    canonical: "https://adstowin.com",
  },
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://adstowin.com",
    siteName: "AdsToWin",
    title: "AdsToWin – Pre-Registration",
    description: "Earn rewards by watching ads with AdsToWin. Register now!", // Çeviri: "AdsToWin ile reklam izleyerek ödüller kazanın. Hemen ön kayıt olun!"
    images: ["/og-image.jpg"],
     
  },
  twitter: {
    card: "summary_large_image",
    title: "AdsToWin – Pre-Registration",
    description:
      "Earn rewards by watching ads with AdsToWin. Take advantage of early registration!", // Çeviri: "AdsToWin ile reklam izleyerek ödüller kazanın. Erken kayıt avantajlarından yararlan!"
    images: ["/og-image.jpg"],
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
    url: "https://adstowin.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://adstowin.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster
          richColors
          position="bottom-right"
          toastOptions={{ style: { zIndex: 9999 } }}
        />
      </body>
    </html>
  );
}
