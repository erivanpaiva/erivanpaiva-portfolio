"use client";

import { useEffect, useState } from "react";
import { Zain } from "next/font/google";

const zain = Zain({
  subsets: ["latin"],
  weight: ["800"], // extrabold
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
    <div className="fixed top-0 left-0 w-full z-50">
      <nav
        className={`
  flex items-center justify-between
  w-full px-6 md:px-12 py-5
  backdrop-blur-2xl
  transition-all duration-300
  ${
    scrolled
      ? "bg-black/50 border-b border-white/10"
      : "bg-black/30 border-b border-transparent"
  }
`}
      >
        <h1
          onClick={() => scrollToSection("home")}
          className={`${zain.className} text-[16px] tracking-[0.4em] text-white uppercase cursor-pointer hover:opacity-80 transition`}
        >
          Erivan Paiva
        </h1>
        <div className="flex items-center gap-6 text-white/60 tracking-wide">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative uppercase text-[11px] px-2 py-1 transition-all duration-300 ${
                active === section ? "text-white" : "hover:text-white"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span
                className={`absolute inset-0 -z-10 transition-all duration-300 ${
                  active === section
                    ? "bg-emerald-500/20 blur-md opacity-100"
                    : "opacity-0 bg-emerald-500/20 blur-md"
                }`}
              />
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
