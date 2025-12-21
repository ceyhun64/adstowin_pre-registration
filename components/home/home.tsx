"use client";

import { useState } from "react";
import HeroSection from "@/components/home/heroSection";
import UserTypeCards from "@/components/home/userTypeCards";
import PlatformFeatures from "@/components/home/platformFeatures";
import RegistrationForm from "@/components/home/registrationForm";
import { FlickeringGrid } from "../ui/shadcn-io/flickering-grid";

export default function Home() {
  const [userType, setUserType] = useState<"earner" | "business">("earner");

  const handleScrollToForm = () => {
    const formElement = document.getElementById("registration-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-black relative overflow-y-hidden font-sans">
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={100}
        gridGap={5}
        color="#6D6A75"
        maxOpacity={0.1}
        flickerChance={0.1}
      />
      <main className="relative z-10 container mx-auto pb-8 max-w-8xl">
        {/* Hero Section */}
        <HeroSection onScrollToForm={handleScrollToForm} />

        <div className="px-4">
          {/* Coming Soon Badge - UPDATED */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-amber-500/15 to-yellow-500/15 border-2 border-amber-500/40 rounded-full px-6 md:px-8 py-3 backdrop-blur-sm">
                <p className="text-amber-300 font-bold text-sm md:text-base flex items-center gap-3">
                  LAUNCHING SOON
                </p>
              </div>
            </div>
          </div>

          {/* User Type Cards */}
          <UserTypeCards userType={userType} setUserType={setUserType} />

          {/* Platform Features */}
          <PlatformFeatures />

          {/* Registration Form */}
          <RegistrationForm userType={userType} setUserType={setUserType} />

          {/* Footer - UPDATED */}
          <footer className="text-center text-white/40 text-sm space-y-3 pb-8">
            <p className="font-semibold">
              © 2025 ADSTOWIN - All rights reserved
            </p>
            <p>Professional digital engagement platform for modern brands</p>
            <div className="flex justify-center gap-4 text-xs text-white/30">
              <span>Terms of Service</span>
              <span>•</span>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Contact</span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
