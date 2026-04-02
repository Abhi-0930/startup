import Hero from "@/components/Hero";
import FeatureProject from "@/components/FeatureProject";
import LogoTicker from "@/components/LogoTicker";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FeatureProject />
      <LogoTicker />
      <Projects />
    </main>
  );
}
