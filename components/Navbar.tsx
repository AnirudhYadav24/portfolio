"use client";

import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { linkedin, github, email } = portfolioData.person;

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mt-4 glass rounded-2xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">
            {portfolioData.person.name}
          </a>

          <nav className="hidden md:flex items-center gap-5 text-sm text-zinc-700 dark:text-zinc-300">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-zinc-900 dark:hover:text-white transition">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-full p-2 hover:opacity-90 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-full p-2 hover:opacity-90 transition"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={`mailto:${email}`}
              className="glass rounded-full p-2 hover:opacity-90 transition"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}