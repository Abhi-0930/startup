import Hero from "@/components/Hero";
import FeatureProject from "@/components/FeatureProject";
import LogoTicker from "@/components/LogoTicker";
import Testimonials from "@/components/Testimonials";
import Challenges from "@/components/Challenges";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FeatureProject />
      <LogoTicker />
      <Testimonials />
      <Challenges />
      <Services />
      <Projects />
    </main>
  );
}
