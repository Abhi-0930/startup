"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Dot Grid is handled by globals.css body style */}
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#09090b] mb-6 max-w-4xl mx-auto leading-[1.1] font-heading">
          Web & Brand Design <br /> For Ambitious Founders
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          We build conversion-driven websites and marketing that attract, engage, and convert.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#" className="group flex items-center bg-[#09090b] text-white pl-8 pr-2 py-2 rounded-full font-semibold text-[16px] hover:bg-black transition-all">
            <div className="flex items-center gap-4">
              <span>Book A Call</span>
              <div className="bg-white/10 p-2.5 rounded-full group-hover:bg-white/20 transition-all flex items-center justify-center">
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>
          <Link href="#" className="px-8 py-4 rounded-full bg-white border border-zinc-200 text-zinc-900 font-semibold text-[16px] hover:bg-zinc-50 transition-all shadow-sm">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
