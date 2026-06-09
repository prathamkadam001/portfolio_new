"use client"

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react"
import Link, { type LinkProps } from "next/link"
import {
  type AnalyticsEventName,
  type AnalyticsParams,
  trackEvent,
} from "@/lib/analytics"

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode
    eventName: AnalyticsEventName
    eventParams?: AnalyticsParams
  }

export default function TrackedLink({
  children,
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName, eventParams)
    onClick?.(event)
  }

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  )
}
