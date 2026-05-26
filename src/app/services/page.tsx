import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MessageCircle } from "lucide-react"
import { serviceOfferings, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Full Stack Development Services",
  description:
    "Explore full stack development services by Pratham Kadam including business websites, custom web apps, e-commerce builds, redesigns, maintenance, and technical SEO improvements.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Full Stack Development Services | Pratham Kadam",
    description:
      "Business websites, web apps, e-commerce builds, redesigns, maintenance, and technical SEO support for growing brands.",
    url: "/services",
  },
  twitter: {
    title: "Full Stack Development Services | Pratham Kadam",
    description:
      "Business websites, web apps, e-commerce builds, redesigns, maintenance, and technical SEO support for growing brands.",
  },
}

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Full Stack Development Services",
  itemListElement: serviceOfferings.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `${siteConfig.url}/services/${service.slug}`,
    description: service.summary,
  })),
}

export default function ServicesPage() {
  return (
    <>
      <main className="bg-[#f7fbff] pt-36 pb-20 dark:bg-[#06101f]">
        <section className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
              Services
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
              Full stack development services for businesses that need better
              websites, better UX, and better search visibility.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              I help businesses build and improve websites, custom web apps,
              e-commerce experiences, and SEO foundations using Next.js, React,
              Node.js, and modern frontend tooling.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                <MessageCircle className="size-5" />
                Start a project
              </Link>
              <Link
                href="/my-work"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-900/15 bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-900/35 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-white/35"
              >
                View work
                <ArrowUpRight className="size-5" />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {serviceOfferings.map((service) => (
              <article
                key={service.slug}
                className="rounded-lg border border-slate-900/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-[#0a1728]"
              >
                <div className="flex items-start gap-4">
                  <div className="grid size-12 place-items-center rounded-lg bg-slate-100 dark:bg-white/10">
                    <Image src={service.icon} alt="" width={30} height={30} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                      {service.shortTitle}
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-5 leading-7 text-slate-700 dark:text-slate-300">
                  {service.description}
                </p>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                    What is included
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
                    {service.deliverables.slice(0, 4).map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2 font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                  >
                    View details
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-900/15 px-4 py-2 font-semibold text-slate-950 transition hover:border-slate-900/35 dark:border-white/15 dark:text-white dark:hover:border-white/35"
                  >
                    Start a project
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
    </>
  )
}
