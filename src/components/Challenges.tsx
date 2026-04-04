"use client";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const challengesData = [
  {
    id: "01",
    challenge: "Outdated Design",
    description: "An old-fashioned website makes your business look much less professional than it really is.",
    solution: "We build world-class, premium designs that instantly elevate your brand's authority.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/3130283/3130283-hd_1920_1080_24fps.mp4"
  },
  {
    id: "02",
    challenge: "Outdated Tech",
    description: "Old, outdated technology stacks slow down your business and frequently crash when your traffic begins to grow.",
    solution: "We use the latest high-performance technology to ensure your platform is lightning-fast and 100% reliable.",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
  },
  {
    id: "03",
    challenge: "Slow Performance",
    description: "Slow loading speeds frustrate your users and often make them switch to your competitors.",
    solution: "We build hyperspeed, high-performance platforms that load instantly on any device.",
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/8261314/8261314-hd_1920_1080_24fps.mp4"
  },
  {
    id: "04",
    challenge: "Hard to Manage",
    description: "Wasting hours on simple website updates stops you from focusing on your actual core business.",
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
      className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-700 border border-black/5"
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

      {/* Dynamic 'Problem' Badge */}
      <div className={`absolute top-4 right-4 z-50 bg-black/40 backdrop-blur-md border border-white/10 shadow-lg px-2.5 py-1 rounded-full pointer-events-none transition-all duration-500 transform ${isActive ? 'opacity-0 scale-90 -translate-y-2' : 'opacity-100 scale-100 translate-y-0'}`}>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ff4d6d] shadow-[0_0_8px_#ff4d6d] animate-pulse"></div>
          <p className="text-white/90 text-[10px] font-bold tracking-[0.15em] uppercase">
            Problem
          </p>
        </div>
      </div>

      {/* Dynamic 'Solution' Badge */}
      <div className={`absolute top-4 right-4 z-50 bg-black/40 backdrop-blur-md border border-white/10 shadow-lg px-2.5 py-1 rounded-full pointer-events-none transition-all duration-500 transform ${isActive ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 -translate-y-2'}`}>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse"></div>
          <p className="text-white/90 text-[10px] font-bold tracking-[0.15em] uppercase">
            Solution
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end pointer-events-none">
        
        {/* Challenge Header */}
        <div className={`transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? '-translate-y-2' : 'translate-y-0'}`}>
          <h3 className="text-white text-[20px] md:text-[24px] font-bold leading-tight mb-2 drop-shadow-xl">
            {item.challenge}
          </h3>
          <p className={`text-white/80 text-[13px] md:text-[14px] leading-relaxed transition-opacity duration-500 ${isActive ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            {item.description}
          </p>
        </div>

        {/* Revealable Solution Text */}
        <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'grid-rows-[1fr] opacity-100 mt-3 md:mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
          <div className="overflow-hidden flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[10px] font-black text-[#10b981] uppercase tracking-[0.2em] drop-shadow-sm">
              Our Solution 
              <ArrowRight className="w-3 h-3" />
            </div>
            <p className="text-white text-[14px] md:text-[15px] leading-relaxed max-w-lg font-semibold line-clamp-2">
              {item.solution}
            </p>
          </div>
        </div>
        
      </div>

    </div>
  );
}

export default function Challenges() {
  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 max-w-4xl mx-auto px-6">
      
      {/* Centered Header Section */}
      <div className="mb-10 md:mb-14 text-center">
        <h2 className="text-[2.2rem] md:text-5xl font-black tracking-tighter text-neutral-900 leading-[1] mb-4">
          The challenges <br className="hidden md:block" />
          <span className="text-neutral-400">modern businesses face.</span>
        </h2>
      </div>

      {/* 2x2 Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {challengesData.map((item) => (
           <ChallengeCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
