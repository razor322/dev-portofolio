import { GraduationCapIcon } from "lucide-react"

import type { Education } from "../types/education"

export const EDUCATION: Education = {
  id: "education",
  institution: "Politeknik Negeri Padang",
  degree: "Bachelor of Technology - BTech, Teknologi Informasi",
  gpa: "3.83",
  period: {
    start: "08.2021",
    end: "09.2025",
  },
  description:
    '>_ Background: Actively participated in technology-related organizations and competitions. Served as President of Cybertech Student Organization, and competed in national and international events including KMIPN V, SAFE-Network & Maejo University Product Innovation Competition (Thailand), and Mobile App Competition 6.0 (Malaysia). Pursued various online certifications to enhance technical and leadership skills.\n\n' +
    '>_ Final Project: Built Emonesia — an emotion detection system in social media texts using a fine-tuned IndoBERT NLP model. Integrated the model with a Flutter frontend via REST API to process live data streams from X (Twitter).\n\n' +
    '>_ Impact: Transformed massive volumes of unstructured public discourse into structured, categorizable emotional insights with exportable CSV reports. The project bridged academic NLP research with a production-ready mobile application.',
  skills: [
    "Flutter",
    "Dart",
    "Firebase",
    "GetX",
    "REST API",
    "IndoBERT",
    "NLP",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "Docker",
  ],
}
