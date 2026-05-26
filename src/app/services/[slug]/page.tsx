import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
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
    title: `${service.title} | Pratham Kadam`,
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

  const serviceJsonLd = {
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
    areaServed: "India",
    url: `${siteConfig.url}/services/${service.slug}`,
  }

  return (
    <>
      <main className="pt-36 pb-20">
        <section className="container">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm uppercase tracking-[0.25em] text-dark_black/60 dark:text-white/60">
              Service
            </p>
            <h1 className="mt-4">{service.title}</h1>
            <p className="mt-6 text-lg text-dark_black/70 dark:text-white/70">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-dark_black px-5 py-3 text-white transition hover:opacity-90 dark:bg-white dark:text-dark_black"
              >
                Book a Project Discussion
              </Link>
              <Link
                href="/my-work"
                className="rounded-full border border-dark_black px-5 py-3 transition hover:bg-dark_black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-dark_black"
              >
                View Project Work
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-dark_black/10 bg-white p-8 dark:border-white/10 dark:bg-white/5">
              <h2 className="text-2xl">Who this is for</h2>
              <ul className="mt-5 space-y-3 text-dark_black/70 dark:text-white/70">
                {service.idealFor.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-dark_black/10 bg-white p-8 dark:border-white/10 dark:bg-white/5">
              <h2 className="text-2xl">What you get</h2>
              <ul className="mt-5 space-y-3 text-dark_black/70 dark:text-white/70">
                {service.deliverables.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>

          <article className="mt-6 rounded-3xl border border-dark_black/10 bg-white p-8 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-2xl">How I usually work</h2>
            <ol className="mt-5 space-y-3 text-dark_black/70 dark:text-white/70">
              {service.process.map((step, index) => (
                <li key={step}>
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </article>

          <article className="mt-6 rounded-3xl border border-dark_black/10 bg-white p-8 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-2xl">Common questions</h2>
            <div className="mt-5 space-y-6">
              {service.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-dark_black/70 dark:text-white/70">
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
