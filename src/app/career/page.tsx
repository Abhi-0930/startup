"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] selection:bg-black selection:text-white flex items-center justify-center p-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[48px] border border-zinc-100 p-12 md:p-24 shadow-sm relative overflow-hidden group"
        >
          {/* Decorative Sparkle */}
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
            <Sparkles size={300} strokeWidth={0.5} />
          </div>

          <div className="max-w-3xl space-y-12 relative z-10 text-center md:text-left mx-auto md:mx-0">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center md:items-baseline gap-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 uppercase leading-tight">
                  Great things <br className="hidden md:block" /> <span className="text-zinc-300">take time.</span>
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-500 text-[12px] font-bold uppercase tracking-widest">
                Status: Selective
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-zinc-500 font-medium leading-relaxed">
                We are currently at full capacity and not actively hiring for specific roles. However, we are 
                <span className="text-black"> always</span> looking for exceptional talent to join our talent pool.
              </p>
              <p className="text-lg text-zinc-400 font-medium leading-relaxed">
                If you believe you can bring something extraordinary to the Zerogrid mission, don't wait for a listing. 
                Reach out and show us what you're building.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
              <Link 
                href="mailto:careers@zerogrid.agency" 
                className="w-full sm:w-auto flex items-center justify-center gap-4 bg-black text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-zinc-800 transition-all transform hover:scale-105 shadow-xl shadow-black/20"
              >
                <span>Spontaneous Application</span>
                <ArrowRight size={22} />
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 text-zinc-500 hover:text-black font-bold transition-colors"
              >
                <MessageSquare size={20} />
                <span>Just want to chat?</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
