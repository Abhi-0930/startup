"use client";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const challengesData = [
  {
    id: "01",
    challenge: "No Online Presence",
    description: "Businesses today lose potential clients daily simply because they don't have a website or their existing one looks outdated and untrustworthy. First impressions happen online now.",
    solution: "We build fast, modern, and professional websites that make your business look credible, attract the right clients, and turn visitors into paying customers from day one.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/3130283/3130283-hd_1920_1080_24fps.mp4"
  },
  {
    id: "02",
    challenge: "Losing Mobile Customers",
    description: "Customers expect to interact with businesses through their phones. Without a mobile app, you're making it harder for them to reach you and easier for them to choose a competitor who has one.",
    solution: "We build custom mobile apps tailored exactly to your business needs, giving your customers a seamless experience on their phones and keeping them loyal to you.",
    imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/4255013/4255013-hd_1920_1080_30fps.mp4"
  },
  {
    id: "03",
    challenge: "Too Much Manual Work",
    description: "Business owners and their teams waste hours every single week on repetitive tasks like follow-ups, data entry, scheduling and reporting. That is time and money that should be going into growth.",
    solution: "We build AI automation systems that silently handle all your repetitive work in the background, freeing your team to focus entirely on growing the business.",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
  },
  {
    id: "04",
    challenge: "Underperforming Website",
    description: "You already have a website but it loads slowly, doesn't show up on Google, looks outdated, and brings in absolutely no enquiries. It's sitting there doing nothing while costing you money.",
    solution: "We audit, fix, and fully optimise your existing website so it starts working hard for your business, bringing in traffic, building trust, and converting visitors into real leads.",
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/8261314/8261314-hd_1920_1080_24fps.mp4"
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
      className="relative w-full aspect-[16/10] md:aspect-[4/3] rounded-[24px] md:rounded-[40px] overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 border border-black/5"
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
      <div className={`absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-black/40 backdrop-blur-md border border-white/10 shadow-lg px-2.5 py-1 rounded-full pointer-events-none transition-all duration-500 transform ${isActive ? 'opacity-0 scale-90 -translate-y-2' : 'opacity-100 scale-100 translate-y-0'}`}>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ff4d6d] shadow-[0_0_8px_#ff4d6d] animate-pulse"></div>
          <p className="text-white/90 text-[10px] font-bold tracking-[0.15em] uppercase">
            Problem
          </p>
        </div>
      </div>

      {/* Dynamic 'Solution' Badge */}
      <div className={`absolute top-4 right-4 md:top-6 md:right-6 z-50 bg-black/40 backdrop-blur-md border border-white/10 shadow-lg px-2.5 py-1 rounded-full pointer-events-none transition-all duration-500 transform ${isActive ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 -translate-y-2'}`}>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse"></div>
          <p className="text-white/90 text-[10px] font-bold tracking-[0.15em] uppercase">
            Solution
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 p-5 md:p-10 flex flex-col justify-end pointer-events-none">
        
        {/* Challenge Header */}
        <div className={`transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? '-translate-y-4 md:-translate-y-3' : 'translate-y-0'}`}>
          <h3 className="text-white text-[22px] md:text-[36px] font-bold leading-tight mb-2 md:mb-3 drop-shadow-2xl">
            {item.challenge}
          </h3>
          
          {/* Problem Description: Visible ONLY on Desktop, hidden COMPLETELY on Mobile to keep it clean */}
          <p className={`hidden md:block text-white/80 leading-relaxed transition-all duration-500 md:text-[17px]
            ${isActive ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}
          `}>
            {item.description}
          </p>
        </div>

        {/* Revealable Solution Text: Shown on both Mobile (Tap) and Desktop (Hover) */}
        <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'grid-rows-[1fr] opacity-100 mt-4 md:mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
          <div className="overflow-hidden flex flex-col gap-2 md:gap-3">
            <div className="flex items-center gap-2 text-[10px] md:text-[12px] font-black text-[#10b981] uppercase tracking-[0.2em] drop-shadow-sm">
              Our Solution 
              <ArrowRight className="w-3.5 md:w-4 h-3.5 md:h-4" />
            </div>
            <p className="text-white text-[15px] md:text-[18px] lg:text-[19px] leading-relaxed max-w-lg font-semibold line-clamp-4 md:line-clamp-3">
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
    <section className="pt-12 pb-24 md:pt-24 md:pb-40 max-w-[1200px] mx-auto px-6">
      
      {/* Centered Header Section */}
      <div className="mb-10 md:mb-20 text-center">
        <h2 className="text-[2.2rem] md:text-6xl lg:text-[4rem] font-black tracking-tighter text-neutral-900 leading-[1] mb-6 md:mb-8">
          The challenges <br className="hidden md:block" />
          <span className="text-neutral-400">modern businesses face.</span>
        </h2>
      </div>

      {/* 2x2 Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {challengesData.map((item) => (
           <ChallengeCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
