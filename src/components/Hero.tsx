"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    text: "Helped me go live in days, not weeks—highly recommend.",
    position: "top-left",
  },
  {
    name: "Nora S.",
    text: "The updates and attention to detail are unmatched.",
    position: "middle-left",
  },
  {
    name: "Daniel K.",
    text: "Super smooth experience—launched my site in no time!",
    position: "top-right",
  },
  {
    name: "Amelia R.",
    text: "Beautiful template, easy to customize, and worth every penny.",
    position: "middle-right",
  },
  {
    name: "Leo M.",
    text: "Exactly what I needed to kickstart my SaaS project fast.",
    position: "bottom-right",
  },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Dot Grid is handled by globals.css body style */}
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-100 shadow-sm mb-8">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          <span className="text-[13px] font-medium text-zinc-600">Open for Work</span>
        </div>

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

        {/* Social Proof */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-100 overflow-hidden shadow-sm">
                <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300" />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-0.5 text-zinc-900 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-[13px] font-medium text-zinc-500">From 150+ reviews</span>
          </div>
        </div>
      </div>

      {/* Floating Testimonial Cards - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Left Side */}
        <div className="absolute top-[20%] left-[5%] max-w-[200px] bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100/50">
          <p className="text-[13px] text-zinc-600 leading-relaxed mb-3">"{testimonials[0].text}"</p>
          <span className="text-[12px] font-bold text-zinc-900">— {testimonials[0].name}</span>
        </div>
        <div className="absolute top-[50%] left-[2%] max-w-[220px] bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100/50">
          <p className="text-[14px] text-zinc-600 leading-relaxed mb-3">"{testimonials[1].text}"</p>
          <span className="text-[12px] font-bold text-zinc-900">— {testimonials[1].name}</span>
        </div>

        {/* Right Side */}
        <div className="absolute top-[15%] right-[5%] max-w-[200px] bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100/50">
          <p className="text-[13px] text-zinc-600 leading-relaxed mb-3">"{testimonials[2].text}"</p>
          <span className="text-[12px] font-bold text-zinc-900">— {testimonials[2].name}</span>
        </div>
        <div className="absolute top-[40%] right-[2%] max-w-[220px] bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100/50">
          <p className="text-[14px] text-zinc-600 leading-relaxed mb-3">"{testimonials[3].text}"</p>
          <span className="text-[12px] font-bold text-zinc-900">— {testimonials[3].name}</span>
        </div>
        <div className="absolute bottom-[20%] right-[6%] max-w-[210px] bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100/50">
          <p className="text-[13px] text-zinc-600 leading-relaxed mb-3">"{testimonials[4].text}"</p>
          <span className="text-[12px] font-bold text-zinc-900">— {testimonials[4].name}</span>
        </div>
      </div>

      {/* Bottom MVP Banner */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4">
        <div className="bg-white/90 backdrop-blur-md border border-zinc-100 p-4 pl-10 pr-4 rounded-[32px] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span className="text-[17px] font-bold text-zinc-900 font-heading">Launch MVP for Finlytics</span>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-zinc-200" />
            <span className="text-[15px] text-zinc-500">Live in 27 days, 1,200+ early users</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[15px] font-bold text-zinc-900 hover:opacity-70 transition-opacity">
              View Project
            </Link>
            <Link href="#" className="bg-[#1d4ed8] text-white px-6 py-3 rounded-full font-bold text-[15px] hover:bg-blue-700 transition-colors flex items-center gap-2">
              Get Access Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
