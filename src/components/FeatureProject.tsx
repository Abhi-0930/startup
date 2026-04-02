"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  // Finlytics (Project 1)
  { id: 'f1', category: 'Finlytics', title: 'Launch MVP for Finlytics', subtitle: 'Live in 27 days, 1,200+ early users', src: '/project1/zvQ7tedi7AxHplgmospF42dcjQo.png_width=1200&height=800.png' },
  { id: 'f2', category: 'Finlytics', title: 'Launch MVP for Finlytics', subtitle: 'Live in 27 days, 1,200+ early users', src: '/project1/5kd7Hmen8Zb7gfwj1BZyuA0ko.png_width=1200&height=800.png' },
  { id: 'f3', category: 'Finlytics', title: 'Launch MVP for Finlytics', subtitle: 'Live in 27 days, 1,200+ early users', src: '/project1/MAVstedJYqQvsrJ7l1kxjR498.jpg_width=1200&height=904.png' },
  // Atlas (Project 2)
  { id: 'a1', category: 'Atlas', title: 'Atlas Technologies', subtitle: 'Complete Brand & Web Redesign', src: '/project2/vdtm4vbMi9SyPgj2Z1bVuq9b2o.png_width=960&height=1200.png' },
  { id: 'a2', category: 'Atlas', title: 'Atlas Technologies', subtitle: 'Complete Brand & Web Redesign', src: '/project2/xktGFEeTfvx5MDldvQxlaw79M.png_width=800&height=1200.png' },
  // Orbital Bank (Project 3)
  { id: 'o1', category: 'Orbital', title: 'Orbital Bank Dashboard', subtitle: 'Motion & 3D Interactive Design', src: '/project3/1KCYDj61X5Ycm5Vp5kluuhMho.png_width=2400&height=1600.png' },
  { id: 'o2', category: 'Orbital', title: 'Orbital Bank Dashboard', subtitle: 'Motion & 3D Interactive Design', src: '/project3/TwCiV5MUt16Q38ftZYKlEhNhbJI.png_width=1984&height=2400.png' },
  { id: 'o3', category: 'Orbital', title: 'Orbital Bank Dashboard', subtitle: 'Motion & 3D Interactive Design', src: '/project3/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png_width=2400&height=1600.png' }
];

export default function FeatureProject() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, [currentSlide]);

  const activeSlide = slides[currentSlide];

  // Helper to extract the thumbnails for the currently active project
  const currentThumbnails = slides.filter(s => s.category === activeSlide.category).slice(0, 3);

  return (
    <section className="px-4 md:px-8 max-w-[1400px] mx-auto pt-8 pb-20">
      <div className="bg-white rounded-[32px] p-2 md:p-3 border border-zinc-200/60 shadow-sm relative group overflow-hidden transition-all duration-700">
        
        {/* Top Header of Card */}
        <div className="flex flex-col md:flex-row md:items-center justify-between px-4 pt-4 pb-5 md:px-6 md:pt-5 md:pb-6 gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 transition-all duration-500">
            <h2 key={`title-${activeSlide.category}`} className="text-[22px] md:text-[26px] font-semibold tracking-tight text-neutral-900 animate-slide-up-fade" style={{ animationDelay: '0s' }}>
              {activeSlide.title}
            </h2>
            <span key={`sub-${activeSlide.category}`} className="text-[14px] md:text-[15px] text-neutral-500 font-medium animate-delayed-reveal">
              {activeSlide.subtitle}
            </span>
          </div>

          <Link href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 text-[14px] font-medium text-neutral-900 hover:bg-neutral-50 transition-colors shrink-0">
            View Project
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Massive Main Image Container */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] overflow-hidden bg-neutral-900 border border-black/5">
          {slides.map((slide, idx) => {
            const isCurrent = idx === currentSlide;
            const isPrev = idx === (currentSlide - 1 + slides.length) % slides.length;
            const isActive = isCurrent || isPrev;

            return (
              <div 
                key={`${slide.id}-${idx}`}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <Image
                  src={slide.src}
                  alt={`Feature Project Image ${idx + 1}`}
                  fill
                  className={`object-cover ${isActive ? 'active-zoom' : 'scale-[1.15]'}`}
                  priority={idx <= 1}
                />
              </div>
            );
          })}
          
          {/* Center Hover Action Button (View Project Blur Pill) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
            <button className="px-6 py-3 bg-black/40 backdrop-blur-md border border-white/10 text-white font-medium rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-black/60 shadow-xl pointer-events-auto">
              View Project
            </button>
          </div>

          {/* Bottom Left Thumbnails - dynamically loaded for the active project */}
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 z-30 transition-opacity duration-500">
            {currentThumbnails.map((thumb, idx) => {
              const isThumbActive = thumb.id === slides[currentSlide].id;
              return (
                <div 
                  key={thumb.id} 
                  onClick={() => {
                    const slideIndex = slides.findIndex(s => s.id === thumb.id);
                    if (slideIndex > -1) setCurrentSlide(slideIndex);
                  }}
                  className={`relative w-16 h-12 md:w-24 md:h-16 rounded-[12px] md:rounded-[16px] overflow-hidden border-2 bg-neutral-800 shadow-xl transition-all duration-300 cursor-pointer ${isThumbActive ? 'border-white opacity-100 ring-2 ring-white/20 ring-offset-1 ring-offset-transparent' : 'border-white/20 opacity-60 hover:opacity-100 hover:-translate-y-1'}`}
                >
                  <Image 
                    src={thumb.src}
                    alt={`Thumb ${idx}`} 
                    fill 
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
          
          {/* Subtle gradient overlay to ensure thumbnails pop */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
