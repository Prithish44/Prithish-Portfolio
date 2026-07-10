"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Prescription Reader",
    description:
      "An end-to-end AI pipeline that digitizes handwritten medical prescriptions using Computer Vision, OCR, Gemini LLM, and FastAPI. Includes PII anonymization using YOLOv8 and semantic validation. Build during WEBEL Internship.",
    technologies: [
      "Python",
      "FastAPI",
      "YOLOv8",
      "Gemini 3.5 Flash",
      "OpenCV",
    ],
    github: "https://github.com/yourusername/ai-prescription-reader",
    demo: "#",
  },
  {
    title: "Waste Watch",
    description:
      "A smart waste detection system using Computer Vision and LLMs to classify waste and estimate severity. Build during Jadavpur University Internship.",
    technologies: [
      "React",
      "Flask",
      "YOLO",
      "LangChain",
      "Python",
    ],
    github: "https://github.com/yourusername/waste-watch",
    demo: "#",
  },
  {
    title: "AI Story Generator",
    description:
      "A Generative AI application that creates interactive stories using modern Large Language Models with a clean web interface.",
    technologies: [
      "Streamlit",
      "Gemini 2.5 Flash",
      "FastAPI",
      "gTTS",
    ],
    github: "https://github.com/Prithish44/AI-Story-Generator",
    demo: "#",
  },  
  {
    title: "QeikCareer - AI Multi - Agent Job Recommendation System",
    description:
      "Built a multi agent pipeline scraping, ranking, and NLP matching top 10 job to user profile and automated daily email delivery.",
    technologies: [
      "Python",
      "Gemini 2.5 Flash",
      "SerpAPI",
      "AI Agent",
    ],
    github: "https://github.com/Prithish44/QwikCareer",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <p className="font-semibold text-sky-400">
          PROJECTS
        </p>

        <h2 className="mt-2 bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-5xl font-bold text-transparent">
          Featured Work
        </h2>

        <p className="mt-6 max-w-3xl text-gray-400">
          A selection of AI, Machine Learning and Full Stack projects
          demonstrating production-ready engineering skills.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,.2)]"
          >
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mt-5 text-gray-400 leading-7">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-sky-500/20 px-3 py-1 text-sm text-sky-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-6">

              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-sky-400 hover:text-white"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                className="flex items-center gap-2 text-sky-400 hover:text-white"
              >
                <ExternalLink size={18} />
                Demo
              </a>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}