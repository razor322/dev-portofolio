import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "halcom",
    companyName: "Halcom",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    positions: [
      {
        id: "1",
        title: "Software Engineer",
        employmentPeriod: {
          start: "2026",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `>_ Role: Full-Stack Product Engineer
>_ Architecture: Orchestrating high-performance, scalable web infrastructure utilizing Next.js App Router, TypeScript, and Prisma ORM backed by PostgreSQL and Dockerized environments.
>_ Impact: Pioneering AI-integrated workflows and premium UI/UX architectures (inspired by Stripe & Linear) utilizing Framer Motion and Shadcn. Enforcing strict CI/CD pipelines with Conventional Commits to maintain zero-regression deployments.`,
        skills: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Framer Motion",
          "PostgreSQL",
          "Prisma",
          "Docker",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "bigio",
    companyName: "PT. Bejana Investidata Globalindo (Bigio)",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    positions: [
      {
        id: "1",
        title: "Intern Mobile Engineer",
        employmentPeriod: {
          start: "08.2024",
          end: "12.2024",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `>_ Role: Mobile Engineering Intern
>_ Architecture: Engineered production-grade Flutter applications utilizing GetX state management and Firebase real-time synchronization.
>_ Impact: Spearheaded the deployment of 'Raisehand' (Enterprise HR App). Drastically reduced post-release bugs and accelerated feature-to-prototype cycles by institutionalizing rigorous Pull Request templates and strict code-review disciplines across cross-functional pods.`,
        skills: [
          "Flutter",
          "Dart",
          "Firebase",
          "REST API",
          "Git",
          "Code Review",
          "Teamwork",
        ],
      },
    ],
  },
  {
    id: "semen-padang",
    companyName: "PT. Kabau Sirah Semen Padang",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    positions: [
      {
        id: "1",
        title: "Intern Full Stack Developer",
        employmentPeriod: {
          start: "09.2023",
          end: "06.2024",
        },
        employmentType: "Internship",
        icon: <CodeXmlIcon />,
        description: `>_ Role: Full-Stack Engineering Intern
>_ Architecture: Architected an end-to-end monolithic internal platform using the Laravel MVC framework and relational MySQL databases.
>_ Impact: Digitized and centralized corporate asset allocation. Single-handedly managed the entire software development lifecycle (SDLC)—from database schema design to production deployment—delivering a robust meeting room reservation system utilized daily by internal divisions.`,
        skills: [
          "Laravel",
          "PHP",
          "MySQL",
          "HTML",
          "CSS",
          "JavaScript",
          "Full Stack",
          "MVC",
        ],
      },
    ],
  },
]
