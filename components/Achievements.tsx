"use client";

import Section from "./Section";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements & Leadership"
      subtitle="Signals teamwork, responsibility, and communication — important for recruiters."
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="glass rounded-3xl p-6 sm:p-8"
      >
        <ul className="space-y-2 text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
          {portfolioData.achievements.map((a) => (
            <li key={a} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500/70" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}