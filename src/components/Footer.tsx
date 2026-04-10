"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Send, Camera, Globe, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <Link href="/" className="inline-block">
              <Image
                src="/zerogrid-logo-bg-remove.png"
                alt="Zerogrid Logo"
                width={140}
                height={35}
                className="h-8 w-auto object-contain"
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
              
              <div className="relative group mt-2">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full h-14 pl-6 pr-16 rounded-full border border-zinc-200 focus:border-zinc-900 focus:ring-0 transition-all outline-none bg-zinc-50/50 hover:bg-white text-zinc-900 font-medium"
                />
                <button className="absolute right-1.5 top-1.5 w-11 h-11 bg-[#FF4D4D] text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all active:scale-95 shadow-lg shadow-red-500/20">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:justify-items-end">
            <div className="flex flex-col gap-6 min-w-[140px]">
              <h4 className="text-[13px] font-bold text-zinc-400 uppercase tracking-widest">Company</h4>
              <nav className="flex flex-col gap-4">
                <Link href="/contact" className="text-zinc-600 hover:text-black font-medium transition-colors">Contact us</Link>
                <Link href="#" className="text-zinc-600 hover:text-black font-medium transition-colors">About us</Link>
                <Link href="#" className="text-zinc-600 hover:text-black font-medium transition-colors flex items-center gap-2">
                  Projects <span className="w-1.5 h-1.5 rounded-full bg-red-400/30" />
                </Link>
                <Link href="#" className="text-zinc-600 hover:text-black font-medium transition-colors flex items-center gap-2">
                  Career
                </Link>
              </nav>
            </div>

            <div className="flex flex-col gap-6 min-w-[140px]">
              <h4 className="text-[13px] font-bold text-zinc-400 uppercase tracking-widest">Socials</h4>
              <nav className="flex flex-col gap-4">
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

        {/* Huge Watermark */}
        <div className="absolute left-0 bottom-0 pointer-events-none select-none translate-y-1/4 md:translate-y-1/3">
          <h2 className="text-[13vw] md:text-[15vw] font-black text-black/5 tracking-tighter leading-none">
            ZEROGRID.
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="mt-40 pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-6 relative z-20">
          <p className="text-[13px] font-medium text-zinc-400 uppercase tracking-widest">
            © 2026 Zerogrid. All rights reserved
          </p>
          
          <div className="flex items-center gap-8">
            <Link href="#" className="text-[13px] font-medium text-zinc-400 hover:text-black transition-colors">Privacy policy</Link>
            <Link href="#" className="text-[13px] font-medium text-zinc-400 hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
