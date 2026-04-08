"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DM_Sans } from "next/font/google";
import { FaBehance, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FiArrowRight, FiCopy } from "react-icons/fi";

const email = "erivannpaiva@gmail.com";

const roles = ["Engineer", "Developer", "Designer", "Creative"];
const socialIcons = [FaLinkedin, FaGithub, FaBehance, FaMedium];

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

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

const introClassName = `${dmSans.className} mt-6 text-[15.5px] leading-[1.70] tracking-[-0.02em] text-[#e5e5e5] sm:text-[22px] md:text-[28px] lg:text-[42px]`;

const nameClassName = `${dmSans.className} flex items-center flex-wrap gap-1 text-[43px] font-semibold leading-[0] tracking-[-0.04em] text-[#6de881] sm:gap-2 sm:text-[60px] md:gap-3 md:text-[76px] lg:text-[115px]`;

const summaryClassName = `${dmSans.className} mt-5 max-w-[260px] text-[15.5px] leading-[1.25] tracking-[-0.02em] text-[#e5e5e5] sm:max-w-[380px] sm:text-[22px] md:max-w-[480px] md:text-[28px] lg:max-w-[700px] lg:text-[42px]`;

const socialButtonClassName =
  "flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] sm:h-10 sm:w-10";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-[1300px] flex-col justify-end px-6 pb-12 md:pb-14">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left"
        >
          <motion.h1 variants={fadeUpBlur} className={introClassName}>
            Hey, I'm
          </motion.h1>

          <motion.h1 variants={fadeUpBlur} className={nameClassName}>
            Erivan Paiva
            <span className="shrink-0 text-[33px] leading-none sm:text-[50px] md:text-[66px] lg:text-[95px] xl:text-[95px]">
              👨🏻‍💻
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpBlur}
            className="mt-4 text-xs text-neutral-400 sm:text-sm md:text-base"
          >
            Software Developer ✱ Fortaleza, Brazil
          </motion.p>

          <motion.p variants={fadeUpBlur} className={summaryClassName}>
            I create modern and engaging digital experiences as a{" "}
            <span className="mx-1 inline-flex w-[58px] items-center justify-center sm:w-[88px] md:w-[112px] lg:w-[172px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[currentRole]}
                  initial={{ opacity: 0, y: 5, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -5, filter: "blur(8px)" }}
                  transition={{ duration: 0.4 }}
                  className="whitespace-nowrap text-[#6de881]"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </span>
            , focusing on high-impact products.
          </motion.p>

          <motion.div
            variants={fadeUpBlur}
            className="mt-6 flex items-center gap-2 sm:mt-8 sm:gap-3"
          >
            <button className="group flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-medium whitespace-nowrap text-black transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] active:scale-[0.97] sm:px-6 sm:py-3 sm:text-sm">
              Let's Connect
              <FiArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={handleCopy}
              className={`flex min-w-0 flex-1 items-center gap-2 rounded-full px-3 py-2 text-xs text-white/60 transition-all duration-300 hover:text-white sm:px-4 sm:py-2.5 sm:text-sm ${
                copied ? "text-white" : ""
              }`}
            >
              <FiCopy size={14} />
              <span className="block max-w-[120px] truncate sm:max-w-[180px] md:max-w-[240px]">
                {copied ? "Copied!" : email}
              </span>
            </button>
          </motion.div>

          <motion.div variants={fadeUpBlur} className="mt-8 flex gap-4">
            {socialIcons.map((Icon, index) => (
              <motion.a
                key={index}
                href=""
                target="_blank"
                variants={fadeUpBlur}
                className={socialButtonClassName}
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
