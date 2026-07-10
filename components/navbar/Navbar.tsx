"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },  
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-sky-400"
        >
          Prithish
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition hover:text-sky-400"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 transition hover:bg-white/10"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#081020] md:hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 px-6 py-4 transition hover:bg-white/5"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}