import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { LANGUAGES } from "@/features/portfolio/data/languages"

const ID = "languages"

export function Languages() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Languages</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="screen-line-bottom py-4">
        <ul className="flex flex-wrap gap-2">
          {LANGUAGES.map((lang) => (
            <li
              key={lang.name}
              className="flex items-center gap-1.5 rounded-lg border border-muted-foreground/15 bg-muted px-3 py-1.5 text-sm"
            >
              <span className="font-medium">{lang.name}</span>
              <span className="text-muted-foreground">
                &middot; {lang.level}
              </span>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  )
}
