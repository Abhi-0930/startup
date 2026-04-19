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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Does Code Loom offer custom end-to-end engineering?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We specialize in bespoke digital infrastructure. From architectural planning to deployment and scaling, we build tailored systems that integrate seamlessly with your business objectives."
                }
              },
              {
                "@type": "Question",
                "name": "What is your typical engagement timeline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For high-performance MVPs, we usually target a 30-day launch window. For complex enterprise environments, timelines typically range from 3 to 6 months, depending on the architectural complexity."
                }
              },
              {
                "@type": "Question",
                "name": "How do you handle post-launch stability and scaling?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Stability is non-negotiable. We provide comprehensive post-launch management, including 24/7 infrastructure monitoring, security patching, and proactive scaling as your user base grows."
                }
              },
              {
                "@type": "Question",
                "name": "Who owns the Intellectual Property and source code?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Upon project completion and final payment, 100% of the intellectual property, source code, and biological assets are transferred to the client. We believe in total transparency and client ownership."
                }
              },
              {
                "@type": "Question",
                "name": "What is your approach to transparency and pricing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We operate on a fixed-fee, value-based model. We provide detailed project blueprints and cost breakdowns upfront, ensuring no hidden fees or unexpected line items during the engineering phase."
                }
              }
            ]
          }),
        }}
      />
      {/* SiteNavigationElement Schema for Google Sitelinks */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "SiteNavigationElement",
                "position": 1,
                "name": "About Us",
                "description": "Learn about our mission and the minds behind Code Loom.",
                "url": "https://codeloom.in/about"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 2,
                "name": "Projects",
                "description": "Explore our portfolio of high-fidelity design and engineering works.",
                "url": "https://codeloom.in#work"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 3,
                "name": "Careers",
                "description": "Join our team of extraordinary builders and designers.",
                "url": "https://codeloom.in/career"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 4,
                "name": "Book a Strategy Session",
                "description": "Schedule a 30-minute deep dive into your product roadmap.",
                "url": "https://codeloom.in/book"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 5,
                "name": "Contact us",
                "description": "Get in touch for custom inquiries and partnerships.",
                "url": "https://codeloom.in/contact"
              }
            ]
          })
        }}
      />
      {sections.map((section, index) => (
        <ScrollReveal key={section.key} index={index} bgColor={section.bgColor}>
          {section.component}
        </ScrollReveal>
      ))}
    </main>
  );
}
