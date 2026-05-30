"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const PortfolioScene = dynamic(() => import("./PortfolioScene"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.26),transparent_34%)]"
    />
  ),
})

function LazyPortfolioScene() {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const canRenderScene =
      window.matchMedia("(min-width: 1024px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!canRenderScene) return

    const renderScene = () => setShouldRender(true)
    const idleWindow = window as Window &
      typeof globalThis & {
        requestIdleCallback?: (
          callback: IdleRequestCallback,
          options?: IdleRequestOptions,
        ) => number
        cancelIdleCallback?: (handle: number) => void
      }

    if (idleWindow.requestIdleCallback) {
      const idleId = idleWindow.requestIdleCallback(renderScene, {
        timeout: 3500,
      })
      return () => idleWindow.cancelIdleCallback?.(idleId)
    }

    const timeoutId = window.setTimeout(renderScene, 2500)
    return () => window.clearTimeout(timeoutId)
  }, [])

  return (
    <div className="absolute inset-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.26),transparent_34%)]"
      />
      {shouldRender ? <PortfolioScene /> : null}
    </div>
  )
}

export default LazyPortfolioScene
