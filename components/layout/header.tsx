"use client";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 mb-8">
      <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
        KEŞFET Platformu
      </div>
      <Button
        variant="outline"
        className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900"
      >
        Giriş Yap
      </Button>
    </header>
  );
}
