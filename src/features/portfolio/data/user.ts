import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Gybran Nauval",
  lastName: "Yuhandika",
  displayName: "Gybran Nauval Yuhandika",
  username: "gybrannauval",
  gender: "male",
  pronouns: "he/him",
  bio: "Software Engineer specializing in full-stack web & mobile development with Next.js, React, Flutter, and NestJS.",
  flipSentences: [
    "Software Engineer",
    "Full-Stack Developer",
    "Mobile & Web Builder",
  ],
  address: "Padang, West Sumatra, Indonesia",
  phoneNumberB64: "KzYyODEzNzE4NjEzMDk=", // E.164 format, base64 encoded
  emailB64: "bmF1dmFsZ3licmFuQGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://gybrannauval.site",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Engineer",
      company: "Halcom",
      website: "https://halcom.com",
      experienceId: "halcom",
    },
  ],
  about: `
- Gybran Nauval Yuhandika — Software Engineer based in Padang, Indonesia. Specializing in high-performance interfaces and bringing AI into modern product workflows.
- Operating across the full product lifecycle (UI/UX, Mobile, Web, and Backend infrastructure), with a track record of shipping 7+ production platforms.
- Agnostic but highly specialized. Orchestrating scalable ecosystems using Next.js, React, Flutter, and NestJS, backed by robust Docker, PostgreSQL, and Prisma environments.
- I design and build digital products that connect great user experiences with reliable engineering.
`,
  avatar: "/images/light.webp",
  avatarVariants: {
    lightOff: "/images/light.webp",
    lightOn: "/images/light.webp",
    darkOff: "/images/dark.webp",
    darkOn: "/images/dark.webp",
  },
  ogImage: "/images/foto.jpg",
  namePronunciationUrl: "",
  timeZone: "Asia/Jakarta",
  keywords: [
    "gybran nauval yuhandika",
    "gybrannauval",
    "gybran nauval",
    "gybran yuhandika",
    "razor322",
    "software engineer",
    "full-stack developer",
    "web developer",
    "mobile developer",
    "flutter developer",
    "next.js developer",
    "react developer",
    "portfolio",
    "padang developer",
    "indonesia developer",
  ],
  dateCreated: "2024-01-01", // YYYY-MM-DD
}
