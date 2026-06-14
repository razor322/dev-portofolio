import { ExperienceItem } from "@/features/portfolio/components/experiences/experience-item"
import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { ORGANIZATIONS } from "@/features/portfolio/data/organizations"

const ID = "organizations"

export function Organizations() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Organizational & Volunteer Experience</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {ORGANIZATIONS.map((item) => (
          <ExperienceItem key={item.id} experience={item} />
        ))}
      </div>
    </Panel>
  )
}
