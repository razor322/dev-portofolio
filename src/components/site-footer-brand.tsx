"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"

const VIEWBOX_WIDTH = 1410
const DEFAULT_GRADIENT_X = 705

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()

  const gradientX1Raw = useMotionValue(DEFAULT_GRADIENT_X)
  const gradientX1 = useSpring(gradientX1Raw, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const container = event.currentTarget
    const containerRect = container.getBoundingClientRect()
    const mouseX = event.clientX - containerRect.left
    const containerWidth = containerRect.width

    const normalizedX = (mouseX / containerWidth) * VIEWBOX_WIDTH
    const clampedX = Math.max(0, Math.min(VIEWBOX_WIDTH, normalizedX))

    gradientX1Raw.set(clampedX)
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    gradientX1Raw.set(DEFAULT_GRADIENT_X)
  }

  // Koordinat path khusus yang membentuk huruf "Gybran" dalam gaya piksel/balok
  const logotypePath =
    "M193 33V1H289V33H193ZM289 33H321V65H289V33ZM193 225H161V33H193V225ZM289 225V257H193V225H289ZM289 225V193H321V225H289ZM289 129H321V193H289V129ZM225 129H289V161H225V129ZM353 65H385V161H353V65ZM481 65H513V161H481V65ZM417 161H449V257H417V161ZM385 129H417V161H385V129ZM449 129H481V161H449V129ZM545 1H641V33H577V225H641V257H545V1ZM673 193V225H641V193H673ZM673 65H705V193H673V65ZM673 65V33H641V65H673ZM737 65H769V257H737V65ZM769 65H833V97H769V65ZM833 97H865V129H833V97ZM929 65H1057V257H1025V225H993V193H1025V97H929V65ZM929 225H897V97H929V225ZM929 225V257H993V225H929ZM1089 65H1217V97H1121V257H1089V65ZM1217 97H1249V257H1217V97Z"

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 1410 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Lapisan 1: Warna Isi (Fill) Berefek Hover Interaktif */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={logotypePath}
              fill="url(#paint0_linear_1145_73)"
            />

            {/* Lapisan 2: Garis Tepi (Stroke Outline) Tulisan */}
            <path
              className="stroke-foreground/10"
              d={logotypePath}
              strokeWidth="2"
            />

            <defs>
              <motion.linearGradient
                id="paint0_linear_1145_73"
                x1={gradientX1}
                y1="1"
                x2="705"
                y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
