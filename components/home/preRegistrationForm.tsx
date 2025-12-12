// components/forms/PreRegistrationForm.tsx
"use client";

import { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  HandCoins,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";

const PreRegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("earner");
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
        message: "Lütfen gizlilik politikasını onaylayın.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // API Rotası yolu: /api/pre-register
      const response = await fetch("/api/pre-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          role: userType, // API rotası beklediği anahtar kelimeye göre ayarlandı
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Başarıyla kayıt oldunuz! Size yakında ulaşacağız.",
        });
        setEmail("");
        setTermsAccepted(false);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || data.error || "Kayıt sırasında bir hata oluştu.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Bağlantı hatası. Lütfen tekrar deneyin.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-purple-500/30 backdrop-blur-xl shadow-2xl">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNC40MTggMy41ODItOCA4LThzOCAzLjU4MiA4IDgtMy41ODIgOC04IDgtOC0zLjU4Mi04LThtMCAyNGMwLTQuNDE4IDMuNTgyLTggOC04czggMy41ODIgOCA4LTMuNTgyIDgtOCA4LTgtMy41ODItOC04Ii8+PC9nPjwvZz48L3N2ZyBhbnRkYXRlIj0iMjAyNS0xMi0xMiIgZ3JpZD0iNjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjwvc3ZnPg==')] opacity-50"></div>

      <CardContent className="relative p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-pink-500 mb-4 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 mb-2">
            ÖN KAYIT
          </h3>
          <p className="text-gray-400">
            Erken erişim avantajlarından yararlanın
          </p>
        </div>

        {submitStatus.type && (
          <Alert
            className={`mb-6 ${
              submitStatus.type === "success"
                ? "bg-emerald-900/20 border-emerald-500/50"
                : "bg-red-900/20 border-red-500/50"
            }`}
          >
            {submitStatus.type === "success" ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-400" />
            )}
            <AlertDescription
              className={
                submitStatus.type === "success"
                  ? "text-emerald-300"
                  : "text-red-300"
              }
            >
              {submitStatus.message}
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              E-posta Adresiniz
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="ornek@mail.com"
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-purple-500 h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-3">
            <Label className="text-gray-300">
              Platform Kullanım Amacınız
            </Label>
            <RadioGroup
              value={userType}
              onValueChange={setUserType}
              className="space-y-3"
            >
              {/* Reklam Veren */}
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-slate-800/30 border border-slate-700 hover:border-indigo-500/50 cursor-pointer transition-all">
                <RadioGroupItem
                  value="advertiser"
                  id="r1"
                  disabled={isSubmitting}
                />
                <Label
                  htmlFor="r1"
                  className="flex items-center gap-3 cursor-pointer flex-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">
                      Reklam Veren
                    </div>
                    <div className="text-xs text-gray-400">
                      İşimi büyütmek istiyorum
                    </div>
                  </div>
                </Label>
              </div>
              {/* Para Kazanan */}
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-slate-800/30 border border-slate-700 hover:border-emerald-500/50 cursor-pointer transition-all">
                <RadioGroupItem
                  value="earner"
                  id="r2"
                  disabled={isSubmitting}
                />
                <Label
                  htmlFor="r2"
                  className="flex items-center gap-3 cursor-pointer flex-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <HandCoins className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">
                      Para Kazanan
                    </div>
                    <div className="text-xs text-gray-400">
                      Reklam izleyerek kazanmak istiyorum
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-start space-x-3 p-4 rounded-lg bg-slate-800/30 border border-slate-700">
            <Checkbox
              id="terms"
              checked={termsAccepted}
              onCheckedChange={(checked) =>
                setTermsAccepted(checked as boolean)
              }
              className="mt-1"
              disabled={isSubmitting}
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-400 cursor-pointer leading-relaxed"
            >
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                Gizlilik Politikası
              </a>{" "}
              ve{" "}
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                Kullanım Şartları
              </a>
              'nı okudum ve kabul ediyorum.
            </label>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            disabled={isSubmitting || !email || !termsAccepted}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Kaydediliyor...
              </>
            ) : (
              <>
                <Rocket className="w-5 h-5 mr-2" />
                Erken Erişime Katıl
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PreRegistrationForm;