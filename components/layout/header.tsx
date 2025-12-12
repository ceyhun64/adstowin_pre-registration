"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="w-full py-6 flex justify-center items-center relative">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-xl select-none"
      >
        ADSTOWIN
      </motion.h1>
    </header>
  );
}
