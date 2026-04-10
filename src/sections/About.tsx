"use client";

import { motion, Variants } from "framer-motion";
import { skills } from "@/src/data/skills";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Globe } from "@/src/components/Globe";
import {
  HiCodeBracket,
  HiComputerDesktop,
  HiPaintBrush,
} from "react-icons/hi2";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function About() {
  return (
    <>
      <section id="about" className="pt-8 sm:pt-12 md:pt-16">
        <div className="w-full max-w-[1300px] mx-auto px-6 flex flex-col gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-12"
          >
            <motion.div className="flex items-center gap-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-medium"
              >
                ✱ About Me
              </motion.span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-1 h-[1px] bg-white/10 origin-left"
              />
            </motion.div>

            <motion.div
              variants={container}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 max-w-[1120px] mx-auto justify-center mt-6 md:mt-8 mb-6 md:mb-8"
            >
              <motion.div
                variants={item}
                className="relative overflow-hidden rounded-[28px] bg-[#080a05] border border-white/[0.06] p-16 lg:col-span-8 flex flex-col justify-center gap-6"
              >
                <div
                  className={`${plusJakartaSans.className} font-regular space-y-3 text-[17px] leading-[1.9] text-white/90`}
                >
                  <p>
                    <span className="text-[var(--accent)] font-semibold">
                      Software Developer
                    </span>{" "}
                    with a background in building modern, user centered
                    applications. I have experience working with Software
                    development, databases, deep learning and image processing,
                    which gives me a solid foundation for solving complex
                    problems with efficient and scalable solutions.
                  </p>
                  <p>
                    I'm focused on{" "}
                    <span className="text-[var(--accent)] font-semibold">
                      Front-end development
                    </span>{" "}
                    and I'm also a{" "}
                    <span className="text-[var(--accent)] font-semibold">
                      UX/UI Design
                    </span>{" "}
                    enthusiast passionate about creating clean, intuitive, and
                    visually engaging interfaces.
                  </p>
                  <p>
                    I enjoy turning ideas into interactive experiences that feel
                    fluid to use and I'm driven to transform concepts into real
                    products, delivering solutions that are functional and
                    meaningful.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="relative overflow-hidden rounded-[28px] bg-[#080a05] border border-white/[0.06] p-7 lg:p-8 lg:col-span-4 flex flex-col justify-between min-h-[220px]"
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Globe />
                </div>

                <div className="relative z-10">
                  <p
                    className={`${plusJakartaSans.className} text-white/30 text-[10px] uppercase mt-1 tracking-[0.2em]`}
                  >
                    Based in
                  </p>
                  <h3
                    className={`${plusJakartaSans.className} text-white text-3xl font-semibold mt-1 leading-tight`}
                  >
                    Fortaleza, BR
                  </h3>
                </div>

                <p
                  className={`${plusJakartaSans.className} relative z-10 text-white/30 text-[10px] uppercase mt-1 tracking-[0.2em]`}
                >
                  Available globally
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="relative overflow-hidden rounded-[28px] bg-[#080a05] border border-white/[0.06] p-8 lg:col-span-4 flex flex-col min-h-[280px] cursor-default"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white/[0.05]">
                  <HiCodeBracket className="h-5 w-5 text-[var(--accent)]" />
                </div>
                <div className="flex-1 flex items-center">
                  <div className="flex items-end gap-1 leading-none">
                    <span
                      className={`${plusJakartaSans.className} text-[72px] font-bold text-[var(--accent)] leading-none tracking-tighter`}
                    >
                      4
                    </span>
                    <span
                      className={`${plusJakartaSans.className} text-[40px] font-bold text-[var(--accent)] leading-none mb-2`}
                    >
                      +
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p
                    className={`${plusJakartaSans.className} text-white text-[15px] font-semibold`}
                  >
                    Years Experience
                  </p>
                  <p
                    className={`${plusJakartaSans.className} text-white/40 text-sm`}
                  >
                    Building modern applications
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="relative overflow-hidden rounded-[28px] bg-[#080a05] border border-white/[0.06] p-8 lg:col-span-4 flex flex-col min-h-[280px] cursor-default"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white/[0.05]">
                  <HiComputerDesktop className="h-5 w-5 text-[var(--accent)]" />
                </div>
                <div className="flex-1 flex items-center">
                  <div className="w-full p-4 font-mono text-[11px] leading-[1.8] select-none">
                    <p>
                      <span className="text-[var(--accent)]">const</span>{" "}
                      <span className="text-white">dev</span>{" "}
                      <span className="text-white/40">=</span>{" "}
                      <span className="text-white/40">{"{"}</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-white/50">focus</span>
                      <span className="text-white/40">:</span>{" "}
                      <span className="text-[#d4f57a]">'Front-end'</span>
                      <span className="text-white/40">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-white/50">passion</span>
                      <span className="text-white/40">:</span>{" "}
                      <span className="text-[#d4f57a]">'UX/UI'</span>
                      <span className="text-white/40">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-white/50">goal</span>
                      <span className="text-white/40">:</span>{" "}
                      <span className="text-[#d4f57a]">
                        'great professional'
                      </span>
                    </p>
                    <p>
                      <span className="text-white/40">{"}"}</span>
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p
                    className={`${plusJakartaSans.className} text-white text-[15px] font-semibold`}
                  >
                    Frontend & UX/UI Focus
                  </p>
                  <p
                    className={`${plusJakartaSans.className} text-white/40 text-sm`}
                  >
                    User centered interfaces
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="relative overflow-hidden rounded-[28px] bg-[#080a05] border border-white/[0.06] p-8 lg:col-span-4 flex flex-col min-h-[280px] cursor-default"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white/[0.05]">
                  <HiPaintBrush className="h-5 w-5 text-[var(--accent)]" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      "Branding",
                      "Wireframes",
                      "Prototyping",
                      "Design Systems",
                      "User Research",
                    ].map((item) => (
                      <span
                        key={item}
                        className={`${plusJakartaSans.className} text-[11px] text-[var(--accent)] border border-[var(--accent)]/20 bg-[var(--accent)]/5 rounded-full px-3 py-1`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <p
                  className={`${plusJakartaSans.className} text-white text-[15px] font-semibold`}
                >
                  Design Background
                </p>
                <p
                  className={`${plusJakartaSans.className} text-white/40 text-sm`}
                >
                  Professional experience
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="pt-8 sm:pt-12 md:pt-16">
        <div className="w-full max-w-[1300px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-12"
          >
            <motion.div className="flex items-center gap-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[var(--accent)] text-xs tracking-[0.3em] uppercase font-medium"
              >
                ✱ Skills
              </motion.span>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-1 h-[1px] bg-white/10 origin-left"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-[1120px] mx-auto mt-12 mb-6 md:mb-8 grid grid-cols-12 gap-4"
        >
          {skills.slice(0, 18).map((skill) => (
            <motion.div
              variants={item}
              key={skill.name}
              className={`${plusJakartaSans.className} col-span-12 sm:col-span-6 lg:col-span-4 group relative flex items-center gap-4 rounded-[20px] bg-[#080a05] border border-white/[0.06] p-4 px-5 transition-all duration-300 hover:-translate-y-[2px]`}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-[inherit] blur-xl"
                style={{
                  background: `radial-gradient(circle at left, ${skill.color}30 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.05]">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-6 h-6 object-contain transition duration-300 group-hover:scale-110"
                />
              </div>

              <span className="relative z-10 text-white/70 text-sm tracking-wide group-hover:text-white">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
