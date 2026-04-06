"use client";
import { useRef, ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ChallengeItem {
  id: string;
  challenge: string;
  description: string;
  solution: string;
  imageSrc: string;
}

const challengesData: ChallengeItem[] = [
  {
    id: "01",
    challenge: "Outdated or No Online Presence",
    description: "Businesses lose potential clients daily because their website looks unprofessional, loads slowly, or doesn't even exist yet. First impressions happen online now.",
    solution: "We build fast, modern websites that make your business look credible and convert visitors into paying customers from day one.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "02",
    challenge: "Outdated Technology Stack",
    description: "Using old, slow systems makes it impossible to provide the fast and secure experience that modern customers expect today.",
    solution: "We build high-speed Web, App, and AI systems with Next.js, React Native, and Multi-Agentic AI to handle more users and scale easily.",
    imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "03",
    challenge: "Too Much Manual Work",
    description: "Your team spends hours on repetitive tasks that should be automated, slowing down your business growth.",
    solution: "We build custom AI agents that handle the boring work, letting your team focus on what actually matters.",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "04",
    challenge: "Slow Website Performance",
    description: "A slow website frustrates your users, kills your search rankings, and makes you lose money every single second.",
    solution: "We optimize every line of code to ensure your site loads instantly on any device, anywhere in the world.",
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
  }
];

function ChallengeCard({ item }: { item: ChallengeItem }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div 
      className="group relative w-full bg-white rounded-[24px] md:rounded-[28px] p-4 pb-6 md:p-5 md:pb-7 overflow-hidden cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-neutral-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {/* Media Container (Top) */}
      <div className="relative w-full aspect-[1.4/1] rounded-[18px] md:rounded-[20px] overflow-hidden bg-neutral-50 border border-neutral-100/50 mb-7">
        <img
           src={item.imageSrc}
           alt={item.challenge}
           className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] ease-linear ${isActive ? 'scale-105' : 'scale-100'}`}
        />
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/2"></div>
      </div>

      {/* Content Container (Bottom) */}
      <div className="px-1 text-left">
        {/* Dynamic Badge Area */}
        <div className="relative h-6 flex items-center mb-3">
          <div className={`absolute left-0 bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 transition-all duration-500 ${isActive ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
            <span className="text-red-600 text-[10px] font-bold tracking-wider uppercase">Problem</span>
          </div>

          <div className={`absolute left-0 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <span className="text-emerald-600 text-[10px] font-bold tracking-wider uppercase">Solution</span>
          </div>
        </div>

        {/* Challenge Header */}
        <h3 className="text-[#0a0a0b] text-[18px] md:text-[21px] font-bold leading-tight mb-2.5 tracking-tight group-hover:text-black transition-colors text-left">
          {item.challenge}
        </h3>
        
        {/* Text Reveal Logic: Problem vs Solution */}
        <div className="relative min-h-[50px] md:min-h-[60px] text-left">
          {/* Problem Text */}
          <p className={`text-zinc-500 text-[14px] md:text-[15px] leading-relaxed transition-all duration-500 absolute inset-0 text-left ${isActive ? 'opacity-0 invisible -translate-x-4' : 'opacity-100 visible translate-x-0'}`}>
            {item.description}
          </p>
          
          {/* Solution Text */}
          <div className={`transition-all duration-500 absolute inset-0 text-left ${isActive ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-4'}`}>
            <p className="text-[#0a0a0b] text-[14px] md:text-[15px] leading-relaxed font-normal text-left">
              {item.solution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Challenges() {
  return (
    <section id="challenges" className="pt-0 pb-12 md:pt-0 md:pb-20 max-w-[1000px] mx-auto px-6">
      
      {/* Centered Header Section */}
      <div className="mb-14 md:mb-20 text-center">
        <h2 className="text-[2.2rem] md:text-5xl lg:text-[4.2rem] font-black tracking-tighter text-neutral-900 leading-[1.05] mb-6 md:mb-8">
          The challenges <br className="hidden md:block" />
          <span className="text-neutral-400">modern businesses face.</span>
        </h2>
      </div>

      {/* 2-Column Grid (2x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {challengesData.map((item) => (
           <ChallengeCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
