"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layout, 
  Zap, 
  Layers, 
  PenTool, 
  ChevronDown, 
  ArrowRight,
  Code,
  Smartphone,
  Cpu,
  Sparkles,
  Search
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom, high-performance websites built for speed and reliability, designed to establish immediate brand authority and convert traffic into revenue.",
    icon: <Code className="w-5 h-5" />,
    imageSrc: "/services/web-dev.avif"
  },
  {
    id: 2,
    title: "App Development",
    description: "Scalable mobile and web applications with intuitive user interfaces, tailored to solve specific business problems and enhance customer engagement.",
    icon: <Smartphone className="w-5 h-5" />,
    imageSrc: "/services/app-dev.avif"
  },
  {
    id: 3,
    title: "AI Automation",
    description: "Intelligent automation workflows that handle repetitive manual tasks, ensuring a more efficient team and significantly reduced operational overhead.",
    icon: <Cpu className="w-5 h-5" />,
    imageSrc: "/services/ai-automation.avif"
  },
  {
    id: 4,
    title: "AI Applications",
    description: "Advanced tools including custom chatbots and recommendation engines that use AI to deliver a personalized, high-speed experience to your users.",
    icon: <Sparkles className="w-5 h-5" />,
    imageSrc: "/services/ai-applications.avif"
  },
  {
    id: 5,
    title: "MVP Prototyping",
    description: "Functional early-stage products designed for rapid testing, allowing you to validate core ideas with real users and secure stakeholder buy-in.",
    icon: <Layers className="w-5 h-5" />,
    imageSrc: "/services/mvp.avif"
  },
  {
    id: 6,
    title: "SEO Improvement",
    description: "Strategic search engine optimization that increases organic visibility and brings targeted traffic to your site without the need for paid ads.",
    icon: <Search className="w-5 h-5" />,
    imageSrc: "/services/seo-improvment.avif"
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<number | null>(1); // Default to Web Development

  return (
    <section className="pt-0 pb-24 md:pt-0 md:pb-36 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-28 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[13px] font-bold text-neutral-500 tracking-[0.2em] uppercase">Services</span>
            </div>
            <h2 className="text-[2.8rem] md:text-[4rem] lg:text-[5rem] font-bold leading-[1.05] tracking-tighter text-neutral-900">
              From idea to scale. <br />
              <span className="text-neutral-400">We master our craft.</span>
            </h2>
          </div>
          
          <button className="group flex items-center gap-4 bg-zinc-950 px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg">
            <span className="font-medium text-white tracking-tight">Start A Project</span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
              <ArrowRight size={20} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
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
                onMouseEnter={() => setActiveTab(service.id)}
                onMouseLeave={() => setActiveTab(null)}
                className={`group transition-all duration-500 rounded-[32px] overflow-hidden cursor-pointer ${
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
                        ? "bg-black border-black text-white" 
                        : "bg-white border-neutral-100 text-neutral-400 group-hover:border-neutral-200 group-hover:text-black"
                    }`}>
                      {service.icon}
                    </div>
                    <span className="text-[20px] md:text-[24px] font-normal tracking-tight text-neutral-900 transition-colors duration-500">
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
                        <p className="text-neutral-600 text-[16px] md:text-[18px] leading-relaxed max-w-lg font-medium">
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
          <div className="relative mt-12 lg:mt-0 hidden lg:flex group items-center justify-center h-full min-h-[500px]">
            {/* Hidden Preloader: This ensures all images are cached and ready INstantaneously */}
            <div className="hidden" aria-hidden="true">
              {services.map((service) => (
                <Image 
                  key={`preload-${service.id}`}
                  src={service.imageSrc}
                  alt="preload"
                  width={1}
                  height={1}
                  priority={true}
                />
              ))}
            </div>

            <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] rounded-[48px] md:rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-neutral-100 ring-1 ring-black/5 bg-neutral-50">
               <AnimatePresence>
                   <motion.div
                     key={activeTab}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.1, ease: "linear" }}
                     className="w-full h-full absolute inset-0"
                   >
                   {/* Skeleton Loader (Shimmer) */}
                   <div className="absolute inset-0 bg-neutral-100 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-shimmer w-[200%] h-full"></div>
                   </div>

                   <Image
                     key={`active-img-${activeTab}`}
                     src={services.find(s => s.id === activeTab)?.imageSrc || services[0].imageSrc} 
                     alt={services.find(s => s.id === activeTab)?.title || "Service"}
                     fill
                     className="object-cover transition-transform duration-[10s] group-hover:scale-105"
                     priority={true}
                   />
                   
                   {/* Subtle Overlay to match the branding */}
                   <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
                   
                 </motion.div>
               </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
