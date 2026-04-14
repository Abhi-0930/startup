"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/Skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";

function ProjectCard({ project, index }: { project: any, index: number }) {
  const [currentImg, setCurrentImg] = useState(0);
  
  const carouselImages = [project.heroImage, ...project.gallery.map((g: any) => g.src)];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className={`flex flex-col gap-6 ${project.span === 'wide' ? 'md:col-span-2' : 'col-span-1'}`}
    >
      <Link 
        href={`/projects/${project.slug}`}
        className="block relative overflow-hidden rounded-[32px] shadow-sm bg-neutral-900 group/image cursor-pointer"
        style={{ 
          aspectRatio: project.span === 'wide' ? '21/9' : '4/3' 
        }}
      >
        {carouselImages.map((src, idx) => {
          const isCurrent = idx === currentImg;
          const isPrev = idx === (currentImg - 1 + carouselImages.length) % carouselImages.length;
          const isActive = isCurrent || isPrev;

          return (
            <div 
              key={src} 
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <Image
                src={src}
                alt={`${project.title} Image ${idx + 1}`}
                fill
                className={`object-cover transition-transform duration-700 group-hover/image:scale-[1.05] ${isActive ? 'active-zoom' : 'scale-[1.15]'}`}
                priority={idx === 0}
              />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
      </Link>

      <div className="flex items-center justify-between px-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-[17px] md:text-[18px] font-semibold tracking-tight text-zinc-900">{project.title}</h3>
          <span className="text-[14px] font-medium text-zinc-500">{project.category}</span>
        </div>
        
        <Link 
          href={`/projects/${project.slug}`}
          className="group w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center transition-all duration-300 hover:w-[58px] overflow-hidden"
        >
          <ArrowRight 
            size={20} 
            className="text-zinc-900 transition-transform duration-300 group-hover:translate-x-1.5" 
          />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const totalImages = projectsData.length;

  useEffect(() => {
    // 200ms minimum threshold to prevent flicker
    const timer = setTimeout(() => setMinTimeElapsed(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Proactive check for cached images
    let count = 0;
    imgRefs.current.forEach((img) => {
      if (img?.complete) count++;
    });
    if (count > 0) setImagesLoaded(count);
  }, []);

  useEffect(() => {
    if (imagesLoaded >= totalImages && minTimeElapsed) {
      setIsLoading(false);
    }
  }, [imagesLoaded, minTimeElapsed, totalImages]);

  return (
    <section id="work" className="pb-24 md:pb-32 pt-8 md:pt-12 px-4 md:px-8 max-w-[950px] mx-auto min-h-[600px] -mt-10 md:-mt-16 relative z-20">
      <div className="flex flex-col items-center justify-center mb-16 text-center">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="projects-header-skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center w-full space-y-4"
            >
              <Skeleton className="h-8 md:h-10 w-64 md:w-96" />
              <Skeleton className="h-4 w-48 md:w-64" />
            </motion.div>
          ) : (
            <motion.div 
              key="projects-header"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center w-full space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
                Selected Work
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
                Words Are Easy. Here Is Our Work.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="projects-grid-skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {projectsData.map((project, i) => (
              <div key={project.id} className={`space-y-6 ${i === projectsData.length - 1 ? 'md:col-span-2' : ''}`}>
                <Skeleton 
                  className="w-full rounded-[32px]" 
                  style={{ aspectRatio: i === projectsData.length - 1 ? '21/9' : '4/3' }}
                />
                <div className="flex items-center justify-between px-2">
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="w-12 h-12 rounded-full" />
                </div>
              </div>
            ))}

            {/* Hidden preloader for project images */}
            <div className="hidden" aria-hidden="true">
              {projectsData.map((project, index) => (
                <img 
                  key={`pre-${project.id}`}
                  ref={(el) => { imgRefs.current[index] = el; }}
                  src={project.heroImage} 
                  onLoad={() => setImagesLoaded(prev => prev + 1)} 
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="projects-grid-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
