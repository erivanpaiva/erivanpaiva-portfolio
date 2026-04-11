"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const sections = ["about", "projects", "blog", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "PT">("EN");

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
        initial={false}
        animate={{ opacity: scrolled ? 1 : 0.6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full h-[160px] z-40 pointer-events-none backdrop-blur-xl"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0) 100%)",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 w-full z-50 ${scrolled ? "py-5 sm:py-11" : "py-6 sm:py-12"} transition-all duration-300`}
      >
        <div className="max-w-[1300px] mx-auto px-6 flex items-center justify-between">
          <h1
            onClick={() => scrollToSection("home")}
            className={`font-zain
              text-[13px] tracking-[0.4em] sm:tracking-[0.5em]
              text-white uppercase cursor-pointer
              hover:opacity-80 transition`}
          >
            Erivan Paiva
          </h1>

          <div className="flex items-center gap-5">
            <nav className="hidden md:flex items-center gap-8 text-white/70">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-dm uppercase text-[10px] tracking-wide transition-all duration-300 hover:-translate-y-[2px] ${active === section ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]" : "hover:text-white"} `}
                >
                  {section}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3 ml-2">
              <button
                onClick={() => setLang(lang === "EN" ? "PT" : "EN")}
                aria-label="Toggle language"
                className="flex h-6.5 items-center rounded-full bg-white/[0.04] backdrop-blur-md border border-white/[0.12] p-[3px] gap-0 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.20] active:scale-95"
              >
                {(["EN", "PT"] as const).map((l) => (
                  <span
                    key={l}
                    className={`font-dm flex items-center justify-center h-full px-2 rounded-full text-[9px] font-medium tracking-wide transition-all duration-200 ${lang === l ? "bg-white/50 text-black hover:bg-white/90 hover:scale-110" : "text-white/30"}`}
                  >
                    {l}
                  </span>
                ))}
              </button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.04] backdrop-blur-md border border-white/[0.12] text-white/50 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.20] hover:text-white/90 active:scale-95"
            >
              <FiMenu size={13} />
            </button>
          </div>
        </div>
      </motion.header>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-[60] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.04] backdrop-blur-md border border-white/[0.12] text-white/50 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.20] hover:text-white/90 active:scale-95"
          >
            <FiX size={14} />
          </button>
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setMenuOpen(false);
              }}
              className="font-dm text-white text-lg uppercase tracking-[0.3em]"
            >
              {section}
            </button>
          ))}

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => setLang(lang === "EN" ? "PT" : "EN")}
              aria-label="Toggle language"
              className="flex h-9 items-center rounded-full bg-white/[0.04] backdrop-blur-md border border-white/[0.12] p-[3px] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.20] active:scale-95"
            >
              {(["EN", "PT"] as const).map((l) => (
                <span
                  key={l}
                  className={`font-dm flex items-center justify-center h-full px-3.5 rounded-full text-[11px] font-medium tracking-wide transition-all duration-200 ${lang === l ? "bg-white text-black" : "text-white/30"}`}
                >
                  {l}
                </span>
              ))}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
