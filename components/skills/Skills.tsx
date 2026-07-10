"use client";

import { motion } from "framer-motion";
import {  
  SiC, 
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiFlask,
  SiTensorflow,
  SiOpencv,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,  
  SiLangchain,  
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";


const skills = [
  { name: "C", icon: SiC },  
  { name: "C++", icon: SiCplusplus },  
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava }, 
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Flask", icon: SiFlask },
  { name: "TensorFlow", icon: SiTensorflow },  
  { name: "LangChain", icon: SiLangchain },    
  { name: "OpenCV", icon: SiOpencv },
  { name: "Docker", icon: SiDocker },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];



export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .6 }}
      >
        <p className="font-semibold text-sky-400">
          SKILLS
        </p>

        <h2 className="gradient-text mt-2 text-5xl font-bold">
          Tech Stack
        </h2>

        <p className="mt-6 max-w-3xl text-gray-400">
          Technologies I use to build scalable AI systems,
          production-ready APIs and modern web applications.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .05,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-sky-400 hover:shadow-[0_0_40px_rgba(56,189,248,.25)]"
            >
              <Icon
                size={52}
                className="mx-auto transition group-hover:scale-110"
              />

              <h3 className="mt-6 text-center font-semibold">
                {skill.name}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}