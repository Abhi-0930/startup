"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-32 md:py-60 bg-zinc-950 overflow-hidden">
      {/* Animated Background Element */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:32px_32px]"
        />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8 md:gap-12"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] md:text-[12px] font-bold text-white/60 uppercase tracking-widest">Available now for Q2 projects</span>
          </div>

          {/* Main Copy */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-4xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.1]">
              You've reached the end — <br />
              <span className="text-white/40 italic font-serif leading-tight">now let's start something new.</span>
            </h2>
            <p className="text-lg md:text-2xl text-white/50 font-medium max-w-2xl mx-auto">
              Ready to transform your business logic into a high-performance digital reality? Let's discuss your vision.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <button className="group relative flex items-center gap-4 px-10 py-5 bg-white text-zinc-950 rounded-full font-bold text-xl hover:bg-zinc-100 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:-translate-y-1 active:scale-95">
              <Calendar size={22} className="group-hover:rotate-12 transition-transform" />
              <span>Book a 30-Min Call</span>
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-sm font-medium text-white/30 tracking-wide mt-4">
            Trust us, we are good at this. :)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
