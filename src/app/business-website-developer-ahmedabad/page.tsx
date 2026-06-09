import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  PhoneCall,
  SearchCheck,
  ShieldCheck,
  Zap,
} from "lucide-react"
import {
  featuredProjects,
  serviceOfferings,
  siteConfig,
  whatsappContactUrl,
} from "@/lib/site"

const pagePath = siteConfig.businessWebsitePath
const pageUrl = `${siteConfig.url}${pagePath}`
const businessWebsiteService = serviceOfferings.find(
  (service) => service.slug === "business-website-development"
)

const pageTitle = "Business Website Developer in Ahmedabad"
const pageDescription =
  "Hire Pratham Kadam, a business website developer in Ahmedabad, for SEO-ready websites, service pages, portfolio proof, contact forms, WhatsApp CTAs, and fast Next.js builds for small businesses."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "business website developer in Ahmedabad",
    "freelance website developer Ahmedabad",
    "website developer for small business India",
    "small business website developer Ahmedabad",
    "Next.js website developer Ahmedabad",
    "business website development India",
    "Pratham Kadam developer",
    "Pratham Kadam Ahmedabad",
  ],
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    type: "website",
    title: `${pageTitle} | Pratham Kadam`,
    description: pageDescription,
    url: pagePath,
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
    title: `${pageTitle} | Pratham Kadam`,
    description: pageDescription,
    images: [siteConfig.ogImage],
  },
}

const proofProjects = featuredProjects.filter((project) =>
  [
    "global-it-computer-academy",
    "gagan-belt",
    "bharat-engineering-works",
    "viyan-electronics",
  ].includes(project.slug)
)

const valuePillars = [
  {
    title: "Google-ready structure",
    description:
      "Metadata, headings, schema, sitemap, robots.txt, image alt text, internal links, and clean page URLs.",
    icon: SearchCheck,
  },
  {
    title: "Built for enquiries",
    description:
      "Clear service copy, portfolio proof, FAQs, contact forms, WhatsApp actions, and mobile-first layouts.",
    icon: MessageCircle,
  },
  {
    title: "Fast modern build",
    description:
      "Next.js and React implementation with responsive UI, performance-aware images, and deployment support.",
    icon: Zap,
  },
]

const processSteps = [
  "Understand your business, services, location, audience, and enquiry goal.",
  "Plan the homepage, service sections, proof blocks, FAQ content, and contact flow.",
  "Build the responsive Next.js website with SEO metadata, schema, and conversion CTAs.",
  "Launch, test, and prepare the pages for Google Search Console indexing.",
]

const faqs = [
  {
    question: "Who is the best fit for a business website project?",
    answer:
      "This offer is best for local businesses, institutes, manufacturers, consultants, agencies, and product companies that need a professional website with clear services, proof, and contact actions.",
  },
  {
    question: "Can you build a website for a small business in Ahmedabad?",
    answer:
      "Yes. Pratham Kadam builds business websites for Ahmedabad and India-based businesses, with service pages, mobile-friendly layouts, SEO basics, and enquiry-focused contact flow.",
  },
  {
    question: "Will my website rank on Google immediately?",
    answer:
      "No honest developer can guarantee instant top ranking. The build will include the technical SEO foundation Google needs, and rankings improve with indexing, strong content, authority, and consistent promotion.",
  },
  {
    question: "Can you redesign my old website?",
    answer:
      "Yes. Existing websites can be improved with better messaging, faster pages, service-focused structure, metadata, schema, internal linking, and clearer calls to action.",
  },
]

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: pageTitle,
    url: pageUrl,
    description: pageDescription,
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
    primaryImageOfPage: {
      "@id": `${siteConfig.url}/#profile-image`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Business Website Development in Ahmedabad",
    alternateName: [
      "Business Website Developer in Ahmedabad",
      "Freelance Website Developer Ahmedabad",
      "Website Developer for Small Business India",
    ],
    description: businessWebsiteService?.description ?? pageDescription,
    serviceType: "Business website development",
    provider: {
      "@id": `${siteConfig.url}/#person`,
    },
    areaServed: ["Ahmedabad", "Gujarat", "India", "Remote"],
    url: pageUrl,
    offers: {
      "@type": "Offer",
      url: pageUrl,
      availability: "https://schema.org/InStock",
      areaServed: ["Ahmedabad", "Gujarat", "India", "Remote"],
      itemOffered: {
        "@id": `${pageUrl}#service`,
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntityOfPage: {
      "@id": `${pageUrl}#webpage`,
    },
    mainEntity: faqs.map((faq) => ({
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
        name: "Business Website Developer in Ahmedabad",
        item: pageUrl,
      },
    ],
  },
]

export default function BusinessWebsiteDeveloperAhmedabadPage() {
  return (
    <>
      <main className="bg-[#f7fbff] pt-36 pb-20 dark:bg-[#06101f]">
        <section className="container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                Business Website Developer in Ahmedabad
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
                Get a business website that looks professional, ranks better,
                and brings more enquiries.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
                I am Pratham Kadam, a freelance website developer in Ahmedabad.
                I build SEO-ready business websites for small businesses,
                institutes, manufacturers, consultants, agencies, and product
                companies using Next.js, React, and clean conversion-focused
                structure.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  <MessageCircle className="size-5" />
                  Start a business website
                </Link>
                <Link
                  href={whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-900/15 bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-900/35 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-white/35"
                >
                  <PhoneCall className="size-5" />
                  WhatsApp Pratham
                </Link>
              </div>

              <ul className="mt-8 grid gap-3 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
                {[
                  "Ahmedabad and remote projects",
                  "SEO metadata and schema included",
                  "Contact form, email, and WhatsApp CTAs",
                  "Business copy, proof, and service pages",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-teal-700 dark:text-teal-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4">
              {valuePillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-lg border border-slate-900/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0a1728]"
                >
                  <pillar.icon className="size-7 text-teal-700 dark:text-teal-300" />
                  <h2 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container mt-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-700 dark:text-orange-300">
                Good Fit
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 dark:text-white md:text-5xl">
                Built for businesses that need a serious first impression.
              </h2>
              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                A business website should do more than exist. It should explain
                what you offer, show proof, answer common questions, and make it
                easy for visitors to contact you.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {businessWebsiteService?.idealFor.map((item) => (
                <article
                  key={item}
                  className="rounded-lg border border-slate-900/10 bg-white p-5 dark:border-white/10 dark:bg-[#0a1728]"
                >
                  <ShieldCheck className="size-6 text-teal-700 dark:text-teal-300" />
                  <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 bg-white py-16 dark:bg-[#07111f]">
          <div className="container">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                  Proof Of Work
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 dark:text-white md:text-5xl">
                  Business website projects and product-led web experiences.
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

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {proofProjects.map((project) => (
                <article
                  key={project.slug}
                  className="overflow-hidden rounded-lg border border-slate-900/10 bg-slate-50 shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} business website project by Pratham Kadam`}
                    width={900}
                    height={560}
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <div className="p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                      {project.clientType}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
                      {project.outcome}
                    </p>
                    <Link
                      href={project.link}
                      className="mt-5 inline-flex items-center gap-2 font-semibold text-slate-950 transition hover:text-teal-700 dark:text-white dark:hover:text-teal-300"
                    >
                      Read case study
                      <ArrowUpRight className="size-5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container mt-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-700 dark:text-orange-300">
                Process
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 dark:text-white md:text-5xl">
                A practical build process for faster launch and better clarity.
              </h2>
              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                The work starts with business goals and ends with a website that
                is easier for Google to understand and easier for customers to
                act on.
              </p>
            </div>

            <ol className="grid gap-4">
              {processSteps.map((step, index) => (
                <li
                  key={step}
                  className="rounded-lg border border-slate-900/10 bg-white p-5 dark:border-white/10 dark:bg-[#0a1728]"
                >
                  <div className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-slate-950 font-semibold text-white dark:bg-white dark:text-slate-950">
                      {index + 1}
                    </span>
                    <p className="leading-7 text-slate-700 dark:text-slate-300">
                      {step}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="container mt-16">
          <div className="rounded-lg bg-slate-950 p-6 text-white md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <ClipboardCheck className="size-8 text-teal-200" />
                <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
                  Ready to turn your business website into a better enquiry
                  machine?
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                  Send your current website or project idea. I will review the
                  business goal, page structure, SEO basics, and the fastest next
                  step.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200"
                >
                  <MessageCircle className="size-5" />
                  Start a business website
                </Link>
                <Link
                  href={whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-white/20 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/45"
                >
                  <PhoneCall className="size-5" />
                  WhatsApp now
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mt-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
              FAQs
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-5xl">
              Questions business owners usually ask
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
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
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  )
}
