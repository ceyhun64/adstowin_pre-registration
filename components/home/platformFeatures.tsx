import React from "react";
import { Play, Star, Gift, Users, Crown } from "lucide-react";

export default function PlatformFeatures() {
  const features = [
    {
      icon: Play,
      label: "Reklamlar",
      desc: "Normal & Premium",
      color: "indigo",
      // Neon renk: önceki componentteki Mavi/Reklam Veren teması
      iconColor: "text-sky-400",
      bgColor: "bg-sky-500/20",
      borderColor: "border-sky-500/30 hover:border-sky-400/80",
    },
    {
      icon: Star,
      label: "Şans Çarkı",
      desc: "Bonus kazanç",
      color: "yellow",
      // Neon renk: önceki componentteki Sarı/Bonus teması
      iconColor: "text-yellow-300",
      bgColor: "bg-yellow-400/20",
      borderColor: "border-yellow-400/30 hover:border-yellow-300/80",
    },
    {
      icon: Gift,
      label: "Ek Kazanç",
      desc: "Görevler",
      color: "cyan",
      // Neon renk: Yeşilimsi/Zümrüt Yeşili
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/20",
      borderColor: "border-emerald-500/30 hover:border-emerald-400/80",
    },
    {
      icon: Users,
      label: "Canlı Chat",
      desc: "Topluluk",
      color: "emerald",
      // Neon renk: Mor/Eflatun
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30 hover:border-purple-400/80",
    },
    {
      icon: Crown,
      label: "Premium",
      desc: "VIP üyelik",
      color: "purple",
      // Neon renk: Pembe/Fuşya - Para Kazanan teması
      iconColor: "text-fuchsia-400",
      bgColor: "bg-fuchsia-500/20",
      borderColor: "border-fuchsia-500/30 hover:border-fuchsia-400/80",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mb-16 px-4">
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          ✨ Platform Özellikleri
        </h3>
        <p className="text-white/60 text-lg">
          Mobil uyumlu, tam özellikli kazanç platformu
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {" "}
        {/* Gap artırıldı */}
        {features.map((feature, idx) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={idx}
              className={`group bg-white/5 backdrop-blur-md rounded-2xl p-6 border ${feature.borderColor} transition-all duration-300 hover:scale-[1.03] text-center shadow-xl shadow-black/30 hover:shadow-lg hover:shadow-white/5`}
            >
              {/* İkon Kutusu */}
              <div
                className={`w-16 h-16 mx-auto mb-4 ${feature.bgColor} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform border ${feature.borderColor}`}
              >
                <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
              </div>

              {/* Etiket ve Açıklama */}
              <p className="text-white font-extrabold text-lg mb-1">
                {feature.label}
              </p>
              <p className="text-white/50 text-sm font-medium">
                {feature.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
