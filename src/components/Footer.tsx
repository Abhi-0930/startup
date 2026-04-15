"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Send, Camera, Globe, Code, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage("");

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setEmail("");
      } else {
        setStatus('error');
        setErrorMessage(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <footer className="relative pt-12 pb-8 -mt-16 md:-mt-24 bg-white overflow-hidden">
      {/* 1. Main Content Section (Top) */}
      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-Photoroom.png"
                alt="Code Loom Logo"
                width={600}
                height={150}
                className="h-40 w-auto object-contain"
                priority
              />
            </Link>
            
            <div className="flex flex-col gap-6 max-w-md">
              <h3 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
                Join our newsletter
              </h3>
              <p className="text-zinc-500 font-medium leading-relaxed">
                Stay ahead with strategies uniting design, technology, and marketing to deliver measurable growth.
              </p>
              
              <div className="relative min-h-[80px]">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 md:p-6 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-white" size={20} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-emerald-900 font-bold text-sm md:text-base">Successfully Subscribed!</p>
                        <p className="text-emerald-700/80 text-[12px] md:text-sm leading-relaxed">
                          Welcome to the fold. You'll receive updates via email soon.
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      onSubmit={handleSubscribe}
                      className="relative group"
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email..."
                        className="w-full h-14 pl-6 pr-16 rounded-full border border-zinc-200 focus:border-zinc-900 focus:ring-0 transition-all outline-none bg-zinc-50/50 hover:bg-white text-zinc-900 font-medium disabled:opacity-50"
                        required
                        disabled={status === 'loading'}
                      />
                      <button 
                        type="submit"
                        disabled={status === 'loading'}
                        className="absolute right-1.5 top-1.5 w-11 h-11 bg-brand-orange text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-orange-500/20 disabled:bg-zinc-300 disabled:shadow-none"
                      >
                        {status === 'loading' ? (
                          <Loader2 className="animate-spin" size={20} />
                        ) : (
                          <ArrowRight size={20} />
                        )}
                      </button>
                      
                      {status === 'error' && (
                        <motion.p 
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs font-medium mt-2 ml-4"
                        >
                          {errorMessage}
                        </motion.p>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:justify-items-end">
            <div className="flex flex-col gap-6 min-w-[140px]">
              <h4 className="text-[13px] font-bold text-zinc-400 uppercase tracking-widest">Company</h4>
              <nav className="flex flex-col gap-4">
                <Link href="/book" className="text-zinc-600 hover:text-black font-medium transition-colors">Book a call</Link>
                <Link href="/about" className="text-zinc-600 hover:text-black font-medium transition-colors">About us</Link>
                <Link href="#work" className="text-zinc-600 hover:text-black font-medium transition-colors">
                  Projects
                </Link>
                <Link href="#" className="text-zinc-600 hover:text-black font-medium transition-colors flex items-center gap-2">
                  Career
                </Link>
              </nav>
            </div>

            <div className="flex flex-col gap-6 min-w-[140px]">
              <h4 className="text-[13px] font-bold text-zinc-400 uppercase tracking-widest">Socials</h4>
              <nav className="flex flex-col gap-4">
                <Link href="https://wa.me/916302160783" target="_blank" className="group flex items-center gap-3 text-zinc-600 hover:text-black font-medium transition-colors">
                  <span className="w-5 h-5 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-zinc-400 group-hover:text-[#25D366] transition-colors"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  </span> WhatsApp
                </Link>
                <Link href="#" className="group flex items-center gap-3 text-zinc-600 hover:text-black font-medium transition-colors">
                  <Send size={18} className="text-zinc-400 group-hover:text-black transition-colors" /> X
                </Link>
                <Link href="#" className="group flex items-center gap-3 text-zinc-600 hover:text-black font-medium transition-colors">
                  <Camera size={18} className="text-zinc-400 group-hover:text-black transition-colors" /> Instagram
                </Link>
                <Link href="#" className="group flex items-center gap-3 text-zinc-600 hover:text-black font-medium transition-colors">
                  <Globe size={18} className="text-zinc-400 group-hover:text-black transition-colors" /> LinkedIn
                </Link>
                <Link href="#" className="group flex items-center gap-3 text-zinc-600 hover:text-black font-medium transition-colors">
                  <Code size={18} className="text-zinc-400 group-hover:text-black transition-colors" /> GitHub
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Massive Watermark (Middle) - Now in normal flow for zero overlap */}
      <div className="w-full pointer-events-none select-none text-center my-8 md:my-12">
        <h2 className="text-[12vw] font-black text-black/[0.03] tracking-tighter leading-none inline-block whitespace-nowrap">
          CODE LOOM.
        </h2>
      </div>

      {/* 3. Bottom Legal Bar - Strictly positioned after the watermark */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13px] font-medium text-black uppercase tracking-widest">
            © 2026 Code Loom. All rights reserved
          </p>
          
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-[13px] font-medium text-black hover:opacity-70 transition-all">Privacy policy</Link>
            <Link href="/terms" className="text-[13px] font-medium text-black hover:opacity-70 transition-all">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
