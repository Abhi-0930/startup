"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/Skeleton";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Finlytics Redesign",
    category: "UX/UI Design",
    images: [
      "/project1/zvQ7tedi7AxHplgmospF42dcjQo.png_width=1200&height=800.png",
      "/project1/5kd7Hmen8Zb7gfwj1BZyuA0ko.png_width=1200&height=800.png",
      "/project1/MAVstedJYqQvsrJ7l1kxjR498.jpg_width=1200&height=904.png",
    ],
    span: "normal",
    delay: "0s",
  },
  {
    id: "02",
    title: "Atlas Technologies",
    category: "Web & Brand Design",
    images: [
      "/project2/xktGFEeTfvx5MDldvQxlaw79M.png_width=800&height=1200.png",
      "/project2/vdtm4vbMi9SyPgj2Z1bVuq9b2o.png_width=960&height=1200.png",
    ],
    span: "normal",
    delay: "-5s",
  },
  {
    id: "03",
    title: "Orbital Bank",
    category: "Motion & 3D Design",
    images: [
      "/project3/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png_width=2400&height=1600.png",
      "/project3/1KCYDj61X5Ycm5Vp5kluuhMho.png_width=2400&height=1600.png",
      "/project3/TwCiV5MUt16Q38ftZYKlEhNhbJI.png_width=1984&height=2400.png",
    ],
    span: "wide",
    delay: "-10s",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const rawId = parseInt(project.id);
    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % project.images.length);
      }, 3500);
      return () => clearInterval(timer);
    }, rawId * 500);
    return () => clearTimeout(timeout);
  }, [project.images.length, project.id]);

  return (
    <div className={`group flex flex-col gap-6 ${project.span === 'wide' ? 'md:col-span-2' : 'col-span-1'}`}>
      <div 
        className="relative overflow-hidden rounded-[32px] border border-black/5 shadow-sm bg-neutral-900"
        style={{ 
          aspectRatio: project.span === 'wide' ? '21/9' : '4/3' 
        }}
      >
        {project.images.map((src, idx) => {
          const isCurrent = idx === currentImg;
          const isPrev = idx === (currentImg - 1 + project.images.length) % project.images.length;
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
                className={`object-cover ${isActive ? 'active-zoom' : 'scale-[1.15]'}`}
                priority={idx === 0}
              />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
      </div>

      <div className="flex items-center justify-between px-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-[22px] font-semibold tracking-tight text-zinc-900">{project.title}</h3>
          <span className="text-[14px] font-medium text-zinc-500">{project.category}</span>
        </div>
        
        <Link 
          href="#"
          className="group/arrow w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center transition-all duration-300 hover:w-[58px]"
        >
          <ArrowRight size={20} className="transition-transform duration-300 group-hover/arrow:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const totalImages = projects.length;

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
  }, [imagesLoaded, minTimeElapsed]);

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto min-h-[600px]">
      <div className="flex items-center justify-between mb-16">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="projects-header-skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-between w-full"
            >
              <Skeleton className="h-10 md:h-12 w-48 md:w-64" />
              <Skeleton className="hidden md:block h-10 w-32 rounded-full" />
            </motion.div>
          ) : (
            <motion.div 
              key="projects-header"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-between w-full"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Selected Work</h2>
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-full text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Latest Projects
              </div>
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
            {[1, 2, 3].map((i) => (
              <div key={i} className={`space-y-6 ${i === projects.length ? 'md:col-span-2' : ''}`}>
                <Skeleton 
                  className="w-full rounded-[32px]" 
                  style={{ aspectRatio: i === projects.length ? '21/9' : '4/3' }}
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
              {projects.map((project, index) => (
                <img 
                  key={`pre-${project.id}`}
                  ref={(el) => { imgRefs.current[index] = el; }}
                  src={project.images[0]} 
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
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
