"use client";

import Section from "./Section";
 
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic background and CGPA.">
      <div className="grid gap-4 md:grid-cols-2">
        {portfolioData.education.map((e, idx) => (
          <motion.div
            key={e.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: idx * 0.03 }}
            className="glass rounded-3xl p-6"
          >
            <h3 className="font-semibold tracking-tight">{e.name}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{e.detail}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}