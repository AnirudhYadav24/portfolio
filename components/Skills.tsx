"use client";

import Section from "./Section";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Grouped skills for quick recruiter scanning."
    >
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.skills.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: idx * 0.03 }}
            className="glass rounded-3xl p-5 sm:p-6"
          >
            <h3 className="font-semibold tracking-tight">{g.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="glass rounded-full px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}