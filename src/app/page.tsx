import { Metadata } from "next";
import HeroSection from "./components/home/hero";
import Innovation from "./components/home/innovation";
import OnlinePresence from "./components/home/online-presence";
import Solutions from "./components/home/solution";
import WebResult from "./components/home/web-result";
import About from "./components/about/about";
import TechTools from "./components/home/TechTools/TechTools";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pratham Kadam - Freelance Full Stack Developer Portfolio",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pratham Kadam - Freelance Full Stack Developer Portfolio",
    description: siteConfig.description,
    url: "/",
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
    title: "Pratham Kadam - Freelance Full Stack Developer Portfolio",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};


export default function Home() {
  return (
    <main>
      <HeroSection />
      <WebResult />
      <About />
      <Innovation />
      <TechTools />
      <OnlinePresence />
      <Solutions />
    </main>
  )
}
