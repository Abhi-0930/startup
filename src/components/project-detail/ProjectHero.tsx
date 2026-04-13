"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ChevronDown, ExternalLink } from "lucide-react";
import { ProjectData } from "@/data/projects";

export default function ProjectHero({ project }: { project: ProjectData }) {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background Image with Deep Parallax & Cinematic Blur Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover object-top filter contrast-[1.1] saturate-[0.9]"
            priority
          />
        </motion.div>
        
        {/* The 'Lens' - A masked blur that clarifies the center for text without hard edges */}
        <div 
          className="absolute inset-0 z-10 backdrop-blur-3xl"
          style={{
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)'
          }}
        />

        {/* Cinematic Vignette & Deep Gradient */}
        <div className="absolute inset-0 bg-neutral-950/20 z-[5]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950 z-[15]" />
      </div>

      {/* Content Overlay - Agency Premium Typography */}
      <div className="container mx-auto px-4 relative z-30">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="text-zinc-400 uppercase tracking-[0.4em] font-extrabold text-[10px] md:text-xs mb-8 md:mb-10 block animate-pulse">
              {project.category}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 md:mb-8 leading-[1.05] max-w-4xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className="inline-block whitespace-nowrap">
                  {word}{i !== project.title.split(' ').length - 1 && '\u00A0'}
                </span>
              ))}
            </h1>
            
            <p className="text-sm md:text-base text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed opacity-90 mb-10 md:mb-12 drop-shadow-md">
              {project.subtitle}
            </p>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              {(project.adminLink && (project.userLink || project.liveLink)) ? (
                <ProjectVisitDropdown project={project} />
              ) : project.liveLink && (
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-6 bg-white text-black px-10 py-5 rounded-full font-black text-lg transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)] overflow-hidden"
                >
                  <span className="relative z-10">Visit Project</span>
                  <div className="relative z-10 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-transform group-hover:rotate-45">
                    <ArrowDown size={18} className="-rotate-[135deg]" />
                  </div>
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
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

function ProjectVisitDropdown({ project }: { project: ProjectData }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div 
      ref={menuRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group inline-flex items-center gap-4 bg-white text-black px-6 py-3 rounded-full font-bold text-base hover:bg-zinc-200 transition-all active:scale-95 shadow-2xl shadow-white/10"
      >
        <span>Visit Site</span>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 z-50 min-w-[200px]"
          >
            <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
              <a 
                href={project.userLink || project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm font-bold text-white group/link"
              >
                <span>{project.userLinkLabel || "User Panel"}</span>
                <ExternalLink size={14} className="opacity-40 group-hover/link:opacity-100 transition-opacity" />
              </a>
              <a 
                href={project.adminLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm font-bold text-white group/link"
              >
                <span>{project.adminLinkLabel || "Admin Panel"}</span>
                <ExternalLink size={14} className="opacity-40 group-hover/link:opacity-100 transition-opacity" />
              </a>
            </div>
            {/* Arrow */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-8 border-transparent border-b-zinc-900/90 ml-0" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
