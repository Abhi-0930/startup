"use client";

import React, { useState, useEffect } from "react";
import { Command, Hexagon, Eclipse, Star, Triangle, Origami } from "lucide-react";
import { Skeleton } from "@/components/ui/Skeleton";
import { motion, AnimatePresence } from "framer-motion";

const companies = [
  { name: "Acme Corp", icon: Command },
  { name: "Quantum", icon: Hexagon },
  { name: "Nova Sync", icon: Eclipse },
  { name: "Vertex", icon: Triangle },
  { name: "Zenith", icon: Star },
  { name: "Apex", icon: Origami },
];

export default function LogoTicker() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Stabilization window to prevent flickering of local components
    const timer = setTimeout(() => {
      console.log("LogoTicker: Setting isLoading to false!");
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes scrollLeftMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-scroll-left {
          animation: scrollLeftMarquee 20s linear infinite;
        }
      `}</style>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex justify-center pb-8 -mt-12 md:-mt-16 relative z-10">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="ticker-skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-6 px-6 py-4 rounded-2xl bg-zinc-50 border border-black/5 shadow-sm"
            >
              <Skeleton className="h-4 w-24 sm:w-32" />
              <div className="w-px h-6 bg-black/5 hidden md:block" />
              <div className="flex gap-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="w-12 h-4 md:w-16 md:h-5 rounded-lg" />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="ticker-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-zinc-50 border border-black/5 shadow-sm overflow-hidden whitespace-nowrap"
            >
              <p className="text-zinc-500 font-medium text-[12px] sm:text-[15px] shrink-0 tracking-tight z-10">
                Trusted by top founders.
              </p>
              
              <div className="w-px h-6 bg-black/5 hidden md:block shrink-0"></div>
              
              <div 
                 className="w-[200px] sm:w-[300px] md:w-[450px] overflow-hidden relative flex items-center"
                 style={{ 
                   maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                   WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
                 }}
              >
                <div className="flex items-center gap-8 w-max animate-scroll-left">
                  {[0, 1, 2].map((group) => (
                    <div key={group} className="flex items-center gap-8">
                      {companies.map((company, index) => {
                        const Icon = company.icon;
                        return (
                          <div key={`${group}-${index}`} className="flex items-center gap-1.5 font-bold text-[14px] md:text-[15px] text-zinc-600 opacity-60">
                            <Icon className="w-4 h-4 md:w-5 md:h-5" /> {company.name}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
