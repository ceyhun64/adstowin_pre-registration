"use client";
import React, { useState } from "react";
import {
  Play,
  DollarSign,
  Crown,
  Users,
  CheckCircle2,
  AlertCircle,
  Eye,
  Target,
  Sparkles,
  TrendingUp,
  Gift,
  BarChart3,
  Zap,
  Award,
} from "lucide-react";

export default function AdsToWinPrelaunch() {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<"viewer" | "advertiser">("viewer");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async () => {
    if (!termsAccepted) {
      setSubmitStatus({
        type: "error",
        message: "Lütfen kullanım şartlarını onaylayın.",
      });
      return;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setSubmitStatus({
        type: "error",
        message: "Lütfen geçerli bir e-posta adresi girin.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const success = Math.random() > 0.1;

      if (success) {
        setSubmitStatus({
          type: "success",
          message:
            "🎉 Kayıt başarılı! Lansmanda size özel bildirim göndereceğiz.",
        });
        setEmail("");
        setTermsAccepted(false);
      } else {
        throw new Error("Sunucu hatası");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Bir hata oluştu. Lütfen tekrar deneyin.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 p-1 rounded-2xl">
              <div className="bg-slate-900 px-6 py-3 rounded-xl">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  ADSTOWIN
                </h1>
              </div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-semibold mb-2">
            Reklam İzle, Para Kazan!
          </p>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
            Mobil cihazınızdan reklam izleyerek para kazanın veya hedefli
            reklamlarla işinizi büyütün
          </p>
        </header>

        {/* Coming Soon Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-6 py-2 backdrop-blur-sm">
            <p className="text-yellow-300 font-semibold text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              YAKINDA YAYINDA
              <Sparkles className="w-4 h-4" />
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* İzleyici Kartı */}
          <div
            onClick={() => setUserType("viewer")}
            className={`cursor-pointer transition-all duration-500 rounded-2xl p-6 border-2 relative overflow-hidden ${
              userType === "viewer"
                ? "border-cyan-400 bg-gradient-to-br from-cyan-900/40 to-emerald-900/40 shadow-xl shadow-cyan-500/20 scale-105"
                : "border-white/10 bg-white/5 hover:border-cyan-400/50"
            }`}
          >
            {/* Animated Background Icons for Viewer */}
            {userType === "viewer" && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                <div className="absolute top-4 right-4 animate-bounce">
                  <Play className="w-16 h-16 text-cyan-400" />
                </div>
                <div className="absolute bottom-8 left-8 animate-pulse">
                  <DollarSign className="w-20 h-20 text-emerald-400" />
                </div>
                <div className="absolute top-1/2 left-1/4">
                  <Award className="w-12 h-12 text-yellow-400" />
                </div>
                <div className="absolute bottom-1/4 right-1/4 animate-bounce">
                  <Eye className="w-14 h-14 text-purple-400" />
                </div>
              </div>
            )}

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-xl backdrop-blur-sm">
                  <Play className="w-6 h-6 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  İzleyici Olarak Katıl
                </h2>
              </div>

              {/* Viewer Preview Image */}
              <div className="mb-6 rounded-xl overflow-hidden border border-cyan-400/30 bg-gradient-to-br from-cyan-950/50 to-emerald-950/50 p-4">
                <div className="relative aspect-video bg-slate-900/80 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="flex justify-center gap-3">
                      <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center animate-pulse">
                        <Play className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center animate-pulse">
                        <DollarSign className="w-8 h-8 text-emerald-400" />
                      </div>
                      <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center animate-pulse">
                        <Crown className="w-8 h-8 text-yellow-400" />
                      </div>
                    </div>
                    <p className="text-cyan-300 text-sm font-semibold">
                      Reklam İzle • Para Kazan
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-6">
                Mobil cihazınızdan reklam izleyerek günlük gelir elde edin
              </p>

              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-3 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm">
                        Normal Reklamlar
                      </p>
                      <p className="text-white/60 text-xs">
                        15 saniye izle, $0.001 kazan
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-3 border border-yellow-500/30 backdrop-blur-sm">
                  <div className="flex items-start gap-2">
                    <Crown className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm">
                        Premium Reklamlar
                      </p>
                      <p className="text-white/60 text-xs">
                        Rakam tahmin et, $0.005 kazan!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/30 backdrop-blur-sm">
                  <div className="flex items-start gap-2">
                    <Gift className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm">
                        Premium Üyelik
                      </p>
                      <p className="text-white/60 text-xs">
                        2x kazanç + özel görevler
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-white/50 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Her reklam sadece 1 kez gösterilir
                </p>
              </div>
            </div>
          </div>

          {/* Reklam Veren Kartı */}
          <div
            onClick={() => setUserType("advertiser")}
            className={`cursor-pointer transition-all duration-500 rounded-2xl p-6 border-2 relative overflow-hidden ${
              userType === "advertiser"
                ? "border-indigo-400 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 shadow-xl shadow-indigo-500/20 scale-105"
                : "border-white/10 bg-white/5 hover:border-indigo-400/50"
            }`}
          >
            {/* Animated Background Icons for Advertiser */}
            {userType === "advertiser" && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                <div className="absolute top-6 right-6 animate-pulse">
                  <Target className="w-18 h-18 text-indigo-400" />
                </div>
                <div className="absolute bottom-10 left-10 animate-bounce">
                  <BarChart3 className="w-16 h-16 text-purple-400" />
                </div>
                <div className="absolute top-1/3 right-1/4">
                  <TrendingUp className="w-14 h-14 text-pink-400" />
                </div>
                <div className="absolute bottom-1/3 left-1/3 animate-pulse">
                  <Sparkles className="w-12 h-12 text-yellow-400" />
                </div>
              </div>
            )}

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-indigo-500/20 rounded-xl backdrop-blur-sm">
                  <Target className="w-6 h-6 text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Reklam Veren Olarak Katıl
                </h2>
              </div>

              {/* Advertiser Preview Image */}
              <div className="mb-6 rounded-xl overflow-hidden border border-indigo-400/30 bg-gradient-to-br from-indigo-950/50 to-purple-950/50 p-4">
                <div className="relative aspect-video bg-slate-900/80 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center items-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center">
                          <Target className="w-10 h-10 text-indigo-400" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center animate-ping">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
                      <div className="space-y-1">
                        <div className="w-16 h-3 bg-indigo-400/40 rounded animate-pulse"></div>
                        <div className="w-20 h-3 bg-purple-400/40 rounded animate-pulse"></div>
                        <div className="w-12 h-3 bg-pink-400/40 rounded animate-pulse"></div>
                      </div>
                    </div>
                    <p className="text-indigo-300 text-sm font-semibold">
                      Hedefli • Garantili • Etkili
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-6">
                %100 garantili gösterim ile hedef kitlenize ulaşın
              </p>

              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-3 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm">
                        Normal Reklamlar
                      </p>
                      <p className="text-white/60 text-xs">
                        15 saniye gösterim, $0.005/tıklama
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-3 border border-yellow-500/30 backdrop-blur-sm">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm">
                        Premium Reklamlar
                      </p>
                      <p className="text-white/60 text-xs">
                        Etkileşimli reklam, $0.02/tıklama
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/30 backdrop-blur-sm">
                  <div className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm">
                        Hedefli Gösterim
                      </p>
                      <p className="text-white/60 text-xs">
                        Doğru kitleye, doğru zamanda
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-white/50 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Her kullanıcıya 1 kez gösterim garantisi
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Özellikleri */}
        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            📱 Mobil Uyumlu Platform Özellikleri
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="bg-indigo-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-indigo-500/30 transition-colors">
                <Play className="w-6 h-6 text-indigo-400" />
              </div>
              <p className="text-white text-sm font-semibold">Reklamlar</p>
              <p className="text-white/50 text-xs">Normal & Premium</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-purple-500/30 transition-colors">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-white text-sm font-semibold">Şans Çarkı</p>
              <p className="text-white/50 text-xs">Bonus kazanç</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="bg-cyan-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-cyan-500/30 transition-colors">
                <Gift className="w-6 h-6 text-cyan-400" />
              </div>
              <p className="text-white text-sm font-semibold">Ek Kazanç</p>
              <p className="text-white/50 text-xs">Görevler</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="bg-emerald-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-emerald-500/30 transition-colors">
                <Users className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-white text-sm font-semibold">Canlı Chat</p>
              <p className="text-white/50 text-xs">Topluluk</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="bg-yellow-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-yellow-500/30 transition-colors">
                <Crown className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-white text-sm font-semibold">Premium</p>
              <p className="text-white/50 text-xs">VIP üyelik</p>
            </div>
          </div>
        </div>

        {/* Kayıt Formu */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-black text-white mb-2">
                Erken Erişim Kayıt
              </h3>
              <p className="text-white/70">
                Lansmanımızı kaçırmayın, ilk üyeler arasında olun!
              </p>
            </div>

            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-xl border ${
                  submitStatus.type === "success"
                    ? "bg-emerald-500/20 border-emerald-400/50"
                    : "bg-red-500/20 border-red-400/50"
                } backdrop-blur-sm`}
              >
                <div className="flex items-center gap-3">
                  {submitStatus.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-300 flex-shrink-0" />
                  )}
                  <p className="text-white text-sm">{submitStatus.message}</p>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Katılım Türünüz
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setUserType("viewer")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      userType === "viewer"
                        ? "border-cyan-400 bg-cyan-500/20 scale-105"
                        : "border-white/20 bg-white/5 hover:border-cyan-400/50"
                    }`}
                  >
                    <Play className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">İzleyici</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType("advertiser")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      userType === "advertiser"
                        ? "border-indigo-400 bg-indigo-500/20 scale-105"
                        : "border-white/20 bg-white/5 hover:border-indigo-400/50"
                    }`}
                  >
                    <Target className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">
                      Reklam Veren
                    </p>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ornek@mail.com"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all disabled:opacity-50"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-white/10 cursor-pointer"
                />
                <label
                  htmlFor="terms"
                  className="text-white/70 text-sm cursor-pointer"
                >
                  <span className="text-cyan-400 hover:underline">
                    Kullanım Şartları
                  </span>{" "}
                  ve{" "}
                  <span className="text-cyan-400 hover:underline">
                    Gizlilik Politikası
                  </span>
                  'nı okudum ve kabul ediyorum.
                </label>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !email || !termsAccepted}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  userType === "viewer"
                    ? "bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400"
                    : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400"
                } text-white shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed`}
              >
                {isSubmitting
                  ? "Kaydediliyor..."
                  : "🚀 Erken Erişim İçin Kayıt Ol"}
              </button>
            </div>

            <p className="text-center text-white/50 text-xs mt-6">
              * Lansman tarihinden önce size özel bildirim göndereceğiz
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-white/40 text-sm">
          <p>© 2025 ADSTOWIN - Tüm hakları saklıdır</p>
          <p className="mt-2">
            Mobil cihazlarınızdan kolayca erişin ve kazanmaya başlayın
          </p>
        </footer>
      </main>
    </div>
  );
}