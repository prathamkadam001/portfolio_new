import { MetadataRoute } from "next"
import {
  featuredProjects,
  seoArticles,
  serviceOfferings,
  siteConfig,
} from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-29")
  const profileImage = `${siteConfig.url}${siteConfig.ogImage}`
  const routes = [
    "/",
    "/about-pratham-kadam",
    "/contact",
    "/my-work",
    "/blog",
    "/services",
  ].map((route) => ({
    url: route === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
    images: route === "/" ? [profileImage] : undefined,
  })) as MetadataRoute.Sitemap

  const serviceRoutes = serviceOfferings.map((service) => ({
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

  return [...routes, ...serviceRoutes, ...workRoutes, ...blogRoutes]
}
