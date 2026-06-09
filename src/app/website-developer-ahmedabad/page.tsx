import type { Metadata } from "next"
import SeoLandingPage from "@/app/components/seo-landing-page"
import { getSeoLandingPageBySlug, siteConfig } from "@/lib/site"

const page = getSeoLandingPageBySlug("website-developer-ahmedabad")

export const metadata: Metadata = {
  title: {
    absolute: page?.title ?? "Website Developer in Ahmedabad | Pratham Kadam",
  },
  description: page?.description,
  alternates: {
    canonical: "/website-developer-ahmedabad",
  },
  openGraph: {
    title: page?.title,
    description: page?.description,
    url: "/website-developer-ahmedabad",
    images: [siteConfig.ogImage],
  },
  twitter: {
    title: page?.title,
    description: page?.description,
    images: [siteConfig.ogImage],
  },
}

export default function WebsiteDeveloperAhmedabadPage() {
  return <SeoLandingPage page={page!} />
}
