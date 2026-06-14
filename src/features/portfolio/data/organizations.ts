import type { Experience } from "../types/experiences"

export const ORGANIZATIONS: Experience[] = [
  {
    id: "cybertech-president",
    companyName:
      "Cybertech — Student Activity Unit (Technology & Programming Organization)",
    positions: [
      {
        id: "1",
        title: "President",
        employmentPeriod: {
          start: "02.2023",
          end: "01.2024",
        },
        description: `- Leading over 50 active members and coordinating activities across multimedia, networking, and programming divisions.
- Achieved 2 campus-level awards during presidency through innovation, collaboration, and organizational development initiatives.`,
        skills: ["Leadership", "Organization", "Team Management"],
      },
    ],
  },
  {
    id: "cybertech-staff",
    companyName:
      "Cybertech — Student Activity Unit (Technology & Programming Organization)",
    positions: [
      {
        id: "1",
        title: "Information & Communication Staff",
        employmentPeriod: {
          start: "01.2022",
          end: "02.2023",
        },
        description: `- Managed meeting announcements and created engaging social media content, improving member engagement by 25%.
- Built strong cross-departmental networks and fostered collaboration to support knowledge exchange and student development.`,
        skills: [
          "Communication",
          "Social Media",
          "Content Creation",
          "Networking",
        ],
      },
    ],
  },
]
