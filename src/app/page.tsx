import Hero from "@/components/Hero";
import FeatureProject from "@/components/FeatureProject";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FeatureProject />
      <Projects />
    </main>
  );
}
