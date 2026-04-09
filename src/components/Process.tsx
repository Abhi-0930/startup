"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// High-fidelity LordIcons with stable IDs
const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, user needs, and market landscape to build a bulletproof roadmap for success.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description: "Your vision takes shape through clean, high-end UI design and interactive prototypes that prioritize user experience.",
  },
  {
    number: "03",
    title: "Agile Development",
    description: "Our senior engineers build your product using cutting-edge tech, ensuring clean code, scalability, and top-tier performance.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "We handle the seamless deployment and continue to support your growth with data-driven optimizations and scaling.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll Progress Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef}
      className="py-16 md:py-32 bg-[#09090b] relative overflow-hidden text-white"
      id="process"
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          
          {/* Left Column: Sticky Header */}
          <div className="w-full md:w-[40%] md:sticky md:top-32 self-start space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse" />
              <span className="text-[12px] font-bold text-blue-400 uppercase tracking-widest">Our Execution</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              A high-precision <br />
              <span className="text-zinc-500">workflow that delivers.</span>
            </h2>
            
            <p className="text-zinc-400 text-lg md:text-xl max-w-sm leading-relaxed">
              We translate your vision into a high-performance digital product through our agile, 4-step roadmap.
            </p>

            {/* Decorative Grid for Cyberpunk vibes */}
            <div className="hidden md:block pt-8 opacity-20">
              <div className="w-32 h-32 border border-white/10 grid grid-cols-4 grid-rows-4">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="border-[0.5px] border-white/5" />
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column: Vertical Timeline Bar */}
          <div className="hidden md:flex flex-col items-center relative self-stretch py-4">
            {/* Background Line */}
            <div className="w-[1.5px] h-full bg-white/10 absolute inset-0" />
            
            {/* Animated Progress Line */}
            <motion.div 
              style={{ scaleY }}
              className="w-[1.5px] h-full bg-blue-500 absolute inset-0 origin-top shadow-[0_0_20px_rgba(59,130,246,1)]"
            />
          </div>

          {/* Right Column: Step Cards */}
          <div className="w-full md:w-[55%] flex flex-col gap-24 md:gap-40 pb-32">
            {steps.map((step, index) => {
              // Internal component to handle individual scroll logic for each card
              return <StepItem key={index} step={step} />;
            })}
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 -z-10" />
    </section>
  );
}

function StepItem({ step }: { step: typeof steps[0] }) {
  const itemRef = useRef<HTMLDivElement>(null);
  
  // Track this specific item's progress as it moves through the viewport
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"] // from entering bottom to leaving top
  });

  // Calculate to-and-fro opacity (0 -> 1 in middle -> 0)
  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.6, 0.9],
    [0, 1, 1, 0]
  );

  // Parallax X offset for "fade left"
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.9],
    [100, 0, -100]
  );

  // Subtle scale
  const scale = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.9],
    [0.9, 1, 0.9]
  );

  return (
    <motion.div 
      ref={itemRef}
      style={{ opacity, x, scale }}
      className="relative group pr-4"
    >
      {/* Mobile Step Indicator */}
      <div className="md:hidden flex items-center gap-4 mb-4">
        <span className="text-4xl font-black text-blue-500/20 tracking-tighter leading-none">
          {step.number}
        </span>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      {/* Step Card Content */}
      <div className="flex items-start gap-8">
        {/* Desktop Step Number (The primary anchor) */}
        <div className="shrink-0 pt-2">
          <span className="text-6xl md:text-8xl font-black text-blue-500/10 select-none tracking-tighter leading-none">
            {step.number}
          </span>
        </div>

        <div className="space-y-4 pt-1">
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
            {step.title}
          </h3>
          <p className="text-zinc-400 text-lg md:text-2xl leading-relaxed max-w-xl">
            {step.description}
          </p>
          
          {/* Subtle separator */}
          <div className="w-12 h-1 bg-blue-500/20 rounded-full group-hover:w-24 group-hover:bg-blue-500 transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
}
