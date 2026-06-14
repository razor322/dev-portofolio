import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "dzikra",
    title: "Dzikra",
    period: {
      start: "2024",
    },
    link: "https://play.google.com/store/apps/details?id=id.bigio.dzikra&hl=en",
    skills: ["Flutter", "Dart", "Firebase", "GetX"],
    description: `Production mobile app on Google Play Store, built to help users maintain daily worship habits with gentle routine tracking and consistency-focused UX.
- Live on Play Store with Firebase backend, real-time sync, and notification-driven habit loops designed for high-mobility users.`,
    isExpanded: true,
  },
  {
    id: "raisehand",
    title: "Raisehand",
    period: {
      start: "2024",
    },
    link: "https://play.google.com/store/apps/details?id=id.inovasi360.attendapp&hl=en",
    skills: ["Flutter", "Dart", "Firebase", "GetX"],
    description: `Production employee attendance app for Inovasi360 and Bigio, featuring GPS-based check-in, push notifications, and automated leave request workflows.
- Deployed on Google Play Store, used daily by employees for location-verified attendance tracking and leave management.`,
  },
  {
    id: "eztix-id",
    title: "Eztix.id",
    period: {
      start: "2024",
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
    description: `Web booking platform for browsing events, reviewing ticket details, and reserving with Firebase-backed auth.
- Brings customer booking and admin management into one event operations product.`,
  },
  {
    id: "room-space-booking",
    title: "Room and Space Booking Website",
    period: {
      start: "2024",
    },
    link: "#",
    skills: ["Laravel", "PHP", "MySQL", "Tailwind"],
    description: `Booking system with authentication, user management, and CRUD workflows for room reservation operations.
- Built to help teams manage availability, booking flow, and administration in one place.`,
  },
  {
    id: "emonesia",
    title: "Emonesia",
    period: {
      start: "2024",
    },
    link: "https://github.com/razor322/emonesia",
    skills: ["Flutter", "Dart", "Firebase", "GetX", "REST API"],
    description: `Emotion detection app powered by IndoBERT NLP model, analyzing social media conversations from X (Twitter) by keyword and time range with structured reporting.
- Transforms unstructured public conversation data into categorized emotional insights with downloadable CSV reports.`,
  },
  {
    id: "trolley-petani",
    title: "Trolley Petani",
    period: {
      start: "2024",
    },
    link: "https://github.com/razor322/trolley-v2",
    skills: ["Flutter", "Dart"],
    description: `Lightweight e-commerce app connecting customers directly with produce from local farmers and ranchers, built with Flutter.
- Awarded Rising Star recognition at the UNIMAS international competition for its clear value proposition and agricultural impact potential.`,
  },
  {
    id: "sea-catering",
    title: "Catering Management System",
    period: {
      start: "2024",
    },
    link: "https://github.com/razor322/sea-catering",
    skills: ["Next.js", "shadcn/ui", "TypeScript", "Node.js", "Express"],
    description: `Management system for orders, inventory, and customer relationships in catering workflow.
- Combines service operations into one product surface for smoother day-to-day management.`,
  },
]
