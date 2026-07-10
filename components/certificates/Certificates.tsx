"use client";

import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
} from "lucide-react";

// ==============================
// CERTIFICATES
// ==============================

export const certificates = [
  {
    title: "Decode Python with DSA",
    issuer: "PW Skills",
    type: "Course Certificate",
    date: "March 2024",
    credential: "https://pwskills.com/learn/certificate/97f5f45b-05ac-4b60-b0f6-e9f2a13057a5",
    skills: ["Python", "DSA", "Problem Solving"],
  },

  {
    title: "Algebra for Engineers",
    issuer: "MCKV Institute of Engineering",
    type: "Course Certificate",
    date: "September 2023",
    credential: "https://www.linkedin.com/in/prithish-saha-780682359/details/certifications",
    skills: ["Mathematics", "Linear Algebra"],
  },

  {
    title: "Fundamentals and Application of Fuzzy Mathematics",
    issuer: "MCKV Institute of Engineering",
    type: "Course Certificate",
    date: "September 2024",
    credential: "https://www.linkedin.com/in/prithish-saha-780682359/details/certifications/",
    skills: ["Mathematics", "Fuzzy Logic"],
  },

  {
    title: "Database Management System - Part I",
    issuer: "Infosys Springboard",
    type: "Course Certificate",
    date: "June 2024",
    credential: "https://www.linkedin.com/in/prithish-saha-780682359/details/certifications/",
    skills: ["SQL", "Database", "DBMS"],
  },  
  {
    title: "Math Mania - Pragati 2024",
    issuer: "MCKV Institute of Engineering",
    type: "Techfest Certificate",
    date: " March 2024",
    credential: "https://www.linkedin.com/in/prithish-saha-780682359/details/certifications/",
    skills: ["Mathematics", "Aptitude"],
  },  

];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="font-semibold tracking-widest text-cyan-400">
          CERTIFICATIONS
        </p>

        <h2 className="mt-3 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-5xl font-bold text-transparent">
          Awards & Certifications
        </h2>

        <p className="mt-5 max-w-3xl text-lg text-gray-400">
          Continuous learning through industry-recognized courses
          in programming, mathematics, databases and computer science.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            className="card-hover rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-4">

                <div className="rounded-xl bg-cyan-500/20 p-3">
                  <Award className="text-cyan-400" />
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    {certificate.title}
                  </h3>

                  <p className="mt-1 text-cyan-400">
                    {certificate.issuer}
                  </p>

                  <p className="text-sm text-gray-500">
                    {certificate.type}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
                    <Calendar size={16} />
                    {certificate.date}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {certificate.credential !== "#" && (
                <a
                  href={certificate.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-cyan-400"
                >
                  <ExternalLink />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}