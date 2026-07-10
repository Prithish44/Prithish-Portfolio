"use client";

import { motion } from "framer-motion";
import { GraduationCap, Brain, Briefcase, Code2 } from "lucide-react";

const stats = [
  {
    icon: <Briefcase size={28} />,
    title: "2+",
    subtitle: "Internships",
  },
  {
    icon: <Brain size={28} />,
    title: "AI",
    subtitle: "ML & LLM",
  },
  {
    icon: <Code2 size={28} />,
    title: "10+",
    subtitle: "Technologies",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "2027",
    subtitle: "Graduate",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
      >
        <p className="text-sky-400 font-semibold">
          ABOUT ME
        </p>

        <h2 className="mt-2 text-5xl font-bold">
          Building Intelligent AI Systems
        </h2>

        <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-400">
          I'm a Computer Science undergraduate passionate about
          Artificial Intelligence, Computer Vision, Large Language Models, RAG
          and Software Development.

          I enjoy transforming research ideas into production-ready
          applications that solve real-world problems.

          During my internships at WEBEL and Jadavpur University,
          I worked on Computer Vision, YOLO models,
          FastAPI applications and LLM-powered AI systems.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * .15 }}
            viewport={{ once: true }}
            className="card-hover rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="text-sky-400">
              {item.icon}
            </div>

            <h3 className="mt-5 text-4xl font-bold">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-400">
              {item.subtitle}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}