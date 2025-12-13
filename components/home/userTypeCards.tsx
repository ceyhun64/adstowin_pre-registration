"use client";
import React from "react";
import {
  Play,
  Target,
  DollarSign,
  Crown,
  Gift,
  Star,
  Zap,
  ArrowRight,
  Eye,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Users,
} from "lucide-react";

interface UserTypeCardsProps {
  userType: "earner" | "advertiser";
  setUserType: (value: "earner" | "advertiser") => void;
}

export default function UserTypeCards({
  userType,
  setUserType,
}: UserTypeCardsProps) {
  return (
    <div className="max-w-5xl mx-auto mb-16 px-2">
      {/* Tabs */}
      <div className="max-w-md mx-auto mb-12">
        <p className="text-center text-white/70 text-sm mb-4">
          Please select your user type to continue.
        </p>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
          <div className="grid grid-cols-2 gap-2">
            {/* EARNEEEER */}
            <button
              onClick={() => setUserType("earner")}
              className={`relative py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                userType === "earner"
                  ? "bg-gradient-to-r from-amber-300 to-amber-500 text-white shadow-md scale-[1.02]"
                  : "text-white/60 hover:text-white bg-white/5"
              }`}
            >
              <div className="relative flex items-center justify-center gap-2 text-sm">
                <Play className="w-5 h-5" />
                <span>Earner</span> {/* Para Kazanan -> Earner */}
              </div>
            </button>

            {/* ADVERTISER */}
            <button
              onClick={() => setUserType("advertiser")}
              className={`relative py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                userType === "advertiser"
                  ? "bg-gradient-to-r from-sky-300 to-indigo-400 text-white shadow-md scale-[1.02]"
                  : "text-white/60 hover:text-white bg-white/5"
              }`}
            >
              <div className="relative flex items-center justify-center gap-2 text-sm">
                <Target className="w-5 h-5" />
                <span>Advertiser</span> {/* Reklam Veren -> Advertiser */}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Content Box */}
      <div className="relative">
        {/* Soft Aurora Background */}
        <div
          className={`absolute inset-0 rounded-3xl blur-[55px] opacity-20 
          ${
            userType === "earner"
              ? "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-amber-200 via-amber-300 to-amber-400"
              : "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-sky-200 via-indigo-200 to-indigo-300"
          }`}
        ></div>

        <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl px-4 py-8 md:p-12 border border-white/10 shadow-xl">
          {userType === "earner" ? (
            <div className="space-y-8">
              {/* HEADER */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-300/20 rounded-2xl mb-4 border border-amber-300/30">
                  <DollarSign className="w-10 h-10 text-amber-400" />
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
                  For Earners
                </h2>
                {/* Para Kazananlar -> For Earners */}
                <p className="text-white/70 text-md">
                  The modern way to earn digital income.
                </p>
                {/* Dijital kazancın modern yolu. -> The modern way to earn digital income. */}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* CARD 1 */}
                <div className="bg-white/5 rounded-2xl p-6 border border-amber-300/30 transition-all duration-300 hover:scale-[1.02] hover:border-amber-400/60">
                  <div className="w-14 h-14 bg-amber-300/20 rounded-xl flex items-center justify-center mb-4 border border-amber-300/30">
                    <Eye className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Watch Ads, Earn
                  </h3>
                  {/* Reklam İzle, Kazan -> Watch Ads, Earn */}
                  <p className="text-white/60 text-sm mb-3">
                    Instant payouts between $0.01 – $0.50.
                  </p>
                  {/* $0.01 – $0.50 arası anlık ödeme. -> Instant payouts between $0.01 – $0.50. */}
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                    <ArrowRight className="w-4 h-4" />
                    Start Now
                  </div>
                  {/* Hemen Başla -> Start Now */}
                </div>

                {/* CARD 2 */}
                <div className="bg-white/5 rounded-2xl p-6 border border-yellow-300/30 transition-all duration-300 hover:scale-[1.02] hover:border-yellow-400/60">
                  <div className="w-14 h-14 bg-yellow-300/20 rounded-xl flex items-center justify-center mb-4 border border-yellow-300/30">
                    <Crown className="w-7 h-7 text-yellow-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Wheel of Fortune
                  </h3>
                  {/* Şans Çarkı -> Wheel of Fortune */}
                  <p className="text-white/60 text-sm mb-3">
                    Opportunity to earn up to 25x bonus.
                  </p>
                  {/* 25x bonus kazanma fırsatı. -> Opportunity to earn up to 25x bonus. */}
                  <div className="flex items-center gap-2 text-yellow-400 text-xs font-semibold">
                    <Star className="w-4 h-4" />
                    Bonus Earnings
                  </div>
                  {/* Bonus Kazançlar -> Bonus Earnings */}
                </div>

                {/* CARD 3 */}
                <div className="bg-white/5 rounded-2xl p-6 border border-purple-300/30 transition-all duration-300 hover:scale-[1.02] hover:border-purple-400/60">
                  <div className="w-14 h-14 bg-purple-300/20 rounded-xl flex items-center justify-center mb-4 border border-purple-300/30">
                    <Gift className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Additional Earning Methods
                  </h3>
                  {/* Ek Kazanç Yöntemleri -> Additional Earning Methods */}
                  <p className="text-white/60 text-sm mb-3">
                    Crypto, NFT, and task earnings.
                  </p>
                  {/* Kripto, NFT ve görev kazançları. -> Crypto, NFT, and task earnings. */}
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold">
                    <Zap className="w-4 h-4" />
                    VIP Advantages
                  </div>
                  {/* VIP Avantajları -> VIP Advantages */}
                </div>
              </div>

              {/* INFO */}
              <div className="bg-amber-300/10 rounded-xl p-4 border border-amber-300/30">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                  <p className="text-white/90 text-sm">
                    <span className="font-semibold">
                      For the First 10,000 Members:
                    </span>{" "}
                    $10 Crypto bonus.
                  </p>
                  {/* İlk 10.000 Üyeye: $10 Kripto bonusu. -> For the First 10,000 Members: $10 Crypto bonus. */}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* HEADER */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-300/20 rounded-2xl mb-4 border border-sky-300/30">
                  <Target className="w-10 h-10 text-sky-400" />
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
                  For Advertisers
                </h2>
                {/* Reklam Verenler -> For Advertisers */}
                <p className="text-white/70 text-md">
                  Grow with modern advertising solutions.
                </p>
                {/* Modern reklam çözümleri ile büyüyün. -> Grow with modern advertising solutions. */}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* CARD 1 */}
                <div className="bg-white/5 rounded-2xl p-6 border border-sky-300/30 transition-all duration-300 hover:scale-[1.02] hover:border-sky-400/60">
                  <div className="w-14 h-14 bg-sky-300/20 rounded-xl flex items-center justify-center mb-4 border border-sky-300/30">
                    <TrendingUp className="w-7 h-7 text-sky-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Standard Ads
                  </h3>
                  {/* Standart Reklamlar -> Standard Ads */}
                  <p className="text-white/60 text-sm mb-3">
                    In-content or video ad options.
                  </p>
                  {/* In-content veya video reklam seçenekleri. -> In-content or video ad options. */}
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
                    <ArrowRight className="w-4 h-4" />
                    Launch Campaign
                  </div>
                  {/* Kampanya Başlat -> Launch Campaign */}
                </div>

                {/* CARD 2 */}
                <div className="bg-white/5 rounded-2xl p-6 border border-indigo-300/30 transition-all duration-300 hover:scale-[1.02] hover:border-indigo-400/60">
                  <div className="w-14 h-14 bg-indigo-300/20 rounded-xl flex items-center justify-center mb-4 border border-indigo-300/30">
                    <Sparkles className="w-7 h-7 text-indigo-300" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Premium Ads
                  </h3>
                  {/* Premium Reklamlar -> Premium Ads */}
                  <p className="text-white/60 text-sm mb-3">
                    100% guaranteed impressions.
                  </p>
                  {/* %100 garantili gösterim. -> 100% guaranteed impressions. */}
                  <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold">
                    <Star className="w-4 h-4" />
                    High Conversion
                  </div>
                  {/* Yüksek Dönüşüm -> High Conversion */}
                </div>

                {/* CARD 3 */}
                <div className="bg-white/5 rounded-2xl p-6 border border-emerald-300/30 transition-all duration-300 hover:scale-[1.02] hover:border-emerald-400/60">
                  <div className="w-14 h-14 bg-emerald-300/20 rounded-xl flex items-center justify-center mb-4 border border-emerald-300/30">
                    <Users className="w-7 h-7 text-emerald-300" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Low-Cost Start
                  </h3>
                  {/* Düşük Maliyetli Başlangıç -> Low-Cost Start */}
                  <p className="text-white/60 text-sm mb-3">
                    Quick start with a minimum $50 budget.
                  </p>
                  {/* Minimum $50 bütçe ile hızlı başlangıç. -> Quick start with a minimum $50 budget. */}
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold">
                    <Zap className="w-4 h-4" />
                    Smart Targeting
                  </div>
                  {/* Akıllı Hedefleme -> Smart Targeting */}
                </div>
              </div>

              {/* INFO */}
              <div className="bg-sky-300/10 rounded-xl p-4 border border-sky-300/30">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-sky-400" />
                  <p className="text-white/90 text-sm">
                    20% extra impressions on the first ad.
                  </p>
                  {/* İlk reklamda %20 ekstra gösterim. -> 20% extra impressions on the first ad. */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
