"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Instrument_Serif } from "next/font/google";
import { FaGithub, FaLinkedin, FaBehance, FaMedium } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  const roles = ["Developer", "Designer", "Engineer", "Creative"];

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

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * -20;
    const rotateY = ((x - midX) / midX) * 20;

    card.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.03)
  `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `
    perspective(1000px)
    rotateX(0deg)
    rotateY(0deg)
    scale(1)
  `;
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-transparent">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[1200px] h-[600px]
  bg-gradient-to-t from-emerald-500/80 via-blue-400/20 to-transparent blur-[140px]"
        />
      </div>

      <div className="flex flex-col items-center gap-10 z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-center md:text-left max-w-xl"
          >
            <div className="flex flex-col gap-4 md:gap-5">
              <p className="text-sm md:text-base text-gray-500 tracking-wide">
                Hey, I’m
              </p>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.9]">
                Erivan Paiva
              </h1>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg">
                I create modern and engaging digital experiences as a{" "}
                <span className="relative inline-block whitespace-nowrap">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roles[currentRole]}
                      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="text-emerald-400 font-medium"
                    >
                      {roles[currentRole]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                , focused on clean design, smooth interactions, and meaningful
                user experiences.
              </p>
            </div>

            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <a
                href=""
                target="_blank"
                className="w-11 h-11 flex items-center justify-center 
          rounded-xl bg-white/5 border border-white/10 
          hover:bg-white/10 hover:scale-110 
          hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]
          transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href=""
                target="_blank"
                className="w-11 h-11 flex items-center justify-center 
          rounded-xl bg-white/5 border border-white/10 
          hover:bg-white/10 hover:scale-110 
          hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]
          transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>

              <a
                href=""
                target="_blank"
                className="w-11 h-11 flex items-center justify-center 
          rounded-xl bg-white/5 border border-white/10 
          hover:bg-white/10 hover:scale-110 
          hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]
          transition-all duration-300"
              >
                <FaBehance size={18} />
              </a>

              <a
                href=""
                target="_blank"
                className="w-11 h-11 flex items-center justify-center 
          rounded-xl bg-white/5 border border-white/10 
          hover:bg-white/10 hover:scale-110 
          hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]
          transition-all duration-300"
              >
                <FaMedium size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ perspective: 1000 }}
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative transition-transform duration-300 ease-out transform-gpu animate-[float_6s_ease-in-out_infinite]"
            >
              <Image
                src="/foto.jpg"
                alt="Erivan Paiva"
                width={300}
                height={380}
                className="w-[300px] h-[380px] object-cover object-top rounded-2xl border border-white/10 shadow-lg will-change-transform"
              />

              <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 blur-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>

        <div className="flex gap-4 justify-center mt-6">
          <button
            className="
    px-7 py-3 rounded-full
    bg-white text-black text-sm font-medium
    shadow-[0_4px_20px_rgba(255,255,255,0.15)]
    hover:scale-105 hover:shadow-[0_6px_30px_rgba(255,255,255,0.25)]
    transition-all duration-300
  "
          >
            Contact
          </button>

          <button
            onClick={handleCopy}
            className="
    flex items-center gap-2
    px-3 py-2
    text-sm text-white/50
    hover:text-white/80
    transition-all duration-300
    hover:scale-105
  "
          >
            <FiCopy size={14} />

            {copied ? "Copied!" : "erivannpaiva@gmail.com"}
          </button>
        </div>
      </div>
    </section>
  );
}
