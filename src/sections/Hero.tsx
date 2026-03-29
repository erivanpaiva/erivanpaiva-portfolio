"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Instrument_Serif, Inter, Space_Grotesk } from "next/font/google";
import { FaGithub, FaLinkedin, FaBehance, FaMedium } from "react-icons/fa";
import { FiCopy, FiArrowRight } from "react-icons/fi";

const instrumentserif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal", "italic"],
});

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Hero() {
  const roles = ["Engineer", "Developer", "Designer", "Creative"];
  const [currentRole, setCurrentRole] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("erivannpaiva@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-[#0b0b0b]">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[1200px] h-[600px]
        bg-gradient-to-t from-neutral-700/80 via-neutral-400/20 to-transparent blur-[140px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1000px] mx-auto z-10 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-3"
        >
          <img
            src="/foto.jpg"
            alt="Erivan Paiva"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border border-white/10"
          />
          <div className="absolute inset-0 rounded-full bg-white/10 blur-xl -z-10 scale-110" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`${inter.className}
          text-[55px] md:text-[75px] lg:text-[95px]
          leading-[1]
          tracking-[-0.03em]
          text-white uppercase whitespace-nowrap`}
        >
          Erivan Paiva
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className={`${spacegrotesk.className}
          text-sm md:text-base
          text-neutral-400 tracking-wide`}
        >
          Software Developer | Fortaleza, Brazil
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className={`${instrumentserif.className}
          text-[20px] md:text-[35px]
          leading-[1.4]
          tracking-[-0.01em]
          text-[#e5e5e5]
          max-w-[600px]
          mt-5`}
        >
          I create modern and engaging digital experiences as
          <br />a{" "}
          <span className="relative inline-flex w-[120px] justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[currentRole]}
                initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                transition={{ duration: 0.35 }}
                className="text-neutral-400 whitespace-nowrap italic"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </span>
          , focusing on high-impact products.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.6,
              },
            },
          }}
          className="flex gap-5 mt-7"
        >
          {[FaLinkedin, FaGithub, FaBehance, FaMedium].map((Icon, i) => (
            <motion.a
              key={i}
              href=""
              target="_blank"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="w-10 h-10 flex items-center justify-center 
              rounded-xl bg-white/[0.04] border border-white/10
              hover:bg-white/[0.08] hover:-translate-y-1
              transition-all duration-300"
            >
              <Icon size={16} className="text-white/70" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-4 mt-7"
        >
          <button
            className="group flex items-center gap-2 px-6 py-3 rounded-full 
            bg-white text-black text-sm font-medium
            shadow-[0_6px_30px_rgba(255,255,255,0.15)]
            hover:shadow-[0_10px_50px_rgba(255,255,255,0.25)]
            hover:scale-[1.04] active:scale-[0.97]
            transition-all duration-300"
          >
            Let's Connect
            <FiArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button
            onClick={handleCopy}
            className={`
            flex items-center justify-center gap-2
            px-4 py-2.5 rounded-full text-sm
            min-w-[230px]
            text-white/60 hover:text-white
            transition-all duration-300
            hover:scale-105 active:scale-95
            ${copied ? "scale-105 text-white" : ""}
          `}
          >
            <FiCopy size={14} />
            <span className="transition-all duration-300">
              {copied ? "Copied!" : "erivannpaiva@gmail.com"}
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
