"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  index: number;
  bgColor?: string;
}

export default function ScrollReveal({ children, index, bgColor = "bg-white" }: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scale down and fade ONLY when the section is significantly towards the exit
  // This keeps the active section fully visible for 70% of its scroll
  const scale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.75]);
  
  return (
    <div 
      ref={containerRef} 
      className="relative w-full"
      style={{ 
        zIndex: index + 10,
        // The container height is auto, but we need some padding for the sticky effect to 'slide'
        paddingBottom: "10vh" 
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        className={`sticky top-0 w-full ${bgColor} overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.02)] ${index === 0 ? '' : 'rounded-t-[40px] md:rounded-t-[60px]'}`}
      >
        <div className="w-full relative py-20 md:py-32">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
