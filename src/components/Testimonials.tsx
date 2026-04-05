import Image from "next/image";
import { Quote, Activity, Boxes, Aperture } from "lucide-react";

const testimonials = [
  {
    id: 1,
    stat: "2.3x",
    statLabel: "increase in lead conversion",
    text: "Zerogrid completely redefined our digital presence. Their strategic design approach and attention to user behavior boosted our conversion rate significantly. We went from just a pretty site to a performance-driven asset.",
    author: "Sarah Coleman",
    role: "CMO",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
    CompanyIcon: Activity,
  },
  {
    id: 2,
    stat: "+150%",
    statLabel: "growth in user engagement",
    text: "The team didn't just build a website; they built an experience. The attention to detail in the animations and the overall premium feel elevated our entire brand identity overnight. Absolutely brilliant execution.",
    author: "David Chen",
    role: "Founder & CEO",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop",
    CompanyIcon: Boxes,
  },
  {
    id: 3,
    stat: "< 1s",
    statLabel: "lightning fast page loads",
    text: "Speed and aesthetic rarely go hand-in-hand, but Zerogrid nailed it. The technical architecture is deeply optimized. Our site feels incredibly lightweight while still delivering high-end, graphics-heavy layouts.",
    author: "Elena Rodriguez",
    role: "VP of Engineering",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&h=256&auto=format&fit=crop",
    CompanyIcon: Aperture,
  }
];

export default function Testimonials() {
  return (
    <section className="pt-8 pb-24 md:pt-12 md:pb-32 overflow-hidden bg-zinc-50/30">
      <style>{`
        @keyframes scrollLeftSlow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-scroll-slow {
          animation: scrollLeftSlow 40s linear infinite;
        }
        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight text-center max-w-2xl mx-auto">
          What our clients say 
          <span className="block text-zinc-400 mt-2">after working with us.</span>
        </h2>
      </div>

      {/* Marquee Viewport */}
      <div className="relative flex items-center w-full">
        {/* Transparent edge masks to blend into the background */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-zinc-50 via-zinc-50/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-zinc-50 via-zinc-50/80 to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-scroll-slow items-center gap-6 md:gap-8 px-4">
          {/* We produce exactly 3 duplicate sets of the array so we can shift -33.33% to seamlessly loop */}
          {[0, 1, 2].map((groupIndex) => (
            <div key={`group-${groupIndex}`} className="flex items-stretch gap-6 md:gap-8">
              
              {testimonials.map((item) => (
                <div 
                  key={`${groupIndex}-${item.id}`} 
                  className="w-[340px] md:w-[480px] bg-white rounded-[32px] p-8 md:p-10 border border-zinc-200/60 shadow-sm shrink-0 flex flex-col group hover:shadow-md hover:border-zinc-300 transition-all duration-300 cursor-grab active:cursor-grabbing"
                >
                  {/* Top: Massive Stat */}
                  <div>
                    <h3 className="text-[40px] leading-none font-bold text-zinc-900 tracking-tight">
                      {item.stat}
                    </h3>
                    <p className="text-zinc-500 font-medium text-[15px] md:text-[17px] mt-2">
                      {item.statLabel}
                    </p>
                  </div>
                  
                  {/* The Quotation mark */}
                  <div className="mt-8 mb-4">
                    <span className="text-[#e25a48] text-5xl font-serif leading-none opacity-90">
                      ❝
                    </span>
                  </div>    

                  {/* The Review English */}
                  <p className="text-zinc-600 text-[15px] md:text-[16px] leading-relaxed flex-grow">
                    {item.text}
                  </p>  
                                  
                  {/* The Bottom Profile Block */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-200 shrink-0">
                         <img 
                           src={item.profileImage} 
                           alt={item.author} 
                           className="w-full h-full object-cover"
                         />6
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900 text-[15px]">{item.author}</h4>
                        <p className="text-zinc-500 text-[13px]">{item.role}</p>
                      </div>
                    </div>
                    {/* The Company Logo Mark */}
                    <div className="text-zinc-300 group-hover:text-zinc-400 transition-colors">
                       <item.CompanyIcon size={24} />
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
