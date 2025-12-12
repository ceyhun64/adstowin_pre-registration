//components/home/registerForm.tsx
"use client";
import { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const RegisterForm = () => {
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
      const response = await fetch("/api/pre-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, userType }),
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
          message: data.error || "Kayıt sırasında bir hata oluştu.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Bağlantı hatası. Lütfen tekrar deneyin.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700 shadow-2xl p-6 flex flex-col justify-center">
      <CardContent className="p-0">
        <div className="text-center mb-6">
          <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
            KAYIT OL
          </h3>
          <p className="mt-2 text-gray-400">
            Erken erişim fırsatlarını kaçırmayın!
          </p>
        </div>

        {submitStatus.type && (
          <Alert
            className={`mb-4 ${
              submitStatus.type === "success"
                ? "bg-green-900/20 border-green-700"
                : "bg-red-900/20 border-red-700"
            }`}
          >
            {submitStatus.type === "success" ? (
              <CheckCircle2 className="h-4 w-4 text-green-400" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-400" />
            )}
            <AlertDescription
              className={
                submitStatus.type === "success"
                  ? "text-green-300"
                  : "text-red-300"
              }
            >
              {submitStatus.message}
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-posta Adresiniz</Label>
            <Input
              id="email"
              type="email"
              placeholder="ornek@mail.com"
              className="bg-gray-700 border-gray-600 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2 pt-2">
            <Label>Platform Kullanım Amacınız</Label>
            <RadioGroup
              value={userType}
              onValueChange={setUserType}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advertiser" id="r1" />
                <Label htmlFor="r1" className="text-sm cursor-pointer">
                  Ben bir Reklam Verenim
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="earner" id="r2" />
                <Label htmlFor="r2" className="text-sm cursor-pointer">
                  Ben Para Kazanmak İstiyorum
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="terms"
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
            />
            <label
              htmlFor="terms"
              className="text-xs text-gray-400 cursor-pointer"
            >
              <a href="#" className="underline hover:text-white">
                Gizlilik Politikası
              </a>
              'nı okudum ve onaylıyorum.
            </label>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 font-bold mt-6"
            disabled={isSubmitting || !email || !termsAccepted}
          >
            {isSubmitting ? "Kaydediliyor..." : "Erken Erişime Katılın!"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
