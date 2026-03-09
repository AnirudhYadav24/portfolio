"use client";

import Section from "./Section";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A focused selection of projects that demonstrate full stack development, ML workflows, and deployment practices."
    >
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {portfolioData.projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="glass rounded-3xl p-5 sm:p-6 hover:translate-y-[-2px] transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-white">{p.subtitle}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-full p-2 hover:opacity-90 transition"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="glass rounded-full p-2 hover:opacity-90 transition"
                  aria-label="Live demo"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <img
              src={p.image}
              alt={p.title}
              className="mt-4 w-full h-40 object-cover rounded-lg border border-zinc-800"
            />

            <p className="mt-4 text-sm sm:text-base text-zinc-700 dark:text-white">
              {p.description}
            </p>

            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-white">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full px-3 py-1 text-xs glass text-zinc-700 dark:text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}