import Projects from "../components/projects";
import Solutions from "../components/home/solution";
import { featuredProjects, siteConfig } from "@/lib/site";

export const metadata = {
  title: "Web Development Portfolio",
  description:
    "Explore Pratham Kadam's portfolio of business websites, e-commerce builds, education platforms, healthcare websites, and management systems.",
  alternates: {
    canonical: "/my-work",
  },
  openGraph: {
    title: "Web Development Portfolio | Pratham Kadam",
    description:
      "Selected websites and web apps built by freelance full stack developer Pratham Kadam.",
    url: "/my-work",
  },
};

export default function Home() {
  const portfolioJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${siteConfig.url}/my-work#webpage`,
      name: "Web Development Portfolio",
      url: `${siteConfig.url}/my-work`,
      description:
        "Selected websites and web apps built by freelance full stack developer Pratham Kadam.",
      inLanguage: siteConfig.language,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${siteConfig.url}/#person`,
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: featuredProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            "@id": `${siteConfig.url}${project.link}#case-study`,
            name: project.title,
            url: `${siteConfig.url}${project.link}`,
            description: project.description,
            image: `${siteConfig.url}${project.image}`,
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteConfig.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Work",
          item: `${siteConfig.url}/my-work`,
        },
      ],
    },
  ];

  return (
    <>
      <main>
        <Projects />
        <Solutions />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
    </>
    
  );
}
