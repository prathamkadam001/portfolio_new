import Link from "next/link"
import { ArrowUpRight, Gauge, Search, ShieldCheck } from "lucide-react"
import { serviceCards, siteConfig, trustMetrics } from "@/lib/site"

const resultPillars = [
  {
    title: "Search structure",
    description:
      "Clean headings, metadata, schema, sitemap, internal links, and keyword-focused service pages.",
    icon: Search,
  },
  {
    title: "Speed and UX",
    description:
      "Responsive layouts, lighter content delivery, clear calls to action, and performance-aware implementation.",
    icon: Gauge,
  },
  {
    title: "Business trust",
    description:
      "Project proof, direct contact details, service clarity, and copy that explains what a client gets.",
    icon: ShieldCheck,
  },
]

function WebResult() {
  return (
    <section id="aboutus" className="bg-white py-20 dark:bg-[#07111f]">
      <div className="container">
        <div className="reveal-on-scroll grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
              Built for enquiries
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
              SEO is not magic. It is clarity, speed, trust, and consistent
              pages.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              {siteConfig.name} helps businesses turn their website into a
              stronger sales asset: easier to understand, easier to index, and
              easier for customers to contact through forms, email, and
              WhatsApp.
            </p>
            <Link
              href={siteConfig.businessWebsitePath}
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Start a business website
              <ArrowUpRight className="size-5" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {trustMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-slate-900/10 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-4xl font-semibold text-slate-950 dark:text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {resultPillars.map((pillar) => (
            <article
              key={pillar.title}
              className="reveal-child rounded-lg border border-slate-900/10 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <pillar.icon className="size-7 text-teal-700 dark:text-teal-300" />
              <h3 className="mt-5 text-2xl font-semibold text-slate-950 dark:text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {serviceCards.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="reveal-child group rounded-lg border border-slate-900/10 bg-white p-5 transition hover:-translate-y-1 hover:border-slate-900/25 dark:border-white/10 dark:bg-[#0a1728] dark:hover:border-white/25"
            >
              <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                {service.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {service.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white">
                View service
                <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WebResult
