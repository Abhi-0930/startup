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
    slug: "bitebuzz-delivery",
    title: "BiteBuzz Delivery",
    category: "Full-Stack Development",
    images: [
      "/project1/img1.png",
      "/project1/img2.png",
      "/project1/img3.png",
      "/project1/img4.png",
    ],
    span: "normal",
    delay: "0s",
  },
  {
    id: "02",
    slug: "atlas-technologies",
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
    slug: "orbital-bank",
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
    <div className={`flex flex-col gap-6 ${project.span === 'wide' ? 'md:col-span-2' : 'col-span-1'}`}>
      <Link 
        href={`/projects/${project.slug}`}
        className="block relative overflow-hidden rounded-[32px] shadow-sm bg-neutral-900 group/image cursor-pointer"
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
          <h3 className="text-[22px] font-semibold tracking-tight text-zinc-900">{project.title}</h3>
          <span className="text-[14px] font-medium text-zinc-500">{project.category}</span>
        </div>
        
        <Link 
          href={`/projects/${project.id}`}
          className="group w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center transition-all duration-300 hover:w-[58px] overflow-hidden"
        >
          <ArrowRight 
            size={20} 
            className="text-zinc-900 transition-transform duration-300 group-hover:translate-x-1.5" 
          />
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
    <section id="work" className="pb-24 md:pb-32 pt-8 md:pt-12 px-4 md:px-8 max-w-[1400px] mx-auto min-h-[600px] -mt-10 md:-mt-16 relative z-20">
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
              <Skeleton className="h-10 md:h-12 w-64 md:w-96" />
              <Skeleton className="h-6 w-48 md:w-64" />
            </motion.div>
          ) : (
            <motion.div 
              key="projects-header"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center w-full space-y-4"
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">
                Selected Work
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
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
