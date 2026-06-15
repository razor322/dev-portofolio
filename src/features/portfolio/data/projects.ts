import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "dzikra",
    title: "Dzikra",
    period: {
      start: "09.2024",
      end: "12.2024",
    },
    link: "https://play.google.com/store/apps/details?id=id.bigio.dzikra&hl=en",
    skills: ["Flutter", "Dart", "Firebase", "GetX"],
    description: `>_ Focus: Consumer Habit-Tracking App (Production)
>_ Architecture: Engineered a high-performance Flutter mobile client integrated with GetX state management and Firebase real-time sync.
>_ Impact: Successfully deployed to Google Play Store. Established sticky, notification-driven habit loops with a frictionless UX tailored for high-mobility daily active users.`,
    isExpanded: true,
  },
  {
    id: "raisehand",
    title: "Raisehand",
    period: {
      start: "08.2024",
      end: "12.2024",
    },
    link: "https://play.google.com/store/apps/details?id=id.inovasi360.attendapp&hl=en",
    skills: ["Flutter", "Dart", "Firebase", "GetX"],
    description: `>_ Focus: Enterprise HR & Attendance System (Production)
>_ Architecture: Designed a secure, location-aware Flutter application utilizing GPS-based verification and automated push-notification pipelines.
>_ Impact: Digitized core HR operations for Inovasi360 & Bigio, transforming manual leave requests and attendance tracking into an automated, zero-friction mobile workflow.`,
  },
  {
    id: "eztix-id",
    title: "Eztix.id",
    period: {
      start: "03.2025",
      end: "07.2025",
    },
    link: "https://eztix.id/",
    skills: [
      "Next.js",
      "Firebase",
      "Tailwind",
      "TypeScript",
      "Node.js",
      "REST API",
    ],
    description: `>_ Focus: Full-Stack Event Ticketing Platform
>_ Architecture: Architected a scalable Next.js and TypeScript frontend seamlessly integrated with a Node.js REST API and Firebase Authentication.
>_ Impact: Consolidated consumer-facing ticket reservations and backend administrative operations into a single, high-performance web ecosystem.`,
  },
  {
    id: "room-space-booking",
    title: "Room and Space Booking",
    period: {
      start: "09.2023",
      end: "06.2024",
    },
    link: "#",
    skills: ["Laravel", "PHP", "MySQL", "Tailwind"],
    description: `>_ Focus: Corporate Resource Allocation System
>_ Architecture: Built a robust monolithic application using Laravel and MySQL, styled with Tailwind CSS for rapid and responsive UI development.
>_ Impact: Streamlined internal space reservations by replacing fragmented booking methods with a centralized, role-based availability tracking platform.`,
  },
  {
    id: "emonesia",
    title: "Emonesia",
    period: {
      start: "2024",
    },
    link: "https://github.com/razor322/emonesia",
    skills: ["Flutter", "Dart", "Firebase", "GetX", "REST API"],
    description: `>_ Focus: AI-Powered Social Sentiment Analytics
>_ Architecture: Integrated a fine-tuned IndoBERT NLP model with a Flutter frontend via REST API to process live data streams from X (Twitter).
>_ Impact: Transformed massive volumes of unstructured public discourse into structured, categorizable emotional insights and exportable CSV reports for data-driven decision making.`,
  },
  {
    id: "trolley-petani",
    title: "Trolley Petani",
    period: {
      start: "2024",
    },
    link: "https://github.com/razor322/trolley-v2",
    skills: ["Flutter", "Dart"],
    description: `>_ Focus: D2C Agri-Tech Mobile Platform
>_ Architecture: Engineered a scalable Flutter application designed to bypass traditional, fragmented agricultural supply chains.
>_ Impact: Awarded 'Rising Star' at UNIMAS (Malaysia) for establishing a direct-to-consumer ecosystem that maximizes farmer profit margins and ensures transparent product tracking.`,
  },
  {
    id: "sea-catering",
    title: "SEA Catering Management",
    period: {
      start: "2024",
    },
    link: "https://github.com/razor322/sea-catering",
    skills: ["Next.js", "shadcn/ui", "TypeScript", "Node.js", "Express"],
    description: `>_ Focus: B2B Operations Prototype (SEA Academy Project)
>_ Architecture: Developed a modular Next.js frontend with shadcn/ui and TypeScript, orchestrated with a Node.js/Express backend for robust relational data handling.
>_ Impact: Architected an end-to-end catering management prototype for COMPFEST 17. Successfully demonstrated the capability to centralize complex order states, inventory logic, and CRM workflows into a unified command center.`,
  },
]
