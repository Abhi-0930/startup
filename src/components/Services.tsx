"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layout, 
  Zap, 
  Layers, 
  PenTool, 
  ChevronDown, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Design & UX/UI",
    description: "Crafting visually stunning and highly intuitive digital experiences that engage users and drive meaningful results for your brand.",
    icon: <Layout className="w-5 h-5" />
  },
  {
    id: 2,
    title: "No-code Development",
    description: "Building powerful, scalable web applications at lightning speed using modern no-code platforms without compromising on quality or performance.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 3,
    title: "MVP prototyping",
    description: "Rapidly turning your complex ideas into functional prototypes to validate concepts and secure early-stage feedback from your target audience.",
    icon: <Layers className="w-5 h-5" />
  },
  {
    id: 4,
    title: "Ongoing Design Partner",
    description: "Providing continuous design support and updates to keep your digital presence ahead of the curve and aligned with evolving market trends.",
    icon: <PenTool className="w-5 h-5" />
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<number | null>(4); // Default to Ongoing Design Partner as in reference

  return (
    <section className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-28 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2.5 h-2.5 bg-[#ff4d6d] rounded-sm rotate-45"></div>
              <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-neutral-400">Services</span>
            </div>
            <h2 className="text-[2.8rem] md:text-[4rem] lg:text-[5rem] font-bold leading-[1.05] tracking-tighter text-neutral-900">
              From idea to scale. <br />
              <span className="text-neutral-400">We master our craft.</span>
            </h2>
          </div>
          
          <button className="group flex items-center gap-4 bg-white border border-neutral-100 px-8 py-4 rounded-full hover:bg-neutral-50 transition-all duration-300 shadow-sm hover:shadow-md">
            <span className="font-bold text-neutral-900 tracking-tight">Start A Project</span>
            <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
        </div>

        {/* Content Section: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* Left Column: Accordion */}
          <div className="flex flex-col gap-4 w-full">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`group transition-all duration-500 rounded-[32px] overflow-hidden ${
                  activeTab === service.id 
                    ? "bg-white border border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-7" 
                    : "bg-white border border-transparent hover:border-neutral-100 p-5"
                }`}
              >
                <button 
                  onClick={() => setActiveTab(activeTab === service.id ? null : service.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500 sm:w-14 sm:h-14 ${
                      activeTab === service.id 
                        ? "bg-white border-neutral-200 text-neutral-900 shadow-sm" 
                        : "bg-neutral-50 border-neutral-50 text-neutral-400 group-hover:text-neutral-900 group-hover:border-neutral-100"
                    }`}>
                      {service.icon}
                    </div>
                    <span className={`text-[20px] md:text-[24px] font-bold tracking-tight transition-colors duration-500 ${
                      activeTab === service.id ? "text-neutral-900" : "text-neutral-500 group-hover:text-neutral-900"
                    }`}>
                      {service.title}
                    </span>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-neutral-300 transition-transform duration-500 ${
                    activeTab === service.id ? "rotate-180 text-neutral-900" : ""
                  }`} />
                </button>

                <AnimatePresence>
                  {activeTab === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pl-16 md:pl-19 pr-4">
                        <p className="text-neutral-400 text-[16px] md:text-[18px] leading-relaxed max-w-lg font-medium">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Media Showcase */}
          <div className="relative mt-12 lg:mt-0 flex group items-center justify-center">
            {/* Background Decorative Element (Matching Image's Red Bar Effect) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none opacity-30 select-none">
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-[#ff4d6d] opacity-20 blur-[1px]"></div>
                <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-48 h-48 bg-[#ff4d6d]/10 blur-[100px] rounded-full animate-pulse"></div>
            </div>

            <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-neutral-100 ring-1 ring-black/5 bg-neutral-50">
               <video 
                 src="https://videos.pexels.com/video-files/4828606/4828606-uhd_2560_1440_25fps.mp4" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
               />
               
               {/* Reference Red Vertical Bar */}
               <div className="absolute top-[15%] right-[12%] w-[12%] h-[60%] bg-[#ff4d6d] opacity-90 rounded-2xl shadow-[0_20px_50px_rgba(255,77,109,0.4)] pointer-events-none"></div>
               <div className="absolute top-[10%] right-[10%] w-[16%] h-[70%] bg-[#ff4d6d]/20 blur-2xl rounded-3xl pointer-events-none animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
