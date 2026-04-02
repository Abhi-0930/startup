"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const project1Images = [
  "/project1/zvQ7tedi7AxHplgmospF42dcjQo.png_width=1200&height=800.png",
  "/project1/5kd7Hmen8Zb7gfwj1BZyuA0ko.png_width=1200&height=800.png",
  "/project1/MAVstedJYqQvsrJ7l1kxjR498.jpg_width=1200&height=904.png",
];

export default function FeatureProject() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % project1Images.length);
    }, 4000); // Change image every 4 seconds for a cinematic feel
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 md:px-8 max-w-[1400px] mx-auto pt-8 pb-20">
      <div className="bg-white rounded-[32px] p-2 md:p-3 border border-zinc-200/60 shadow-sm relative group overflow-hidden">
        
        {/* Top Header of Card */}
        <div className="flex flex-col md:flex-row md:items-center justify-between px-4 pt-4 pb-5 md:px-6 md:pt-5 md:pb-6 gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <h2 className="text-[22px] md:text-[26px] font-semibold tracking-tight text-neutral-900">
              Launch MVP for Finlytics
            </h2>
            <span className="text-[14px] md:text-[15px] text-neutral-500 font-medium">
              Live in 27 days, 1,200+ early users
            </span>
          </div>

          <Link
            href="#"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-zinc-50 hover:bg-zinc-100 transition-colors rounded-full border border-zinc-200/80 text-[14px] font-medium text-neutral-700"
          >
            View Project
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Massive Main Image Container */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] overflow-hidden bg-neutral-900">
          {project1Images.map((src, idx) => (
            <div 
              key={src} 
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentImg ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={src}
                alt={`Feature Project Image ${idx + 1}`}
                fill
                className="object-cover animate-slow-scale"
                priority={idx === 0}
              />
            </div>
          ))}
          
          {/* Center Hover Action Button (View Project Blur Pill) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <button className="px-6 py-3 bg-black/40 backdrop-blur-md border border-white/10 text-white font-medium rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-black/60 shadow-xl">
              View Project
            </button>
          </div>

          {/* Bottom Left Thumbnails */}
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 z-10">
            <div className="relative w-16 h-12 md:w-24 md:h-16 rounded-[12px] md:rounded-[16px] overflow-hidden border-2 border-white/20 bg-neutral-800 shadow-xl hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
              <Image 
                src="/project1/5kd7Hmen8Zb7gfwj1BZyuA0ko.png_width=1200&height=800.png"
                alt="Thumb 1" fill className="object-cover"
              />
            </div>
            <div className="relative w-16 h-12 md:w-24 md:h-16 rounded-[12px] md:rounded-[16px] overflow-hidden border-2 border-white/20 bg-neutral-800 shadow-xl hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
              <Image 
                src="/project1/MAVstedJYqQvsrJ7l1kxjR498.jpg_width=1200&height=904.png"
                alt="Thumb 2" fill className="object-cover"
              />
            </div>
            <div className="relative w-16 h-12 md:w-24 md:h-16 rounded-[12px] md:rounded-[16px] overflow-hidden border-2 border-white/20 bg-neutral-800 shadow-xl flex items-center justify-center hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
              <Image 
                src="/project1/zvQ7tedi7AxHplgmospF42dcjQo.png_width=1200&height=800.png"
                alt="Thumb 3" fill className="object-cover"
              />
            </div>
          </div>
          
          {/* Subtle gradient overlay to ensure thumbnails pop */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
