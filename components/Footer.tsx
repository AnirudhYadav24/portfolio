import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="glass rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} {portfolioData.person.name}
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Built with Next.js • Tailwind • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}