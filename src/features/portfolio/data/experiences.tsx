import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  GraduationCapIcon,
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
          start: "2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Building production interfaces and bringing AI into modern product workflows.
- Ship full-stack features from database design to pixel-perfect frontends with Shadcn UI, Aceternity, and Framer Motion.
- Build concepts like Zenith, exploring premium branding and scalable architecture inspired by Linear, Stripe, Arc, and Notion.`,
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
        description: `- Shipped mobile products with cross-functional teams, enforcing code review discipline and production-ready delivery standards.
- Translated product requirements into Flutter implementations alongside designers and product managers, reducing feature-to-prototype cycle time.
- Enforced code review practices that reduced post-release bug reports and improved team code quality.
- Launched a production mobile app (Raisehand) now used for daily employee attendance across the organization.`,
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
        description: `- Built reservation and booking systems with Laravel, handling full-stack delivery from database design to production deployment over 10 months.
- Developed a meeting room reservation system from scratch — database schema, REST API, authentication, and responsive UI — used daily by internal teams.
- Executed full development lifecycle across design, implementation, and testing using Laravel MVC architecture and MySQL.
- Delivered API integrations and booking features through cross-team collaboration, shipping production code over a 10-month engagement.`,
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
  {
    id: "education",
    companyName: "Education",
    companyIcon: <GraduationCapIcon strokeWidth={1.8} />,
    positions: [
      {
        id: "1",
        title: "Politeknik Negeri Padang",
        employmentPeriod: {
          start: "2022",
          end: "2026",
        },
        icon: <GraduationCapIcon />,
        description: `- D-IV in Software Engineering.
- Chose building real systems over theory, racing peers to learn tech before it hit the syllabus.
- Ship fast, learn faster — because the real craft is the whole product, not just the code.`,
        skills: [
          "Software Engineering",
          "Flutter",
          "Next.js",
          "React",
          "TypeScript",
          "Laravel",
          "PHP",
          "MySQL",
          "Firebase",
          "Docker",
          "PostgreSQL",
        ],
      },
    ],
  },
]
