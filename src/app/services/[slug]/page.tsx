import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react"
import { getServiceBySlug, serviceOfferings, siteConfig } from "@/lib/site"

type ServicePageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return serviceOfferings.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {}
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Pratham Kadam`,
      description: service.description,
      url: `/services/${service.slug}`,
    },
    twitter: {
      title: `${service.title} | Pratham Kadam`,
      description: service.description,
    },
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const serviceJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      serviceType: service.title,
      provider: {
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        url: siteConfig.url,
      },
      areaServed: ["Ahmedabad", "Gujarat", "India", "Remote"],
      url: `${siteConfig.url}/services/${service.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ]

  return (
    <>
      <main className="bg-[#f7fbff] pt-36 pb-20 dark:bg-[#06101f]">
        <section className="container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                Service
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
                {service.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  <MessageCircle className="size-5" />
                  Book a project discussion
                </Link>
                <Link
                  href="/my-work"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-900/15 bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-900/35 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-white/35"
                >
                  View project work
                  <ArrowUpRight className="size-5" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-slate-900/10 bg-white p-8 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-[#0a1728]">
              <div className="grid size-14 place-items-center rounded-lg bg-slate-100 dark:bg-white/10">
                <Image src={service.icon} alt="" width={36} height={36} />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-slate-950 dark:text-white">
                Good fit for
              </h2>
              <ul className="mt-5 space-y-4 text-slate-700 dark:text-slate-300">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-teal-700 dark:text-teal-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-lg border border-slate-900/10 bg-white p-7 dark:border-white/10 dark:bg-[#0a1728]">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                What you get
              </h2>
              <ul className="mt-5 space-y-4 text-slate-700 dark:text-slate-300">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-teal-700 dark:text-teal-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg border border-slate-900/10 bg-white p-7 dark:border-white/10 dark:bg-[#0a1728]">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                How I usually work
              </h2>
              <ol className="mt-5 space-y-4 text-slate-700 dark:text-slate-300">
                {service.process.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-950 dark:bg-white/10 dark:text-white">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          </div>

          <article className="mt-6 rounded-lg border border-slate-900/10 bg-white p-7 dark:border-white/10 dark:bg-[#0a1728]">
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
              Common questions
            </h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {service.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  )
}
