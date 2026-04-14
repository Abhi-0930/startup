import React from "react";
import { FileText } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Code Loom",
  description: "Terms and conditions for using Code Loom's website and design/engineering services.",
  robots: { index: false, follow: true },
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 text-zinc-400 mb-6">
            <FileText size={24} />
            <span className="text-[12px] font-bold uppercase tracking-[0.3em]">Legal</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8">
            Terms of Service.
          </h1>
          <p className="text-xl text-zinc-500 font-medium">
            Last updated: April 11, 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="prose prose-zinc prose-xl max-w-none space-y-12 text-zinc-600 font-medium leading-relaxed">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Code Loom website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">2. Use of License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Code Loom's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">3. Service Provision</h2>
            <p>
              Code Loom provides high-performance design and engineering services. All project scope, timelines, and deliverables are governed by individual client contracts which supersede these general terms in the event of a conflict.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">4. Intellectual Property</h2>
            <p>
              The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Code Loom, its licensors, or other providers of such material.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">5. Disclaimer</h2>
            <p>
              The materials on Code Loom's website are provided on an 'as is' basis. Code Loom makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
