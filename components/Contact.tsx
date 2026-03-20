"use client";

import Section from "./Section";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { email, phone, linkedin, github } = portfolioData.person;
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("done");
  }

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Reach out for internships / full-time roles, collaborations, or project discussions."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="glass rounded-3xl p-6 sm:p-8"
        >
          <h3 className="font-semibold tracking-tight">Direct</h3>
          <div className="mt-4 space-y-3 text-sm sm:text-base">
            <a className="flex items-center gap-2 hover:opacity-90 transition" href={`mailto:${email}`}>
              <Mail size={16} /> {email}
            </a>
            <a className="flex items-center gap-2 hover:opacity-90 transition" href={`tel:${phone}`}>
              <Phone size={16} /> {phone}
            </a>
            <a className="flex items-center gap-2 hover:opacity-90 transition" href={linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a className="flex items-center gap-2 hover:opacity-90 transition" href={github} target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
          </div>

          <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
            
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="glass rounded-3xl p-6 sm:p-8"
        >
          <h3 className="font-semibold tracking-tight">Message</h3>

          <form className="mt-4 space-y-3" onSubmit={onSubmit}>
            <input
              required
              className="w-full rounded-2xl px-4 py-3 bg-white/70 dark:bg-zinc-950/30 border border-zinc-200/60 dark:border-zinc-800/70 outline-none"
              placeholder="Your name"
            />
            <input
              required
              type="email"
              className="w-full rounded-2xl px-4 py-3 bg-white/70 dark:bg-zinc-950/30 border border-zinc-200/60 dark:border-zinc-800/70 outline-none"
              placeholder="Email"
            />
            <textarea
              required
              rows={5}
              className="w-full rounded-2xl px-4 py-3 bg-white/70 dark:bg-zinc-950/30 border border-zinc-200/60 dark:border-zinc-800/70 outline-none"
              placeholder="Message"
            />
            <button
              type="submit"
              className="w-full rounded-2xl px-5 py-3 text-sm font-medium bg-zinc-900 text-white hover:opacity-90 transition dark:bg-white dark:text-zinc-950"
            >
              Send Message
            </button>
          </form>

          {status === "done" ? (
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              Form submitted (demo). Connect this to EmailJS / Formspree / your backend.
            </p>
          ) : null}
        </motion.div>
      </div>
    </Section>
  );
}