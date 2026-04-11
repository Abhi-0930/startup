"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const stats = [
  {
    target: 8,
    suffix: "+",
    label: "Global Clients",
    description: "Partnering with ambitious founders worldwide to build high-impact digital experiences that scale."
  },
  {
    target: 5,
    suffix: "+",
    label: "Years of Expertise",
    description: "Half a decade of engineering excellence, design mastery, and shipping products that define industries."
  },
  {
    target: 99.9,
    suffix: "%",
    label: "Performance Score",
    description: "Every line of code is engineered for maximum speed, ensuring your brand ranks higher and loads instantly on any device."
  }
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => {
          setCount(value);
        },
      });
      return () => controls.stop();
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {target % 1 === 0 ? Math.round(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tighter text-zinc-900 leading-[1.1]"
          >
            Code Loom makes it simple, <br />
            <span className="text-zinc-400">and delivers results.</span>
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-50/50 border border-zinc-100 p-8 md:p-12 rounded-[2.5rem] hover:bg-white hover:shadow-[0_40px_100px_rgba(0,0,0,0.04)] transition-all duration-500 group"
            >
              <div className="space-y-6">
                <h3 className="text-5xl md:text-6xl font-black text-zinc-900 tracking-tighter transition-transform duration-500 group-hover:scale-110 origin-left">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </h3>
                <div className="space-y-3">
                  <p className="text-xl md:text-2xl font-bold text-zinc-800 tracking-tight">
                    {stat.label}
                  </p>
                  <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
