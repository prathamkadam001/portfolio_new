import Link from "next/link"
import { ArrowUpRight, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site"

function Solutions() {
  return (
    <section className="bg-white py-20 dark:bg-[#07111f]">
      <div className="container">
        <div className="reveal-on-scroll relative overflow-hidden rounded-lg bg-slate-950 px-6 py-16 text-white md:px-12 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(20,184,166,0.36),transparent_28%),radial-gradient(circle_at_88%_10%,rgba(247,178,103,0.28),transparent_30%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-200">
                Ready for clients
              </p>
              <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                Want Google visibility and better enquiries? Let us make your
                website easier to find and easier to trust.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Send your project details to {siteConfig.name}. I will review
                the goal, page structure, tech stack, SEO basics, and the best
                next step.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200"
              >
                <MessageCircle className="size-5" />
                Start a project
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-white/20 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/45"
              >
                See services
                <ArrowUpRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
