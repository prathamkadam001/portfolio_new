import { MetadataRoute } from "next"
import {
  aiCrawlerUserAgents,
  crawlDisallowPaths,
  indexNowKey,
} from "@/lib/llm-seo"
import { siteConfig } from "@/lib/site"

export default function robots(): MetadataRoute.Robots {
  const allowPaths = [
    "/",
    "/llms.txt",
    "/llms-full.txt",
    "/ai-summary.json",
    "/humans.txt",
    `/${indexNowKey}.txt`,
    "/markdown/",
  ]

  return {
    rules: [
      {
        userAgent: "*",
        allow: allowPaths,
        disallow: crawlDisallowPaths,
      },
      ...aiCrawlerUserAgents.map((userAgent) => ({
        userAgent,
        allow: allowPaths,
        disallow: crawlDisallowPaths,
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
