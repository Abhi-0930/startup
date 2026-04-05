"use client";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const challengesData = [
  {
    id: "01",
    challenge: "No Online Presence",
    description: "A potential loss of revenue due to a missing or outdated digital storefront that fails to establish trust with modern users.",
    solution: "High-performance digital platforms that establish immediate brand credibility and drive lead generation from day one.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/3130283/3130283-hd_1920_1080_24fps.mp4"
  },
  {
    id: "02",
    challenge: "Losing Mobile Customers",
    description: "Loss of engagement and customer retention due to a fragmented or difficult-to-use mobile experience across various devices.",
    solution: "Intuitive mobile applications and responsive experiences designed to maintain high customer engagement and brand loyalty.",
    imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/4255013/4255013-hd_1920_1080_30fps.mp4"
  },
  {
    id: "03",
    challenge: "Too Much Manual Work",
    description: "Significant operational overhead and team burnout caused by repetitive manual tasks that could be handled through intelligent automation.",
    solution: "Intelligent automation systems that operate silently in the background, eliminating repetitive tasks and returning focus to growth strategies.",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    videoSrc: "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4"
  },
  {
    id: "04",
    challenge: "Underperforming Website",
    description: "A digital paperweight that fails to convert traffic effectively, often due to slow load times or an outdated technical infrastructure.",
    solution: "Data-driven performance optimization and infrastructure updates that transform low-converting sites into efficient business tools.",
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
      className="group relative w-full bg-white rounded-[28px] md:rounded-[32px] p-3.5 pb-6 md:p-5 md:pb-8 overflow-hidden cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-zinc-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500"
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onClick={handleClick}
    >
      {/* Media Container (Top) */}
      <div className="relative w-full aspect-[16/10] md:aspect-[1.5/1] rounded-[20px] md:rounded-[24px] overflow-hidden bg-zinc-50 border border-zinc-100/50">
        <video
           key={item.id}
           ref={videoRef}
           src={item.videoSrc}
           poster={item.imageSrc}
           autoPlay
           loop
           muted
           playsInline
           className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] ease-linear ${isActive ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Content Container (Bottom) */}
      <div className="mt-5 md:mt-6 px-1.5 text-left">
        {/* Dynamic Badge Area */}
        <div className="relative h-4 flex items-center mb-2.5">
          <div className={`absolute left-0 bg-red-50 border border-red-100 px-2 py-0.5 rounded-full flex items-center gap-1 transition-all duration-500 ${isActive ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
            <span className="text-red-600 text-[9px] font-bold tracking-wider uppercase">Problem</span>
          </div>

          <div className={`absolute left-0 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <span className="text-emerald-600 text-[9px] font-bold tracking-wider uppercase">Solution</span>
          </div>
        </div>

        {/* Challenge Header */}
        <h3 className="text-[#0a0a0b] text-[17px] md:text-[19px] font-semibold leading-tight mb-2.5 tracking-tight group-hover:text-black transition-colors text-left">
          {item.challenge}
        </h3>
        
        {/* Text Reveal Logic: Problem vs Solution */}
        <div className="relative min-h-[50px] md:min-h-[60px] text-left">
          {/* Problem Text */}
          <p className={`text-zinc-500 text-[13px] md:text-[14px] leading-relaxed transition-all duration-500 absolute inset-0 text-left ${isActive ? 'opacity-0 invisible -translate-x-4' : 'opacity-100 visible translate-x-0'}`}>
            {item.description}
          </p>
          
          {/* Solution Text */}
          <div className={`transition-all duration-500 absolute inset-0 text-left ${isActive ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-4'}`}>
            <p className="text-[#0a0a0b] text-[13px] md:text-[14px] leading-relaxed font-medium text-left">
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
    <section className="pt-0 pb-12 md:pt-0 md:pb-16 max-w-[980px] mx-auto px-6">
      
      {/* Centered Header Section */}
      <div className="mb-10 md:mb-16 text-center">
        <h2 className="text-[2.2rem] md:text-5xl lg:text-[3.5rem] font-black tracking-tighter text-neutral-900 leading-[1.1] mb-6 md:mb-8">
          The challenges <br className="hidden md:block" />
          <span className="text-neutral-400">modern businesses face.</span>
        </h2>
      </div>

      {/* 2x2 Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {challengesData.map((item) => (
           <ChallengeCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
