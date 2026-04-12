"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Send, Sparkles, Check, X } from "lucide-react";

const founders = [
  {
    name: "Abhishek",
    role: "Founder",
    image: "/about/abhi.jpg",
    bio: "Visionary designer and strategist focused on high-performance digital ecosystems.",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Chandan",
    role: "Co-founder",
    image: "/about/chandan.jpg",
    bio: "Engineering lead dedicated to building scalable, robust, and pixel-perfect applications.",
    twitter: "#",
    linkedin: "#",
  },
];

const comparison = [
  {
    label: "Code Loom Approach",
    items: [
      "Rapid deployment in days, not months.",
      "Fixed pricing with clear deliverables.",
      "Direct communication with builders.",
      "Modern, scalable tech stack (Next.js, Tailwind).",
    ],
    isPrimary: true,
  },
  {
    label: "Traditional Agency",
    items: [
      "Lengthy discovery and slow cycles.",
      "Hidden costs and scope creep.",
      "Layers of project management.",
      "Rigid systems and legacy code.",
    ],
    isPrimary: false,
  },
];

const milestones = [
  {
    year: "2025",
    title: "The Foundation",
    desc: "Code Loom was born from a vision to bridge the gap between design and scalable engineering.",
  },
  {
    year: "2026",
    title: "Rapid Growth",
    desc: "Scaling to support high-growth startups with design-led engineering and dedicated 24/7 ops.",
  },
];



export default function AboutPage() {
  const [activeFounder, setActiveFounder] = React.useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#fcfcfc] selection:bg-black selection:text-white">
      {/* 1. Hero Section - Massive Typography */}
      <section className="relative pt-20 pb-12 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 border border-black/5 text-zinc-500 font-bold text-[12px] uppercase tracking-widest mb-4">
              <Sparkles size={14} className="text-zinc-400" />
              <span>Collective Intelligence</span>
            </div>
            <h1 className="text-[12vw] md:text-[8vw] font-black leading-[0.9] tracking-tighter text-[#09090b] uppercase">
              Partners for <br />
              <span className="text-zinc-300">growth.</span>
            </h1>
            <p className="mt-8 md:mt-12 text-lg md:text-2xl text-zinc-500 font-medium max-w-3xl mx-auto leading-relaxed">
              We empower high-growth teams with design and engineering excellence that scales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1.5. Our Story Section - Lamossa Fidelity */}
      <section className="py-16 md:py-32 px-6 bg-white border-y border-zinc-100">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column: Narrative */}
            <div>
              <div className="sticky top-40 flex flex-col items-start gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-orange" />
                  <span className="text-[12px] font-black uppercase tracking-[0.2em] text-zinc-900">Our Story</span>
                </div>
                <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-zinc-900 uppercase leading-[0.9]">
                  Our journey <br />
                  <span className="text-zinc-300">matters.</span>
                </h2>
                <div className="max-w-md space-y-4 md:space-y-6">
                  <p className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed">
                    Code Loom started with a simple belief: that high-performance teams deserve more than just "good enough" sites. 
                  </p>
                  <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed">
                    We've spent thousands of hours perfecting a workflow that prioritizes speed, aesthetic beauty, and technical robustness. Today, we're the silent partner behind some of the most innovative digital platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Milestones */}
            <div className="divide-y divide-zinc-100 -mt-12 md:mt-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="py-8 md:py-12 flex flex-col md:flex-row items-baseline gap-8 md:gap-16 group cursor-default"
                >
                  <div className="text-xl font-bold text-zinc-300 group-hover:text-black transition-colors w-16">
                    {milestone.year}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-2xl font-bold text-zinc-900 flex items-center gap-3">
                      {milestone.title}
                      <ArrowRight size={18} className="text-zinc-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-lg text-zinc-500 font-medium leading-relaxed max-w-md">
                      {milestone.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 2. Why Work With Us - Comparison Grid */}
      <section className="py-16 md:py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-zinc-900 uppercase">
              Why work <br /> <span className="text-zinc-300 italic">with us?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {comparison.map((side) => (
              <motion.div
                key={side.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-6 md:p-12 rounded-[32px] md:rounded-[48px] border ${
                  side.isPrimary 
                    ? "bg-black text-white border-white/10 shadow-2xl shadow-black/20" 
                    : "bg-white text-zinc-900 border-zinc-100"
                }`}
              >
                <h3 className={`text-2xl font-bold mb-10 ${side.isPrimary ? "text-white" : "text-zinc-900"}`}>
                  {side.label}
                </h3>
                <div className="space-y-6">
                  {side.items.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className={`mt-1 p-1 rounded-full ${side.isPrimary ? "bg-white/10 text-white" : "bg-zinc-100 text-zinc-400"}`}>
                        {side.isPrimary ? <Check size={16} /> : <X size={16} />}
                      </div>
                      <p className={`text-[17px] font-medium leading-snug ${side.isPrimary ? "text-zinc-300" : "text-zinc-500"}`}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5. Careers CTA - Join Our Team */}
      <section className="pb-12 md:pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-black rounded-[24px] md:rounded-[48px] p-6 md:p-20 relative overflow-hidden group">
            {/* Dot Pattern Background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="space-y-3 md:space-y-4 text-center md:text-left">
                <h2 className="text-2xl md:text-6xl font-black tracking-tight text-white leading-tight">
                  Want to work <br />
                  <span className="text-zinc-500">with us?</span>
                </h2>
              </div>

              <Link 
                href="/career" 
                className="group/btn flex items-center bg-white rounded-full pl-5 pr-2 py-2 gap-4 transition-all hover:scale-105 shadow-xl shadow-black/20"
              >
                <span className="text-black font-bold text-base md:text-xl uppercase tracking-tight">Join Us</span>
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-black/5 flex items-center justify-center transition-transform group-hover/btn:rotate-[-45deg]">
                  <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-black" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Section - "The minds behind Code Loom" */}
      <section className="py-16 md:py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center mb-16 md:mb-24 text-center space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-zinc-900 uppercase">
              The minds behind <br /> <span className="text-zinc-300 italic">Code Loom.</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-500 font-medium max-w-2xl italic">
              "Building the future of digital performance, one pixel at a time."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group flex flex-col items-center"
              >
                {/* Portrait Card */}
                <div 
                  onClick={() => setActiveFounder(activeFounder === founder.name ? null : founder.name)}
                  className="relative w-full aspect-[4/5] rounded-[32px] md:rounded-[64px] overflow-hidden mb-6 md:mb-8 border-[6px] md:border-[8px] border-white shadow-2xl shadow-black/10 transition-transform duration-500 group-hover:scale-[1.02] cursor-pointer"
                >
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                      activeFounder === founder.name ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
                    }`}
                  />
                  <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                    activeFounder === founder.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                  <div className={`absolute top-8 right-8 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold text-[13px] uppercase tracking-widest transition-all duration-300 ${
                    activeFounder === founder.name ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                  }`}>
                    {founder.role}
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl md:text-4xl font-bold text-zinc-900">{founder.name}</h3>
                    <p className="text-zinc-400 font-bold uppercase tracking-widest text-[11px] md:text-[13px]">{founder.role}</p>
                  </div>
                  <p className="text-base md:text-lg text-zinc-500 font-medium max-w-sm mx-auto">
                    {founder.bio}
                  </p>
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <Link href={founder.twitter} className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-black hover:border-black transition-all">
                      <Send size={20} />
                    </Link>
                    <Link href={founder.linkedin} className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-black hover:border-black transition-all">
                      <Globe size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="pb-16 md:pb-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black rounded-[32px] md:rounded-[48px] p-8 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8">
              <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Let's build your <br />
                <span className="text-brand-orange">next growth engine.</span>
              </h2>
              <Link 
                href="/book" 
                className="flex items-center gap-4 bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-brand-orange hover:text-white transition-all transform hover:scale-105 shadow-xl shadow-black/20"
              >
                <span>Start A Project</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
