import { format } from "date-fns"
import { Crown, Paperclip } from "lucide-react"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import {
  Collapsible,
  CollapsibleChevronsUpDownIcon,
} from "@/components/base/collapsible-animated"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import type { Award } from "@/features/portfolio/types/awards"

const SECTION_REGEX = /> \*\*(.+?):\*\* (.+)/g

type Section = { label: string; content: string }

function parseSections(description: string): Section[] {
  const sections: Section[] = []
  let match: RegExpExecArray | null
  while ((match = SECTION_REGEX.exec(description)) !== null) {
    sections.push({ label: match[1]!, content: match[2]!.trim() })
  }
  return sections
}

function AwardDescription({ description }: { description: string }) {
  const sections = parseSections(description)

  if (sections.length === 0) {
    return <p className="text-sm text-muted-foreground">{description}</p>
  }

  return (
    <div className="space-y-3">
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

export function AwardItem({
  className,
  award,
}: {
  className?: string
  award: Award
}) {
  const canExpand = !!award.description

  return (
    <Collapsible className={className} disabled={!canExpand}>
      <div className="flex items-center hover:bg-accent-muted">
        <div
          className={cn(
            "mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background",
            "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4"
          )}
        >
          {award.icon ?? <Crown />}
        </div>

        <div className="flex-1 border-l border-dashed border-line">
          <CollapsibleTrigger className="flex w-full items-center gap-2 p-4 pr-2 text-left">
            <div className="flex-1">
              <h3 className="mb-1 leading-snug font-medium text-balance">
                {award.title}
              </h3>

              <dl className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                <div>
                  <dt className="sr-only">Prize</dt>
                  <dd>{award.prize}</dd>
                </div>

                <Separator
                  className="data-vertical:h-4 data-vertical:self-center"
                  orientation="vertical"
                  aria-hidden
                />

                <div>
                  <dt className="sr-only">Awarded in</dt>
                  <dd>
                    <time dateTime={new Date(award.date).toISOString()}>
                      {format(new Date(award.date), "MM.yyyy")}
                    </time>
                  </dd>
                </div>

                <Separator
                  className="data-vertical:h-4 data-vertical:self-center"
                  orientation="vertical"
                  aria-hidden
                />

                <div>
                  <dt className="sr-only">Received in Grade</dt>
                  <dd>{award.grade}</dd>
                </div>
              </dl>
            </div>

            {award.referenceLink && (
              <Tooltip>
                <TooltipTrigger
                  render={
                    <a
                      className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4"
                      href={award.referenceLink}
                      target="_blank"
                      rel="noopener"
                      aria-label="Open Reference Attachment"
                    >
                      <Paperclip />
                    </a>
                  }
                />
                <TooltipContent>
                  <p>Open Reference Attachment</p>
                </TooltipContent>
              </Tooltip>
            )}

            {canExpand && (
              <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
                <CollapsibleChevronsUpDownIcon duration={0.15} />
              </div>
            )}
          </CollapsibleTrigger>
        </div>
      </div>

      {canExpand && (
        <CollapsibleContent className="overflow-hidden">
          <div className="border-t border-line p-4">
            <AwardDescription description={award.description!} />
          </div>
        </CollapsibleContent>
      )}
    </Collapsible>
  )
}
