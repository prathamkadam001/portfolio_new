import Link from "next/link"
import { ArrowUpRight, CheckCircle2, MessageCircle, PhoneCall } from "lucide-react"
import TrackedLink from "@/app/components/tracked-link"
import { analyticsEvents } from "@/lib/analytics"
import type { SeoLandingPage } from "@/lib/site"
import {
  featuredProjects,
  seoLandingPages,
  serviceCards,
  siteConfig,
  whatsappContactUrl,
} from "@/lib/site"

type SeoLandingPageProps = {
  page: SeoLandingPage
}

export function buildSeoLandingPageJsonLd(page: SeoLandingPage) {
  const pageUrl = `${siteConfig.url}/${page.slug}`

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: page.title,
      url: pageUrl,
      description: page.description,
      inLanguage: siteConfig.language,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${pageUrl}#service`,
      },
      mainEntity: {
        "@id": `${pageUrl}#service`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: page.heroTitle,
      serviceType: page.keyword,
      description: page.description,
      provider: {
        "@id": `${siteConfig.url}/#person`,
      },
      areaServed: ["Ahmedabad", "Gujarat", "India", "Remote"],
      url: pageUrl,
      offers: {
        "@type": "Offer",
        url: pageUrl,
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteConfig.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.eyebrow,
          item: pageUrl,
        },
      ],
    },
  ]
}

export default function SeoLandingPage({ page }: SeoLandingPageProps) {
  const relatedPages = seoLandingPages.filter((item) => item.slug !== page.slug)
  const pageJsonLd = buildSeoLandingPageJsonLd(page)

  return (
    <>
      <main className="bg-[#f7fbff] pt-36 pb-20 dark:bg-[#06101f]">
        <section className="container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                {page.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
                {page.heroTitle}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
                {page.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href="/contact"
                  eventName={analyticsEvents.contactClick}
                  eventParams={{
                    location: "seo_landing_hero",
                    page: page.slug,
                  }}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  <MessageCircle className="size-5" />
                  {page.primaryCta}
                </TrackedLink>
                <TrackedLink
                  href={whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName={analyticsEvents.whatsappClick}
                  eventParams={{
                    location: "seo_landing_hero",
                    page: page.slug,
                  }}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-900/15 bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-900/35 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-white/35"
                >
                  <PhoneCall className="size-5" />
                  {page.secondaryCta}
                </TrackedLink>
              </div>
            </div>

            <div className="grid gap-4">
              {page.highlights.map((highlight) => (
                <article
                  key={highlight}
                  className="flex gap-4 rounded-lg border border-slate-900/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0a1728]"
                >
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-teal-700 dark:text-teal-300" />
                  <p className="leading-7 text-slate-700 dark:text-slate-300">
                    {highlight}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container mt-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {page.sections.map((section) => (
              <article
                key={section.heading}
                className="rounded-lg border border-slate-900/10 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-[#0a1728]"
              >
                <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                  {section.heading}
                </h2>
                <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-white py-16 dark:bg-[#07111f]">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                  Services
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 dark:text-white md:text-5xl">
                  Related services for this search
                </h2>
                <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                  These pages connect your search intent with the actual work I
                  can deliver: business websites, redesigns, web apps, SEO
                  foundations, and post-launch improvements.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {serviceCards.slice(0, 4).map((service) => (
                  <Link
                    key={service.slug}
                    href={service.href}
                    className="group rounded-lg border border-slate-900/10 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/5"
                  >
                    <h3 className="text-xl font-semibold text-slate-950 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
                      {service.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mt-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-700 dark:text-orange-300">
                Proof
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 dark:text-white md:text-5xl">
                Project examples that support trust
              </h2>
            </div>
            <Link
              href="/my-work"
              className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-lg border border-slate-900/15 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-900/35 dark:border-white/15 dark:text-white dark:hover:border-white/35"
            >
              View all work
              <ArrowUpRight className="size-5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {featuredProjects.slice(0, 3).map((project) => (
              <Link
                key={project.slug}
                href={project.link}
                className="group rounded-lg border border-slate-900/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-[#0a1728]"
              >
                <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="container mt-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                FAQs
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 dark:text-white md:text-5xl">
                Questions before starting
              </h2>
            </div>
            <div className="grid gap-4">
              {page.faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-lg border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-[#0a1728]"
                >
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container mt-16">
          <div className="rounded-lg bg-slate-950 p-6 text-white md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
                  Want to rank for searches like &quot;{page.keyword}&quot;?
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                  Send your business type, current website if available, and
                  the city or service keywords you want to target. I will suggest
                  the next practical page plan.
                </p>
              </div>
              <TrackedLink
                href="/contact"
                eventName={analyticsEvents.contactClick}
                eventParams={{
                  location: "seo_landing_final_cta",
                  page: page.slug,
                }}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200"
              >
                <MessageCircle className="size-5" />
                Plan my SEO pages
              </TrackedLink>
            </div>
          </div>
        </section>

        <section className="container mt-16">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
            Other searches I can help with
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {relatedPages.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="rounded-lg border border-slate-900/10 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900/30 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-white/30"
              >
                {item.keyword}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  )
}
