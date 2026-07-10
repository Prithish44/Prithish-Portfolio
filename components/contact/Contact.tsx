"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-28 text-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <p className="font-semibold text-cyan-400">
          CONTACT
        </p>

        <h2 className="mt-2 text-5xl font-bold">
          Let's Build Something Amazing
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-400">
          Interested in AI, Machine Learning or Software Development?
          Let's connect.
        </p>

        <a
          href="mailto:yourmail@gmail.com"
          className="mt-10 inline-block rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:scale-105"
        >
          Say Hello 👋
        </a>

        <div className="mt-12 flex justify-center gap-8 text-4xl">

          <a href="https://github.com/Prithish44">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/prithish-saha-780682359">
            <FaLinkedin />
          </a>  
          <a href="https://x.com/Pete_Park2">
            <SiX />
          </a>
          <a href="mailto:prithish.saha44@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </motion.div>
    </section>
  );
}