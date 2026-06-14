import { ArrowUpRightIcon, MailIcon, MessageCircleIcon } from "lucide-react"

import { Icons } from "@/components/icons"
import type { SocialLink } from "@/features/portfolio/types/social-links-v2"

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "github",
    icon: <Icons.github />,
    title: "GitHub",
    handle: "razor322",
    href: "https://github.com/razor322",
  },
  {
    name: "linkedin",
    icon: <Icons.linkedin />,
    title: "LinkedIn",
    handle: "gybrannauval1309",
    href: "https://www.linkedin.com/in/gybrannauval1309/",
  },
  {
    name: "email",
    icon: <MailIcon />,
    title: "Email",
    handle: "nauvalgybran@gmail.com",
    href: "mailto:nauvalgybran@gmail.com",
  },
  {
    name: "whatsapp",
    icon: <MessageCircleIcon />,
    title: "WhatsApp",
    handle: "+62 813-7186-1309",
    href: "https://wa.me/6281371861309",
  },
  {
    name: "portfolio",
    icon: <ArrowUpRightIcon />,
    title: "Portfolio Deck",
    handle: "External presentation",
    href: "https://bit.ly/portofolio_gybran",
  },
]

export function getSocialLinkByName(name: string) {
  return SOCIAL_LINKS.find((link) => link.name === name)
}
