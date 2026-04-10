"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DM_Sans } from "next/font/google";
import { FaBehance, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

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

const introClassName = `${dmSans.className} text-[17px] sm:text-[22px] md:text-[27px] lg:text-[32px] mb-4 tracking-[-0.02em] text-[#faffee]`;

const nameClassName = `${dmSans.className} flex items-center flex-wrap text-[49px] sm:text-[64px] md:text-[78px] lg:text-[92px] gap-1 font-semibold leading-[0.7] tracking-[-0.04em] text-[#faffee] sm:gap-2 md:gap-3`;

const metaClassName = `${dmSans.className} mt-5 mb-3 text-xs text-white/70 text-[9.6px] sm:text-[12.5px] md:text-[15.4px] lg:text-[18px]`;

const summaryClassName = `${dmSans.className} text-[17px] sm:text-[22px] md:text-[27px] lg:text-[32px] max-w-[280px] sm:max-w-[380px] md:max-w-[470px] lg:max-w-[530px] leading-[1.25] tracking-[-0.02em] text-[#faffee]`;

const primaryButtonClassName = ` ${dmSans.className} group flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-[12px] sm:text-[12.5px] md:text-[13px] lg:text-[16px] font-medium whitespace-nowrap text-black transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_25px_color-mix(in_srgb,var(--accent)_40%,transparent)] active:scale-[0.97] sm:px-6 sm:py-3 `;

const secondaryButtonClassName = ` ${dmSans.className} flex min-w-0 flex-1 items-center gap-2 rounded-full px-3 py-2 text-[12px] sm:text-[12.5px] md:text-[13px] lg:text-[16px] text-white/70 transition-all duration-300 hover:text-white sm:px-4 sm:py-2.5 `;

const socialButtonClassName =
  "group relative flex h-9 w-9 items-center justify-center rounded-xl overflow-hidden backdrop-blur-xl bg-white/[0.02] border border-white/[0.2] text-white/70 transition-all duration-200 hover:text-white active:scale-95";

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
    <section id="home" className="relative min-h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className=" absolute inset-0 bg-[url('/backgroundalt.png')] bg-cover bg-center bg-no-repeat sm:bg-[url('/background.png')]"
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-60 mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1300px] flex-col justify-end px-6 pb-12 md:pb-14">
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
          </motion.h1>

          <motion.p variants={fadeUpBlur} className={metaClassName}>
            Software Developer ✱ Fortaleza, Brazil
          </motion.p>

          <motion.p variants={fadeUpBlur} className={summaryClassName}>
            I create modern and engaging digital experiences as a{" "}
            <span className="mx-1 inline-flex w-[58px] items-center justify-center sm:w-[88px] md:w-[112px] lg:w-[131px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[currentRole]}
                  initial={{ opacity: 0, y: 5, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -5, filter: "blur(8px)" }}
                  transition={{ duration: 0.4 }}
                  className="whitespace-nowrap text-[var(--accent)]"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </span>
            , focusing on high-impact products.
          </motion.p>

          <motion.div
            variants={fadeUpBlur}
            className="mt-6 flex items-center sm:mt-8 gap-0.5 sm:gap-0.5 md:gap-3 md:gap-3 lg:gap-3"
          >
            <button className={primaryButtonClassName}>Let's Connect</button>

            <button
              onClick={handleCopy}
              className={`${secondaryButtonClassName} ${copied ? "text-white" : ""}`}
            >
              <FiCopy size={14} />
              <span className="block max-w-[120px] truncate sm:max-w-[180px] md:max-w-[240px]">
                {copied ? "Email copied!" : email}
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
                <div className="absolute inset-0 bg-white/[0.06] opacity-60 group-hover:opacity-80 transition" />

                <div className="absolute inset-0 opacity-20 group-hover:opacity-70 transition bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35)_0%,transparent_30%,transparent_70%,rgba(255,255,255,0.25)_100%)]" />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-white/20 blur-md opacity-40 group-hover:opacity-70 transition" />

                <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]" />

                <Icon size={16} className="relative z-10" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
