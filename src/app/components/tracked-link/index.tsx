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
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  const hrefValue =
    typeof href === "string"
      ? href
      : href.pathname
        ? href.pathname.toString()
        : ""

  const isOutboundLink = (value: string) => {
    if (!value || value.startsWith("/") || value.startsWith("#")) {
      return false
    }

    if (value.startsWith("mailto:") || value.startsWith("tel:")) {
      return false
    }

    try {
      return new URL(value, window.location.href).origin !== window.location.origin
    } catch {
      return false
    }
  }

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName, {
      destination: hrefValue,
      current_path: window.location.pathname,
      outbound: isOutboundLink(hrefValue),
      ...eventParams,
    })
    onClick?.(event)
  }

  return (
    <Link {...props} href={href} onClick={handleClick}>
      {children}
    </Link>
  )
}
