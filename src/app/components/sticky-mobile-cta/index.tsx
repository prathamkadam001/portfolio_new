"use client"

import Link from "next/link"
import { MessageCircle, PhoneCall } from "lucide-react"
import { siteConfig, whatsappContactUrl } from "@/lib/site"

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-900/10 bg-white/95 p-3 shadow-2xl shadow-slate-950/15 backdrop-blur md:hidden dark:border-white/10 dark:bg-[#07111f]/95">
      <div className="grid grid-cols-2 gap-2">
        <Link
          href={siteConfig.businessWebsitePath}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-3 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
        >
          <MessageCircle className="size-4" />
          Start website
        </Link>
        <Link
          href={whatsappContactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-900/15 px-3 py-2 text-sm font-semibold text-slate-950 dark:border-white/15 dark:text-white"
        >
          <PhoneCall className="size-4" />
          WhatsApp
        </Link>
      </div>
    </div>
  )
}
