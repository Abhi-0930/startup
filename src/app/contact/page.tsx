import ContactPageClient from "@/components/ContactPageClient";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Code Loom | Start Your Project",
  description: "Ready to scale? Connect with Code Loom for high-performance design, full-stack engineering, and AI solutions.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
