"use client";

import { motion, Variants } from "framer-motion";
import { DM_Sans } from "next/font/google";
import { FiArrowRight } from "react-icons/fi";

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
    tech: ["Tech 1", "Tech 2", "Tech 3"],
    image: "/foto.jpg",
  },
  {
    title: "Project 2",
    desc: "Description",
    tech: ["Tech 1", "Tech 2", "Tech 3"],
    image: "/foto.jpg",
  },
  {
    title: "Project 3",
    desc: "Description",
    tech: ["Tech 1", "Tech 2", "Tech 3"],
    image: "/foto.jpg",
  },
];

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
      <section id="projects" className="px-6 pt-8 sm:pt-12 md:pt-16">
        <div className="w-full max-w-[1150px] mx-auto flex flex-col gap-10">
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
                ✱ Featured Projects
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col gap-10 max-w-[1000px] mx-auto w-full mt-6 md:mt-8"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={item}
                  className="group w-full rounded-2xl bg-[#18201C] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-[#1E2A22]"
                >
                  <div className="flex flex-col md:flex-row w-full h-full">
                    <div className="relative md:w-[45%] w-full h-[220px] md:h-[320px] overflow-hidden">
                      <div className="absolute inset-0 bg-[#6de881]/10 opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="md:w-[40%] w-full p-6 md:p-8 flex flex-col justify-center gap-4">
                      <h3
                        className={`${dmSans.className}  text-white text-xl md:text-2xl font-medium`}
                      >
                        {project.title}
                      </h3>

                      <p
                        className={`${dmSans.className} text-white/60 text-sm leading-relaxed`}
                      >
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/60 uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button className="mt-4 flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
                        View Project
                        <FiArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="max-w-[1000px] mx-auto w-full flex justify-end mt-6"
            >
              <button className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300">
                View All Projects
                <FiArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="testimonials" className="px-6 pt-8 sm:pt-12 md:pt-16">
        <div className="w-full max-w-[1150px] mx-auto flex flex-col gap-10">
          <div className="w-full max-w-[1150px] mx-auto flex flex-col gap-10">
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
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1000px] mx-auto w-full gap-6 mt-8 mb-6 md:mb-8"
            >
              {testimonials.map((t, i) => (
                <motion.div key={i} variants={item} className="pt-10">
                  <div className="relative bg-[#18201C] rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:-translate-y-1 hover:bg-[#1E2A22] transition-all duration-300">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                      <div className="w-12 h-12 rounded-full overflow-hidden ring-4 ring-[#0f1412]">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <p className="text-white/70 text-sm leading-relaxed mt-4">
                      {t.text}
                    </p>

                    <div className="mt-4">
                      <p className="text-white text-sm font-medium">{t.name}</p>
                      <p className="text-white/50 text-xs mt-1">{t.role}</p>
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
