"use client";
import { ProjectData, projectsData } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectFooter({ currentId }: { currentId: string }) {
  // Find the next project in the list, or loop back to the first one
  const currentIndex = projectsData.findIndex(p => p.id === currentId);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full group overflow-hidden bg-neutral-900">
      <Link href={`/projects/${nextProject.id}`} className="absolute inset-0 block z-20">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-30">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="text-zinc-400 uppercase tracking-[0.4em] font-bold text-xs">Next Case Study</span>
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tight transition-transform duration-700 group-hover:scale-105">
              {nextProject.title}
            </h2>
            <div className="flex items-center justify-center gap-4 pt-8">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:border-white">
                <ArrowRight className="text-white transition-colors duration-300 group-hover:text-neutral-900" size={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </Link>

      {/* Background Image of Next Project */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={nextProject.heroImage} 
          alt="Next Project"
          fill
          className="object-cover opacity-30 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-50"
        />
        <div className="absolute inset-0 bg-neutral-900/40" />
      </div>
    </section>
  );
}
