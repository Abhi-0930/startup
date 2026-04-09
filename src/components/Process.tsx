"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

  // Scroll Progress Logic for the central timeline
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
      className="py-16 md:py-32 bg-white relative overflow-hidden text-zinc-900"
      id="process"
    >
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          
          {/* Left Column: Sticky Header */}
          <div className="w-full md:w-[40%] md:sticky md:top-32 self-start space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.3)] animate-pulse" />
              <span className="text-[12px] font-bold text-blue-600 uppercase tracking-widest">The Workflow</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 leading-[1.1] tracking-tight">
              A high-precision <br />
              <span className="text-zinc-400">plan for impact.</span>
            </h2>
            
            <p className="text-zinc-600 text-lg md:text-xl max-w-sm leading-relaxed">
              Every project follows our verified roadmap to ensure speed, quality, and results.
            </p>
          </div>

          {/* Middle Column: Vertical Timeline Bar */}
          <div className="hidden md:flex flex-col items-center relative self-stretch py-4">
            {/* Background Line */}
            <div className="w-[1px] h-full bg-zinc-100 absolute inset-0" />
            
            {/* Animated Progress Line */}
            <motion.div 
              style={{ scaleY }}
              className="w-[1px] h-full bg-blue-600 absolute inset-0 origin-top shadow-[0_60px_40px_rgba(37,99,235,0.2)]"
            />
          </div>

          {/* Right Column: Step Cards */}
          <div className="w-full md:w-[55%] flex flex-col gap-24 md:gap-32 pb-12">
            {steps.map((step, index) => (
              <StepItem 
                key={index} 
                step={step} 
                index={index} 
                progress={scrollYProgress} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/30 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/30 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 -z-10" />
    </section>
  );
}

function StepItem({ 
  step, 
  index, 
  progress 
}: { 
  step: typeof steps[0], 
  index: number, 
  progress: any // MotionValue<number>
}) {
  // Sync activation with the container line progress
  // Each step lights up in its own 25% sector (0.25, 0.5, 0.75, 1.0)
  const activationPoint = index / 4;
  
  const opacity = useTransform(
    progress,
    [activationPoint, activationPoint + 0.1, activationPoint + 0.25],
    [0.1, 1, 1]
  );
  
  const scale = useTransform(
    progress,
    [activationPoint, activationPoint + 0.15],
    [0.98, 1]
  );

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="relative group pr-4"
    >
      {/* Mobile Step Indicator (Darker number) */}
      <div className="md:hidden flex items-center gap-4 mb-4">
        <span className="text-4xl font-black text-blue-600/20 tracking-tighter leading-none">
          {step.number}
        </span>
        <div className="h-[1px] flex-1 bg-zinc-100" />
      </div>

      {/* Step Card Content */}
      <div className="flex items-start gap-8">
        {/* Step Number Sidebar (Darker number) */}
        <div className="shrink-0 pt-1">
          <span className="text-6xl md:text-7xl font-black text-blue-600/20 select-none tracking-tighter leading-none group-hover:text-blue-600/30 transition-colors">
            {step.number}
          </span>
        </div>

        <div className="space-y-4 pt-1">
          <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 tracking-tight group-hover:text-blue-600 transition-colors">
            {step.title}
          </h3>
          <p className="text-zinc-600 text-lg md:text-xl leading-relaxed max-w-xl">
            {step.description}
          </p>
          
          {/* Visual accent - Blue theme line */}
          <div className="w-12 h-1 bg-blue-600/20 rounded-full group-hover:w-24 group-hover:bg-blue-600 transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
}
