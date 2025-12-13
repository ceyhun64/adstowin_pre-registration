"use client";
import React, { useState, useEffect } from "react";
import {
  Play,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Headset,
} from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export default function HeroSection({ onScrollToForm }: HeroSectionProps) {
  const [registeredCount, setRegisteredCount] = useState(1247);

  // Kayıt sayısını arttıran sayaç simülasyonu
  useEffect(() => {
    const interval = setInterval(() => {
      setRegisteredCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Tailwind'de koyu arkaplanı belirttik. Bu genellikle ana layout dosyasında olmalıdır, ancak burada da tanımlanabilir.
    <div className="relative text-center py-16 md:py-24 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Animated Background Elements - Neon Blur (Geri Eklendi) */}
      <div className="absolute inset-0 z-0">
        {/* Mavi Neon Daire */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-slow-pulse"></div>
        {/* Fuşya Neon Daire */}
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-slow-pulse animation-delay-5000"></div>

        {/* Custom Keyframes for animation (Geri Eklendi) */}
        <style jsx global>{`
          @keyframes slow-pulse {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(20px, 30px) scale(1.05);
            }
          }
          /* Tailwind'de kolayca kullanılamayan 'animation-delay' için özel sınıf */
          .animation-delay-5000 {
            animation-delay: 5s;
          }
        `}</style>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto pt-16 md:pt-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* SOL BÜYÜK LOGO */}
        <div className="flex justify-center md:justify-start">
          <div className="w-48 h-48 md:w-[280px] md:h-[280px] flex items-center justify-center transition-all duration-500 hover:scale-105">
            <Image
              src="/logo/logotrans.png" // Bu path'in doğru olduğunu varsayıyorum
              alt="Logo"
              width={280}
              height={280}
              className="object-contain w-full h-full drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            />
          </div>
        </div>

        {/* SAĞ TARAF METİN BLOĞU */}
        <div className="text-center md:text-left">
          {/* Başlık */}
          <div className="mb-10">
            <h1 className="font-extrabold leading-[0.9] tracking-tight">
              {/* İZLE (Pembe/Fuşya - Para Kazanan teması) */}
              <span className="block text-5xl sm:text-7xl lg:text-[8rem] bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,100,180,0.3)]">
                İZLE
              </span>
              {/* KAZAN (Mavi/Gök Mavisi - Reklam Veren teması) */}
              <span className="block text-5xl sm:text-7xl lg:text-[8rem] bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,150,255,0.3)]">
                KAZAN
              </span>
            </h1>

            <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-light text-slate-300 max-w-xl md:max-w-2xl">
              Yeni Nesil Reklam Gelir Modeli
            </p>
          </div>

          {/* Alt Açıklama */}
          <p className="text-lg md:text-xl text-slate-400 font-normal mb-10 max-w-xl md:max-w-2xl leading-relaxed">
            Mobil cihazınızdan **zahmetsizce kazanç** sağlayın veya **gerçek,
            etkileşimli hedef kitleye** saniyeler içinde ulaşın.
          </p>

          {/* CTA + İstatistik */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            {/* Buton (Pembe/Fuşya Gradient) */}
            <button
              onClick={onScrollToForm}
              className="group relative inline-flex items-center justify-center px-12 py-5 rounded-full font-extrabold text-xl overflow-hidden transition-all duration-500 shadow-2xl shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Buton Gradient Arkaplanı */}
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-pink-600 transition-all duration-500 group-hover:from-fuchsia-400 group-hover:to-pink-500"></div>

              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>

              <span className="relative text-white flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                Şimdi Başla
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>

            {/* Stats Badge */}
            <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-lg animate-pulse"></div>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {registeredCount.toLocaleString()}
                </span>
                <span className="text-slate-400 text-sm font-medium">
                  Aktif Kullanıcı
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
