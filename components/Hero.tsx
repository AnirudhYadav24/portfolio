"use client";  // Ensure this component is rendered on the client side

import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { ArrowRight, Download, MapPin } from "lucide-react";

export default function Hero() {
  const { person, ctas } = portfolioData;

  return (
    <section className="bg-hero py-20 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left side: Profile Image */}
        <div className="flex-shrink-0 w-72 h-72 rounded-full overflow-hidden border-8 border-white">
          <img
            src="/profile.jpeg"
            alt="Anirudh Yadav"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right side: Text and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 text-center md:text-left ml-6 mt-8 md:mt-0"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <MapPin size={16} className="icon-color" />
            <span>{person.location}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white text-shadow">
            {person.name}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl bio-text">
            {person.headline}
          </p>

          <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl bio-text">
            {person.summary}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* View Projects Button */}
            <a
              href={ctas.primary.href}
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium bg-zinc-900 text-white hover:opacity-90 transition dark:bg-white dark:text-zinc-950"
            >
              {ctas.primary.label} <ArrowRight size={16} />
            </a>

            {/* Download Resume Button */}
            <a
              href={ctas.secondary.href}
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium glass hover:opacity-90 transition"
            >
              {ctas.secondary.label} <Download size={16} />
            </a>

            {/* Email Link */}
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium glass hover:opacity-90 transition"
            >
              {person.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 justify-center md:justify-start">
            {["Open to Full Stack Roles", "Cloud/DevOps", "Data/ML", "Agentic AI"].map((tag) => (
              <span
                key={tag}
                className="glass rounded-full px-4 py-2 text-xs text-zinc-700 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}