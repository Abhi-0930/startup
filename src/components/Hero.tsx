"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/Skeleton";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const totalImages = 4;

  useEffect(() => {
    // 200ms minimum threshold to prevent flicker on ultra-fast connections
    const timer = setTimeout(() => setMinTimeElapsed(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Proactive check for cached images
  useEffect(() => {
    let count = 0;
    imgRefs.current.forEach((img) => {
      if (img?.complete) count++;
    });
    if (count > 0) setImagesLoaded(count);
  }, []);

  useEffect(() => {
    console.log("Hero: imagesLoaded =", imagesLoaded, "total =", totalImages, "minTime =", minTimeElapsed);
    if (imagesLoaded >= totalImages && minTimeElapsed) {
      console.log("Hero: Setting isLoading to false!");
      setIsLoading(false);
    }
  }, [imagesLoaded, minTimeElapsed]);

  return (
    <section className="relative pt-52 pb-0 flex flex-col min-h-0 overflow-hidden">
      {/* Premium Cyberpunk Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Neon Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '12s' }} />
        
        {/* Dot Grid with Gradient Mask */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{ 
            backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', 
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="hero-skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6 space-y-3">
                <Skeleton className="h-10 md:h-14 w-[280px] sm:w-[450px] md:w-[700px] mx-auto rounded-xl" />
                <Skeleton className="h-10 md:h-14 w-[200px] sm:w-[350px] md:w-[500px] mx-auto rounded-xl" />
              </div>

              <div className="mb-10 space-y-2">
                <Skeleton className="h-4 w-[250px] sm:w-[500px] mx-auto" />
                <Skeleton className="h-4 w-[200px] sm:w-[400px] mx-auto" />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Skeleton className="h-[56px] w-[240px] rounded-full" />
                <Skeleton className="h-[56px] w-[180px] rounded-full" />
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="w-10 h-10 rounded-full border-2 border-white" />
                  ))}
                </div>
                <Skeleton className="h-4 w-32" />
              </div>

              {/* Hidden preloader for avatars */}
              <div className="hidden" aria-hidden="true">
                {[1, 2, 3, 4].map((i, index) => (
                  <img 
                    key={`pre-${i}`}
                    ref={(el) => { imgRefs.current[index] = el; }}
                    src={`/avatars/avatar-${i}.png`} 
                    onLoad={() => setImagesLoaded(prev => prev + 1)} 
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="hero-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-[#09090b] mb-6 max-w-5xl mx-auto leading-[1.05] font-heading">
                Web & Brand Design <br /> For Ambitious Founders
              </h1>

              <p className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                We build conversion-driven websites and marketing that attract, engage, and convert.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                <Link 
                  href="/book" 
                  className="group/btn h-[52px] sm:h-[60px] flex items-center bg-[#09090b] text-white pl-7 pr-2 py-2 sm:pl-8 sm:pr-2.5 sm:py-2.5 rounded-full font-bold text-[16px] sm:text-[18px] hover:bg-black transition-all w-full sm:w-auto justify-center sm:justify-start ring-offset-4 hover:ring-2 ring-black/5 relative overflow-hidden group"
                >
                  {/* Subtle Inner Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <span>Book a 30-Min call</span>
                    <div className="bg-white/10 w-9 h-9 sm:w-11 sm:h-11 rounded-full transition-all flex items-center justify-center group-hover/btn:w-[48px] sm:group-hover/btn:w-[60px] group-hover/btn:bg-white/20">
                      <ArrowRight size={22} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </Link>
                
                <Link href="#work" className="group/btn h-[52px] sm:h-[60px] w-full sm:w-auto flex items-center justify-center gap-4 px-8 rounded-full bg-white border border-zinc-200 text-zinc-900 font-bold text-[16px] sm:text-[18px] hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
                  <span>View Projects</span>
                  <div className="bg-zinc-100 w-8 h-8 rounded-full flex items-center justify-center group-hover/btn:bg-zinc-200 transition-colors">
                     <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:-rotate-45" />
                  </div>
                </Link>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-5 bg-white/40 backdrop-blur-sm border border-black/[0.03] pl-2 pr-6 py-2 rounded-full shadow-sm">
                  <div className="flex -space-x-3.5 rtl:space-x-reverse">
                    {[1, 2, 3, 4].map((i) => (
                      <img 
                        key={i} 
                        className="w-11 h-11 border-[2.5px] border-white rounded-full object-cover shadow-sm bg-zinc-100" 
                        src={`/avatars/avatar-${i}.png`} 
                        alt={`User ${i}`} 
                      />
                    ))}
                  </div>
                  
                  <div className="flex flex-col items-start gap-0.5">
                    <div className="flex gap-0.5 text-amber-500">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-4 h-4 fill-current drop-shadow-[0_0_2px_rgba(245,158,11,0.3)]" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[13px] font-bold text-zinc-900 tracking-tight">From 150+ reviews</span>
                  </div>
                </div>
              </div>
            </motion.div>

          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
