import { Metadata } from "next";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Innovation from "./components/home/innovation";
import OnlinePresence from "./components/home/online-presence";
import Solutions from "./components/home/solution";
import WebResult from "./components/home/web-result";
import About from "./components/about/about";
import TechTools from "./components/home/TechTools/TechTools";

export const metadata: Metadata = {
    title: "Home | Awake Agency",
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
      <Faq />
      <Solutions />
    </main>
  )
}
