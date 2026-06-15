export type Education = {
  id: string
  institution: string
  degree: string
  gpa: string
  period: {
    start: string
    end: string
  }
  description?: string
  skills?: string[]
}
