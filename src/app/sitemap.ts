import { MetadataRoute } from "next"
import { serviceOfferings, siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-29")
  const profileImage = `${siteConfig.url}${siteConfig.ogImage}`
  const routes = [
    "/",
    "/contact",
    "/my-work",
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

  return [...routes, ...serviceRoutes]
}
