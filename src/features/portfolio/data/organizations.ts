import type { Experience } from "../types/experiences"

export const ORGANIZATIONS: Experience[] = [
  {
    id: "cybertech-president",
    companyName: "Cybertech (Technology & Programming Organization)",
    positions: [
      {
        id: "1",
        title: "President",
        employmentPeriod: {
          start: "02.2023",
          end: "01.2024",
        },
        description: `
>_ Focus: Orchestrated a multi-disciplinary technology collective, directing 50+ members across software development, network infrastructure, and multimedia divisions.
>_ Impact: Cultivated a culture of high-performance engineering and cross-functional collaboration. Spearheaded technical initiatives that secured 2 institutional-level innovation awards, establishing the collective as a premier technical hub.`,
        skills: [
          "Technical Leadership",
          "Cross-functional Team Management",
          "Strategic Planning",
          "Public Speaking",
        ],
      },
    ],
  },
  {
    id: "cybertech-staff",
    companyName: "Cybertech (Technology & Programming Organization)",
    positions: [
      {
        id: "1",
        title: "Information & Communication Staff",
        employmentPeriod: {
          start: "01.2022",
          end: "02.2023",
        },
        description: `
>_ Focus: Managed internal technical dispatch and external organizational branding, acting as the primary liaison for cross-departmental collaboration.
>_ Impact: Revamped digital outreach strategies, yielding a 25% increase in community engagement. Fostered a robust knowledge-sharing ecosystem that accelerated peer-to-peer technical development.`,
        skills: [
          "Developer Relations",
          "Technical Communication",
          "Community Building",
          "Digital Outreach",
        ],
      },
    ],
  },
]
