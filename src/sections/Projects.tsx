"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { skills } from "@/src/data/skills";
import { FiArrowUpRight } from "react-icons/fi";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
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

const projects = [
  {
    title: "Project 1",
    desc: "Description",
    tech: ["Figma", "React Native", "TypeScript"],
    image: "/foto.jpg",
  },
  {
    title: "Project 2",
    desc: "Description",
    tech: ["Next.js", "Figma", "React"],
    image: "/foto.jpg",
  },
  {
    title: "Project 3",
    desc: "Description",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/foto.jpg",
  },
];

const skillMap = new Map(skills.map((skill) => [skill.name, skill]));

const testimonials = [
  {
    name: "Name",
    role: "Role",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    image: "/foto.jpg",
  },
  {
    name: "Name",
    role: "Role",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    image: "/foto.jpg",
  },
  {
    name: "Name",
    role: "Role",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    image: "/foto.jpg",
  },
];

export default function Projects() {
  return (
    <>
      <section id="projects" className="pt-10 sm:pt-14 md:pt-16">
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
                ✱ Featured Projects
              </motion.span>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-1 h-[1px] bg-white/10 origin-left"
              />
            </motion.div>

            <div className="max-w-[1120px] mx-auto w-full mt-6 md:mt-8">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="grid w-full grid-cols-1 gap-6 md:grid-cols-2"
              >
                <motion.div
                  variants={item}
                  className="group relative col-span-1 h-[420px] overflow-hidden rounded-[26px] border border-white/10 bg-[#18201C] sm:h-[520px] md:col-span-2 md:h-[700px] md:rounded-[32px]"
                >
                  <Image
                    src={projects[0].image}
                    alt={projects[0].title}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_10%,rgba(0,0,0,0.18)_34%,rgba(0,0,0,0.56)_56%,rgba(0,0,0,0.88)_80%,rgba(0,0,0,0.98)_100%)] opacity-100 transition duration-500 md:opacity-0 md:group-hover:opacity-100" />
                  <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-[#6DE881]/16 blur-2xl opacity-100 transition duration-500 sm:h-20 sm:w-20 md:right-6 md:top-6 md:opacity-0 md:group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-8">
                    <div className="translate-y-0 opacity-100 transition duration-500 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      <div className="flex items-end justify-between gap-3 sm:gap-4">
                        <div className="max-w-[72%] sm:max-w-[78%]">
                          <h3 className="font-dm text-lg font-medium text-white sm:text-xl md:text-2xl">
                            {projects[0].title}
                          </h3>
                          <p className="font-dm mt-2 text-[13px] leading-relaxed text-white/75 sm:text-sm md:text-[15px]">
                            {projects[0].desc}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                            {projects[0].tech.map((tech) => {
                              const skill = skillMap.get(tech);

                              return (
                                <span
                                  key={tech}
                                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[9px] uppercase tracking-[0.15em] text-white/78 backdrop-blur-2xl sm:gap-2 sm:px-3 sm:py-1.5 sm:text-[10px]"
                                >
                                  {skill && (
                                    <Image
                                      src={skill.icon}
                                      alt={skill.name}
                                      width={14}
                                      height={14}
                                      className="h-3 w-3 object-contain sm:h-3.5 sm:w-3.5"
                                    />
                                  )}
                                  {tech}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/75 backdrop-blur-2xl transition-all duration-300 hover:bg-white/12 hover:text-white sm:h-11 sm:w-11 md:h-12 md:w-12">
                            <FiArrowUpRight
                              size={16}
                              className="sm:h-[17px] sm:w-[17px] md:h-[18px] md:w-[18px]"
                            />
                          </button>
                          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/75 backdrop-blur-2xl transition-all duration-300 hover:bg-white/12 hover:text-white sm:h-11 sm:w-11 md:h-12 md:w-12">
                            <FiGithub
                              size={16}
                              className="sm:h-[17px] sm:w-[17px] md:h-[18px] md:w-[18px]"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {projects.slice(1).map((project) => (
                  <motion.div
                    key={project.title}
                    variants={item}
                    className="group relative h-[300px] overflow-hidden rounded-[24px] border border-white/10 bg-[#18201C] sm:h-[340px] md:h-[380px] md:rounded-[28px]"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_12%,rgba(0,0,0,0.18)_38%,rgba(0,0,0,0.58)_62%,rgba(0,0,0,0.9)_86%,rgba(0,0,0,0.98)_100%)] opacity-100 transition duration-500 md:opacity-0 md:group-hover:opacity-100" />
                    <div className="absolute right-4 top-4 h-14 w-14 rounded-full bg-[#6DE881]/14 blur-2xl opacity-100 transition duration-500 sm:h-16 sm:w-16 md:right-5 md:top-5 md:opacity-0 md:group-hover:opacity-100" />

                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                      <div className="translate-y-0 opacity-100 transition duration-500 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                        <div className="flex items-end justify-between gap-3 sm:gap-4">
                          <div className="max-w-[72%] sm:max-w-[76%]">
                            <h3 className="font-dm text-base font-medium text-white sm:text-lg">
                              {project.title}
                            </h3>
                            <p className="font-dm mt-2 text-[12px] leading-relaxed text-white/75 sm:text-xs">
                              {project.desc}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                              {project.tech.map((tech) => {
                                const skill = skillMap.get(tech);

                                return (
                                  <span
                                    key={tech}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[9px] uppercase tracking-[0.15em] text-white/78 backdrop-blur-2xl"
                                  >
                                    {skill && (
                                      <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={12}
                                        height={12}
                                        className="h-3 w-3 object-contain"
                                      />
                                    )}
                                    {tech}
                                  </span>
                                );
                              })}
                            </div>
                          </div>

                          <div className="flex shrink-0 items-center gap-2">
                            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/75 backdrop-blur-2xl transition-all duration-300 hover:bg-white/12 hover:text-white sm:h-11 sm:w-11">
                              <FiArrowUpRight size={16} />
                            </button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/75 backdrop-blur-2xl transition-all duration-300 hover:bg-white/12 hover:text-white sm:h-11 sm:w-11">
                              <FiGithub size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={item}
                className="mt-1 md:mt-2 flex w-full justify-end"
              >
                <button className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white pt-6">
                  <span>View All Projects</span>
                  <FiArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="testimonials" className="pt-8 sm:pt-12 md:pt-16">
        <div className="w-full max-w-[1300px] mx-auto px-6 flex flex-col gap-10">
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-4">
              <span className="text-[#6de881] text-xs tracking-[0.3em] uppercase font-medium">
                ✱ What People Say
              </span>
              <div className="flex-1 h-[1px] bg-white/10" />
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1120px] mx-auto w-full gap-6 mt-6 md:mt-8 mb-6 md:mb-8"
            >
              {testimonials.map((t, i) => (
                <motion.div key={i} variants={item} className="pt-12">
                  <div className="relative min-h-[250px] rounded-[26px] bg-[#18201C] p-7 flex flex-col items-center text-center gap-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1E2A22] sm:min-h-[270px] sm:p-8">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                      <div className="h-14 w-14 rounded-full overflow-hidden ring-4 ring-[#121713] sm:h-16 sm:w-16">
                        <Image
                          src={t.image}
                          alt={t.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <p className="mt-5 text-white/72 text-[15px] leading-[1.85] sm:text-base">
                      {t.text}
                    </p>

                    <div className="mt-auto pt-2">
                      <p className="text-white text-[15px] font-medium">
                        {t.name}
                      </p>
                      <p className="text-white/50 text-[12px] mt-1">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
