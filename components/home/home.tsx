"use client";
import { BarChart3, HandCoins } from "lucide-react";
import { RegisterForm } from "./registerForm";
import { FeatureCard } from "./featureCard";

export default function Home() {
  return (
    <div>
      <main className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto bg-black">
        <FeatureCard
          title="REKLAM VERENLER"
          subtitle="İşinizi büyütmek için yeni nesil reklam çözümleri."
          features={[
            "Hedefli, %100 Garantili Gösterim",
            "Premium Reklamlar: Odaklanma Garanti",
            "Düşük Maliyetli Başlangıç Paketleri",
            "Dönüşüm Odaklı Reklam Paneli",
          ]}
          ctaText="Reklam Paketi İncele ve Hesap Oluştur"
          theme="advertiser"
          icon={<BarChart3 className="w-6 h-6" />}
        />

        <RegisterForm />

        <FeatureCard
          title="PARA KAZANANLAR"
          subtitle="Sizin için dijital para kazanmanın yeni yolu."
          features={[
            "Reklam İzle, Anında Kazan!",
            "Şans Çarkını Çevir, Ödülleri Yakala!",
            "Yeni Ek Kazanç Yolları",
            "İlk 10.000 üyeye 1 TKRYPTO hediye!",
          ]}
          ctaText="Ücretsiz Üye Ol ve Kazanmaya Başla"
          theme="earner"
          icon={<HandCoins className="w-6 h-6" />}
        />
      </main>
    </div>
  );
}
