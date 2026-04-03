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
  return (
    <section className="pt-8 pb-24 md:pt-12 md:pb-32 max-w-[1400px] mx-auto px-4 md:px-8">
      
      {/* Centered Header Section */}
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-neutral-900 leading-[1.1]">
          The challenges <br className="hidden md:block" />
          <span className="text-neutral-400">modern businesses face.</span>
        </h2>
      </div>

      {/* Grid of Interactive Video Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        
        {challengesData.map((item) => (
          <div 
            key={item.id} 
            className="group relative w-full aspect-[4/5] rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 border border-black/10"
          >
            {/* Background Video natively playing in each card */}
            <video
               src={item.videoSrc}
               autoPlay
               loop
               muted
               playsInline
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110"
            />
            
            {/* Dark Gradient Overlay triggering on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 group-hover:via-black/80 group-hover:to-black/30 transition-colors duration-500"></div>

            {/* Content Container glued to the bottom */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              
              {/* Challenge Stat / Title (Always Visible) */}
              <div className="transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2">
                <span className="text-white/60 text-[13px] font-bold tracking-wider uppercase block mb-3">
                  Challenge {item.id}
                </span>
                <h3 className="text-white text-2xl md:text-[26px] font-semibold leading-tight drop-shadow-md">
                  {item.challenge}
                </h3>
              </div>

              {/* Revealable Solution Text sliding up entirely on hover */}
              <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] mt-0 group-hover:mt-4">
                <div className="overflow-hidden">
                  <p className="text-white/90 text-[15px] leading-relaxed">
                    {item.solution}
                  </p>
                  
                  <div className="mt-5 flex items-center gap-2 text-[13px] font-bold text-white uppercase tracking-wider">
                    Our Solution 
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              
            </div>
            
            {/* UI Hint overlay inside the First Card */}
            {item.id === "01" && (
              <div className="absolute top-6 right-6 z-50 bg-black/30 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white/90 text-[11px] font-medium tracking-wide">
                  Paste Veo3 Video URL Here
                </p>
              </div>
            )}
          </div>
        ))}
        
      </div>
    </section>
  );
}
