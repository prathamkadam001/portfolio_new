import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  MapPin,
  SearchCheck,
} from "lucide-react"
import { featuredProjects, serviceOfferings, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Who Is Pratham Kadam?",
  description:
    "Pratham Kadam is a freelance full stack developer from Ahmedabad, Gujarat, India, building SEO-friendly websites, custom web apps, e-commerce websites, redesigns, and technical SEO foundations.",
  alternates: {
    canonical: "/who-is-pratham-kadam",
    types: {
      "text/markdown": "/markdown/who-is-pratham-kadam.md",
    },
  },
  openGraph: {
    title: "Who Is Pratham Kadam? | Freelance Full Stack Developer",
    description:
      "A direct answer about Pratham Kadam, what he does, where he is based, and what services he offers.",
    url: "/who-is-pratham-kadam",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Is Pratham Kadam? | Freelance Full Stack Developer",
    description:
      "A direct answer about Pratham Kadam, what he does, where he is based, and what services he offers.",
    images: [siteConfig.ogImage],
  },
}

const pageUrl = `${siteConfig.url}/who-is-pratham-kadam`

const directAnswer =
  "Pratham Kadam is a freelance full stack developer from Ahmedabad, Gujarat, India. He builds SEO-friendly business websites, custom web applications, e-commerce websites, website redesigns, technical SEO foundations, and ongoing website maintenance using technologies such as Next.js, React, Node.js, MongoDB, Tailwind CSS, TypeScript, and JavaScript."

const personJsonLd = {
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.name,
  givenName: siteConfig.givenName,
  familyName: siteConfig.familyName,
  alternateName: [
    "Pratham",
    "PrathamKadam",
    "Pratham Kadam Developer",
    "Pratham Kadam Full Stack Developer",
    "Pratham Kadam Web Developer",
  ],
  identifier: "pratham-kadam",
  description: directAnswer,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  jobTitle: siteConfig.role,
  sameAs: siteConfig.sameAs,
  knowsLanguage: ["English", "Hindi", "Gujarati"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Next.js development",
    "React development",
    "Node.js development",
    "MongoDB development",
    "Business website development",
    "Custom web application development",
    "E-commerce development",
    "Technical SEO",
  ],
}

const answerJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: "Who Is Pratham Kadam?",
    url: pageUrl,
    description:
      "Direct answer page for Pratham Kadam, freelance full stack developer in Ahmedabad, India.",
    inLanguage: siteConfig.language,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#person`,
    },
    dateCreated: "2026-06-06T00:00:00+05:30",
    dateModified: "2026-06-06T00:00:00+05:30",
    mainEntity: personJsonLd,
  },
  {
    "@context": "https://schema.org",
    ...personJsonLd,
    mainEntityOfPage: {
      "@id": `${pageUrl}#webpage`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntityOfPage: {
      "@id": `${pageUrl}#webpage`,
    },
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Pratham Kadam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: directAnswer,
        },
      },
      {
        "@type": "Question",
        name: "What does Pratham Kadam do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pratham Kadam builds business websites, custom web applications, e-commerce websites, website redesigns, technical SEO foundations, and website maintenance for Ahmedabad, India, and remote clients.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Pratham Kadam based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pratham Kadam is based in Ahmedabad, Gujarat, India, and also works with remote clients.",
        },
      },
    ],
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
        name: "Who Is Pratham Kadam?",
        item: pageUrl,
      },
    ],
  },
]

const facts = [
  {
    label: "Role",
    value: siteConfig.role,
    icon: BriefcaseBusiness,
  },
  {
    label: "Location",
    value: siteConfig.location,
    icon: MapPin,
  },
  {
    label: "Focus",
    value: "SEO-friendly websites and custom web apps",
    icon: SearchCheck,
  },
  {
    label: "Stack",
    value: "Next.js, React, Node.js, MongoDB, Tailwind CSS",
    icon: Code2,
  },
]

export default function WhoIsPrathamKadamPage() {
  return (
    <>
      <main className="bg-[#f7fbff] pt-36 pb-20 dark:bg-[#06101f]">
        <section className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
              Direct Answer
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
              Who is Pratham Kadam?
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
              {directAnswer}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <article
                key={fact.label}
                className="rounded-lg border border-slate-900/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0a1728]"
              >
                <fact.icon className="size-6 text-teal-700 dark:text-teal-300" />
                <h2 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">
                  {fact.label}
                </h2>
                <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">
                  {fact.value}
                </p>
              </article>
            ))}
          </div>

          <section className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                What He Does
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 dark:text-white md:text-5xl">
                Pratham helps businesses build faster, clearer, search-ready
                websites and web apps.
              </h2>
              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                His work combines frontend development, backend integration,
                responsive UI, technical SEO, metadata, schema, sitemap,
                robots.txt, internal linking, and launch support.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  Contact Pratham
                  <ArrowUpRight className="size-5" />
                </Link>
                <Link
                  href="/my-work"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-900/15 bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-900/35 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-white/35"
                >
                  View portfolio
                  <ArrowUpRight className="size-5" />
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {serviceOfferings.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-lg border border-slate-900/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-[#0a1728]"
                >
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-teal-700 dark:text-teal-300" />
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300">
                        {service.title}
                      </h3>
                      <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">
                        {service.summary}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                  Proof Of Work
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-5xl">
                  Selected portfolio projects
                </h2>
              </div>
              <Link
                href="/my-work"
                className="inline-flex items-center gap-2 font-semibold text-slate-950 transition hover:text-teal-700 dark:text-white dark:hover:text-teal-300"
              >
                View all work
                <ArrowUpRight className="size-5" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {featuredProjects.slice(0, 6).map((project) => (
                <Link
                  key={project.slug}
                  href={project.link}
                  className="group rounded-lg border border-slate-900/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-[#0a1728]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
                    {project.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(answerJsonLd) }}
      />
    </>
  )
}
