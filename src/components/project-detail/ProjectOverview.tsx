"use client";
import { useState, useRef, useEffect } from "react";
import { ProjectData } from "@/data/projects";
import { ExternalLink, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ProjectOverview({ project }: { project: ProjectData }) {
  const [isVisitOpen, setIsVisitOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsVisitOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="pt-12 md:pt-16 pb-24 md:pb-40 bg-white">
      <div className="container mx-auto px-4 md:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 relative">
          
          {/* Main Content (LHS) */}
          <div className="md:col-span-7 space-y-12">
            {/* Breadcrumbs */}
            <Breadcrumb>
              <BreadcrumbList className="text-[10px] uppercase tracking-[0.2em] font-normal">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild className="hover:text-zinc-900 transition-colors">
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="opacity-30" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild className="hover:text-zinc-900 transition-colors">
                    <Link href="/#work">Work</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="opacity-30" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-zinc-400 font-normal">{project.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 uppercase tracking-widest text-sm text-zinc-400">The Summary</h2>
              <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-zinc-100">
              <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">The Challenge</h3>
                <p className="text-zinc-600 leading-loose">
                  {project.challenge}
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">The Strategy</h3>
                <p className="text-zinc-600 leading-loose">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-12 p-6 md:p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
              {project.impact.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900">{stat.value}</span>
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Sidebar (RHS) */}
          <div className="md:col-span-5 h-fit md:sticky md:top-32">
            <div className="p-8 md:p-12 rounded-[40px] border border-zinc-100 bg-white shadow-xl shadow-zinc-200/20 space-y-12">
              
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Services</h4>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, idx) => (
                    <span key={idx} className="px-3 py-1 bg-zinc-100 rounded-full text-[12px] font-medium text-zinc-600">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Tech Stack</h4>
                <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                  {project.stack.map((tech, idx) => {
                    // Slug mapping for Simple Icons
                    const slugMap: Record<string, string> = {
                      "Next.js": "nextdotjs",
                      "TypeScript": "typescript",
                      "Tailwind CSS": "tailwindcss",
                      "Framer Motion": "framer",
                      "React": "react",
                      "GSAP": "greensock",
                      "Three.js": "threedotjs",
                      "Sanity CMS": "sanity",
                      "R3F": "threedotjs" // Using Three.js icon for R3F
                    };
                    const slug = slugMap[tech.name] || tech.name.toLowerCase().replace(/\s+/g, "");
                    const iconUrl = `https://cdn.simpleicons.org/${slug}/52525b`; // Zinc-600

                    return (
                      <div key={idx} className="flex items-center gap-3 group">
                        <div className="w-6 h-6 p-1 rounded-sm bg-zinc-50 border border-zinc-100 flex items-center justify-center transition-colors group-hover:border-zinc-200">
                          <img 
                            src={iconUrl} 
                            alt={tech.name} 
                            className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                            onError={(e) => {
                              // Fallback if icon not found
                              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${tech.name[0]}&background=f4f4f5&color=71717a&size=32`;
                            }}
                          />
                        </div>
                        <span className="text-[13px] font-semibold text-zinc-700">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-zinc-100">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Launch Year</span>
                  <span className="text-sm font-bold text-zinc-900">{project.year}</span>
                </div>
                {(project.adminLink && (project.userLink || project.liveLink)) ? (
                  <div 
                    ref={menuRef}
                    className="relative"
                    onMouseEnter={() => setIsVisitOpen(true)}
                    onMouseLeave={() => setIsVisitOpen(false)}
                  >
                    <button 
                      onClick={() => setIsVisitOpen(!isVisitOpen)}
                      className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold hover:bg-black transition-all group lg:min-w-[140px] justify-center"
                    >
                      <span>Visit Site</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${isVisitOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Hover/Click Menu */}
                    <AnimatePresence>
                      {isVisitOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute bottom-full right-0 mb-4 z-50 pointer-events-auto"
                        >
                          <div className="bg-white rounded-2xl shadow-2xl border border-zinc-100 p-2 min-w-[200px]">
                            <Link 
                              href={(project.userLink || project.liveLink) as string}
                              target="_blank"
                              onClick={() => setIsVisitOpen(false)}
                              className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors text-sm font-bold text-zinc-900 group/link"
                            >
                              <span>User Panel</span>
                              <ExternalLink size={12} className="opacity-40 group-hover/link:opacity-100 transition-opacity" />
                            </Link>
                            <Link 
                              href={project.adminLink}
                              target="_blank"
                              onClick={() => setIsVisitOpen(false)}
                              className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors text-sm font-bold text-zinc-900 group/link"
                            >
                              <span>Admin Panel</span>
                              <ExternalLink size={12} className="opacity-40 group-hover/link:opacity-100 transition-opacity" />
                            </Link>
                          </div>
                          <div className="absolute top-full right-8 -mt-1 border-8 border-transparent border-t-white filter drop-shadow(0 1px 0 rgba(0,0,0,0.05))" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : project.liveLink && (
                  <Link 
                    href={project.liveLink}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold hover:bg-black transition-all group"
                  >
                    <span>Visit Site</span>
                    <ExternalLink size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
