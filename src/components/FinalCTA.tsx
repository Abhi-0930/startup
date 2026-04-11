"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Database, 
  Cloud, 
  MousePointer2, 
  PenTool, 
  Zap, 
  TrendingUp, 
  Target, 
  Eye, 
  Code2, 
  Smartphone,
  Sparkles
} from "lucide-react";

const services = [
  { name: "Blockchain Technology", icon: Database },
  { name: "Cloud & DevOps", icon: Cloud },
  { name: "UI/UX", icon: MousePointer2 },
  { name: "Logo Designing", icon: PenTool },
  { name: "Rapid Prototyping and MVPs", icon: Zap },
  { name: "Digital Marketing & SEO", icon: TrendingUp },
  { name: "Brand Strategy", icon: Target },
  { name: "Visual Identity", icon: Eye },
  { name: "Web Development", icon: Code2 },
  { name: "App Development", icon: Smartphone },
];

export default function FinalCTA() {
  return (
    <section className="py-8 md:py-12 -mt-16 md:-mt-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2.5rem] bg-black overflow-hidden"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:40px_40px]" />
          </div>

          <div className="relative z-10 pt-16 md:pt-24 pb-12 flex flex-col items-center text-center">
            {/* Main Content */}
            <div className="px-6 space-y-8 md:space-y-10 mb-12">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white/90 leading-tight max-w-4xl">
                You've reached the end — <br className="hidden md:block" />
                <span className="text-white">now let's start something new!</span>
              </h2>

              <div className="flex justify-center">
                <Link href="/book" className="group relative flex items-center gap-3 px-8 py-3.5 bg-white text-black rounded-full font-bold text base md:text-lg hover:bg-zinc-100 transition-all shadow-xl hover:-translate-y-1 active:scale-95">
                  <Sparkles size={18} className="text-zinc-400 group-hover:text-amber-500 transition-colors" />
                  <span>Let's Connect</span>
                  <div className="absolute inset-0 rounded-full bg-white blur-md opacity-20 group-hover:opacity-40 transition-opacity -z-10" />
                </Link>
              </div>
            </div>

            {/* Branding/Trust Line */}
            <div className="mt-8 mb-6">
              <p className="text-[13px] md:text-sm font-medium text-white/40 tracking-wide uppercase">
                Trust us we are good at this :)
              </p>
            </div>

            {/* Services Marquee */}
            <div className="w-full relative mt-4 overflow-hidden py-4 border-t border-white/5 bg-white/[0.02]">
              <div 
                className="flex whitespace-nowrap overflow-hidden"
                style={{
                  maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                }}
              >
                <motion.div 
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ 
                    duration: 30, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="flex items-center gap-4 px-4 w-max"
                >
                  {[...Array(2)].map((_, groupIdx) => (
                    <div key={groupIdx} className="flex items-center gap-4">
                      {services.map((service, idx) => (
                        <div 
                          key={`${groupIdx}-${idx}`}
                          className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-dashed border-white/20 bg-white/5 text-xs md:text-sm font-bold text-white/70 hover:border-white/40 hover:text-white transition-colors cursor-default"
                        >
                          <service.icon size={14} className="text-zinc-500" />
                          {service.name}
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
