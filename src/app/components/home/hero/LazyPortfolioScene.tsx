"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const PortfolioScene = dynamic(() => import("./PortfolioScene"), {
  ssr: false,
  loading: () => null,
})

function StaticPortfolioModel() {
  return (
    <div
      aria-hidden="true"
      className="portfolio-model-fallback absolute inset-0 grid place-items-center overflow-hidden"
    >
      <div className="absolute h-[72%] w-[72%] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.22),transparent_60%)] blur-2xl" />
      <div className="relative aspect-square w-[min(78%,31rem)] [perspective:900px]">
        <div className="portfolio-model-core absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.92),rgba(139,233,255,0.76)_30%,rgba(20,184,166,0.34)_58%,rgba(15,23,42,0.08)_100%)] shadow-[0_28px_80px_rgba(20,184,166,0.26)] dark:bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.9),rgba(139,233,255,0.72)_28%,rgba(20,184,166,0.28)_56%,rgba(15,23,42,0.12)_100%)]" />
        <div className="portfolio-model-ring absolute left-[7%] top-[38%] h-[24%] w-[86%] rotate-[-15deg] rounded-[999px] border-[14px] border-teal-700/45 shadow-[0_0_30px_rgba(20,184,166,0.18)] dark:border-teal-200/45" />
        <div className="portfolio-model-ring portfolio-model-ring-delayed absolute left-[10%] top-[37%] h-[25%] w-[82%] rotate-[20deg] rounded-[999px] border-[10px] border-slate-500/35 dark:border-white/28" />
        <div className="portfolio-model-ring portfolio-model-ring-slow absolute left-[32%] top-[10%] h-[76%] w-[36%] rotate-[58deg] rounded-[999px] border-[11px] border-cyan-700/40 dark:border-cyan-200/42" />
        <span className="absolute left-[14%] top-[28%] size-2 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,0.75)]" />
        <span className="absolute right-[18%] top-[26%] size-3 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,0.75)]" />
        <span className="absolute bottom-[22%] left-[23%] size-2 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,0.75)]" />
      </div>
    </div>
  )
}

function LazyPortfolioScene() {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const canAutoRender =
      window.matchMedia("(min-width: 768px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!canAutoRender) return

    const timeoutId = window.setTimeout(() => setShouldRender(true), 900)
    return () => window.clearTimeout(timeoutId)
  }, [])

  const loadInteractiveScene = () => {
    if (
      shouldRender ||
      !window.matchMedia("(min-width: 768px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    setShouldRender(true)
  }

  return (
    <div
      className="absolute inset-0"
      onPointerEnter={loadInteractiveScene}
      onFocus={loadInteractiveScene}
    >
      {/* <StaticPortfolioModel />
      {shouldRender ? <PortfolioScene /> : null} */}
      {shouldRender ? <PortfolioScene /> : <StaticPortfolioModel />}
    </div>
  )
}

export default LazyPortfolioScene
