import AboutPageClient from "@/components/AboutPageClient";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Code Loom | Partners for Digital Growth",
  description: "Learn about Code Loom's mission to bridge the gap between visionary design and scalable engineering for high-growth startups.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
