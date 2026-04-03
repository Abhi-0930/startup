"use client";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const challengesData = [
  {
    id: "01",
    challenge: "Outdated Design",
    description: "Your brand looks stuck in the past.",
    solution: "We build world-class, premium designs that instantly elevate your brand's authority.",
    imageSrc: "https://images.unsplash.com/photo-1508962914676-13d82dfd79ea?q=80&w=1200&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/2759477/2759477-hd_1920_1080_30fps.mp4"
  },
  {
    id: "02",
    challenge: "Confusing Layout",
    description: "Customers don't know where to click.",
    solution: "We design clear, intuitive interfaces that guide your users seamlessly toward a sale.",
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/3141208/3141208-hd_1920_1080_25fps.mp4"
  },
  {
    id: "03",
    challenge: "Slow Performance",
    description: "Loading screens are driving users away.",
    solution: "We build hyperspeed, high-performance platforms that load instantly on any device.",
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
  },
  {
    id: "04",
    challenge: "Hard to Manage",
    description: "Updating content is a total nightmare.",
    solution: "We give you 100% control with custom, easy-to-use systems that anyone can manage.",
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4"
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
      className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[16/10] rounded-[32px] overflow-hidden cursor-pointer shadow-lg transition-all duration-700 border border-black/10"
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onClick={handleClick}
    >

      {/* Media Background */}
      <video
         ref={videoRef}
         src={item.videoSrc}
         poster={item.imageSrc}
         loop
         muted
         playsInline
         className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] ease-linear ${isActive ? 'scale-110' : 'scale-100'}`}
      />
      
      {/* Dark Overlay */}
      <div className={`absolute inset-0 transition-colors duration-500 pointer-events-none ${isActive ? 'bg-gradient-to-t from-black/95 via-black/80 to-transparent' : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'}`}></div>

      {/* Dynamic 'Problem' Badge (Mirroring Reference) */}
      <div className={`absolute top-5 right-5 md:top-6 md:right-6 z-50 bg-black/40 backdrop-blur-md border border-white/10 shadow-lg px-2.5 py-1 rounded-full pointer-events-none transition-all duration-500 transform ${isActive ? 'opacity-0 scale-90 -translate-y-4' : 'opacity-100 scale-100 translate-y-0'}`}>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ff4d6d] shadow-[0_0_8px_#ff4d6d] animate-pulse"></div>
          <p className="text-white/90 text-[10px] font-medium tracking-[0.15em] uppercase drop-shadow-sm">
            Problem
          </p>
        </div>
      </div>

      {/* Dynamic 'Solution' Badge (Top Right) */}
      <div className={`absolute top-5 right-5 md:top-6 md:right-6 z-50 bg-black/40 backdrop-blur-md border border-white/10 shadow-lg px-2.5 py-1 rounded-full pointer-events-none transition-all duration-500 transform ${isActive ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 -translate-y-4'}`}>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse"></div>
          <p className="text-white/90 text-[10px] font-medium tracking-[0.15em] uppercase drop-shadow-sm">
            Solution
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end pointer-events-none">
        
        {/* Challenge Header (Simplified Title) */}
        <div className={`transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? '-translate-y-2' : 'translate-y-0'}`}>
          <h3 className="text-white text-[24px] md:text-[30px] font-semibold leading-tight mb-2 drop-shadow-md">
            {item.challenge}
          </h3>
          <p className={`text-white/70 text-[14px] md:text-[16px] transition-opacity duration-500 ${isActive ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            {item.description}
          </p>
        </div>

        {/* Revealable Solution Text (On Active) */}
        <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'grid-rows-[1fr] opacity-100 mt-4 md:mt-5' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
          <div className="overflow-hidden flex flex-col gap-2 md:gap-3">
            <div className="flex items-center gap-2 text-[11px] font-bold text-[#10b981] uppercase tracking-widest drop-shadow-sm">
              Our Solution 
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <p className="text-white/95 text-[15px] md:text-[17px] leading-relaxed max-w-xl font-medium">
              {item.solution}
            </p>
          </div>
        </div>
        
      </div>
      
      {/* Dynamic Solution Badge (Top Right) */}
      <div className={`absolute top-5 right-5 md:top-6 md:right-6 z-50 bg-black/40 backdrop-blur-md border border-white/10 shadow-lg px-2.5 py-1 rounded-full pointer-events-none transition-all duration-500 transform ${isActive ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 -translate-y-4'}`}>
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

      {/* 2x2 Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {challengesData.map((item) => (
           <ChallengeCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
