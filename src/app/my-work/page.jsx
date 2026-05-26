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
  const portfolioJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Web Development Portfolio",
    url: `${siteConfig.url}/my-work`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: featuredProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: project.link,
        description: project.description,
      })),
    },
  };

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
