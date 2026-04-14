"use client";

import React, { useState, useEffect, useRef } from "react";
import { Quote, Activity, Sparkles, BarChart3, GraduationCap } from "lucide-react";
import { Skeleton } from "@/components/ui/Skeleton";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    stat: "45s",
    statLabel: "Checkout Speed",
    text: "Code Loom took our vision for Malnadu Kitchen and made it real in record time. The platform handles our 1,500+ peak hour orders with absolute stability. It’s been a game-changer for our digital growth.",
    author: "Nabin",
    role: "Senior Staff, Malnadu Kitchen",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
    CompanyIcon: Activity,
  },
  {
    id: 2,
    stat: "94%",
    statLabel: "AI Assessment Accuracy",
    text: "The AI sentiment engine developed by Code Loom is incredible. It provides an empathetic first touchpoint for our patients, making them feel heard and understood before their clinical session even begins.",
    author: "Dr. Ajay Kumar",
    role: "Founder, Mind Matters with Ajay",
    profileImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=256&h=256&auto=format&fit=crop",
    CompanyIcon: Sparkles,
  },
  {
    id: 3,
    stat: "+60%",
    statLabel: "Ops Efficiency Increase",
    text: "The new dashboard transformed how we track training projects. We now have real-time visibility into profit margins and trainer assignments across multiple cities. Truly world-class operational intelligence.",
    author: "Srivardhan",
    role: "Founder, EDRLEAM",
    profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&auto=format&fit=crop",
    CompanyIcon: BarChart3,
  },
  {
    id: 4,
    stat: "+85%",
    statLabel: "Student Engagement",
    text: "Smart Quiz JR has completely revolutionized my classroom. The AI-generated questions are academically rigorous, and the zero-latency competitive environment keeps students fully engaged.",
    author: "Ananya Sharma",
    role: "Lead Educator & Tech Consultant",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
    CompanyIcon: GraduationCap,
  }
];

export default function Testimonials() {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const totalImages = 4;

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
    <section className="relative pt-8 pb-12 -mt-16 md:-mt-32 overflow-hidden min-h-0 flex flex-col">
      {/* Testimonials Backdrop - Layered & Sophisticated */}
      <div className="absolute inset-0 bg-[#fafafa] pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-50" />
      
      <style>{`
        @keyframes scrollLeftSlow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-scroll-slow {
          animation: scrollLeftSlow 50s linear infinite;
        }
        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-[1050px] mx-auto px-4 md:px-8 mb-12 relative z-10">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="testimonial-header-skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-2"
            >
              <Skeleton className="h-8 md:h-10 w-[240px] md:w-[380px] mx-auto rounded-lg" />
              <Skeleton className="h-8 md:h-10 w-[180px] md:w-[300px] mx-auto rounded-lg" />
            </motion.div>
          ) : (
            <motion.div
              key="testimonial-header"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight max-w-2xl mx-auto leading-[1.1]">
                What our clients say 
                <span className="block text-zinc-400 mt-1 font-medium text-lg md:text-xl">after working with us.</span>
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Marquee Viewport */}
      <div className="relative flex items-center w-full">
        {/* Superior Edge Masks */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#fafafa] via-[#fafafa]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#fafafa] via-[#fafafa]/80 to-transparent z-10 pointer-events-none" />

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="testimonials-skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-6 md:gap-8 px-4"
            >
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-[280px] md:w-[350px] bg-white rounded-[24px] md:rounded-[32px] p-5 md:p-6 border border-zinc-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] shrink-0 space-y-5">
                  <div className="space-y-2">
                    <Skeleton className="h-10 w-24 rounded-lg" />
                    <Skeleton className="h-3 w-36 rounded-md" />
                  </div>
                  <Skeleton className="h-8 w-8 rounded-lg" />
                  <div className="space-y-1.5">
                    <Skeleton className="h-3.5 w-full rounded-md" />
                    <Skeleton className="h-3.5 w-[90%] rounded-md" />
                  </div>
                  <div className="flex items-center gap-4 pt-3">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div className="space-y-1.5">
                      <Skeleton className="h-3.5 w-24 rounded-md" />
                      <Skeleton className="h-3 w-16 rounded-md" />
                    </div>
                  </div>
                </div>
              ))}

              <div className="hidden" aria-hidden="true">
                {testimonials.map((item, index) => (
                  <img 
                    key={`pre-${item.id}`}
                    ref={(el) => { imgRefs.current[index] = el; }}
                    src={item.profileImage} 
                    onLoad={() => setImagesLoaded(prev => prev + 1)} 
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="testimonials-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex w-max animate-scroll-slow items-center gap-6 md:gap-8 px-4"
            >
              {[0, 1, 2].map((groupIndex) => (
                <div key={`group-${groupIndex}`} className="flex items-stretch gap-6 md:gap-8">
                  {testimonials.map((item) => (
                    <div 
                      key={`${groupIndex}-${item.id}`} 
                      className="w-[280px] md:w-[350px] bg-white rounded-[24px] md:rounded-[32px] p-4 md:p-5 border border-black/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.03)] shrink-0 flex flex-col group hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:border-black/[0.06] hover:-translate-y-1 transition-all duration-500 cursor-grab active:cursor-grabbing relative overflow-hidden"
                    >
                      {/* Subtle Internal Glow */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <div className="relative z-10">
                        <h3 className="text-[24px] md:text-[28px] leading-tight font-bold text-zinc-900 tracking-tighter">
                          {item.stat}
                        </h3>
                        <p className="text-zinc-500 font-bold text-[10px] md:text-[11px] mt-0.5 uppercase tracking-wider">
                          {item.statLabel}
                        </p>
                      </div>
                      
                      <div className="mt-5 mb-4 relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors duration-500">
                          <Quote size={20} className="text-[#e25a48] group-hover:text-white transition-colors duration-500" />
                        </div>
                      </div>    
    
                      <p className="text-zinc-600 text-[14px] md:text-[15px] leading-[1.6] flex-grow font-medium relative z-10">
                        "{item.text}"
                      </p>  
                                      
                      <div className="flex items-center justify-between mt-6 pt-5 border-t border-zinc-100 relative z-10">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full overflow-hidden border-[2px] border-white shadow-md shrink-0 transition-transform duration-500 group-hover:scale-110">
                             <img 
                               src={item.profileImage} 
                               alt={item.author} 
                               className="w-full h-full object-cover"
                             />
                          </div>
                          <div>
                            <h4 className="font-bold text-zinc-900 text-[15px] md:text-[16px] tracking-tight">{item.author}</h4>
                            <p className="text-zinc-400 font-medium text-[12px] md:text-[13px]">{item.role}</p>
                          </div>
                        </div>
                        <div className="text-zinc-200 group-hover:text-zinc-800 transition-all duration-500 transform group-hover:rotate-12">
                           <item.CompanyIcon size={24} strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
