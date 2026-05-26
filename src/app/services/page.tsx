import type { Metadata } from "next"
import Link from "next/link"
import { serviceOfferings, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Full Stack Development Services | Pratham Kadam",
  description:
    "Explore full stack development services by Pratham Kadam including business websites, custom web apps, e-commerce builds, redesigns, and technical SEO improvements.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Full Stack Development Services | Pratham Kadam",
    description:
      "Business websites, web apps, e-commerce builds, redesigns, and technical SEO support for growing brands.",
    url: "/services",
  },
  twitter: {
    title: "Full Stack Development Services | Pratham Kadam",
    description:
      "Business websites, web apps, e-commerce builds, redesigns, and technical SEO support for growing brands.",
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
      <main className="pt-36 pb-20">
        <section className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-dark_black/60 dark:text-white/60">
              Services
            </p>
            <h1 className="mt-4">
              Full stack development services for businesses that need better
              websites, better UX, and better search visibility
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-dark_black/70 dark:text-white/70">
              I help businesses build and improve websites, custom web apps,
              e-commerce experiences, and SEO foundations using Next.js, React,
              Node.js, and modern frontend tooling.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {serviceOfferings.map((service) => (
              <article
                key={service.slug}
                className="rounded-3xl border border-dark_black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {service.shortTitle}
                </p>
                <h2 className="mt-3 text-3xl">{service.title}</h2>
                <p className="mt-4 text-dark_black/70 dark:text-white/70">
                  {service.description}
                </p>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold">What’s included</h3>
                  <ul className="mt-3 space-y-2 text-dark_black/70 dark:text-white/70">
                    {service.deliverables.slice(0, 4).map((deliverable) => (
                      <li key={deliverable}>• {deliverable}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="rounded-full bg-dark_black px-5 py-3 text-white transition hover:opacity-90 dark:bg-white dark:text-dark_black"
                  >
                    View Service Details
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-dark_black px-5 py-3 transition hover:bg-dark_black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-dark_black"
                  >
                    Start a Project
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
