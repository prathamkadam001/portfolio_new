import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react"
import { featuredProjects, serviceOfferings, siteConfig } from "@/lib/site"
import TrackedLink from "@/app/components/tracked-link"
import { analyticsEvents } from "@/lib/analytics"

export const metadata: Metadata = {
  title: "About Pratham Kadam",
  description:
    "Learn about Pratham Kadam, freelance full stack developer in Ahmedabad, India, building SEO-friendly business websites, custom web apps, e-commerce websites, redesigns, and technical SEO foundations.",
  alternates: {
    canonical: "/about-pratham-kadam",
  },
  openGraph: {
    title: "About Pratham Kadam | Freelance Full Stack Developer",
    description:
      "Official profile page for Pratham Kadam, freelance full stack developer in Ahmedabad, Gujarat, India.",
    url: "/about-pratham-kadam",
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
    title: "About Pratham Kadam | Freelance Full Stack Developer",
    description:
      "Official profile page for Pratham Kadam, freelance full stack developer in Ahmedabad, Gujarat, India.",
    images: [siteConfig.ogImage],
  },
}

const profileJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteConfig.url}/about-pratham-kadam#profile-page`,
    url: `${siteConfig.url}/about-pratham-kadam`,
    name: "About Pratham Kadam",
    description:
      "Official profile page for Pratham Kadam, freelance full stack developer in Ahmedabad, Gujarat, India.",
    inLanguage: siteConfig.language,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#person`,
    },
    primaryImageOfPage: {
      "@id": `${siteConfig.url}/#profile-image`,
    },
    mainEntity: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      givenName: siteConfig.givenName,
      familyName: siteConfig.familyName,
      jobTitle: siteConfig.role,
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      sameAs: siteConfig.sameAs,
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
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pratham Kadam services",
    itemListElement: serviceOfferings.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${siteConfig.url}/services/${service.slug}`,
      description: service.summary,
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
        name: "About Pratham Kadam",
        item: `${siteConfig.url}/about-pratham-kadam`,
      },
    ],
  },
]

const socialLinks = [
  {
    label: "LinkedIn",
    href: siteConfig.socialLinks.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: siteConfig.socialLinks.github,
    icon: Github,
  },
  {
    label: "Instagram",
    href: siteConfig.socialLinks.instagram,
    icon: Instagram,
  },
]

export default function AboutPrathamKadamPage() {
  return (
    <>
      <main className="bg-[#f7fbff] pt-36 pb-20 dark:bg-[#06101f]">
        <section className="container">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                Official Profile
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
                Pratham Kadam - Freelance Full Stack Developer in Ahmedabad.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
                I am Pratham Kadam, a freelance full stack developer from
                Ahmedabad, Gujarat, India. I build SEO-friendly business
                websites, custom web apps, e-commerce websites, redesigns, and
                technical SEO foundations for businesses that need a stronger
                digital presence.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href="/contact"
                  eventName={analyticsEvents.contactClick}
                  eventParams={{ location: "about_hero" }}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  <MessageCircle className="size-5" />
                  Start a project
                </TrackedLink>
                <Link
                  href="/my-work"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-900/15 bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-900/35 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-white/35"
                >
                  View work
                  <ArrowUpRight className="size-5" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-900/10 bg-white p-3 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-[#0a1728]">
              <Image
                src={siteConfig.ogImage}
                alt={siteConfig.ogImageAlt}
                width={900}
                height={1040}
                className="aspect-[4/5] w-full rounded-md object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-[#0a1728]">
              <MapPin className="size-6 text-teal-700 dark:text-teal-300" />
              <h2 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">
                Location
              </h2>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                {siteConfig.location}
              </p>
            </article>
            <article className="rounded-lg border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-[#0a1728]">
              <Mail className="size-6 text-teal-700 dark:text-teal-300" />
              <h2 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">
                Email
              </h2>
              <p className="mt-2 break-words text-slate-700 dark:text-slate-300">
                {siteConfig.email}
              </p>
            </article>
            <article className="rounded-lg border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-[#0a1728]">
              <Phone className="size-6 text-teal-700 dark:text-teal-300" />
              <h2 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">
                Phone
              </h2>
              <p className="mt-2 text-slate-700 dark:text-slate-300">
                {siteConfig.phone}
              </p>
            </article>
          </div>

          <section className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                What I Do
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 dark:text-white md:text-5xl">
                Development work focused on clarity, speed, SEO, and business
                trust.
              </h2>
              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                My work combines frontend development, backend integration,
                technical SEO, and practical UI thinking. The goal is to make a
                website easy for search engines to understand and easy for real
                visitors to trust.
              </p>
            </div>

            <div className="grid gap-4">
              {serviceOfferings.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-lg border border-slate-900/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-[#0a1728]"
                >
                  <div className="flex items-start gap-4">
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

          <section className="mt-14">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                  Project Proof
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-5xl">
                  Selected portfolio work
                </h2>
              </div>
              <Link
                href="/my-work"
                className="inline-flex items-center gap-2 font-semibold text-slate-950 transition hover:text-teal-700 dark:text-white dark:hover:text-teal-300"
              >
                View all projects
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

          <section className="mt-14 rounded-lg border border-slate-900/10 bg-white p-7 dark:border-white/10 dark:bg-[#0a1728]">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                  Public Profiles
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">
                  Connect with Pratham Kadam
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {socialLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-900/10 px-4 py-3 font-semibold text-slate-950 transition hover:border-teal-700 hover:text-teal-700 dark:border-white/10 dark:text-white dark:hover:border-teal-300 dark:hover:text-teal-300"
                  >
                    <item.icon className="size-5" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
    </>
  )
}
