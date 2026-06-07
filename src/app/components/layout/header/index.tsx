"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, MessageCircle, X } from "lucide-react"
import HeaderLink from "./Navigation/HeaderLink"
import { headerData } from "./Navigation/Menudata"
import MobileHeader from "./Navigation/MobileHeader"
import ThemeToggler from "./ThemeToggle"
import { siteConfig } from "@/lib/site"

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 48)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="container py-3">
        <nav
          aria-label="Primary navigation"
          className={`flex items-center justify-between rounded-lg border px-4 py-3 backdrop-blur-xl transition ${
            sticky
              ? "border-slate-900/10 bg-white/90 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-[#07111f]/90"
              : "border-white/50 bg-white/65 dark:border-white/10 dark:bg-[#07111f]/55"
          }`}
        >
          <Link
            href="/"
            aria-label="Pratham Kadam home"
            className="flex items-center gap-3"
          >
            <span className="grid size-10 place-items-center rounded-lg bg-slate-950 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
              PK
            </span>
            <span className="hidden text-base font-semibold text-slate-950 dark:text-white sm:block">
              Pratham Kadam
            </span>
          </Link>

          <div className="hidden lg:block">
            <ul className="flex items-center gap-1 rounded-lg bg-slate-900/5 p-1 dark:bg-white/5">
              {headerData.map((item) => (
                <HeaderLink key={item.href} item={item} />
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggler />
            <Link
              href={siteConfig.businessWebsitePath}
              className="hidden min-h-10 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 md:inline-flex"
            >
              <MessageCircle className="size-4" />
              Start website
            </Link>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-lg border border-slate-900/10 text-slate-950 dark:border-white/10 dark:text-white lg:hidden"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </div>

      {sidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-950/60"
          aria-label="Close mobile menu backdrop"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-sm border-l border-slate-900/10 bg-white p-5 shadow-2xl transition-transform duration-300 dark:border-white/10 dark:bg-[#07111f] lg:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!sidebarOpen}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold text-slate-950 dark:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            Pratham Kadam
          </Link>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close mobile menu"
            className="grid size-10 place-items-center rounded-lg border border-slate-900/10 dark:border-white/10"
          >
            <X className="size-5" />
          </button>
        </div>
        <nav className="mt-8" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-2">
            {headerData.map((item) => (
              <MobileHeader
                key={item.href}
                item={item}
                onNavigate={() => setSidebarOpen(false)}
              />
            ))}
          </ul>
        </nav>
        <Link
          href={siteConfig.businessWebsitePath}
          onClick={() => setSidebarOpen(false)}
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white dark:bg-white dark:text-slate-950"
        >
          <MessageCircle className="size-5" />
          Start a business website
        </Link>
      </aside>
    </header>
  )
}

export default Header
