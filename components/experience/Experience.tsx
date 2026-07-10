"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    company:
      "WEBEL – Centre of Excellence on Data Science & Machine Learning, Govt. of West Bengal",
    location: "Kolkata, West Bengal, India",
    role: "Machine Learning Intern",
    duration: "March 2026 – June 2026",
    points: [
      "Developed a privacy-preserving handwritten prescription digitization pipeline using FastAPI and Gemini.", 
      "Trained and deployed a custom YOLOv8 model for handwritten PII detection.", 
      "Designed a dual-layer Actor-Critic evaluation framework for AI output validation.",
      "Implemented semantic grounding using reference databases to improve extraction accuracy.",
    ],
  },

  {
    company: "Jadavpur University",
    location: "Kolkata, West Bengal, India",
    role: "Summer Intern",
    duration: "June 2025 – August 2025",
    points: [
      "Curated and processed a custom waste image dataset for computer vision tasks.",
      "Annotated 300+ images for object detection model training.",
      "Integrated LangChain and Large Language Models for waste classification.",
      "Developed an AI-powered waste severity scoring pipeline.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="font-semibold tracking-widest text-cyan-400">
          EXPERIENCE
        </p>

        <h2 className="mt-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-5xl font-bold text-transparent">
          Professional Journey
        </h2>

        <p className="mt-6 max-w-3xl text-gray-400">
          My internships and research experiences focused on Artificial
          Intelligence, Computer Vision, Machine Learning and Full Stack
          Development.
        </p>
      </motion.div>

      <div className="relative mt-20">

        {/* Timeline */}
        <div className="absolute left-5 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-cyan-400 via-sky-500 to-violet-500"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative mb-16 ml-16"
          >
            {/* Timeline Circle */}
            <div className="absolute -left-[56px] flex h-11 w-11 items-center justify-center rounded-full border-4 border-[#081020] bg-cyan-500 text-white shadow-lg">
              <Briefcase size={20} />
            </div>

            {/* Card */}
            <div className="card-hover rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                <div>
                  <h3 className="text-2xl font-bold">
                    {exp.role}
                  </h3>

                  <p className="mt-2 text-lg font-medium text-cyan-400">
                    {exp.company}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-6">

                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={17} />
                      {exp.location}
                    </div>

                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={17} />
                      {exp.duration}
                    </div>

                  </div>
                </div>

              </div>

              <ul className="mt-8 space-y-3 text-gray-300">
                {exp.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400"></span>

                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}