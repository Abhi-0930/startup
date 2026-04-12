"use client";
import { useRef, ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/Skeleton";

interface ChallengeItem {
  id: string;
  challenge: string;
  description: string;
  solution: string;
  imageSrc: string;
}

const challengesData: ChallengeItem[] = [
  {
    id: "01",
    challenge: "Outdated or No Online Presence",
    description: "Businesses lose potential clients daily because their website looks unprofessional, loads slowly, or doesn't even exist yet. First impressions happen online now.",
    solution: "We build fast, modern websites that make your business look credible and convert visitors into paying customers from day one.",
    imageSrc: "/challenges/no-online-presence.webm"
  },
  {
    id: "02",
    challenge: "Outdated Technology Stack",
    description: "Using old, slow systems makes it impossible to provide the fast and secure experience that modern customers expect today.",
    solution: "We build high-speed Web, App, and AI systems with Next.js, React Native, and Multi-Agentic AI to handle more users and scale easily.",
    imageSrc: "/challenges/outdated-tech.webm"
  },
  {
    id: "03",
    challenge: "Too Much Manual Work",
    description: "Your team spends hours on repetitive tasks that should be automated, slowing down your business growth.",
    solution: "We build custom AI agents that handle the boring work, letting your team focus on what actually matters.",
    imageSrc: "/challenges/too-much-manual-work.webm"
  },
  {
    id: "04",
    challenge: "Slow Website Performance",
    description: "A slow website frustrates your users, kills your search rankings, and makes you lose money every single second.",
    solution: "We optimize every line of code to ensure your site loads instantly on any device, anywhere in the world.",
    imageSrc: "/challenges/slow-website-performance.webm"
  }
];

function ChallengeCard({ item }: { item: ChallengeItem }) {
  const [isActive, setIsActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = item.imageSrc.endsWith('.webm') || item.imageSrc.endsWith('.mp4');

  useEffect(() => {
    if (isVideo && videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(error => {
          console.error("Video play failed:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive, isVideo]);

  return (
    <div 
      className="group relative w-full bg-white rounded-[24px] md:rounded-[28px] p-4 pb-6 md:p-5 md:pb-7 overflow-hidden cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-neutral-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
    >
      {/* Media Container (Top) */}
      <div className="relative w-full aspect-[1.4/1] rounded-[18px] md:rounded-[20px] overflow-hidden bg-neutral-50 border border-neutral-100/50 mb-7">
        {isVideo ? (
          <video
            ref={videoRef}
            src={item.imageSrc}
            loop
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] ease-linear ${isActive ? 'scale-105' : 'scale-100'}`}
          />
        ) : (
          <img
            src={item.imageSrc}
            alt={item.challenge}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] ease-linear ${isActive ? 'scale-105' : 'scale-100'}`}
          />
        )}
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/2 text-left"></div>
      </div>

      {/* Content Container (Bottom) */}
      <div className="px-1 text-left">
        {/* Dynamic Badge Area */}
        <div className="relative h-6 flex items-center mb-3">
          <div className={`absolute left-0 bg-orange-50 border border-orange-100 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 transition-all duration-500 ${isActive ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
            <span className="text-brand-orange text-[10px] font-bold tracking-wider uppercase">Problem</span>
          </div>

          <div className={`absolute left-0 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <span className="text-emerald-600 text-[10px] font-bold tracking-wider uppercase">Solution</span>
          </div>
        </div>

        {/* Challenge Header */}
        <h3 className="text-[#0a0a0b] text-[18px] md:text-[21px] font-bold leading-tight mb-2.5 tracking-tight group-hover:text-black transition-colors text-left">
          {item.challenge}
        </h3>
        
        {/* Text Reveal Logic: Problem vs Solution */}
        <div className="relative min-h-[50px] md:min-h-[60px] text-left">
          {/* Problem Text */}
          <p className={`text-zinc-500 text-[14px] md:text-[15px] leading-relaxed transition-all duration-500 absolute inset-0 text-left ${isActive ? 'opacity-0 invisible -translate-x-4' : 'opacity-100 visible translate-x-0'}`}>
            {item.description}
          </p>
          
          {/* Solution Text */}
          <div className={`transition-all duration-500 absolute inset-0 text-left ${isActive ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-4'}`}>
            <p className="text-[#0a0a0b] text-[14px] md:text-[15px] leading-relaxed font-normal text-left">
              {item.solution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Challenges() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 200ms minimum threshold to prevent flicker
    const timer = setTimeout(() => setMinTimeElapsed(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Proactive check if video is already ready
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setVideoLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (videoLoaded && minTimeElapsed) {
      setIsLoading(false);
    }
  }, [videoLoaded, minTimeElapsed]);

  return (
    <section id="challenges" className="pt-4 pb-8 md:pt-6 md:pb-12 -mt-12 md:-mt-20 max-w-[1000px] mx-auto px-6">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="challenges-skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            {/* Header Skeleton */}
            <div className="mb-14 md:mb-20 text-center space-y-4">
              <Skeleton className="h-12 md:h-20 w-[240px] md:w-[400px] mx-auto" />
              <Skeleton className="h-12 md:h-20 w-[180px] md:w-[300px] mx-auto" />
            </div>

            {/* Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-[28px] p-5 space-y-6 shadow-sm border border-neutral-100">
                  <Skeleton className="aspect-[1.4/1] w-full rounded-[20px]" />
                  <div className="space-y-4 px-1">
                    <Skeleton className="h-4 w-20 rounded-full" />
                    <Skeleton className="h-6 w-[80%]" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-[90%]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hidden preloader for first video */}
            <video
              ref={videoRef}
              src={challengesData[0].imageSrc}
              className="hidden"
              muted
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
            />
          </motion.div>
        ) : (
          <motion.div 
            key="challenges-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-14 md:mb-20 text-center">
              <h2 className="text-[2.2rem] md:text-5xl lg:text-[4.2rem] font-black tracking-tighter text-neutral-900 leading-[1.05] mb-6 md:mb-8">
                The challenges <br className="hidden md:block" />
                <span className="text-neutral-400">modern businesses face.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {challengesData.map((item) => (
                <ChallengeCard key={item.id} item={item} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
