"use client";
import { ReactNode } from "react"; // ReactNode'u import et
import {
  BarChart3,
  HandCoins,
  CheckCircle2,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Zap, // Zap icon'unu kullanabilmek için
  Megaphone,
  Lightbulb,
} from "lucide-react";
// ui kütüphane importları...
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card"; // CardContent'e gerek yok, Card yeterli
import { Alert, AlertDescription } from "@/components/ui/alert";

// --- YENİ BİLEŞEN: Dikey Vurgulu Orta Kart ---
// Resimdeki "KEŞFET" alanının dikey ve vurgulu versiyonu
interface VerticalFeatureCardProps {
  slide: {
    // Slayt objesinden gelen tüm gerekli alanlar
    id: string; // ID number değil string olmalı ('intro', 'advertiser' vb.)
    title: string;
    subtitle: string;
    features: string[];
    icon: ReactNode; // Home.tsx'ten gelen icon prop'u (ReactNode olarak)
  };
  isSubmitting: boolean;
  email: string;
  setEmail: (value: string) => void;
  termsAccepted: boolean;
  setTermsAccepted: (value: boolean) => void;
  handleSubmit: (userType: string) => void; // userType string olarak bekleniyor
  submitStatus: {
    type: "success" | "error" | null;
    message: string;
  };
}

export default function VerticalFeatureCard({
  slide,
  isSubmitting,
  email,
  setEmail,
  termsAccepted,
  setTermsAccepted,
  handleSubmit,
  submitStatus,
}: VerticalFeatureCardProps) {
  return (
    <Card
      className={`
        relative overflow-hidden
        bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900 
        border-none shadow-2xl shadow-slate-400/50 backdrop-blur-xl 
        transform scale-[1.05] border-4 border-slate-400
        transition-all duration-500 hover:scale-[1.08]
      `}
    >
      {/* Üst Kısım: Başlık ve İkon */}
      <div className="p-8 text-center text-white relative z-10">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-yellow-400/20 rounded-full backdrop-blur-sm border-2 border-yellow-400">
            {/* Home.tsx'ten gelen icon'u kullan */}
            {slide.icon}
          </div>
        </div>
        <h2 className="text-4xl font-black tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-300">
          {slide.title}
        </h2>
        <p className="text-white/90 text-lg font-medium">{slide.subtitle}</p>
      </div>

      {/* Ortadaki Özellikler */}
      <div className="p-8 space-y-4 relative z-10">
        <h3 className="text-xl font-bold text-center text-yellow-300 mb-4">
          Neden Bize Katılmalısınız?
        </h3>
        {slide.features.map((feature, i) => (
          <div
            key={i}
            className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 transform transition-all hover:bg-white/20 border border-slate-700"
          >
            <ArrowRight className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
            <span className="text-white font-medium text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* Alt Kısım: Form */}
      <div className="p-8 border-t border-slate-700 relative z-10 bg-slate-800/50">
        {submitStatus.type && (
          <Alert
            className={`mb-4 ${
              submitStatus.type === "success"
                ? "bg-green-500/20 border-green-400/50"
                : "bg-red-500/20 border-red-400/50"
            } backdrop-blur-sm`}
          >
            {submitStatus.type === "success" ? (
              <CheckCircle2 className="h-4 w-4 text-green-300" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-300" />
            )}
            <AlertDescription className="text-white">
              {submitStatus.message}
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-white font-semibold">
              E-posta Adresiniz
            </Label>
            <Input
              type="email"
              placeholder="ornek@mail.com"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:bg-white/20 focus:border-white/40 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <div className="flex items-center gap-3">
            <Checkbox
              id={`terms-desktop-${slide.id}`}
              checked={termsAccepted}
              onCheckedChange={(checked) =>
                setTermsAccepted(checked as boolean)
              }
              className="border-white/30 data-[state=checked]:bg-yellow-400 data-[state=checked]:text-slate-900"
            />
            <label
              htmlFor={`terms-desktop-${slide.id}`}
              className="text-xs text-white/80 cursor-pointer"
            >
              <a href="#" className="underline hover:text-white">
                Gizlilik Politikası
              </a>
              'nı okudum ve onaylıyorum.
            </label>
          </div>

          <Button
            onClick={() => handleSubmit(slide.id)} // Slayt ID'sini string olarak gönder
            className={`w-full bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-bold py-6 text-base shadow-lg transform transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100`}
            disabled={isSubmitting || !email || !termsAccepted}
          >
            {isSubmitting ? "Kaydediliyor..." : "🚀 Hemen Başla"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
