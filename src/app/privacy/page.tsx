import React from "react";
import { ShieldCheck } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Code Loom",
  description: "Code Loom's privacy policy regarding the collection, use, and protection of your personal information.",
  robots: { index: false, follow: true }, // Don't index legal docs but follow links
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 text-zinc-400 mb-6">
            <ShieldCheck size={24} />
            <span className="text-[12px] font-bold uppercase tracking-[0.3em]">Legal</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8">
            Privacy Policy.
          </h1>
          <p className="text-xl text-zinc-500 font-medium">
            Last updated: April 11, 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="prose prose-zinc prose-xl max-w-none space-y-12 text-zinc-600 font-medium leading-relaxed">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">1. Introduction</h2>
            <p>
              At Code Loom, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">2. Information We Collect</h2>
            <p>
              We collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Identity Data: Name, username, or similar identifier.</li>
              <li>Contact Data: Email address and telephone numbers.</li>
              <li>Technical Data: IP address, browser type, and location.</li>
              <li>Usage Data: Information about how you use our website and services.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">3. How We Use Your Information</h2>
            <p>
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>To present our website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To notify you about changes to our website or any products or services we offer.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">4. Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. The safety and security of your information also depends on you.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">5. Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy practices, contact us at:
            </p>
            <p className="font-bold text-zinc-900">
              hello@codeloom.in
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
