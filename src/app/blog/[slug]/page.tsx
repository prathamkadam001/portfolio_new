import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight, CalendarDays, Clock, MessageCircle } from "lucide-react"
import {
  getArticleBySlug,
  seoArticles,
  serviceOfferings,
  siteConfig,
} from "@/lib/site"

type BlogArticlePageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return seoArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {}
  }

  const url = `/blog/${article.slug}`

  return {
    title: article.title,
    description: article.description,
    keywords: [article.keyword, ...siteConfig.keywords.slice(0, 8)],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: `${article.title} | ${siteConfig.name}`,
      description: article.description,
      url,
      publishedTime: article.date,
      authors: [siteConfig.name],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${siteConfig.name}`,
      description: article.description,
      images: [siteConfig.ogImage],
    },
  }
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedServices = serviceOfferings.slice(0, 3)
  const articleUrl = `${siteConfig.url}/blog/${article.slug}`
  const articleJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${articleUrl}#webpage`,
      name: article.title,
      url: articleUrl,
      description: article.description,
      inLanguage: siteConfig.language,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${articleUrl}#article`,
      },
      mainEntity: {
        "@id": `${articleUrl}#article`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${articleUrl}#article`,
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      dateModified: article.date,
      mainEntityOfPage: {
        "@id": `${articleUrl}#webpage`,
      },
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      keywords: [article.keyword, ...siteConfig.keywords.slice(0, 8)],
      articleSection: "Web development and SEO",
      inLanguage: siteConfig.language,
      author: {
        "@id": `${siteConfig.url}/#person`,
      },
      publisher: {
        "@id": `${siteConfig.url}/#person`,
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
          name: "Blog",
          item: `${siteConfig.url}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: articleUrl,
        },
      ],
    },
  ]

  return (
    <>
      <main className="bg-[#f7fbff] pt-36 pb-20 dark:bg-[#06101f]">
        <article className="container">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="font-semibold text-teal-700 transition hover:text-teal-900 dark:text-teal-300 dark:hover:text-teal-100"
            >
              Back to blog
            </Link>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
              {article.keyword}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
              {article.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4" />
                {new Date(article.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4" />
                {article.readingTime}
              </span>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-6">
              {article.sections.map((section) => (
                <section
                  key={section.heading}
                  className="rounded-lg border border-slate-900/10 bg-white p-7 dark:border-white/10 dark:bg-[#0a1728]"
                >
                  <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                    {section.heading}
                  </h2>
                  <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
                    {section.body}
                  </p>
                </section>
              ))}

              <section className="rounded-lg bg-slate-950 p-8 text-white dark:bg-white dark:text-slate-950">
                <h2 className="text-3xl font-semibold">
                  Want a website that brings better enquiries?
                </h2>
                <p className="mt-4 leading-8 text-white/75 dark:text-slate-700">
                  I build SEO-ready business websites, custom web apps,
                  e-commerce catalogues, and technical SEO foundations for
                  Indian and remote clients.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800"
                >
                  <MessageCircle className="size-5" />
                  Discuss your project
                </Link>
              </section>
            </div>

            <aside className="h-fit rounded-lg border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-[#0a1728]">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
                Helpful services
              </h2>
              <div className="mt-5 space-y-4">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group block rounded-lg border border-slate-900/10 p-4 transition hover:border-teal-700/40 dark:border-white/10 dark:hover:border-teal-300/40"
                  >
                    <h3 className="font-semibold text-slate-950 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300">
                      {service.shortTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {service.summary}
                    </p>
                  </Link>
                ))}
              </div>
              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-slate-950 transition hover:text-teal-700 dark:text-white dark:hover:text-teal-300"
              >
                View all services
                <ArrowUpRight className="size-5" />
              </Link>
            </aside>
          </div>
        </article>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  )
}
