"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We get on a quick call to understand your business, your goals, and exactly what you need. No technical talk, just a simple conversation.",
  },
  {
    number: "02",
    title: "Plan & Proposal",
    description: "Based on what you told us, we put together a clear plan, timeline, and pricing. You know exactly what you are getting before we start anything.",
  },
  {
    number: "03",
    title: "Design & Build",
    description: "Our team gets to work. We design and build your project while keeping you updated at every stage so there are no surprises.",
  },
  {
    number: "04",
    title: "Review & Feedback",
    description: "You review everything we have built. If anything needs to be changed or improved, we do it. Your satisfaction comes first before we move forward.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Once you are happy with everything, we launch your project live. Everything is tested, checked, and ready to go.",
  },
];

const ACCENT_COLOR = "#f04d3d"; // Vibrant Red/Orange

function StepItem({ 
  step, 
  index, 
  total, 
  scrollProgress 
}: { 
  step: typeof steps[0], 
  index: number, 
  total: number, 
  scrollProgress: any 
}) {
  // We use a broader range for thresholds to ensure smooth activation
  const threshold = index / total;
  const nextThreshold = (index + 1) / total;

  // Activation mapping for colors
  const circleBorderColor = useTransform(
    scrollProgress,
    [threshold - 0.02, threshold],
    ["#e5e7eb", ACCENT_COLOR],
    { clamp: true }
  );

  const circleTextColor = useTransform(
    scrollProgress,
    [threshold - 0.02, threshold],
    ["#a1a1aa", ACCENT_COLOR],
    { clamp: true }
  );

  // Partial line progress for this specific segment
  const lineProgress = useTransform(
    scrollProgress,
    [threshold, nextThreshold],
    ["0%", "100%"],
    { clamp: true }
  );

  // Content card animations
  const opacity = useTransform(scrollProgress, [threshold - 0.05, threshold, threshold + 0.1], [0, 1, 1]);
  const scale = useTransform(scrollProgress, [threshold - 0.05, threshold, threshold + 0.1], [0.95, 1, 1]);
  const x = useTransform(scrollProgress, [threshold - 0.05, threshold], [20, 0]);

  return (
    <div className="relative py-8 md:py-16 flex items-center">
      {/* Path Line Segment - Only show if not the last item */}
      {index < total && (
        <div className="absolute top-1/2 bottom-0 left-6 md:left-8 -translate-x-1/2 w-[2px]">
          {/* Static Background Segment */}
          <div className="h-full w-full bg-zinc-100" />
          {/* Active Red Segment */}
          <motion.div 
            style={{ height: lineProgress }}
            className="absolute top-0 left-0 w-full bg-[#f04d3d] z-10 origin-top"
          />
        </div>
      )}

      {/* Connectivity Fix: Ensure every step (except the first) has a top connection */}
      {index > 0 && (
        <div className="absolute top-0 bottom-1/2 left-6 md:left-8 -translate-x-1/2 w-[2px]">
          <div className="h-full w-full bg-zinc-100" />
          <motion.div 
            initial={false}
            style={{ 
              height: "100%",
              backgroundColor: ACCENT_COLOR,
              opacity: useTransform(scrollProgress, (v: number) => v >= threshold ? 1 : 0) as any
            }}
            className="absolute top-0 left-0 w-full z-10"
          />
        </div>
      )}

      {/* Central Path Circle */}
      <div className="absolute left-6 md:left-8 -translate-x-1/2 z-20">
        <motion.div 
          style={{ borderColor: circleBorderColor }}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 flex items-center justify-center shadow-sm"
        >
          <motion.span 
            style={{ color: circleTextColor }}
            className="text-lg md:text-2xl font-bold font-heading"
          >
            {step.number}
          </motion.span>
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div 
        style={{ opacity, scale, x }}
        className="ml-16 md:ml-24 w-full"
      >
        <div className="p-6 md:p-8 rounded-[32px] md:rounded-[40px] bg-zinc-50 border border-zinc-100/80 shadow-sm hover:shadow-md transition-all duration-500 max-w-[500px]">
          <h3 className="text-xl md:text-3xl font-bold text-zinc-900 mb-2 md:mb-3">{step.title}</h3>
          <p className="text-base md:text-xl text-zinc-600 leading-relaxed font-medium">{step.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  });

  return (
    <section ref={containerRef} className="relative py-24 md:py-40 bg-white min-h-screen overflow-hidden -mt-40 md:-mt-48">
      <div className="container mx-auto px-4 md:px-12 max-w-[1400px]">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          
          {/* Left Side: Header Content (Sticky on Desktop) */}
          <div className="md:col-span-5 h-fit md:sticky md:top-32 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-2 md:w-3 h-2 md:h-3 bg-[#f04d3d] rounded-[2px]" />
              <span className="text-[10px] md:text-[12px] font-bold text-zinc-400 uppercase tracking-[0.3em]">The Workflow</span>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.05]">
                How We Bring <br className="hidden md:block" />
                <span className="text-zinc-400">Your Vision To Life.</span>
              </h2>
            </div>
          </div>

          {/* Right Side: Step Timeline */}
          <div className="md:col-span-7 relative">
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <StepItem 
                  key={step.number} 
                  step={step} 
                  index={index} 
                  total={steps.length - 1} 
                  scrollProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
