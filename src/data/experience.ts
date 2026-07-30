import type { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    id: "hiraya-jr",
    role: "Junior Software Engineer",
    organization: "Hiraya Tech",
    period: "May 2025 - Present",
    description:
      "Working on hybrid mobile and web applications using React, TypeScript, Ionic, Capacitor, and Django. Contributing to SaaS products, dashboards, and map-based features.",
    tech: ["React", "TypeScript", "TanStack", "Ionic", "Django", "PostgreSQL"],
    type: "work",
  },
  {
    id: "hiraya-intern",
    role: "Front-End Developer (Intern)",
    organization: "Hiraya Tech",
    period: "Feb 2025 - May 2025",
    description:
      "Worked on various projects and features for web applications. Gained hands-on experience in frontend development.",
    tech: ["React", "TypeScript", "TanStack", "Ionic", "Django", "PostgreSQL"],
    type: "work",
  },
  {
    id: "bsit",
    role: "BSIT - Bachelor of Science in Information Technology",
    organization:
      "Polytechnic University of the Philippines - Quezon City Campus",
    period: "Graduated in 2025",
    description: "Focused on software development and system design.",
    tech: [],
    type: "education",
  },
];

export const ROLES = [
  "Software Engineer",
  "Web Developer",
  "Mobile Developer",
  "Full-Stack Developer",
  "Front-End Developer",
  "Back-End Developer",
];
