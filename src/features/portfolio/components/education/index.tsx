import { GraduationCapIcon } from "lucide-react"

import { Tag } from "@/components/ui/tag"
import {
  Collapsible,
  CollapsibleChevronsUpDownIcon,
} from "@/components/base/collapsible-animated"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { EDUCATION } from "@/features/portfolio/data/education"

const SECTION_REGEX = />_ (\w+(?: \w+)?): (.+)/g

type Section = { label: string; content: string }

function parseSections(description: string): Section[] {
  const sections: Section[] = []
  let match: RegExpExecArray | null
  while ((match = SECTION_REGEX.exec(description)) !== null) {
    sections.push({ label: match[1]!, content: match[2]!.trim() })
  }
  return sections
}

function EducationDescription({ description }: { description: string }) {
  const sections = parseSections(description)

  if (sections.length === 0) {
    return <p className="text-sm text-muted-foreground">{description}</p>
  }

  return (
    <div className="space-y-2">
      {sections.map((section) => (
        <div key={section.label} className="text-sm leading-relaxed">
          <span className="mr-1.5 font-semibold text-foreground">
            {section.label}:
          </span>
          <span className="text-muted-foreground">{section.content}</span>
        </div>
      ))}
    </div>
  )
}

const ID = "education"

export function Education() {
  const education = EDUCATION

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Education</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <Collapsible>
        <div className="flex items-center hover:bg-accent-muted">
          <div className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4">
            <GraduationCapIcon />
          </div>

          <div className="flex-1 border-l border-dashed border-line">
            <CollapsibleTrigger className="flex w-full items-center gap-2 p-4 pr-2 text-left">
              <div className="flex-1">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                  {education.degree}
                </h3>

                <dl className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                  <div>
                    <dt className="sr-only">Institution</dt>
                    <dd>{education.institution}</dd>
                  </div>

                  <span className="text-muted-foreground/40" aria-hidden>
                    /
                  </span>

                  <div>
                    <dt className="sr-only">Period</dt>
                    <dd>
                      {education.period.start} — {education.period.end}
                    </dd>
                  </div>

                  <span className="text-muted-foreground/40" aria-hidden>
                    /
                  </span>

                  <div>
                    <dt className="sr-only">GPA</dt>
                    <dd>IPK {education.gpa}</dd>
                  </div>
                </dl>
              </div>

              <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
                <CollapsibleChevronsUpDownIcon duration={0.15} />
              </div>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent className="overflow-hidden">
          {education.description && (
            <div className="border-t border-line p-4">
              <EducationDescription description={education.description} />
            </div>
          )}

          {Array.isArray(education.skills) && education.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5 border-t border-line px-4 py-3">
              {education.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </CollapsibleContent>
      </Collapsible>
    </Panel>
  )
}
