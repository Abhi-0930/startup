"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export default function CareerPageClient() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] selection:bg-black selection:text-white flex items-center justify-center p-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[32px] md:rounded-[48px] border border-zinc-100 p-6 md:p-24 shadow-sm relative overflow-hidden group"
        >
          {/* Decorative Sparkle */}
          <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
            <Sparkles className="w-[150px] h-[150px] md:w-[300px] md:h-[300px]" strokeWidth={0.5} />
          </div>

          <div className="max-w-3xl space-y-8 md:space-y-12 relative z-10 text-center md:text-left mx-auto md:mx-0">
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row items-center md:items-baseline gap-4">
                <h1 className="text-3xl md:text-6xl font-black tracking-tight text-zinc-900 uppercase leading-tight">
                  Careers at <br className="hidden md:block" /> <span className="text-zinc-300">Code Loom.</span>
                </h1>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-500 text-[10px] md:text-[12px] font-bold uppercase tracking-widest">
                Status: Selective
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <p className="text-lg md:text-2xl text-zinc-500 font-medium leading-relaxed">
                We are currently at full capacity and not actively hiring for specific roles. However, we are 
                <span className="text-black"> always</span> looking for exceptional talent to join our talent pool.
              </p>
              <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed px-2 md:px-0">
                If you believe you can bring something extraordinary to the Code Loom mission, don't wait for a listing. 
                Reach out and show us what you're building.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5 pt-4 md:pt-8">
              <Link 
                href="mailto:hello@codeloom.in" 
                className="w-full sm:w-auto flex items-center justify-center gap-4 bg-black text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-zinc-800 transition-all transform hover:scale-105 shadow-xl shadow-black/20"
              >
                <span>Spontaneous Application</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 text-zinc-500 hover:text-black font-bold text-sm md:text-base transition-colors"
              >
                <MessageSquare className="w-[18px] h-[18px] md:w-5 md:h-5" />
                <span>Just want to chat?</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
