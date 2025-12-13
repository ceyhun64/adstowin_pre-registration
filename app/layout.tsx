import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

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
    canonical: "https://adstowin-pre-registration.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://adstowin-pre-registration.vercel.app",
    siteName: "AdsToWin",
    title: "AdsToWin – Pre-Registration",
    description: "Earn rewards by watching ads with AdsToWin. Register now!",
    images: [
      {
        url: "https://adstowin-pre-registration.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "AdsToWin Pre-Registration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdsToWin – Pre-Registration",
    description:
      "Earn rewards by watching ads with AdsToWin. Take advantage of early registration!",
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
    url: "https://adstowin-pre-registration.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://adstowin-pre-registration.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={`${mainFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta property="og:title" content="AdsToWin – Pre-Registration" />
        <meta
          property="og:description"
          content="Earn rewards by watching ads with AdsToWin. Pre-register now!"
        />
        <meta
          property="og:image"
          content="https://adstowin-pre-registration.vercel.app/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:url"
          content="https://adstowin-pre-registration.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://adstowin-pre-registration.vercel.app/og-image.jpg"
        />
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
          toastOptions={{ style: { zIndex: 999999 } }}
        />
      </body>
    </html>
  );
}
