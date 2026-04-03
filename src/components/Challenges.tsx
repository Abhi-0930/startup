"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const challengesData = [
  {
    id: "01",
    challenge: "You get traffic, but no sales.",
    solution: "We map out strategic user journeys that guide casual visitors directly into paying customers.",
    videoSrc: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
  },
  {
    id: "02",
    challenge: "Your website looks outdated.",
    solution: "We build modern, premium designs that instantly elevate your brand's authority and trust.",
    videoSrc: "https://videos.pexels.com/video-files/3209211/3209211-hd_1920_1080_25fps.mp4"
  },
  {
    id: "03",
    challenge: "Your site is too slow.",
    solution: "We use cutting-edge architecture so your pages load instantly, keeping users engaged without frustration.",
    videoSrc: "https://videos.pexels.com/video-files/3163534/3163534-hd_1920_1080_24fps.mp4"
  }
];

export default function Challenges() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 max-w-[1400px] mx-auto px-4 md:px-8">
      
      {/* Header Section */}
      <div className="mb-16 md:mb-24">
        <h2 className="text-[2.5rem] md:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
          The challenges <br className="hidden md:block" />
          <span className="text-neutral-400">you face.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: The Interactive List */}
        <div className="flex flex-col gap-6 w-full">
          {challengesData.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={item.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group cursor-pointer p-6 rounded-3xl transition-all duration-500 border ${isActive ? 'bg-zinc-50 border-black/5 shadow-sm' : 'bg-transparent border-transparent hover:bg-neutral-50/50'}`}
              >
                {/* Number & Challenge */}
                <div className="flex items-start gap-6">
                  <span className={`text-sm font-bold pt-1 transition-colors duration-300 ${isActive ? 'text-neutral-900' : 'text-neutral-400'}`}>
                    {item.id}
                  </span>
                  
                  <div className="flex flex-col gap-3">
                    <h3 className={`text-2xl md:text-[28px] font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-neutral-900' : 'text-neutral-400 group-hover:text-neutral-600'}`}>
                      {item.challenge}
                    </h3>
                    
                    {/* The Solution (Expands when active) */}
                    <div 
                      className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[16px] text-neutral-600 leading-relaxed pr-4">
                          {item.solution}
                        </p>
                        
                        {/* Interactive Arrow */}
                        <div className="mt-6 flex items-center gap-2 text-sm font-bold text-neutral-900">
                          See how we fix this 
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Right Column: The Hovering Video Reveal container */}
        <div className="w-full relative aspect-square md:aspect-[4/5] rounded-[32px] overflow-hidden bg-neutral-100 shadow-xl border border-black/5">
          {/* Loop over videos to pre-load and render them absolutely, transitioning opacity */}
          {challengesData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
               <div 
                 key={item.id} 
                 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
               >
                 <video
                   src={item.videoSrc}
                   autoPlay
                   loop
                   muted
                   playsInline
                   className={`w-full h-full object-cover transition-transform duration-[10s] ease-linear ${isActive ? 'scale-105' : 'scale-100'}`}
                 />
                 
                 {/* Inner Shadow / Vignette overlay */}
                 <div className="absolute inset-0 bg-black/5 pointer-events-none rounded-[32px]"></div>
               </div>
            );
          })}
          
          {/* UI Hint overlay reminding the user they can swap videos */}
          <div className="absolute top-6 right-6 z-50 bg-black/20 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full pointer-events-none">
            <p className="text-white text-xs font-medium tracking-wide drop-shadow-md">
              Swap with Veo3 Video later
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
