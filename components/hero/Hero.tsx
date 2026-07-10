"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "../background/AnimatedBackground";
import TypingText from "./TypingText";
import { Download, ArrowRight } from "lucide-react";  
import Spotlight from "../background/Spotlight";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,  
  FaTwitter, 
} from "react-icons/fa";    
import {
  SiCredly,
  SiLeetcode,  
  SiX
} from "react-icons/si";


export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">

      <AnimatedBackground />
      <Spotlight />

      <div className="z-10 text-center">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-sky-400"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-4 text-7xl font-extrabold"
        >
          Prithish Saha
        </motion.h1>

        <TypingText />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400"
        >
          Building production-ready AI systems using Computer Vision,
          Large Language Models, RAG, FastAPI, Next.js and modern software
          engineering practices.
        </motion.p>

        <div className="mt-10 flex justify-center gap-5">

         <a href="/Resume.pdf" className="flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3 font-semibold hover:scale-105 transition">
            <Download size={18}/>
                 Download CV
        </a>

        <a href="#projects" className="flex items-center gap-2 rounded-xl border border-cyan-500 px-7 py-3 hover:bg-cyan-500 transition">
            View Projects
        <ArrowRight size={18}/>
        </a>

        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-7 text-3xl">

  <a
    href="https://github.com/Prithish44"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:-translate-y-1 hover:text-cyan-400"
    title="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/prithish-saha-780682359"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:-translate-y-1 hover:text-cyan-400"
    title="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:prithish.saha44@gmail.com"
    className="transition duration-300 hover:-translate-y-1 hover:text-cyan-400"
    title="Email"
  >
    <FaEnvelope />
  </a>

  <a
    href="https://x.com/Pete_Park2"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:-translate-y-1 hover:text-cyan-400"
    title="X (Twitter)"
  >
    <SiX />
  </a>

  <a
    href="https://www.credly.com/users/prithish-saha.d9630270"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:-translate-y-1 hover:text-cyan-400"
    title="Credly"
  >
    <SiCredly />
  </a>

  <a
    href="https://leetcode.com/u/Prithish_saha"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:-translate-y-1 hover:text-cyan-400"
    title="LeetCode"
  >
    <SiLeetcode />
  </a>

</div>

      </div>
      <motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{
    repeat: Infinity,
    duration: 1.5,
  }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2"
>
  <div className="h-10 w-6 rounded-full border-2 border-sky-400">
    <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-sky-400"></div>
  </div>
</motion.div>
    </section>
  );
}