"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Send, Camera, Globe, Code, Check, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

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
              
              <div className="relative">
                <form 
                  onSubmit={handleSubscribe}
                  className="relative group h-14"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={status === 'success' ? "" : "Enter your email..."}
                    className={`w-full h-full pl-6 pr-16 rounded-full border transition-all duration-500 outline-none font-medium ${
                      status === 'success' 
                        ? 'bg-black border-black text-white' 
                        : 'bg-zinc-50/50 border-zinc-200 focus:border-zinc-900 text-zinc-900 hover:bg-white'
                    }`}
                    required
                    disabled={status === 'loading' || status === 'success'}
                  />
                  
                  <button 
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className={`absolute right-1.5 top-1.5 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 active:scale-95 ${
                      status === 'success'
                        ? 'bg-white text-black'
                        : 'bg-[#ff5c00] text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {status === 'loading' ? (
                        <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <Loader2 className="animate-spin" size={20} />
                        </motion.div>
                      ) : status === 'success' ? (
                        <motion.div key="success" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                          <Check size={20} strokeWidth={3} />
                        </motion.div>
                      ) : (
                        <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <ArrowRight size={20} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>

                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute inset-0 flex items-center pl-6 pointer-events-none"
                      >
                        <span className="text-white font-bold tracking-tight text-sm">Successfully Subscribed.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>

                <AnimatePresence>
                  {status === 'error' && (
                    <motion.p 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-[#ff5c00] text-xs font-bold mt-2 ml-6 uppercase tracking-wider"
                    >
                      {errorMessage}
                    </motion.p>
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
                <Link href="https://www.instagram.com/codeloom.in/" target="_blank" className="group flex items-center gap-3 text-zinc-600 hover:text-black font-medium transition-colors">
                  <Camera size={18} className="text-zinc-400 group-hover:text-black transition-colors" /> Instagram
                </Link>
                <Link href="https://www.linkedin.com/company/codeloom-in" target="_blank" className="group flex items-center gap-3 text-zinc-600 hover:text-black font-medium transition-colors">
                  <Globe size={18} className="text-zinc-400 group-hover:text-black transition-colors" /> LinkedIn
                </Link>
                <Link href="https://github.com/codeloom-in" target="_blank" className="group flex items-center gap-3 text-zinc-600 hover:text-black font-medium transition-colors">
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
