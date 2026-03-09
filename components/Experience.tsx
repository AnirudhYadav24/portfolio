"use client";

import Section from "./Section";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Experience() {
  const exp = portfolioData.experience[0];

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Real-world development exposure with MERN and API integration."
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="glass rounded-3xl p-6 sm:p-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{exp.role}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{exp.company}</p>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{exp.period}</p>
        </div>

        <ul className="mt-5 space-y-2 text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
          {exp.points.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500/70" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}