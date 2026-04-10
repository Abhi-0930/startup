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

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FeatureProject />
      <LogoTicker />
      <Testimonials />
      <Challenges />
      <Services />
      <Process />
      <Projects />
      <WhatMakesUsDifferent />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
