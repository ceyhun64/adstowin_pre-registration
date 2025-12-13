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
  metadataBase: new URL("https://adstowin.com"),
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
    canonical: "https://adstowin.com",
  },
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://adstowin.com",
    siteName: "AdsToWin",
    title: "AdsToWin – Pre-Registration",
    description: "Earn rewards by watching ads with AdsToWin. Register now!",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdsToWin – Pre-Registration",
    description:
      "Earn rewards by watching ads with AdsToWin. Take advantage of early registration!",
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
    <html lang="en" className={`${mainFont.variable} ${bodyFont.variable}`}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
