"use client";
import React, { useState } from "react";
import {
  Bell,
  ArrowRight,
  Star,
  Megaphone,
  X,
  Shield,
  Lock,
} from "lucide-react";
import { toast } from "sonner";

interface RegistrationFormProps {
  userType: "earner" | "business";
  setUserType: (value: "earner" | "business") => void;
}

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl w-full max-w-xl h-full max-h-[80vh] overflow-hidden border border-white/20 shadow-2xl">
        <div className="flex justify-between items-center p-5 border-b border-white/20 sticky top-0 bg-white/10 backdrop-blur-md z-10">
          <h4 className="text-xl font-bold text-white">{title}</h4>
          <button
            onClick={onClose}
            className="text-white hover:text-white/70 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-5 overflow-y-auto text-white/80 leading-relaxed text-sm h-[calc(100%-65px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function RegistrationForm({
  userType,
  setUserType,
}: RegistrationFormProps) {
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleSubmit = async () => {
    // Validation
    if (!termsAccepted) {
      toast.error("Please accept the terms of use.");
      return;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

      const res = await fetch("/api/pre-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, userType }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let data;
      try {
        data = await res.json();
      } catch (e) {
        throw new Error("Invalid server response");
      }

      if (!res.ok) {
        toast.error(data.error || "An error occurred.");
        return;
      }

      toast.success("Registration successful! We'll notify you soon.");
      setEmail("");
      setTermsAccepted(false);
    } catch (error: any) {
      if (error.name === "AbortError") {
        toast.error("Request timeout. Please check your connection.");
      } else {
        toast.error("Connection error. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-16" id="registration-form">
      {/* TERMS MODAL */}
      <Modal
        title="Terms of Use"
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
      >
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-white/90 font-semibold text-base">
              1. Acceptance of Terms
            </p>
            <p className="text-white/70">
              By using our services, you agree to be bound by these Terms of Use
              and all applicable laws. If you do not agree with these terms, you
              must not use the platform.
            </p>
          </div>
          <div>
            <p className="mb-2 text-white/90 font-semibold text-base">
              2. Account Responsibility
            </p>
            <p className="text-white/70">
              You are solely responsible for maintaining the security of your
              account and for all activities that occur under your account. Do
              not share your password with anyone.
            </p>
          </div>
          <div>
            <p className="mb-2 text-white/90 font-semibold text-base">
              3. Service Terms
            </p>
            <p className="text-white/70">
              In the event of a violation of these terms, we may suspend or
              terminate your access to the services immediately and without
              prior notice.
            </p>
          </div>
          <div>
            <p className="mb-2 text-white/90 font-semibold text-base">
              4. Content Responsibility
            </p>
            <p className="text-white/70">
              You are responsible for any content you upload or submit to the
              platform. Illegal, defamatory, or third-party rights-violating
              content is strictly prohibited.
            </p>
          </div>
        </div>
      </Modal>

      {/* PRIVACY MODAL */}
      <Modal
        title="Privacy Policy"
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
      >
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-white/90 font-semibold text-base">
              1. Information We Collect
            </p>
            <p className="text-white/70">
              During registration, we collect your email address and user type.
              We may also collect anonymous data related to your usage of the
              service.
            </p>
          </div>
          <div>
            <p className="mb-2 text-white/90 font-semibold text-base">
              2. How We Use Your Information
            </p>
            <p className="text-white/70">
              We use the information we collect to provide and improve our
              services, manage your account, send you notifications, and ensure
              platform security.
            </p>
          </div>
          <div>
            <p className="mb-2 text-white/90 font-semibold text-base">
              3. Data Protection
            </p>
            <p className="text-white/70">
              We never share your personal information with third parties
              without your explicit consent, unless required by law.
            </p>
          </div>
          <div>
            <p className="mb-2 text-white/90 font-semibold text-base">
              4. Security
            </p>
            <p className="text-white/70">
              We apply industry-standard security measures to protect your data;
              however, no method of internet transmission is 100% secure.
            </p>
          </div>
        </div>
      </Modal>

      {/* MAIN FORM */}
      <div className="relative">
        {/* Background */}
        <div
          className={`absolute inset-0 rounded-3xl blur-[50px] opacity-25 
          ${
            userType === "earner"
              ? "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-amber-300 via-amber-200 to-yellow-200"
              : "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-300 via-sky-200 to-indigo-200"
          }`}
        />

        {/* CARD */}
        <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl px-5 py-10 md:p-12 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
          {/* HEADER */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg mb-4">
              <Bell className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
              Join Early Access
            </h3>
            <p className="text-white/60 text-base md:text-lg">
              Be among the first to experience the platform
            </p>
          </div>

          {/* USER TYPE */}
          <div className="mb-8">
            <label className="block text-white font-semibold mb-3 text-base text-center">
              I am a
            </label>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setUserType("earner")}
                  disabled={isSubmitting}
                  className={`relative py-4 px-6 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 ${
                    userType === "earner"
                      ? "bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-md scale-[1.02]"
                      : "text-white/60 hover:text-white bg-white/5"
                  }`}
                >
                  <div className="relative flex items-center justify-center gap-2 text-sm">
                    <Star className="w-5 h-5" />
                    <span>Participant</span>
                  </div>
                </button>

                <button
                  onClick={() => setUserType("business")}
                  disabled={isSubmitting}
                  className={`relative py-4 px-6 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 ${
                    userType === "business"
                      ? "bg-gradient-to-r from-blue-400 to-sky-500 text-white shadow-md scale-[1.02]"
                      : "text-white/60 hover:text-white bg-white/5"
                  }`}
                >
                  <div className="relative flex items-center justify-center gap-2 text-sm">
                    <Megaphone className="w-6 h-6" />
                    <span>Business</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="space-y-6">
            {/* EMAIL */}
            <div>
              <label className="block text-white font-semibold mb-3 text-base">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl 
                text-white placeholder:text-white/40 focus:outline-none 
                focus:ring-4 focus:ring-white/20 focus:border-white/30
                transition-all disabled:opacity-50 text-base"
              />
            </div>

            {/* TERMS */}
            <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                disabled={isSubmitting}
                className="mt-1 w-5 h-5 rounded border-white/30 bg-white/10 cursor-pointer disabled:opacity-50"
              />
              <label
                htmlFor="terms"
                className="text-white/75 text-sm leading-snug"
              >
                I accept the{" "}
                <span
                  onClick={() => !isSubmitting && setShowTermsModal(true)}
                  className="text-white font-semibold hover:underline cursor-pointer"
                >
                  Terms of Use
                </span>{" "}
                and{" "}
                <span
                  onClick={() => !isSubmitting && setShowPrivacyModal(true)}
                  className="text-white font-semibold hover:underline cursor-pointer"
                >
                  Privacy Policy
                </span>
              </label>
            </div>

            {/* SUBMIT */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !email || !termsAccepted}
              className={`relative w-full py-5 rounded-2xl font-bold text-lg transition-all
              group overflow-hidden text-white shadow-lg
              ${
                userType === "earner"
                  ? "bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300"
                  : "bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300"
              }
              hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
            >
              <span className="relative flex items-center justify-center gap-2 text-sm">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5" />
                    Secure Registration
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </span>
            </button>
          </div>

          {/* FOOTER INFO */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-center gap-2 text-white/40 text-xs">
              <Lock className="w-4 h-4" />
              <span>Your data is encrypted and secure</span>
            </div>
            <p className="text-center text-white/50 text-xs">
              We'll notify you before the launch
            </p>
            <p className="text-center text-white/40 text-xs">
              Limited spots available for early access members
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
