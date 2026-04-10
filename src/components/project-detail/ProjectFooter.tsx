"use client";
import { ProjectData, projectsData } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectFooter({ currentId }: { currentId: string }) {
  // Get all other projects for the "More Case Studies" section
  const otherProjects = projectsData.filter(p => p.id !== currentId);

  return (
    <div className="bg-white">
      {/* More Work Section */}
      <section className="py-24 md:py-32 border-t border-zinc-100">
        <div className="container mx-auto px-4 md:px-12 max-w-[1400px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <span className="text-zinc-400 uppercase tracking-[0.3em] font-bold text-[10px]">Case Studies</span>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">More case studies like this</h2>
            </div>
            <Link 
              href="/#work" 
              className="group flex items-center gap-2 text-sm font-bold text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <span>View all work</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {otherProjects.map((project) => (
              <Link 
                key={project.id}
                href={`/projects/${project.id}`}
                className="group flex flex-col gap-6"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-[32px] border border-zinc-100 shadow-sm bg-zinc-50">
                  <Image 
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>
                <div className="flex items-center justify-between px-2">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-zinc-900">{project.title}</h3>
                    <p className="text-sm font-medium text-zinc-500">{project.category}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center transition-all duration-300 group-hover:bg-zinc-900 group-hover:border-zinc-900">
                    <ArrowRight size={20} className="text-zinc-400 transition-colors group-hover:text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Call CTA - Pattern Style - FULL WIDTH */}
      <section className="relative w-full bg-[#09090b] py-24 md:py-40 overflow-hidden">
        {/* Animated Moving Dot Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.3] pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)', 
            backgroundSize: '24px 24px',
            maskImage: 'linear-gradient(to right, transparent, rgba(0,0,0,0.2) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.2) 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, rgba(0,0,0,0.2) 20%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.2) 80%, transparent)',
            maskSize: '200% 100%',
            WebkitMaskSize: '200% 100%',
          }} 
          animate={{ 
            maskPosition: ["-100% 0%", "200% 0%"],
            WebkitMaskPosition: ["-100% 0%", "200% 0%"]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        <div className="container mx-auto px-4 md:px-12 max-w-[1400px] relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl space-y-2 md:space-y-4">
              <div className="text-3xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-white">You focus </span>
                <span className="text-zinc-600">on</span>
              </div>
              <div className="text-3xl md:text-7xl font-bold tracking-tight leading-tight text-zinc-600">
                your company.
              </div>
              <div className="text-3xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-zinc-600">We make </span>
                <span className="text-white italic">it happen.</span>
              </div>
              <div className="text-3xl md:text-7xl font-bold tracking-tight leading-tight text-white pt-2 md:pt-4">
                Unstoppable Growth.
              </div>
            </div>

            <div className="flex-shrink-0">
              <Link 
                href="/book" 
                className="group inline-flex items-center gap-6 bg-white rounded-full pl-8 pr-3 py-3 shadow-xl transition-all hover:pr-4"
              >
                <span className="text-black font-bold text-lg md:text-xl">Book A Call</span>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/5 flex items-center justify-center transition-all group-hover:bg-zinc-100">
                  <ArrowRight className="text-black" size={24} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
