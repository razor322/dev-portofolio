"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useMotionValueEvent, useScroll } from "motion/react"

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect()
  const scrollTop = document.documentElement.scrollTop
  const headerHeight = 56
  return scrollTop + rect.top + rect.height - headerHeight
}

function MarkMotion() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)
  const distanceRef = useRef(160)

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current)
  })

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark")
    if (!coverMark) return

    distanceRef.current = calcDistance(coverMark)

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark)
    })
    resizeObserver.observe(coverMark)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      data-visible={visible}
      className="group/mark-motion relative size-8 shrink-0"
    >
      <Image
        src="/images/icon-2.svg"
        alt="Logo"
        width={32}
        height={32}
        className="hidden -translate-y-1 opacity-0 transition-[opacity,translate] duration-300 group-data-[visible=true]/mark-motion:translate-y-0 group-data-[visible=true]/mark-motion:opacity-100 [html.light_&]:block"
      />
      <Image
        src="/images/icon.svg"
        alt="Logo"
        width={32}
        height={32}
        className="hidden -translate-y-1 opacity-0 transition-[opacity,translate] duration-300 group-data-[visible=true]/mark-motion:translate-y-0 group-data-[visible=true]/mark-motion:opacity-100 [html.dark_&]:block"
      />
    </div>
  )
}

export function SiteHeaderMark() {
  const pathname = usePathname()
  const isHome = ["/", "/index"].includes(pathname)
  return isHome ? (
    <MarkMotion />
  ) : (
    <div className="relative size-8 shrink-0">
      <Image
        src="/images/icon-2.svg"
        alt="Logo"
        width={32}
        height={32}
        className="hidden [html.light_&]:block"
      />
      <Image
        src="/images/icon.svg"
        alt="Logo"
        width={32}
        height={32}
        className="hidden [html.dark_&]:block"
      />
    </div>
  )
}
