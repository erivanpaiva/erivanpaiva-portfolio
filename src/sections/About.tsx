"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { DM_Sans } from "next/font/google";
import {
  HiCodeBracket,
  HiComputerDesktop,
  HiPaintBrush,
} from "react-icons/hi2";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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

const skills = [
  { name: "C", icon: "/icons/c.svg", color: "#A9BACD" },
  { name: "C#", icon: "/icons/csharp.svg", color: "#7253DC" },
  { name: "CSS", icon: "/icons/css.svg", color: "#268BD2" },
  { name: "HTML", icon: "/icons/html.svg", color: "#E34C26" },
  { name: "Java", icon: "/icons/java.svg", color: "#3A75B0" },
  { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
  { name: "Python", icon: "/icons/python.svg", color: "#1E425F" },
  { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
  { name: "Next.js", icon: "/icons/nextjs.svg", color: "#FFFFFF" },
  { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", color: "#38BDF8" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", color: "#336791" },
  { name: "Kotlin", icon: "/icons/kotlin.svg", color: "#C018E5" },
  { name: "React Native", icon: "/icons/reactnative.svg", color: "#087EA4" },
  { name: "Figma", icon: "/icons/figma.svg", color: "#F24E1E" },
  { name: "Git", icon: "/icons/git.svg", color: "#DE4C36" },
  { name: "Visual Studio", icon: "/icons/visualstudio.svg", color: "#C959F7" },
  { name: "VS Code", icon: "/icons/vscode.svg", color: "#218BD3" },
];

export default function About() {
  return (
    <section id="about" className="px-6 pt-12 md:pt-16 pb-24 md:pb-32">
      <div className="w-full max-w-[1150px] mx-auto flex flex-col gap-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col gap-10"
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

          <div className="max-w-[1000px] mx-auto w-full grid md:grid-cols-[1.3fr_0.7fr] gap-16 md:gap-20 items-center mt-6 md:mt-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className={`
    ${dmSans.className} text-neutral-300 text-[16.8px] md:text-[18.8px] leading-[2] space-y-4`}
            >
              <motion.p variants={item}>
                <span className="text-white font-semibold">
                  Software Developer
                </span>{" "}
                with a background in building modern, user-centered
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
              <div className="relative w-[300px] md:w-[360px] aspect-[3/4] transition-transform duration-500 ease-out hover:rotate-[1.5deg] hover:scale-[1.03]">
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
            className={`
    ${dmSans.className} max-w-[1000px] mx-auto w-full grid md:grid-cols-3 gap-6 mt-8 md:mt-10 uppercase`}
          >
            {[
              {
                title: "4+ Years Experience",
                desc: "Building modern applications",
                icon: HiCodeBracket,
              },
              {
                title: "Frontend & UX/UI Focus",
                desc: "User-centered interfaces",
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
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#6de881]/40 hover:bg-white/10"
                >
                  <div className="w-12 h-12 rounded-full bg-[#6de881]/15 border border-[#6de881]/30 flex items-center justify-center text-[#6de881] text-lg">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-white text-sm font-medium">
                      {card.title}
                    </p>
                    <p className="text-white/50 text-xs mt-1">{card.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col gap-10"
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
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(6,150px)] gap-5 max-w-[1100px] mx-auto justify-center mt-6 md:mt-8"
          >
            {skills.map((skill) => (
              <motion.div
                variants={item}
                key={skill.name}
                className="group relative aspect-square w-full rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] "
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl"
                  style={{ backgroundColor: `${skill.color}30` }}
                />

                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-[48px] h-[48px] object-contain z-10 transition duration-300 group-hover:scale-110"
                />

                <span className="text-[10px] text-zinc-300 text-center transition duration-300 group-hover:text-white z-10 uppercase">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
