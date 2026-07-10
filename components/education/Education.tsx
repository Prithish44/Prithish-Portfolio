"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (Computer Science & Engineering) ",
    institute: "MCKV Institute of Engineering",
    duration: "2023 - 2027",
    cgpa: "CGPA: 8.5+",
  },
  {
    degree: "Higher Secondary (WBCHSE)",
    institute: "Sinthee Ramkrishna Sangha Vidyamandir",
    duration: "2021 - 2023",
    cgpa: "Science",
  },  
   {
    degree: "Secondary (WBCSE)",
    institute: "Sinthee Ramkrishna Sangha Vidyamandir",
    duration: "2021 - 2023",
    // cgpa: "Science",
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <p className="text-cyan-400 font-semibold">
          EDUCATION
        </p>

        <h2 className="mt-2 text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
          Academic Journey
        </h2>
      </motion.div>

      <div className="mt-16 space-y-8">

        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="flex items-center gap-4">

              <div className="rounded-full bg-cyan-500 p-3">
                <GraduationCap />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  {item.degree}
                </h3>

                <p className="text-cyan-400">
                  {item.institute}
                </p>

                <div className="mt-2 flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  {item.duration}
                </div>

                <p className="mt-2 text-gray-300">
                  {item.cgpa}
                </p>

              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}