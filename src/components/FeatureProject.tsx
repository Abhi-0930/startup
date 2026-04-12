"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Skeleton } from "@/components/ui/Skeleton";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  // BiteBuzz (Project 1)
  { id: 'b1', projectSlug: 'bitebuzz-delivery', category: 'BiteBuzz', title: 'Launch MVP for BiteBuzz', subtitle: 'Live in 21 days, 1,200+ early users', src: '/project1/img1.png' },
  { id: 'b2', projectSlug: 'bitebuzz-delivery', category: 'BiteBuzz', title: 'Launch MVP for BiteBuzz', subtitle: 'Live in 21 days, 1,200+ early users', src: '/project1/img2.png' },
  { id: 'b3', projectSlug: 'bitebuzz-delivery', category: 'BiteBuzz', title: 'Launch MVP for BiteBuzz', subtitle: 'Live in 21 days, 1,200+ early users', src: '/project1/img3.png' },
  // Empathy AI (Project 2)
  { id: 'e1', projectSlug: 'empathy-ai', category: 'Empathy AI', title: 'Empathy AI Therapy', subtitle: 'Multi-Modal Emotional Intelligence', src: '/project2/img1.png' },
  { id: 'e2', projectSlug: 'empathy-ai', category: 'Empathy AI', title: 'Empathy AI Therapy', subtitle: 'Mood Tracking & Analysis', src: '/project2/img2.png' },
  { id: 'e3', projectSlug: 'empathy-ai', category: 'Empathy AI', title: 'Empathy AI Therapy', subtitle: 'Secure Therapeutic Support', src: '/project2/img3.png' },
  // Orbital Bank (Project 3)
  { id: 'o1', projectSlug: 'orbital-bank', category: 'Orbital', title: 'Orbital Bank Dashboard', subtitle: 'Motion & 3D Interactive Design', src: '/project3/1KCYDj61X5Ycm5Vp5kluuhMho.png_width=2400&height=1600.png' },
  { id: 'o2', projectSlug: 'orbital-bank', category: 'Orbital', title: 'Orbital Bank Dashboard', subtitle: 'Motion & 3D Interactive Design', src: '/project3/TwCiV5MUt16Q38ftZYKlEhNhbJI.png_width=1984&height=2400.png' },
  { id: 'o3', projectSlug: 'orbital-bank', category: 'Orbital', title: 'Orbital Bank Dashboard', subtitle: 'Motion & 3D Interactive Design', src: '/project3/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png_width=2400&height=1600.png' }
];

export default function FeatureProject() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isImageReady, setIsImageReady] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // 200ms minimum threshold to prevent flicker
    const timer = setTimeout(() => setMinTimeElapsed(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Proactive check for cached image
    if (imgRef.current?.complete) {
      setIsImageReady(true);
    }
  }, []);

  useEffect(() => {
    if (isImageReady && minTimeElapsed) {
      setIsLoading(false);
    }
  }, [isImageReady, minTimeElapsed]);

  useEffect(() => {
    if (isLoading) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, [currentSlide, isLoading]);

  const activeSlide = slides[currentSlide];

  // Helper to extract the thumbnails for the currently active project
  const currentThumbnails = slides.filter(s => s.category === activeSlide.category).slice(0, 3);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cursorRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cursorRef.current.style.transform = `translate(${x}px, ${y}px) translate(16px, 16px)`;
  };

  return (
    <section className="px-4 md:px-8 max-w-[1400px] mx-auto pt-0 pb-8 md:pb-12">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="fp-skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-[32px] p-2 md:p-3 border border-zinc-200/60 shadow-sm"
          >
            {/* Header Skeleton */}
            <div className="flex flex-col md:flex-row md:items-center justify-between px-4 pt-4 pb-5 md:px-6 md:pt-5 md:pb-6 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-8 w-48 md:w-64" />
                <Skeleton className="h-4 w-32 md:w-40" />
              </div>
              <Skeleton className="h-10 w-32 rounded-full" />
            </div>
            
            {/* Main Image Skeleton */}
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] overflow-hidden">
              <Skeleton className="w-full h-full" />
              
              {/* Thumbnail Skeletons */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex gap-2">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="w-16 h-12 md:w-24 md:h-16 rounded-[12px] md:rounded-[16px]" />
                ))}
              </div>
            </div>

            {/* Hidden preloader for first slide */}
            <div className="hidden" aria-hidden="true">
              <img 
                ref={imgRef}
                src={slides[0].src} 
                onLoad={() => setIsImageReady(true)} 
              />
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="fp-content"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[32px] p-2 md:p-3 shadow-sm relative group overflow-hidden transition-all duration-700"
          >
            
            {/* Top Header of Card */}
            <div className="flex flex-col md:flex-row md:items-center justify-between px-4 pt-4 pb-5 md:px-6 md:pt-5 md:pb-6 gap-4">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 transition-all duration-500">
                <h2 key={`title-${activeSlide.category}`} className="text-[22px] md:text-[26px] font-semibold tracking-tight text-neutral-900 animate-slide-up-fade" style={{ animationDelay: '0s' }}>
                  {activeSlide.title}
                </h2>
                <span key={`sub-${activeSlide.category}`} className="text-[14px] md:text-[15px] text-neutral-500 font-medium animate-delayed-reveal">
                  {activeSlide.subtitle}
                </span>
              </div>

              <Link 
                href={`/projects/${activeSlide.projectSlug}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 text-[14px] font-medium text-neutral-900 hover:bg-neutral-50 transition-colors shrink-0"
              >
                View Project
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Massive Main Image Container */}
            <div 
              className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] overflow-hidden bg-neutral-900"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Clickable Image Area */}
              <Link href={`/projects/${activeSlide.projectSlug}`} className="absolute inset-0 z-10">
                {slides.map((slide, idx) => {
                  const isCurrent = idx === currentSlide;
                  const isPrev = idx === (currentSlide - 1 + slides.length) % slides.length;
                  const isActive = isCurrent || isPrev;

                  return (
                    <div 
                      key={`${slide.id}-${idx}`}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isCurrent ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <Image
                        src={slide.src}
                        alt={`Feature Project Image ${idx + 1}`}
                        fill
                        className={`object-cover ${isActive ? 'active-zoom' : 'scale-[1.15]'}`}
                        priority={idx <= 1}
                      />
                    </div>
                  );
                })}
              </Link>
              
              {/* Custom Mouse Follower Tooltip Pill */}
              <div 
                ref={cursorRef}
                className={`absolute top-0 left-0 hidden md:flex items-center justify-center pointer-events-none z-50 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="px-5 py-2.5 bg-white/95 backdrop-blur-sm border border-black/5 text-zinc-500 font-medium text-[13px] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] tracking-wide whitespace-nowrap">
                  View Project
                </div>
              </div>

              {/* Bottom Left Thumbnails - dynamically loaded for the active project */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 z-30 transition-opacity duration-500">
                {currentThumbnails.map((thumb, idx) => {
                  const isThumbActive = thumb.id === slides[currentSlide].id;
                  return (
                    <div 
                      key={thumb.id} 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const slideIndex = slides.findIndex(s => s.id === thumb.id);
                        if (slideIndex > -1) setCurrentSlide(slideIndex);
                      }}
                      className={`relative w-16 h-12 md:w-24 md:h-16 rounded-[12px] md:rounded-[16px] overflow-hidden border-2 bg-neutral-800 shadow-xl transition-all duration-300 cursor-pointer ${isThumbActive ? 'border-white opacity-100 ring-2 ring-white/20 ring-offset-1 ring-offset-transparent' : 'border-white/20 opacity-60 hover:opacity-100 hover:-translate-y-1'}`}
                    >
                      <Image 
                        src={thumb.src}
                        alt={`Thumb ${idx}`} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  );
                })}
              </div>
              
              {/* Subtle gradient overlay to ensure thumbnails pop */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none z-10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
