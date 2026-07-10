"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handle = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handle);

    return () =>
      window.removeEventListener("scroll", handle);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-8 right-8 rounded-full bg-cyan-500 p-3 shadow-xl transition hover:scale-110"
    >
      <ArrowUp />
    </button>
  );
}