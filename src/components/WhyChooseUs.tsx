"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Target, Settings, ArrowRight } from "lucide-react";

const reasons = [
  {
    id: "01",
    label: "VELOCITY",
    title: "Infinite Speed Stacks",
    description: "Our high-performance architecture ensures your site loads in under a second. No bloat, just speed.",
    icon: Zap,
  },
  {
    id: "02",
    label: "AUTHORITY",
    title: "Premium Design DNA",
    description: "We don't just build sites; we craft world-class digital identities that command immediate respect.",
    icon: ShieldCheck,
  },
  {
    id: "03",
    label: "PERFORMANCE",
    title: "Conversion-Led Growth",
    description: "Every pixel is engineered to maximize engagement and turn cold visitors into paying customers.",
    icon: Target,
  },
  {
    id: "04",
    label: "MANAGEMENT",
    title: "Zero Friction Control",
    description: "A management experience so simple your entire team can handle updates without touching code.",
    icon: Settings,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-[#EDF1FE] relative overflow-hidden">
      {/* Decorative Light Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-white/80 backdrop-blur-sm mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest font-bold">
              Engineering Excellence // 2026
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-7xl font-bold text-zinc-900 tracking-tighter leading-[0.9] mb-8"
          >
            Why elite founders <br />
            <span className="text-[#3b82f6]">choose Zerogrid.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed"
          >
            Simple English, professional UI. We build the infrastructure that helps your business scale without the technical debt.
          </motion.p>
        </div>

        {/* Vertical Focused Stack */}
        <div className="max-w-3xl mx-auto flex flex-col gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white rounded-[40px] p-8 md:p-12 border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(37,99,235,0.05)] transition-all duration-700 hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-mono text-blue-500 font-bold tracking-widest">
                        [{reason.id}] {reason.label}
                      </span>
                      <div className="h-[1px] w-8 bg-zinc-200 group-hover:w-16 transition-all duration-500 group-hover:bg-blue-300" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight mb-4">
                      {reason.title}
                    </h3>
                    
                    <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-xl">
                      {reason.description}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-sm">
                      <Icon size={32} strokeWidth={1.5} className="md:w-10 md:h-10" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 md:mt-12 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-1 h-1 rounded-full bg-blue-400/40" />
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest">
                    Infrastructure Details
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
