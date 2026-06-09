import type { Metadata } from "next"
import SeoLandingPage from "@/app/components/seo-landing-page"
import { getSeoLandingPageBySlug, siteConfig } from "@/lib/site"

const page = getSeoLandingPageBySlug("website-developer-for-small-business")

export const metadata: Metadata = {
  title: {
    absolute:
      page?.title ??
      "Website Developer for Small Business in India | Pratham Kadam",
  },
  description: page?.description,
  alternates: {
    canonical: "/website-developer-for-small-business",
  },
  openGraph: {
    title: page?.title,
    description: page?.description,
    url: "/website-developer-for-small-business",
    images: [siteConfig.ogImage],
  },
  twitter: {
    title: page?.title,
    description: page?.description,
    images: [siteConfig.ogImage],
  },
}

export default function WebsiteDeveloperForSmallBusinessPage() {
  return <SeoLandingPage page={page!} />
}
