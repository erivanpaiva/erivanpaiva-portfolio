"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBehance, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const email = "erivannpaiva@gmail.com";

const roles = ["Engineer", "Developer", "Designer", "Creative"];

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

const introClassName =
  "font-dm text-[17px] sm:text-[22px] md:text-[27px] lg:text-[32px] mb-2 sm:mb-4 tracking-[-0.02em] text-[#faffee]";

const nameClassName =
  "font-dm flex items-center flex-wrap text-[49px] ml-[-2px] md:ml-[-4px] sm:text-[64px] md:text-[78px] lg:text-[92px] gap-1 leading-[0.7] tracking-[-0.04em] text-[#faffee] sm:gap-2 md:gap-3";

const metaClassName =
  "font-space mt-3 mb-3 sm:mt-5 sm:mb-3 text-white/80 text-[9.6px] sm:text-[12.5px] md:text-[15.4px] lg:text-[17px]";

const summaryClassName =
  "font-dm text-[17px] sm:text-[22px] md:text-[27px] lg:text-[32px] max-w-[290px] sm:max-w-[380px] md:max-w-[470px] lg:max-w-[530px] leading-[1.25] tracking-[-0.02em] text-[#faffee]";

const primaryButtonClassName =
  "font-dm group flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-[12px] sm:text-[12.5px] md:text-[13px] lg:text-[16px] font-medium whitespace-nowrap text-black transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_25px_color-mix(in_srgb,var(--accent)_40%,transparent)] active:scale-[0.97] sm:px-6 sm:py-3 ";

const secondaryButtonClassName =
  "font-space flex min-w-0 flex-1 items-center gap-2 rounded-full px-3 py-2 text-[12px] sm:text-[12.5px] md:text-[13px] lg:text-[16px] text-white/80 transition-all duration-300 hover:text-white sm:px-4 sm:py-2.5";

const socialLinks = [
  {
    Icon: FaLinkedin,
    href: "https://linkedin.com/in/erivanpaiva",
    label: "LinkedIn",
  },
  { Icon: FaGithub, href: "https://github.com/erivanpaiva", label: "GitHub" },
  {
    Icon: FaBehance,
    href: "https://behance.net/erivannpaiva",
    label: "Behance",
  },
  { Icon: FaMedium, href: "https://medium.com/@erivanpaiva", label: "Medium" },
];

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
        className="absolute inset-0 bg-[url('/backgroundalt.png')] bg-cover bg-center bg-no-repeat sm:bg-[url('/background.png')] sm:[background-position:75%] md:[background-position:65%] lg:bg-center"
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
          className="flex flex-col items-center sm:items-start text-left"
        >
          <motion.p variants={fadeUpBlur} className={introClassName}>
            Hey, I'm
          </motion.p>

          <motion.h1 variants={fadeUpBlur} className={nameClassName}>
            Erivan Paiva
          </motion.h1>

          <motion.p variants={fadeUpBlur} className={metaClassName}>
            Software Developer ✱ Fortaleza, Brazil
          </motion.p>

          <motion.p variants={fadeUpBlur} className={summaryClassName}>
            I create modern and engaging digital experiences as a{" "}
            <span className="mx-1 inline-flex items-center justify-center w-[66px] sm:w-[88px] md:w-[112px] lg:w-[131px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[currentRole]}
                  initial={{
                    opacity: 0,
                    y: 4,
                    scale: 0.92,
                    filter: "blur(8px)",
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -4, scale: 0.92, filter: "blur(8px)" }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
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
            className="mt-6 flex items-center sm:mt-8 gap-0.5 sm:gap-0.5 md:gap-3 lg:gap-3"
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
          <motion.div variants={fadeUpBlur} className="mt-8 flex gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                variants={fadeUpBlur}
                className=" group flex h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-white/[0.04] backdrop-blur-md border border-white/[0.12] text-white/50 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.20] hover:text-white/90 active:scale-95 "
              >
                <Icon className="text-[11px] sm:text-[12px] md:text-[15px] transition-transform duration-300 group-hover:scale-110" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
