import { image } from "framer-motion/client";

export const portfolioData = {
  person: {
    name: "K R Anirudh Yadav",
    headline:
      "Final-year B.Tech CSE (2026) • Full Stack Developer • Cloud/DevOps • Data/ML • Agentic AI",
    location: "India",
    email: "anirudhyadav343@gmail.com",
    phone: "+91 6361092814",
    linkedin: "https://www.linkedin.com/in/anirudh-yadav-4a8873264",
    github: "https://github.com/", // replace with yours
    summary:
      "Final-year B.Tech CSE student with hands-on full stack development experience. Skilled in HTML/CSS/JS, React, Node.js, SQL, and REST APIs, with exposure to AWS, Docker, CI/CD, and backend integration. Exploring Agentic AI workflows and LLM-powered applications.",
  },

  ctas: {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Download Resume", href: "/K R Anirudh Yadav Resume.pdf (1).pdf" },
  },

  skills: [
    {
      title: "Full Stack",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "REST APIs"],
    },
    { title: "Database", items: ["MySQL (SQL)", "MongoDB (MERN)"] },
    { title: "Cloud / DevOps", items: ["AWS", "Docker", "CI/CD", "Git", "GitHub"] },
    { title: "Data / ML", items: ["Python", "Pandas (Basics)", "ML Models (RF/GB)"] },
    { title: "Other", items: ["Java", "Linux", "macOS", "Windows", "DSA (Basics)"] },
    { title: "AI", items: ["Ollama", "LLM APIs", "Conversational Memory", "Agentic AI (Basics)"] },
  ],

  projects: [
    {
      title: "Flight Delay Prediction System",
      subtitle: "Machine Learning • Data Analysis",
      image: "/Flight.jpg",
      description:
        "ML-based system predicting flight delays using flight and weather features with a clean prediction workflow.",
      bullets: [
        "Built preprocessing + training pipeline for structured flight data",
        "Trained and compared Random Forest and Gradient Boosting models",
        "Evaluated performance and packaged the solution for simple UI/API usage",
      ],
      tech: ["Python", "ML", "Data Analysis", "Random Forest", "Gradient Boosting"],
      github: "https://github.com/",
      demo: "#",
    },
    {
      title: "Dockerized Web App (AWS Deployment)",
      subtitle: "DevOps • Cloud",
      image: "/Deockerised.png",
      description:
        "Calculator web app containerized with Docker and deployed with AWS ECR workflow for images.",
      bullets: [
        "Built responsive calculator using HTML/CSS/JS",
        "Dockerized the app for consistent runtime",
        "Pushed container images to AWS ECR for deployment workflow",
      ],
      tech: ["HTML", "CSS", "JavaScript", "Docker", "AWS ECR"],
      github: "https://github.com/",
      demo: "#",
    },
    {
      title: "Local AI Chatbot using Ollama",
      subtitle: "AI • Python • REST",
      image: "/Ollama.png",
      description:
        "Local chatbot integrated with Ollama API using REST-based interaction and conversational memory.",
      bullets: [
        "Integrated local LLM inference via Ollama endpoints",
        "Implemented session-based conversational memory",
        "Designed REST interaction layer for flexible UI clients",
      ],
      tech: ["Python", "REST API", "Ollama", "Memory"],
      github: "https://github.com/",
      demo: "#",
    },
    {
      title: "Student Enrollment & Enquiry Management System",
      subtitle: "Full Stack • Database",
      image: "/Student EMI.jpeg",
      description:
        "System to manage student enquiries and enrollment workflow with structured data handling and admin UI.",
      bullets: [
        "Designed CRUD workflows for enquiries and student records",
        "Added validations and structured database operations",
        "Improved tracking and reduced manual paperwork steps",
      ],
      tech: ["Web", "CRUD", "SQL", "UI"],
      github: "https://github.com/",
      demo: "#",
    },
  ],

  experience: [
    {
      role: "Full Stack Development Intern",
      company: "Analogica Software Development Pvt Ltd",
      period: "Internship",
      points: [
        "Computer Science student with internship experience as a Full Stack Web Development Intern at Analogica",
        "Worked on building and improving web applications",
        "Explored and implemented Agentic AI solutions",
        "Interested in Full Stack Development, Cloud, and Data Engineering",
        "Eager to build scalable and impactful software solutions 🚀",
        "Followed Git-based workflow for code updates and reviews",
      ],
    },
  ],

  education: [
    {
      name: "Srinivas Institute of Technology",
      detail: "B.Tech CSE (2022–2026) • CGPA: 8.42",
    },
    { name: "Devika PU Science College", detail: "XII Science (2020–2022) • 66%" },
    { name: "Devika English Medium School", detail: "X (2019–2020) • 80%" },
  ],

  certifications: ["AWS Academy of Data Analytics", "HTML Application Development"],

  achievements: [
    "Group leader & choreographer — College fashion show (1st prize)",
    "Documentation coordinator — ASICS association",
    "Promoted college event via social media content",
  ],
};