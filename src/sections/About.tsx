"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { skills } from "@/src/data/skills";
import {
  HiCodeBracket,
  HiComputerDesktop,
  HiPaintBrush,
} from "react-icons/hi2";

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

const badgeContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const badgeItem = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
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
                className="text-[#6de881] text-xs tracking-[0.3em] uppercase font-medium"
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

            <div className="max-w-[1120px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1.28fr_0.72fr] gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center mt-6 md:mt-8">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="font-dm max-w-[62ch] text-neutral-300 text-[15.5px] leading-[1.75] space-y-5 sm:text-[17.2px] sm:leading-[1.95] md:text-[18px] md:leading-[1.85] lg:text-[22.5px]"
              >
                <motion.p variants={item}>
                  <span className="text-white font-semibold">
                    Software Developer
                  </span>{" "}
                  with a background in building modern, user centered
                  applications. I have experience working with Software
                  development, databases, deep learning and image processing,
                  which gives me a solid foundation for solving complex problems
                  with efficient and scalable solutions.
                </motion.p>

                <motion.p variants={item}>
                  I'm focused on{" "}
                  <span className="text-white font-semibold">
                    Front-end development
                  </span>{" "}
                  and I'm also a{" "}
                  <span className="text-white font-semibold">UX/UI Design</span>{" "}
                  enthusiast passionate about creating clean, intuitive, and
                  visually engaging interfaces.
                </motion.p>

                <motion.p variants={item}>
                  I enjoy turning ideas into interactive experiences that feel
                  fluid to use and I'm driven to transform concepts into real
                  products, delivering solutions that are functional and
                  meaningful.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center md:justify-end"
              >
                <div className="relative w-[240px] sm:w-[280px] md:w-[360px] aspect-[3/4] transition-transform duration-500 ease-out hover:rotate-[1.5deg] hover:scale-[1.03]">
                  <div className="absolute inset-0 bg-[#6de881]/10 blur-2xl rounded-2xl" />
                  <Image
                    src="/foto.jpg"
                    alt="Erivan Paiva"
                    fill
                    className="object-cover rounded-2xl relative"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={badgeContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="font-dm max-w-[1120px] mx-auto w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-4 md:mt-6 mb-6 md:mb-8 uppercase"
            >
              {[
                {
                  title: "4+ Years Experience",
                  desc: "Building modern applications",
                  icon: HiCodeBracket,
                },
                {
                  title: "Frontend & UX/UI Focus",
                  desc: "User centered interfaces",
                  icon: HiComputerDesktop,
                },
                {
                  title: "Design Background",
                  desc: "Professional experience",
                  icon: HiPaintBrush,
                },
              ].map((card) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    variants={badgeItem}
                    className="group flex min-h-[220px] flex-col justify-between rounded-[30px] bg-[#18201C] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1D2621] sm:min-h-[236px] sm:p-7 md:min-h-[248px] md:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#24352C] text-[#6de881] sm:h-16 sm:w-16">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-white text-[17px] font-semibold leading-[1.3] tracking-[0.08em] sm:text-[18px] md:text-[19px]">
                        {card.title}
                      </p>
                      <p className="text-white/55 text-[13px] leading-[1.8] normal-case tracking-[0.01em] sm:text-[14px]">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="pt-8 sm:pt-12 md:pt-16">
        <div className="w-full max-w-[1300px] mx-auto px-6 flex flex-col gap-10">
          <motion.div
            variants={container}
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
                className="text-[#6de881] text-xs tracking-[0.3em] uppercase font-medium"
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

            <motion.div
              variants={container}
              className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-[repeat(6,minmax(0,170px))] gap-3 sm:gap-4 md:gap-5 max-w-[1120px] mx-auto justify-center mt-6 md:mt-8 mb-6 md:mb-8"
            >
              {skills.map((skill) => (
                <motion.div
                  variants={item}
                  key={skill.name}
                  className=" group relative aspect-square w-full min-h-[100px] sm:min-h-[100px] md:min-h-[100px] rounded-xl sm:rounded-2xl md:rounded-xl lg:rounded-3xl bg-[#18201C] flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 p-8 sm:p-8 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1E2A22] hover:scale-[1.03] "
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-[inherit] blur-xl"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}40 0%, transparent 70%)`,
                    }}
                  />

                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] md:w-[42px] md:h-[42px] lg:w-[48px] lg:h-[48px] object-contain z-10 transition duration-300 group-hover:scale-110"
                  />

                  <span className="text-[9px] sm:text-[9px]md:text-[10px] lg:text-[10px] text-zinc-300 text-center transition duration-300 group-hover:text-white z-10 uppercase">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
