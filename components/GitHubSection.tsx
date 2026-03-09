"use client";

import Section from "./Section";
import { portfolioData } from "../data/portfolioData";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

export default function GitHubSection() {
  return (
    <Section
      id="github"
      title="GitHub"
      subtitle="Add GitHub stats and contributions (placeholder block included)."
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="glass rounded-3xl p-6 sm:p-8 flex flex-col gap-4"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold tracking-tight">Contributions</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Replace this block with GitHub widgets (e.g., github-readme-stats, contribution chart).
            </p>
          </div>
          <a
            href={portfolioData.person.github}
            target="_blank"
            rel="noreferrer"
            className="glass rounded-2xl px-4 py-2 text-sm inline-flex items-center gap-2 hover:opacity-90 transition"
          >
            <Github size={16} /> Open GitHub
          </a>
        </div>

        <div className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800/70 bg-zinc-50/50 dark:bg-zinc-950/20 p-4 text-sm text-zinc-600 dark:text-zinc-400">
          GitHub stats placeholder (you can embed images/widgets here)
        </div>
      </motion.div>
    </Section>
  );
}