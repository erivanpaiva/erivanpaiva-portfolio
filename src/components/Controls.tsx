"use client";

import { motion } from "framer-motion";
import { FiSun } from "react-icons/fi";

export default function Controls() {
  return (
    <div className="fixed top-4 md:top-6 right-6 z-50 flex items-center gap-3">
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center
    w-10 h-10 rounded-full
    backdrop-blur-2xl
    bg-white/8 border border-white/10
    text-white/70 hover:text-white
    hover:bg-white/12
    transition-all duration-300"
      >
        <FiSun size={16} />
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 h-10 rounded-full
    backdrop-blur-2xl
    bg-white/8 border border-white/10
    text-xs text-white/70 hover:text-white
    hover:bg-white/12
    transition-all duration-300"
      >
        <span className="text-white">EN</span>
        <span className="text-white/40">PT</span>
      </motion.button>
    </div>
  );
}
