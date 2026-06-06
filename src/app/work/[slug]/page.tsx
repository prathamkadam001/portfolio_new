import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react"
import { featuredProjects, getProjectBySlug, siteConfig } from "@/lib/site"

type WorkPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  const title = `${project.title} Case Study`
  const url = `/work/${project.slug}`

  return {
    title,
    description: project.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: `${title} | ${siteConfig.name}`,
      description: project.description,
      url,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} project screenshot`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description: project.description,
      images: [project.image],
    },
  }
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = featuredProjects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3)

  const projectUrl = `${siteConfig.url}/work/${project.slug}`
  const projectJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${projectUrl}#webpage`,
      name: `${project.title} Case Study`,
      url: projectUrl,
      description: project.description,
      inLanguage: siteConfig.language,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${projectUrl}#case-study`,
      },
      mainEntity: {
        "@id": `${projectUrl}#case-study`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${project.image}`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${projectUrl}#case-study`,
      name: `${project.title} Case Study`,
      headline: `${project.title} Case Study`,
      description: project.description,
      image: `${siteConfig.url}${project.image}`,
      url: projectUrl,
      sameAs: project.liveLink,
      inLanguage: siteConfig.language,
      keywords: project.tags,
      about: project.services,
      creator: {
        "@id": `${siteConfig.url}/#person`,
      },
      mainEntityOfPage: {
        "@id": `${projectUrl}#webpage`,
      },
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
          name: "Work",
          item: `${siteConfig.url}/my-work`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: projectUrl,
        },
      ],
    },
  ]

  return (
    <>
      <main className="bg-[#f7fbff] pt-36 pb-20 dark:bg-[#06101f]">
        <section className="container">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                Case Study
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 text-base font-semibold text-slate-600 dark:text-slate-300">
                {project.category} website for {project.clientType}
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  <MessageCircle className="size-5" />
                  Start a similar project
                </Link>
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-slate-900/15 bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-900/35 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-white/35"
                >
                  Visit live website
                  <ArrowUpRight className="size-5" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-[#0a1728]">
              <Image
                src={project.image}
                alt={`${project.title} website screenshot`}
                width={1200}
                height={780}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              ["Challenge", project.challenge],
              ["Solution", project.solution],
              ["Outcome", project.outcome],
            ].map(([title, body]) => (
              <article
                key={title}
                className="rounded-lg border border-slate-900/10 bg-white p-7 shadow-sm shadow-slate-900/5 dark:border-white/10 dark:bg-[#0a1728]"
              >
                <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                  {title}
                </h2>
                <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
                  {body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-lg border border-slate-900/10 bg-white p-7 dark:border-white/10 dark:bg-[#0a1728]">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                Services used
              </h2>
              <ul className="mt-5 space-y-4 text-slate-700 dark:text-slate-300">
                {project.services.map((service) => (
                  <li key={service} className="flex gap-3">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-teal-700 dark:text-teal-300" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg border border-slate-900/10 bg-white p-7 dark:border-white/10 dark:bg-[#0a1728]">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                Technology and focus
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-900/10 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-6 leading-7 text-slate-700 dark:text-slate-300">
                Need a website like this? I can help with planning, design,
                development, SEO setup, deployment, and post-launch fixes.
              </p>
            </article>
          </div>

          <section className="mt-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                  More Work
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
                  Related case studies
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

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {relatedProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={item.link}
                  className="group rounded-lg border border-slate-900/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-[#0a1728]"
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} screenshot`}
                    width={600}
                    height={380}
                    className="rounded-lg"
                  />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
    </>
  )
}
