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
  title: "AdsToWin – Pre-Registration | Earn Rewards From Ads",
  description:
    "Earn rewards by watching ads with AdsToWin. Pre-register now and grab the early access benefits!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mainFont.variable} ${bodyFont.variable}`}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                font-family: var(--font-body), system-ui, sans-serif;
              }
              h1, h2, h3, h4, h5, h6, button, .font-main {
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
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
