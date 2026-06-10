import { MetadataRoute } from "next"
import { llmResourceUrls } from "@/lib/llm-seo"
import {
  featuredProjects,
  seoArticles,
  seoLandingPages,
  serviceOfferings,
  siteConfig,
} from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-10")
  const profileImage = `${siteConfig.url}${siteConfig.ogImage}`
  const routes = [
    "/",
    siteConfig.businessWebsitePath,
    "/who-is-pratham-kadam",
    "/about-pratham-kadam",
    "/contact",
    "/my-work",
    "/blog",
    "/services",
  ].map((route) => ({
    url: route === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route === siteConfig.businessWebsitePath
          ? 0.95
          : 0.7,
    images: route === "/" ? [profileImage] : undefined,
  })) as MetadataRoute.Sitemap

  const serviceRoutes = serviceOfferings
    .filter((service) => service.slug !== "business-website-development")
    .map((service) => ({
      url: `${siteConfig.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))

  const workRoutes = featuredProjects.map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
    images: [`${siteConfig.url}${project.image}`],
  }))

  const blogRoutes = seoArticles.map((article) => ({
    url: `${siteConfig.url}/blog/${article.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const seoLandingRoutes = seoLandingPages.map((page) => ({
    url: `${siteConfig.url}/${page.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: page.slug === "website-developer-ahmedabad" ? 0.92 : 0.86,
  }))

  const aiResourceRoutes = [
    llmResourceUrls.llmsTxt,
    llmResourceUrls.llmsFullTxt,
    llmResourceUrls.aiSummary,
    llmResourceUrls.humansTxt,
    llmResourceUrls.indexNowKey,
  ].map((url) => ({
    url,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  return [
    ...routes,
    ...serviceRoutes,
    ...workRoutes,
    ...blogRoutes,
    ...seoLandingRoutes,
    ...aiResourceRoutes,
  ]
}
