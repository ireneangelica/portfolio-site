// components/SocialIcon.tsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

export function SocialIcon({
  href,
  icon,
  ariaLabel,
  className = "",
}: {
  href: string
  icon: ReactNode
  ariaLabel: string
  className?: string
}) {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className={`rounded-full w-10 h-10 transition-colors ${className}`}
      aria-label={ariaLabel}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </Link>
    </Button>
  )
}

