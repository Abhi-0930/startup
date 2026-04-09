"use client";
import { ProjectData } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProjectOverview({ project }: { project: ProjectData }) {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-4 md:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 relative">
          
          {/* Main Content (LHS) */}
          <div className="md:col-span-7 space-y-16">
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
            <div className="grid grid-cols-3 gap-8 p-12 bg-zinc-50 rounded-[40px] border border-zinc-100">
              {project.impact.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <span className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-900">{stat.value}</span>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400">{stat.label}</span>
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
                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {project.stack.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2 group">
                      <div className="w-1 h-1 rounded-full bg-zinc-300 group-hover:bg-blue-500 transition-colors" />
                      <span className="text-[13px] font-semibold text-zinc-700">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-zinc-100">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Launch Year</span>
                  <span className="text-sm font-bold text-zinc-900">{project.year}</span>
                </div>
                {project.liveLink && (
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
