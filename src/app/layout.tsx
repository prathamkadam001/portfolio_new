import type { Metadata, Viewport } from "next"
import "./globals.css"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer/Footer"
import ScrollToTop from "./components/scroll-to-top"
import Providers from "./providers"
import { featuredProjects, serviceOfferings, siteConfig } from "@/lib/site"

const title = {
  default: siteConfig.title,
  template: `%s | ${siteConfig.name}`,
}
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

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
  alternates: {
    canonical: "/",
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
        alt: `${siteConfig.name} - ${siteConfig.role}`,
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
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    jobTitle: siteConfig.role,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs: Object.values(siteConfig.socialLinks),
    knowsAbout: [
      "Next.js development",
      "React development",
      "Node.js development",
      "Technical SEO",
      "Business website development",
      "E-commerce development",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} - Freelance Full Stack Developer`,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    priceRange: "$$",
    areaServed: ["Ahmedabad", "Gujarat", "India", "Remote"],
    founder: {
      "@type": "Person",
      name: siteConfig.name,
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
          url: `${siteConfig.url}/services/${service.slug}`,
        },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.locale,
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured portfolio projects",
    itemListElement: featuredProjects.slice(0, 6).map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: project.link,
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
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
