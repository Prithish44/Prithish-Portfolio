"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-10 top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.05),transparent_60%)]" />
    </div>
  );
}