import type { Project } from "@/types";
import diagramEditorThumbnail from "@/components/assets/projects/IDE/IDE-Edit.png";

export const projects: Project[] = [
  {
    id: "kita",
    title: "KITA - Savings & Goal Tracking App",
    summary:
      "Savings and goal tracking app with breakdowns and progress insights.",
    description:
      "KITA helps users set savings goals, break them down into smaller parts, and track progress with visual insights and reminders.",
    category: "Mobile",
    tech: [
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "TanStack",
      "Supabase",
    ],
    problem:
      "Many people struggle to stay consistent with savings because they lack clear breakdowns and visibility of their progress.",
    solution:
      "KITA provides goal tracking with breakdowns, real-time progress, and smart insights to keep users motivated.",
    features: [
      "Goal creation with breakdowns",
      "Progress tracking & statistics",
      "Collaborative group savings",
      "Reminders & notifications",
    ],
    thumbnail: "kita",
    sourceUrl: "https://github.com/John-Zelade/KITA",
    featured: true,
  },

  {
    id: "synctasks",
    title: "SyncTasks",
    summary:
      "Project & task management system for teams to plan and track work.",
    description:
      "SyncTasks lets teams plan sprints, assign tasks, and track delivery with progress dashboards.",
    category: "Web",
    tech: ["React", "Node.js", "MySQL"],
    problem:
      "Distributed teams often lose track of who owns what, leading to duplicated work and missed deadlines.",
    solution:
      "A single shared board with real-time sync gives every teammate the same up-to-date picture of project status.",
    features: [
      "Real-time task sync",
      "Sprint planning",
      "Team activity feed",
      "Real-time notification",
    ],
    imageFolder: "SyncTasks",
    videoUrl: "https://www.youtube.com/embed/SK3d9vU0XWQ?si=FIjszWBseqRTRrHX",
    sourceUrl: "https://github.com/John-Zelade/synctasks",
    featured: true,
  },

  {
    id: "student-information-system",
    title: "BNHS Student Information System",
    summary:
      "A web-based system for managing student records and academic information.",
    description:
      "A Student Information System developed to streamline student record management, enrollment data, and academic information through a centralized web application.",
    category: "Web",
    tech: ["React", "Node.js", "MySQL"],
    problem:
      "Managing student records manually can be time-consuming and prone to data inconsistencies.",
    solution:
      "Developed a centralized web application that allows administrators to efficiently manage student information, reducing paperwork and improving data accessibility.",
    features: [
      "Student profile management",
      "Enrollment and academic records",
      "Class scheduling and subject management",
      "Search and filtering",
      "Role-based access control",
    ],
    imageFolder: "SIS",
    videoUrl: "https://www.youtube.com/embed/g-8HQludxoA?si=abkY7VS8eDcfq9Yx",
    sourceUrl: "https://github.com/John-Zelade/sis",
    featured: true,
  },

  {
    id: "student-registration-admission",
    title: "Student Registration & Admission Management System",
    summary:
      "A web application that digitizes the student admission and registration process.",
    description:
      "A capstone project designed to simplify the admission and registration workflow by allowing students to submit applications online while enabling administrators to review, validate, and manage records efficiently.",
    category: "Web",
    tech: ["React", "Laravel", "MySQL"],
    problem:
      "Traditional admission processes rely on paper forms and manual verification, making the process slow and difficult to manage.",
    solution:
      "Built a digital admission system that streamlines application submission, document management, and applicant tracking in a single platform.",
    features: [
      "Online student registration",
      "Application status tracking",
      "Document management",
      "Admin dashboard and reporting",
    ],
    imageFolder: "SRAM",
    documentationUrl:
      "/documents/student-registration-and-admission-management.pdf",
    sourceUrl:
      "https://github.com/John-Zelade/student-registration-and-admission-management",
    featured: true,
  },

  {
    id: "diagram-editor",
    title: "Interactive Diagram Editor",
    summary:
      "A drag-and-drop diagram editor for creating and managing interactive floor plans and system layouts.",
    description:
      "Developed an interactive diagram editor using React Konva that allows users to build and edit layouts through drag-and-drop interactions. The application supports zooming, panning, object manipulation, and real-time updates, providing an intuitive interface for managing complex diagrams.",
    category: "Web",
    tech: ["React", "TypeScript", "Konva", "Tailwind CSS", "TanStack"],
    problem:
      "Managing complex diagrams with static images made it difficult for users to update layouts and interact with individual components.",
    solution:
      "Built a canvas-based editor where users can drag, resize, and organize elements on an interactive canvas, making layout management faster and more intuitive.",
    features: [
      "Drag-and-drop canvas editor",
      "Zoom and pan controls",
      "Object selection and manipulation",
      "Interactive floor plan visualization",
      "Responsive canvas rendering",
    ],
    imageFolder: "IDE",
    liveUrl: "https://interactive-diagram-editor.vercel.app/",
    thumbnail: diagramEditorThumbnail,
    sourceUrl: "https://github.com/John-Zelade/interactive-diagram-editor",
    featured: true,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
