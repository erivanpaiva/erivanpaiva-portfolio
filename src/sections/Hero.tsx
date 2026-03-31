"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { DM_Sans, Sora } from "next/font/google";
import { FaGithub, FaLinkedin, FaBehance, FaMedium } from "react-icons/fa";
import { FiCopy, FiArrowRight } from "react-icons/fi";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
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
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1000px] mx-auto z-10 flex flex-col items-center text-center min-h-screen justify-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`
    ${dmSans.className}
    text-[32px] md:text-[48px] lg:text-[60px]
    leading-[1.1]
    tracking-[-0.02em]
    text-white
    flex items-center gap-4
  `}
        >
          <span
            className="
    flex items-center justify-center
    w-12 h-12 md:w-15 md:h-15
    rounded-2xl
    bg-emerald-100/20
    border border-emerald-100/10
  "
          >
            <span className="text-xl md:text-3xl">👨🏻‍💻</span>
          </span>

          <span>
            Hey, I’m <span className="font-semibold">Erivan Paiva</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm md:text-base
  text-neutral-400 tracking-wide mt-2"
        >
          Software Developer | Fortaleza, Brazil
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`
    ${dmSans.className}
    text-[22px] md:text-[32px] lg:text-[38px]
    leading-[1.35]
    tracking-[-0.01em]
    text-[#e5e5e5]
    max-w-[700px]
    mt-6
  `}
        >
          I create modern and engaging digital experiences as a{" "}
          <span className="relative inline-flex justify-center min-w-[120px] sm:min-w-[140px] md:min-w-[175px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[currentRole]}
                initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                transition={{ duration: 0.35 }}
                className="text-emerald-400 whitespace-nowrap"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </span>
          , focusing <br />
          on high-impact products.
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
          className="flex items-center justify-center gap-4 mt-10 w-full"
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
            className={`flex items-center justify-center gap-2
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
