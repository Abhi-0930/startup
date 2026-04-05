"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pb-28 flex flex-col justify-center">
      {/* Background Dot Grid with Top/Bottom Gradient Fade Masks */}
      <div 
        className="absolute inset-0 pointer-events-none -bottom-24 opacity-60"
        style={{ 
          backgroundImage: 'radial-gradient(#d1d5db 1.5px, transparent 1.5px)', 
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 60%, transparent 100%)'
        }}
      />
      
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="#" className="group/btn h-[48px] sm:h-[56px] flex items-center bg-[#09090b] text-white pl-6 pr-1.5 py-1.5 sm:pl-8 sm:pr-2 sm:py-2 rounded-full font-bold text-[15px] sm:text-[17px] hover:bg-black transition-all w-full sm:w-auto justify-center sm:justify-start">
            <div className="flex items-center gap-4">
              <span>Book a 30-Min call</span>
              <div className="bg-white/10 w-9 h-9 sm:w-11 sm:h-11 rounded-full transition-all flex items-center justify-center group-hover/btn:w-[48px] sm:group-hover/btn:w-[56px] group-hover/btn:rounded-full overflow-hidden">
                <ArrowRight size={20} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </div>
            </div>
          </Link>
          <Link href="#" className="group/btn h-[48px] sm:h-[56px] w-full sm:w-auto flex items-center justify-center gap-3 pl-8 pr-1.5 py-1.5 sm:py-2 rounded-full bg-white border border-zinc-200 text-zinc-900 font-bold text-[15px] sm:text-[17px] hover:bg-zinc-50 transition-all shadow-sm">
            <span>View Projects</span>
            <div className="bg-zinc-100 w-9 h-9 sm:w-11 sm:h-11 rounded-full transition-all flex items-center justify-center group-hover/btn:w-[48px] sm:group-hover/btn:w-[56px] group-hover/btn:rounded-full overflow-hidden">
               <ArrowRight size={20} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </div>
          </Link>
        </div>

        {/* Social Proof / Testimonials */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            {/* Avatar Stack from Flowbite reference style */}
            <div className="flex -space-x-3 rtl:space-x-reverse">
              <img className="w-10 h-10 border-2 border-white rounded-full object-cover" src="/avatars/avatar-1.png" alt="User 1" />
              <img className="w-10 h-10 border-2 border-white rounded-full object-cover" src="/avatars/avatar-2.png" alt="User 2" />
              <img className="w-10 h-10 border-2 border-white rounded-full object-cover" src="/avatars/avatar-3.png" alt="User 3" />
              <img className="w-10 h-10 border-2 border-white rounded-full object-cover" src="/avatars/avatar-4.png" alt="User 4" />
            </div>
            
            {/* Stars and Reviews */}
            <div className="flex flex-col items-start gap-0.5">
              <div className="flex gap-0.5 text-[#09090b]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[14px] font-medium text-zinc-900">From 150+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
