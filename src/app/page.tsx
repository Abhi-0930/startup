import Hero from "@/components/Hero";
import FeatureProject from "@/components/FeatureProject";
import LogoTicker from "@/components/LogoTicker";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import Testimonials from "@/components/Testimonials";
import Challenges from "@/components/Challenges";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Stats from "@/components/Stats";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Code Loom | Professional Web Design & AI Engineering For Founders",
  description: "Code Loom builds conversion-driven websites and high-performance AI applications for ambitious startups and founders. Engineered for growth, designed for clarity.",
};

export default function Home() {
  const sections = [
    { component: <Hero />, key: "hero", bgColor: "bg-white" },
    { component: <FeatureProject />, key: "feature", bgColor: "bg-white" },
    { component: <LogoTicker />, key: "ticker", bgColor: "bg-white" },
    { component: <Stats />, key: "stats", bgColor: "bg-white" },
    { component: <Testimonials />, key: "testimonials", bgColor: "bg-white" },
    { component: <Challenges />, key: "challenges", bgColor: "bg-white" },
    { component: <Services />, key: "services", bgColor: "bg-white" },
    { component: <Process />, key: "process", bgColor: "bg-white" },
    { component: <Projects />, key: "projects", bgColor: "bg-white" },
    { component: <WhatMakesUsDifferent />, key: "what-makes-us-different", bgColor: "bg-white" },
    { component: <FAQ />, key: "faq", bgColor: "bg-zinc-50" },
    { component: <FinalCTA />, key: "final-cta", bgColor: "bg-white" },
  ];

  return (
    <main className="flex-1 bg-white">
      {sections.map((section, index) => (
        <ScrollReveal key={section.key} index={index} bgColor={section.bgColor}>
          {section.component}
        </ScrollReveal>
      ))}
    </main>
  );
}
