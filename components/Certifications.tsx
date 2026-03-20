"use client";

import Section from "./Section";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" subtitle="Relevant certifications .">
      <div className="grid gap-4 md:grid-cols-2">
        {portfolioData.certifications.map((c, idx) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: idx * 0.03 }}
            className="glass rounded-3xl p-6"
          >
            <p className="font-medium">{c}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}