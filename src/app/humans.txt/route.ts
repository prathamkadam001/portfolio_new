import { featuredProjects, serviceOfferings, siteConfig } from "@/lib/site"

export const dynamic = "force-static"
export const revalidate = 86400

export function GET() {
  const content = [
    "/* TEAM */",
    `Owner: ${siteConfig.name}`,
    `Role: ${siteConfig.role}`,
    `Location: ${siteConfig.location}`,
    `Website: ${siteConfig.url}/`,
    `Email: ${siteConfig.email}`,
    `LinkedIn: ${siteConfig.socialLinks.linkedin}`,
    `GitHub: ${siteConfig.socialLinks.github}`,
    "",
    "/* WHAT PRATHAM DOES */",
    "Pratham Kadam builds SEO-friendly business websites, custom web applications, e-commerce websites, website redesigns, technical SEO foundations, and website maintenance.",
    "",
    "/* SERVICES */",
    ...serviceOfferings.map(
      (service) => `- ${service.title}: ${siteConfig.url}/services/${service.slug}`
    ),
    "",
    "/* SELECTED WORK */",
    ...featuredProjects.map(
      (project) => `- ${project.title}: ${siteConfig.url}${project.link}`
    ),
    "",
  ].join("\n")

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
