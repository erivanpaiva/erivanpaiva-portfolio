"use client";

import { useEffect, useState } from "react";
import { Zain } from "next/font/google";
import { motion } from "framer-motion";
import { FiSun, FiMenu, FiX } from "react-icons/fi";

const zain = Zain({
  subsets: ["latin"],
  weight: ["800"],
});

const sections = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState<"EN" | "PT">("EN");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          const offset = window.innerHeight * 0.3;

          sections.forEach((section) => {
            const el = document.getElementById(section);
            if (!el) return;

            const rect = el.getBoundingClientRect();

            if (rect.top <= offset && rect.bottom >= offset) {
              setActive((prev) => (prev !== section ? section : prev));
            }
          });

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.offsetTop - 80;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-[160px] z-40 pointer-events-none backdrop-blur-xl bg-black/20"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          fixed top-6 left-0 w-full z-50
          ${scrolled ? "py-3" : "py-5"}
          transition-all duration-300
        `}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <h1
            onClick={() => scrollToSection("home")}
            className={`${zain.className}
              text-[13px] tracking-[0.5em]
              text-white/90 uppercase cursor-pointer
              hover:opacity-80 transition`}
          >
            Erivan Paiva
          </h1>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-white/60">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`
                    uppercase text-[11px] tracking-wide
                    transition-all duration-300
                    hover:-translate-y-[2px]
                    ${
                      active === section
                        ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]"
                        : "hover:text-white"
                    }
                  `}
                >
                  {section}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3 ml-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center justify-center
                w-8 h-8 rounded-full
                backdrop-blur-2xl
                bg-white/6 border border-white/8
                text-white/70 hover:text-white
                hover:bg-white/12
                transition-all duration-300"
              >
                <FiSun size={13} />
              </button>

              <button
                onClick={() => setLang(lang === "EN" ? "PT" : "EN")}
                className="flex items-center gap-2 h-8 px-2.5 rounded-full
                backdrop-blur-2xl
                bg-white/6 border border-white/8
                text-[11px] text-white/70 hover:text-white
                hover:bg-white/12
                transition-all duration-300"
              >
                <span
                  className={lang === "EN" ? "text-white" : "text-white/40"}
                >
                  EN
                </span>
                <span
                  className={lang === "PT" ? "text-white" : "text-white/40"}
                >
                  PT
                </span>
              </button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center
              w-8 h-8 rounded-full
              backdrop-blur-2xl
              bg-white/6 border border-white/8
              text-white/70 hover:text-white
              transition"
            >
              {menuOpen ? <FiX size={18} /> : <FiMenu size={16} />}
            </button>
          </div>
        </div>
      </motion.header>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-[60] bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center gap-10">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setMenuOpen(false);
              }}
              className="text-white text-lg uppercase tracking-[0.3em]"
            >
              {section}
            </button>
          ))}

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center
              w-10 h-10 rounded-full
              backdrop-blur-2xl
              bg-white/6 border border-white/8
              text-white/70 hover:text-white
              hover:bg-white/12
              transition-all duration-300"
            >
              <FiSun size={16} />
            </button>

            <button
              onClick={() => setLang(lang === "EN" ? "PT" : "EN")}
              className="flex items-center gap-2 px-4 h-10 rounded-full
              backdrop-blur-2xl
              bg-white/6 border border-white/8
              text-sm text-white/70 hover:text-white
              hover:bg-white/12
              transition-all duration-300"
            >
              <span className={lang === "EN" ? "text-white" : "text-white/40"}>
                EN
              </span>
              <span className={lang === "PT" ? "text-white" : "text-white/40"}>
                PT
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
