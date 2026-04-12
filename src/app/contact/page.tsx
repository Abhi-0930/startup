"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  Clock,
  CheckCircle2
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Side: Brand Content */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <span className="text-[11px] font-bold text-zinc-600 uppercase tracking-widest">Always Available</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-[0.95]">
                Let's build <br />
                <span className="text-zinc-400 font-serif italic font-normal">the future</span> <br />
                together.
              </h1>
              
              <p className="text-lg text-zinc-500 font-medium max-w-md leading-relaxed">
                Have a project in mind? We're ready to engineer it for maximum impact and performance.
              </p>
            </motion.div>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { 
                  icon: Clock, 
                  title: "Fast Response", 
                  desc: "We typically reply within 12-24 hours." 
                },
                { 
                  icon: ShieldCheck, 
                  title: "Confidential", 
                  desc: "Your data and IP are always secure with us." 
                },
                { 
                  icon: Zap, 
                  title: "Expert Team", 
                  desc: "Direct access to our senior engineering lead." 
                },
                { 
                  icon: MessageSquare, 
                  title: "Transparent", 
                  desc: "Clear updates and staging links from day one." 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-3 p-6 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-zinc-100 shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon size={20} className="text-zinc-400 group-hover:text-brand-orange transition-colors" />
                  </div>
                  <h3 className="font-bold text-zinc-900">{item.title}</h3>
                  <p className="text-xs text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Response Guarantee */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 hidden lg:flex items-center gap-4 px-6 py-4 rounded-3xl bg-zinc-950 text-white"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold">Discovery call guarantee</p>
                <p className="text-[11px] text-white/50 font-medium tracking-wide uppercase mt-0.5">Free 30-min strategy session</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
