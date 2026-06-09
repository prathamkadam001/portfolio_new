import type { Metadata, Viewport } from "next"
import "./globals.css"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer/Footer"
import ScrollToTop from "./components/scroll-to-top"
import StickyMobileCTA from "./components/sticky-mobile-cta"
import GoogleAnalytics from "./components/analytics/google-analytics"
import Providers from "./providers"
import { featuredProjects, serviceOfferings, siteConfig } from "@/lib/site"
import { llmResourceUrls } from "@/lib/llm-seo"

const title = {
  default: siteConfig.title,
  template: `%s | ${siteConfig.name}`,
}
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const profileImageUrl = `${siteConfig.url}${siteConfig.ogImage}`

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Full Stack Development",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": "/llms.txt",
      "application/json": "/ai-summary.json",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@pratham__kadam2103",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/owner/pratham_image.png",
  },
  other: {
    "profile:first_name": "Pratham",
    "profile:last_name": "Kadam",
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "ICBM": "23.0225, 72.5714",
    "llms-txt": llmResourceUrls.llmsTxt,
    "llms-full": llmResourceUrls.llmsFullTxt,
    "ai-summary": llmResourceUrls.aiSummary,
  },
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#08111f" },
  ],
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    "@id": `${siteConfig.url}/#person`,
    givenName: siteConfig.givenName,
    familyName: siteConfig.familyName,
    description: siteConfig.description,
    alternateName: [
      "Pratham",
      "PrathamKadam",
      "Pratham Kadam Developer",
      "Pratham Kadam Full Stack Developer",
      "Pratham Kadam Web Developer",
      "Pratham Kadam Business Website Developer",
    ],
    url: siteConfig.url,
    image: {
      "@type": "ImageObject",
      "@id": `${siteConfig.url}/#profile-image`,
      url: profileImageUrl,
      contentUrl: profileImageUrl,
      caption: siteConfig.ogImageAlt,
    },
    jobTitle: siteConfig.role,
    hasOccupation: {
      "@type": "Occupation",
      name: siteConfig.role,
      occupationalCategory: "Software Developer",
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    homeLocation: {
      "@type": "Place",
      name: siteConfig.location,
    },
    sameAs: siteConfig.sameAs,
    knowsLanguage: ["English", "Hindi", "Gujarati"],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#profile-page`,
    },
    subjectOf: [
      { "@id": `${siteConfig.url}/#profile-page` },
      { "@id": `${siteConfig.url}/#profile-image` },
    ],
    knowsAbout: [
      "Next.js development",
      "React development",
      "Node.js development",
      "Technical SEO",
      "Business website development",
      "Business website developer in Ahmedabad",
      "E-commerce development",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} - Business Website Developer in Ahmedabad`,
    "@id": `${siteConfig.url}/#professional-service`,
    url: siteConfig.url,
    image: profileImageUrl,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    priceRange: "$$",
    areaServed: ["Ahmedabad", "Gujarat", "India", "Remote"],
    founder: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
      "@id": `${siteConfig.url}/#person`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web development services",
      itemListElement: serviceOfferings.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          url:
            service.slug === "business-website-development"
              ? `${siteConfig.url}${siteConfig.businessWebsitePath}`
              : `${siteConfig.url}/services/${service.slug}`,
        },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      "@id": `${siteConfig.url}/#person`,
    },
    about: {
      "@type": "Person",
      name: siteConfig.name,
      "@id": `${siteConfig.url}/#person`,
    },
    hasPart: [
      {
        "@type": "CreativeWork",
        "@id": `${llmResourceUrls.llmsTxt}#llm-summary`,
        name: "Pratham Kadam LLM summary",
        url: llmResourceUrls.llmsTxt,
        encodingFormat: "text/markdown",
        about: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
      {
        "@type": "CreativeWork",
        "@id": `${llmResourceUrls.llmsFullTxt}#llm-full-context`,
        name: "Pratham Kadam full LLM context",
        url: llmResourceUrls.llmsFullTxt,
        encodingFormat: "text/markdown",
        about: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
      {
        "@type": "CreativeWork",
        "@id": `${llmResourceUrls.aiSummary}#ai-summary`,
        name: "Pratham Kadam AI summary",
        description:
          "Machine-readable AI summary for Pratham Kadam, freelance full stack developer in Ahmedabad, India.",
        url: llmResourceUrls.aiSummary,
        encodingFormat: "application/json",
        about: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: siteConfig.title,
    "@id": `${siteConfig.url}/#profile-page`,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    primaryImageOfPage: {
      "@id": `${siteConfig.url}/#profile-image`,
    },
    mainEntity: {
      "@id": `${siteConfig.url}/#person`,
    },
    about: {
      "@id": `${siteConfig.url}/#person`,
    },
    significantLink: [
      `${siteConfig.url}/who-is-pratham-kadam`,
      `${siteConfig.url}${siteConfig.businessWebsitePath}`,
      `${siteConfig.url}/about-pratham-kadam`,
      `${siteConfig.url}/services`,
      `${siteConfig.url}/my-work`,
      `${siteConfig.url}/blog`,
      llmResourceUrls.llmsTxt,
      llmResourceUrls.llmsFullTxt,
      llmResourceUrls.aiSummary,
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: `${siteConfig.name} profile photo - full stack developer in Ahmedabad`,
    "@id": `${siteConfig.url}/#profile-image`,
    contentUrl: profileImageUrl,
    thumbnailUrl: profileImageUrl,
    url: profileImageUrl,
    caption: siteConfig.ogImageAlt,
    description:
      "Profile photo of Pratham Kadam, freelance full stack developer from Ahmedabad, Gujarat, India.",
    creator: {
      "@id": `${siteConfig.url}/#person`,
    },
    representativeOfPage: true,
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured portfolio projects",
    itemListElement: featuredProjects.slice(0, 6).map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: `${siteConfig.url}${project.link}`,
      description: project.description,
    })),
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body className="pb-20 md:pb-0">
        <GoogleAnalytics />
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <StickyMobileCTA />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
