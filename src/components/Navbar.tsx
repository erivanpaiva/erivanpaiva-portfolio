"use client";

import { useEffect, useState } from "react";
import { Zain } from "next/font/google";
import { motion } from "framer-motion";

const zain = Zain({
  subsets: ["latin"],
  weight: ["800"],
});

const sections = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
    flex items-center justify-between
    gap-4 px-6 py-3
    rounded-full

    backdrop-blur-2xl
    bg-white/5
    border border-white/20

    ${
      scrolled
        ? "shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
        : "shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
    }
  `}
      >
        <h1
          onClick={() => scrollToSection("home")}
          className={`${zain.className} text-[13px] tracking-[0.35em] text-white uppercase cursor-pointer hover:opacity-80 transition`}
        >
          Erivan Paiva
        </h1>
        <div className="h-5 w-px bg-white/20" />
        <div className="flex items-center gap-2 text-white/60">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative flex items-center justify-center
          uppercase text-[11px]
          px-3 py-2 leading-none rounded-full
          transition-all duration-300
          ${active === section ? "text-white" : "hover:text-white"}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}

              {active === section && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white/10"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}
