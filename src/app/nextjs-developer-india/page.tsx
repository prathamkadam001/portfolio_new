import type { Metadata } from "next"
import SeoLandingPage from "@/app/components/seo-landing-page"
import { getSeoLandingPageBySlug, siteConfig } from "@/lib/site"

const page = getSeoLandingPageBySlug("nextjs-developer-india")

export const metadata: Metadata = {
  title: {
    absolute: page?.title ?? "Next.js Developer in India | Pratham Kadam",
  },
  description: page?.description,
  alternates: {
    canonical: "/nextjs-developer-india",
  },
  openGraph: {
    title: page?.title,
    description: page?.description,
    url: "/nextjs-developer-india",
    images: [siteConfig.ogImage],
  },
  twitter: {
    title: page?.title,
    description: page?.description,
    images: [siteConfig.ogImage],
  },
}

export default function NextjsDeveloperIndiaPage() {
  return <SeoLandingPage page={page!} />
}
