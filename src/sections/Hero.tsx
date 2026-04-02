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
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUpBlur = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
      },
    },
  };

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
    <section id="home" className="min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 min-h-screen flex flex-col justify-end pb-18 md:pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="
    flex flex-col items-start text-left
  "
        >
          <motion.h1
            variants={fadeUpBlur}
            className={`
    ${dmSans.className}
    text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px]
    leading-[1.02]
    tracking-[-0.04em]
    flex items-baseline gap-3 sm:gap-5
  `}
          >
            <span>
              <span className="text-white/80 font-normal">Hey, I’m </span>

              <span className="font-semibold text-[#6de881]">
                Erivan Paiva 👨🏻‍💻
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpBlur}
            className="text-xs sm:text-sm md:text-base text-neutral-400 mt-4"
          >
            Software Developer • Fortaleza, Brazil
          </motion.p>

          <motion.p
            variants={fadeUpBlur}
            className={`
    ${dmSans.className}
    text-[18px] sm:text-[22px] md:text-[28px] lg:text-[42px]
    leading-[1.25]
    tracking-[-0.02em]
    text-[#e5e5e5]
    max-w-[300px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[700px]
    mt-6
  `}
          >
            I create modern and engaging digital experiences as a{" "}
            <span className="inline-flex justify-center items-center w-[70px] sm:w-[88px] md:w-[110px] lg:w-[172px] mx-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[currentRole]}
                  initial={{ opacity: 0, y: 5, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -5, filter: "blur(8px)" }}
                  transition={{ duration: 0.4 }}
                  className="text-[#6de881] whitespace-nowrap"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </span>
            , focusing on high-impact products.
          </motion.p>

          <motion.div
            variants={fadeUpBlur}
            className="flex items-center gap-2 sm:gap-4 mt-8 sm:mt-10"
          >
            <button
              className="
group flex items-center gap-2
px-4 py-2.5 sm:px-6 sm:py-3
rounded-full 
bg-white text-black
text-xs sm:text-sm font-medium
whitespace-nowrap
hover:scale-[1.04] active:scale-[0.97]
hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]
transition-all duration-300
"
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
  flex items-center gap-2
  px-3 py-2 sm:px-4 sm:py-2.5
  rounded-full
  text-xs sm:text-sm
  text-white/60 hover:text-white
  transition-all duration-300
  flex-1 min-w-0
  ${copied ? "text-white" : ""}
`}
            >
              <FiCopy size={14} />
              <span className="break-all">
                {copied ? "Copied!" : "erivannpaiva@gmail.com"}
              </span>
            </button>
          </motion.div>

          <motion.div className="flex gap-4 mt-8">
            {[FaLinkedin, FaGithub, FaBehance, FaMedium].map((Icon, i) => (
              <motion.a
                key={i}
                href=""
                target="_blank"
                variants={fadeUpBlur}
                className="
        w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center 
        rounded-xl bg-white/[0.04] border border-white/10
        hover:bg-white/[0.08]
        hover:-translate-y-[2px]
        hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
        transition-all duration-300
      "
              >
                <Icon size={16} className="text-white/70" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
