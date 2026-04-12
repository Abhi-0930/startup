"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { ProjectData } from "@/data/projects";

export default function ProjectHero({ project }: { project: ProjectData }) {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background Image with Parallax & Contrast */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-transparent to-neutral-900" />
      </motion.div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-zinc-400 uppercase tracking-[0.3em] font-bold text-sm mb-6">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-8 max-w-5xl leading-[1.05]">
            {project.title}
          </h1>
          <p className="text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed opacity-80 mb-12">
            {project.subtitle}
          </p>

          {project.liveLink && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all active:scale-95 shadow-2xl shadow-white/10"
              >
                <span>Visit Site</span>
                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowDown size={18} className="-rotate-[135deg]" />
                </div>
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">Scroll to explore</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
