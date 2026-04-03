"use client";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const challengesData = [
  {
    id: "01",
    challenge: "You get traffic, but no sales.",
    solution: "We map out strategic user journeys that guide casual visitors directly into paying customers.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
  },
  {
    id: "02",
    challenge: "Your website looks outdated.",
    solution: "We build modern, premium designs that instantly elevate your brand's authority and trust.",
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/3209211/3209211-hd_1920_1080_25fps.mp4"
  },
  {
    id: "03",
    challenge: "Your site is too slow.",
    solution: "We use cutting-edge architecture so your pages load instantly, keeping users engaged without frustration.",
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/3163534/3163534-hd_1920_1080_24fps.mp4"
  }
];

function ChallengeCard({ item }: { item: typeof challengesData[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);

  const activate = () => {
    setIsActive(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const deactivate = () => {
    setIsActive(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; 
    }
  };

  const handleClick = () => {
    if (isActive) {
      deactivate();
    } else {
      activate();
    }
  };

  return (
    <div 
      className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden cursor-pointer shadow-lg transition-all duration-700 border border-black/10"
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onClick={handleClick}
    >

      {/* Natively use the poster attribute for a clean photo placeholder! */}
      <video
         ref={videoRef}
         src={item.videoSrc}
         poster={item.imageSrc}
         loop
         muted
         playsInline
         className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] ease-linear ${isActive ? 'scale-110' : 'scale-100'}`}
      />
      
      {/* Dark Gradient Overlay for text readability */}
      <div className={`absolute inset-0 transition-colors duration-500 pointer-events-none ${isActive ? 'bg-gradient-to-t from-black/95 via-black/80 to-black/30' : 'bg-gradient-to-t from-black/80 via-black/40 to-black/10'}`}></div>

      {/* Content Container glued to the bottom */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
        
        {/* Challenge Stat / Title (Always Visible) */}
        <div className={`transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? '-translate-y-2' : 'translate-y-0'}`}>
          <span className="text-white/60 text-[13px] font-bold tracking-wider uppercase block mb-3">
            Challenge {item.id}
          </span>
          <h3 className="text-white text-2xl md:text-[26px] font-semibold leading-tight drop-shadow-md">
            {item.challenge}
          </h3>
        </div>

        {/* Revealable Solution Text sliding up on Active State */}
        <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
          <div className="overflow-hidden">
            <p className="text-white/90 text-[15px] leading-relaxed">
              {item.solution}
            </p>
            
            <div className="mt-5 flex items-center gap-2 text-[13px] font-bold text-white uppercase tracking-wider">
              Our Solution 
              <ArrowRight className="w-4 h-4 transform transition-transform" />
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Dynamic 'Solution' Badge top right */}
      <div className={`absolute top-6 right-6 z-50 bg-black/40 backdrop-blur-md border border-white/10 shadow-lg px-2.5 py-1 rounded-full pointer-events-none transition-all duration-500 transform ${isActive ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 -translate-y-4'}`}>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse"></div>
          <p className="text-white/90 text-[10px] font-medium tracking-[0.15em] uppercase drop-shadow-sm">
            Solution
          </p>
        </div>
      </div>

    </div>
  );
}

export default function Challenges() {
  return (
    <section className="pt-8 pb-24 md:pt-12 md:pb-32 max-w-[1400px] mx-auto px-4 md:px-8">
      
      {/* Centered Header Section */}
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-neutral-900 leading-[1.1]">
          The challenges <br className="hidden md:block" />
          <span className="text-neutral-400">modern businesses face.</span>
        </h2>
      </div>

      {/* Grid of Interactive Media Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {challengesData.map((item) => (
          <ChallengeCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
