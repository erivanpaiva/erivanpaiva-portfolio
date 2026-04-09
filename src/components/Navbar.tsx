"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMenu, FiX } from "react-icons/fi";

const sections = ["home", "about", "projects", "blog", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") ?? "dark";
  });
  const [lang, setLang] = useState<"EN" | "PT">("EN");

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
        className={`
          fixed top-6 left-0 w-full z-50
          ${scrolled ? "py-3" : "py-5"}
          transition-all duration-300
        `}
      >
        <div className="max-w-[1300px] mx-auto px-6 flex items-center justify-between">
          <h1
            onClick={() => scrollToSection("home")}
            className={`font-zain
              text-[13px] tracking-[0.5em]
              text-white uppercase cursor-pointer
              hover:opacity-80 transition`}
          >
            Erivan Paiva
          </h1>

          <div className="flex items-center gap-5">
            <nav className="font-dm hidden md:flex items-center gap-8 text-white/70">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`
                    font-dm
                    uppercase text-[10px] tracking-wide
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
                className=" group relative flex items-center justify-center w-7 h-7 rounded-full overflow-hidden backdrop-blur-xl bg-white/[0.06] border border-white/[0.2] text-white/70 hover:text-white transition-all duration-200 active:scale-95 "
              >
                <div className="absolute inset-0 bg-white/[0.06] opacity-60 group-hover:opacity-80 transition" />

                <div className="absolute inset-0 opacity-20 group-hover:opacity-70 transition bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35)_0%,transparent_30%,transparent_70%,rgba(255,255,255,0.25)_100%)]" />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-white/20 blur-md opacity-40 group-hover:opacity-70 transition" />

                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]" />

                <FiSun size={12} className="relative z-10" />
              </button>

              <button
                onClick={() => setLang(lang === "EN" ? "PT" : "EN")}
                className=" group relative flex items-center gap-2 h-7 px-3 rounded-full overflow-hidden backdrop-blur-xl bg-white/[0.06] border border-white/[0.2] text-[11px] text-white/70 hover:text-white transition-all duration-200 active:scale-95 "
              >
                <div className="absolute inset-0 bg-white/[0.06] opacity-60 group-hover:opacity-80 transition" />

                <div className="absolute inset-0 opacity-20 group-hover:opacity-70 transition bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35)_0%,transparent_30%,transparent_70%,rgba(255,255,255,0.25)_100%)]" />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-white/20 blur-md opacity-40 group-hover:opacity-70 transition" />

                <div className="relative z-10 flex gap-1">
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
                </div>
              </button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className=" md:hidden group relative flex items-center justify-center w-7 h-7 rounded-full overflow-hidden backdrop-blur-xl bg-white/[0.06] border border-white/[0.2] text-white/70 hover:text-white transition-all duration-200 active:scale-95 "
            >
              <div className="absolute inset-0 bg-white/[0.06] opacity-60 group-hover:opacity-80 transition" />

              <div className="absolute inset-0 opacity-20 group-hover:opacity-70 transition bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35)_0%,transparent_30%,transparent_70%,rgba(255,255,255,0.25)_100%)]" />

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-white/20 blur-md opacity-40 group-hover:opacity-70 transition" />

              <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]" />

              <div className="relative z-10">
                {menuOpen ? <FiX size={17} /> : <FiMenu size={15} />}
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {menuOpen && (
        <div className="font-dm fixed top-0 left-0 w-full h-screen z-[60] bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center gap-10">
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
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className=" group relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden backdrop-blur-xl bg-white/[0.06] border border-white/[0.2] text-white/70 hover:text-white transition-all duration-200 active:scale-95 "
            >
              <div className="absolute inset-0 bg-white/[0.06] opacity-60 group-hover:opacity-80 transition" />

              <div className="absolute inset-0 opacity-20 group-hover:opacity-70 transition bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35)_0%,transparent_30%,transparent_70%,rgba(255,255,255,0.25)_100%)]" />

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-white/20 blur-md opacity-40 group-hover:opacity-70 transition" />

              <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)]" />
              <FiSun size={16} />
            </button>

            <button
              onClick={() => setLang(lang === "EN" ? "PT" : "EN")}
              className=" group relative flex items-center gap-2 px-4 h-10 rounded-full overflow-hidden backdrop-blur-xl bg-white/[0.06] border border-white/[0.2] text-sm text-white/70 hover:text-white transition-all duration-200 active:scale-95 "
            >
              <div className="absolute inset-0 bg-white/[0.06] opacity-60 group-hover:opacity-80 transition" />

              <div className="absolute inset-0 opacity-20 group-hover:opacity-70 transition bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35)_0%,transparent_30%,transparent_70%,rgba(255,255,255,0.25)_100%)]" />

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-white/20 blur-md opacity-40 group-hover:opacity-70 transition" />

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
