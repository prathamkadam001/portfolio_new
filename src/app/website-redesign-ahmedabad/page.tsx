import type { Metadata } from "next"
import SeoLandingPage from "@/app/components/seo-landing-page"
import { getSeoLandingPageBySlug, siteConfig } from "@/lib/site"

const page = getSeoLandingPageBySlug("website-redesign-ahmedabad")

export const metadata: Metadata = {
  title: {
    absolute: page?.title ?? "Website Redesign in Ahmedabad | Pratham Kadam",
  },
  description: page?.description,
  alternates: {
    canonical: "/website-redesign-ahmedabad",
  },
  openGraph: {
    title: page?.title,
    description: page?.description,
    url: "/website-redesign-ahmedabad",
    images: [siteConfig.ogImage],
  },
  twitter: {
    title: page?.title,
    description: page?.description,
    images: [siteConfig.ogImage],
  },
}

export default function WebsiteRedesignAhmedabadPage() {
  return <SeoLandingPage page={page!} />
}
