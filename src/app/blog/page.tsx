import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Clock } from "lucide-react"
import { seoArticles, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Web Development and SEO Blog",
  description:
    "Practical web development, Next.js, business website, and technical SEO guides from Pratham Kadam, freelance full stack developer in Ahmedabad.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Web Development and SEO Blog | Pratham Kadam",
    description:
      "Helpful guides about business websites, Next.js development, technical SEO, and hiring a freelance full stack developer.",
    url: "/blog",
  },
}

export default function BlogPage() {
  const blogJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${siteConfig.url}/blog#webpage`,
      name: "Web development and SEO articles",
      url: `${siteConfig.url}/blog`,
      description:
        "Practical web development, Next.js, business website, and technical SEO guides from Pratham Kadam.",
      inLanguage: siteConfig.language,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${siteConfig.url}/#person`,
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: seoArticles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "BlogPosting",
            "@id": `${siteConfig.url}/blog/${article.slug}#article`,
            headline: article.title,
            url: `${siteConfig.url}/blog/${article.slug}`,
            description: article.description,
            datePublished: article.date,
            author: {
              "@id": `${siteConfig.url}/#person`,
            },
          },
        })),
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
      ],
    },
  ]

  return (
    <>
      <main className="bg-[#f7fbff] pt-36 pb-20 dark:bg-[#06101f]">
        <section className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
              Blog
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 dark:text-white md:text-6xl">
              Web development and SEO guides for business owners
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
              Simple, practical articles about hiring developers, building
              SEO-ready websites, improving speed, and turning a website into a
              better lead-generation asset.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {seoArticles.map((article) => (
              <article
                key={article.slug}
                className="rounded-lg border border-slate-900/10 bg-white p-7 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-[#0a1728]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                  {article.keyword}
                </p>
                <h2 className="mt-4 text-2xl font-semibold leading-snug text-slate-950 dark:text-white">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
                  {article.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                  <Clock className="size-4" />
                  {article.readingTime}
                </div>
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-slate-950 transition hover:text-teal-700 dark:text-white dark:hover:text-teal-300"
                >
                  Read article
                  <ArrowUpRight className="size-5" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
    </>
  )
}
