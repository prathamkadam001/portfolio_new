import Link from "next/link"
import { ArrowUpRight, CheckCircle2, MapPin, MessageCircle } from "lucide-react"
import { heroHighlights, siteConfig, trustMetrics } from "@/lib/site"
import LazyPortfolioScene from "./LazyPortfolioScene"

function HeroSection() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-[#f7fbff] pt-[8rem] text-slate-950 dark:bg-[#06101f] dark:text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(20,184,166,0.22),transparent_28%),radial-gradient(circle_at_78%_8%,rgba(247,178,103,0.2),transparent_25%),linear-gradient(135deg,#f8fafc_0%,#eef9ff_48%,#fff7ed_100%)] dark:bg-[radial-gradient(circle_at_18%_20%,rgba(20,184,166,0.18),transparent_30%),radial-gradient(circle_at_78%_12%,rgba(247,178,103,0.16),transparent_28%),linear-gradient(135deg,#06101f_0%,#081a2e_52%,#142014_100%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[58%] opacity-80 lg:block">
        <LazyPortfolioScene />
      </div>

      <div className="container relative z-10 grid min-h-[calc(92vh-8rem)] items-center gap-10 pb-16 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-900/10 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
            <MapPin className="size-4 text-teal-600 dark:text-teal-300" />
            {siteConfig.location} - Remote projects accepted
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-none tracking-normal text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
            Pratham Kadam builds websites that rank, load fast, and win
            clients.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            I build SEO-friendly business websites, custom web apps, and
            e-commerce experiences with Next.js, React, Node.js, MongoDB, and a
            conversion-first structure.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              <MessageCircle className="size-5" />
              Book a project call
            </Link>
            <Link
              href="/my-work"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-900/15 bg-white/70 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-900/35 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-white/35"
            >
              See client work
              <ArrowUpRight className="size-5" />
            </Link>
          </div>

          <ul className="mt-8 grid gap-3 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
            {heroHighlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-teal-600 dark:text-teal-300" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-[560px]">
          <div className="absolute inset-x-8 top-6 h-40 rounded-full bg-teal-300/20 blur-3xl lg:hidden" />
          <div className="absolute bottom-0 left-0 right-0 grid gap-3 sm:grid-cols-3 lg:left-auto lg:w-[88%]">
            {trustMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/40"
              >
                <p className="text-3xl font-semibold text-slate-950 dark:text-white">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
