"use client";
import React, { useState } from "react";
import { Bell, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function RegistrationForm({ userType = "earner" }) {
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!termsAccepted)
      return toast.error("Lütfen kullanım şartlarını onaylayın.");
    if (!email || !/\S+@\S+\.\S+/.test(email))
      return toast.error("Lütfen geçerli bir e-posta adresi girin.");

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/pre-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, userType }),
      });

      const data = await res.json();

      if (!res.ok) return toast.error(data.error || "Bir hata oluştu.");

      toast.success("Harika! Kayıt başarılı.");
      setEmail("");
      setTermsAccepted(false);
    } catch {
      toast.error("Sunucu hatası. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-16" id="registration-form">
      <div className="relative">
        {/* ⭐ Aurora Glow Background (Yeni Nesil Renkler) */}
        <div
          className={`absolute inset-0 rounded-3xl blur-[70px] opacity-40 
          ${
            userType === "earner"
              ? "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#00eaff] via-[#6b5bff] to-[#ff54b0]"
              : "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#7b5bff] via-[#ff54b0] to-[#ffa95e]"
          }`}
        />

        <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl px-5 py-10 md:p-12 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.07)]">
          {/* HEADER */}
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-16 h-16 
              bg-white/15 backdrop-blur-xl rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.2)] mb-4"
            >
              <Bell className="w-8 h-8 text-white drop-shadow-md" />
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
              Erken Erişim Kayıt
            </h3>
            <p className="text-white/70 text-base md:text-lg leading-normal">
              Lansmanı kaçırma—ilk avantajları sen kap!
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-3 text-base">
                E-posta Adresiniz
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@mail.com"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl 
                text-white placeholder:text-white/40 focus:outline-none 
                focus:ring-4 focus:ring-[#00eaff]/40 focus:border-[#00eaff] 
                transition-all disabled:opacity-50 text-base"
              />
            </div>

            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-white/30 bg-white/10 cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-white/80 text-sm leading-snug"
              >
                <span className="text-[#00eaff] hover:underline font-semibold">
                  Kullanım Şartları
                </span>{" "}
                ve{" "}
                <span className="text-[#00eaff] hover:underline font-semibold">
                  Gizlilik Politikası
                </span>{" "}
                ’nı kabul ediyorum.
              </label>
            </div>

            {/* BUTTON — AURORA MODERN */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !email || !termsAccepted}
              className={`relative w-full py-5 rounded-2xl font-bold text-lg transition-all
                group overflow-hidden text-white shadow-lg
                ${
                  userType === "earner"
                    ? "bg-gradient-to-r from-[#00eaff] via-[#6b5bff] to-[#ff54b0]"
                    : "bg-gradient-to-r from-[#7b5bff] via-[#ff54b0] to-[#ffa95e]"
                }
                hover:scale-[1.03] disabled:opacity-50 disabled:hover:scale-100`}
            >
              {!isSubmitting && (
                <div
                  className="absolute inset-0 bg-white/20 translate-x-[-120%]
                group-hover:translate-x-[120%] transition-transform duration-700"
                />
              )}

              <span className="relative flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Kaydediliyor...
                  </>
                ) : (
                  <>
                    Erken Erişim İçin Kayıt Ol
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
            </button>
          </div>

          <div className="mt-6 text-center space-y-1">
            <p className="text-white/50 text-xs">
              Lansmandan önce sizi bilgilendireceğiz
            </p>
            <p className="text-white/40 text-xs">
              İlk 10.000 kullanıcıya özel bonuslar!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
