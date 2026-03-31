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

      const offset = window.innerHeight * 0.3;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= offset && rect.bottom >= offset) {
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
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          flex items-center justify-between
          gap-4 px-6 py-3
          rounded-full
          backdrop-blur-2xl
          bg-white/8
          border border-white/10
          ${
            scrolled
              ? "shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              : "shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
          }
        `}
      >
        <h1
          onClick={() => scrollToSection("home")}
          className={`${zain.className} text-[13px] tracking-[0.25em] text-white/90 uppercase cursor-pointer hover:opacity-80 transition`}
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
${
  active === section
    ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
    : "hover:text-white"
}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}
