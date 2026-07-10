"use client";

import { useEffect, useState } from "react";

const words = [
  "AI Engineer",
  "Machine Learning Engineer",
  "Software Engineer",
  "Computer Vision Developer",
];

export default function TypingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="mt-4 text-2xl font-semibold text-sky-400">
      {words[index]}
    </h2>
  );
}