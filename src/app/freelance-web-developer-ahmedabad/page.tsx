import type { Metadata } from "next"
import SeoLandingPage from "@/app/components/seo-landing-page"
import { getSeoLandingPageBySlug, siteConfig } from "@/lib/site"

const page = getSeoLandingPageBySlug("freelance-web-developer-ahmedabad")

export const metadata: Metadata = {
  title: {
    absolute:
      page?.title ?? "Freelance Web Developer in Ahmedabad | Pratham Kadam",
  },
  description: page?.description,
  alternates: {
    canonical: "/freelance-web-developer-ahmedabad",
  },
  openGraph: {
    title: page?.title,
    description: page?.description,
    url: "/freelance-web-developer-ahmedabad",
    images: [siteConfig.ogImage],
  },
  twitter: {
    title: page?.title,
    description: page?.description,
    images: [siteConfig.ogImage],
  },
}

export default function FreelanceWebDeveloperAhmedabadPage() {
  return <SeoLandingPage page={page!} />
}
