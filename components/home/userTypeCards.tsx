"use client";
import React, { useState } from "react";
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

export default function UserTypeCards() {
  const [userType, setUserType] = useState("viewer");

  return (
    <div className="max-w-5xl mx-auto mb-16 px-2">
      {" "}
      {/* max-w-5xl eklendi */}
      {/* Tabs */}
      <div className="max-w-md mx-auto mb-12">
        <p className="text-center text-white/70 text-sm mb-4">
          Lütfen devam etmek için kullanıcı tipinizi seçin.
        </p>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setUserType("advertiser")} // Önce Reklam Veren butonu
              className={`relative py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                userType === "advertiser"
                  ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/30 scale-[1.02]" // Mavi/Çivit Mavi gradient, görseldeki Reklam Veren tarafı
                  : "text-white/60 hover:text-white/80"
              }`}
            >
              {userType === "advertiser" && (
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl blur-xl opacity-40"></div>
              )}
              <div className="relative flex items-center justify-center gap-2 text-sm">
                <Target className="w-5 h-5" />
                <span>Reklam Veren</span>
              </div>
            </button>

            <button
              onClick={() => setUserType("viewer")} // Sonra İzleyici butonu
              className={`relative py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                userType === "viewer"
                  ? "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-lg shadow-fuchsia-500/30 scale-[1.02]" // Pembe/Fușya gradient, görseldeki Para Kazananlar tarafı
                  : "text-white/60 hover:text-white/80"
              }`}
            >
              {userType === "viewer" && (
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-xl blur-xl opacity-40"></div>
              )}
              <div className="relative flex items-center justify-center gap-2 text-sm">
                <Play className="w-5 h-5" />
                <span>Para Kazanan</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Content Box */}
      <div className="relative">
        {/* Neon Parlaklık */}
        <div
          className={`absolute inset-0 rounded-3xl blur-3xl opacity-30 ${
            // Parlaklık artırıldı
            userType === "viewer"
              ? "bg-gradient-to-r from-fuchsia-500 to-pink-500" // İzleyici için Pembe neon
              : "bg-gradient-to-r from-sky-500 to-indigo-600" // Reklam Veren için Mavi neon
          }`}
        ></div>

        <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl px-4 py-8 md:p-12 border border-white/10 shadow-2xl shadow-black/50">
          {" "}
          {/* Arkaplan karartıldı, border inceltildi */}
          {userType === "viewer" ? (
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-fuchsia-500/20 rounded-2xl mb-4 border border-fuchsia-500/30">
                  <DollarSign className="w-10 h-10 text-fuchsia-400" />
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
                   Para Kazananlar
                </h2>
                <p className="text-white/70 text-md">
                  Sizin için **dijital para kazanmanın yeni yolu**.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {" "}
                {/* Gap artırıldı */}
                <div className="bg-white/5 rounded-2xl p-6 border border-fuchsia-500/30 hover:border-fuchsia-400/80 transition-all duration-300 hover:scale-[1.02] group shadow-xl shadow-fuchsia-500/10">
                  <div className="w-14 h-14 bg-fuchsia-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-fuchsia-500/30">
                    <Eye className="w-7 h-7 text-fuchsia-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Reklam İzle, Anında Kazan!
                  </h3>
                  <p className="text-white/60 text-sm mb-3">
                    $0.01 ile $0.50 arası anlık ödeme.
                  </p>
                  <div className="flex items-center gap-2 text-fuchsia-400 text-xs font-semibold">
                    <ArrowRight className="w-4 h-4" />
                    Hemen Başla
                  </div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-yellow-400/30 hover:border-yellow-300/80 transition-all duration-300 hover:scale-[1.02] group shadow-xl shadow-yellow-500/10">
                  <div className="w-14 h-14 bg-yellow-400/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-yellow-400/30">
                    <Crown className="w-7 h-7 text-yellow-300" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Şans Çarkını Çevir
                  </h3>
                  <p className="text-white/60 text-sm mb-3">
                    Ödülleri Yakala! **25x Kazanç** Şansı!
                  </p>
                  <div className="flex items-center gap-2 text-yellow-300 text-xs font-semibold">
                    <Star className="w-4 h-4" />
                    Bonus Kazançlar
                  </div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/80 transition-all duration-300 hover:scale-[1.02] group shadow-xl shadow-purple-500/10">
                  <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-purple-500/30">
                    <Gift className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Yeni Ek Kazanç Yöntemleri
                  </h3>
                  <p className="text-white/60 text-sm mb-3">
                    NFT, Kripto ve özel görevler.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold">
                    <Zap className="w-4 h-4" />
                    VIP Avantajları
                  </div>
                </div>
              </div>

              {/* Ekstra Bilgi - İzleyici */}
              <div className="bg-fuchsia-500/10 rounded-xl p-4 border border-fuchsia-500/30">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                  <p className="text-white/90 text-sm">
                    <span className="font-semibold text-white">
                      İlk 10.000 Üyeye Hediye:
                    </span>{" "}
                    **$10 Kripto** bonusu ve **Premium** çekiliş.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-500/20 rounded-2xl mb-4 border border-sky-500/30">
                  <Target className="w-10 h-10 text-sky-400" />
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
                   Reklam Verenler
                </h2>
                <p className="text-white/70 text-md">
                  İşinizi büyütmek için **yeni nesil reklam çözümleri**.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {" "}
                {/* Gap artırıldı */}
                <div className="bg-white/5 rounded-2xl p-6 border border-sky-500/30 hover:border-sky-400/80 transition-all duration-300 hover:scale-[1.02] group shadow-xl shadow-sky-500/10">
                  <div className="w-14 h-14 bg-sky-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-sky-500/30">
                    <TrendingUp className="w-7 h-7 text-sky-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Standart Reklam Çözümleri
                  </h3>
                  <p className="text-white/60 text-sm mb-3">
                    İçerik içi (in-content) veya **video reklam** seçeneği.
                  </p>
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold">
                    <ArrowRight className="w-4 h-4" />
                    Kampanya Başlat
                  </div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-yellow-400/30 hover:border-yellow-300/80 transition-all duration-300 hover:scale-[1.02] group shadow-xl shadow-yellow-500/10">
                  <div className="w-14 h-14 bg-yellow-400/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-yellow-400/30">
                    <Sparkles className="w-7 h-7 text-yellow-300" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Premium Reklamlar
                  </h3>
                  <p className="text-white/60 text-sm mb-3">
                    %100 garantili gösterim: **Hedef kitle odaklı**.
                  </p>
                  <div className="flex items-center gap-2 text-yellow-300 text-xs font-semibold">
                    <Star className="w-4 h-4" />
                    Yüksek Dönüşüm
                  </div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-400/80 transition-all duration-300 hover:scale-[1.02] group shadow-xl shadow-emerald-500/10">
                  <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-emerald-500/30">
                    <Users className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Düşük Maliyetli Başlangıç
                  </h3>
                  <p className="text-white/60 text-sm mb-3">
                    Minimum bütçe ile hemen başlayın: **$50 Bütçe**.
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                    <Zap className="w-4 h-4" />
                    Akıllı Hedefleme
                  </div>
                </div>
              </div>

              {/* Ekstra Bilgi - Reklam Veren */}
              <div className="bg-sky-500/10 rounded-xl p-4 border border-sky-500/30">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-sky-400 flex-shrink-0" />
                  <p className="text-white/90 text-sm">
                    <span className="font-semibold text-white">
                      Reklam Paketi:
                    </span>{" "}
                    İlk reklamınızda **%20 ekstra gösterim** hediyesi.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
