import { MessageCircleIcon } from "lucide-react"

import { LICENSE, SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { getSocialLinkByName } from "@/features/portfolio/data/social-links-v2"
import { USER } from "@/features/portfolio/data/user"

export function SiteFooter() {
  const githubLink = getSocialLinkByName("github")
  const linkedinLink = getSocialLinkByName("linkedin")
  const whatsappLink = getSocialLinkByName("whatsapp")

  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="screen-line-top mx-auto border-x border-line group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <div className="screen-line-bottom h-1" />

        <dl className="flex flex-col gap-4 py-8 font-mono [&_dd]:text-sm [&_dt]:text-right [&_dt]:text-sm [&_dt]:text-muted-foreground [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
          <Item>
            <dt>Crafted by</dt>
            <dd>
              <a
                className="link-underline"
                href={USER.website}
                target="_blank"
                rel="noopener"
              >
                {USER.displayName}
              </a>
            </dd>
          </Item>

          <Item>
            <dt>Source code</dt>
            <dd>
              <a
                className="link-underline"
                href={SOURCE_CODE_GITHUB_URL}
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
            </dd>
          </Item>

          <Item>
            <dt>License</dt>
            <dd>
              <a
                className="link-underline"
                href={LICENSE.url}
                target="_blank"
                rel="noopener"
              >
                {LICENSE.name}
              </a>
            </dd>
          </Item>

          <Item>
            <dt>Deployed on</dt>
            <dd>Vercel</dd>
          </Item>
        </dl>

        <div className="screen-line-top screen-line-bottom flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-line bg-background px-4">
            {githubLink?.href && (
              <>
                <a
                  className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
                  href={githubLink.href}
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub Profile"
                >
                  <Icons.github className="size-4" />
                </a>

                <Separator />
              </>
            )}

            {linkedinLink?.href && (
              <>
                <a
                  className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
                  href={linkedinLink.href}
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn Profile"
                >
                  <Icons.linkedin className="size-4" />
                </a>

                <Separator />
              </>
            )}

            {whatsappLink?.href && (
              <a
                className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
                href={whatsappLink.href}
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
              >
                <MessageCircleIcon className="size-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      <SiteFooterInteractiveLogotype />

      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-24" />
      </div>
    </footer>
  )
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-line", className)} {...props} />
}

function Item({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("grid grid-cols-2 gap-4", className)} {...props} />
}
