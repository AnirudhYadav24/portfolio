import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "K R Anirudh Yadav — Portfolio",
  description: "Full Stack • Cloud/DevOps • Data/ML • Agentic AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}