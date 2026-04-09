"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// Helper to make it easier to use the custom element in TSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": any;
    }
  }
}

const features = [
  {
    title: "Impact-Driven Solutions",
    description: "Every product we build is custom-crafted to create real business impact.",
    iconSrc: "https://cdn.lordicon.com/qhgampre.json", // Chart
  },
  {
    title: "Fast & Reliable Delivery",
    description: "Get high-quality results in days or weeks, not months.",
    iconSrc: "https://cdn.lordicon.com/kbtmbydv.json", // Clock
  },
  {
    title: "Transparent & Fair Pricing",
    description: "Honest, customized pricing with no hidden fees or surprises.",
    iconSrc: "https://cdn.lordicon.com/vaeunfgy.json", // Money
  },
  {
    title: "Expert Problem Solvers",
    description: "We tackle technical and creative challenges with innovative solutions.",
    iconSrc: "https://cdn.lordicon.com/jvucoldz.json", // Settings/Problem solving
  },
  {
    title: "Seamless Collaboration",
    description: "Clear communication and feedback at every stage of the project.",
    iconSrc: "https://cdn.lordicon.com/lupuorrc.json", // Users/Collaboration
  },
  {
    title: "Direct Access to Top Talent",
    description: "Work directly with senior experts—no long-term hiring needed.",
    iconSrc: "https://cdn.lordicon.com/msoeawqm.json", // Target/Talent
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    defineElement(lottie.loadAnimation);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-4 md:mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4"
          >
            Why Choose Zerogrid?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-500 text-lg max-w-2xl mx-auto"
          >
            Discover the advantages of partnering with a tech team that's built for results and client success:
          </motion.p>
        </div>

        {/* Top Separator */}
        <div className="w-full border-t border-dashed border-zinc-200 mb-8 md:mb-10" />

        {/* Feature Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-12"
        >
          {features.map((feature, index) => {
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="relative mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-zinc-100 group-hover:border-blue-200 group-hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)] transition-all duration-500"
                  >
                    {/* First 3 use custom animations to guarantee visibility; next 3 use verified LordIcons */}
                    {index < 3 ? (
                      <motion.svg
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        {index === 0 && ( // Chart Animation
                          <>
                            <motion.path d="M18 20V10" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} />
                            <motion.path d="M12 20V4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }} />
                            <motion.path d="M6 20V14" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }} />
                          </>
                        )}
                        {index === 1 && ( // Clock Animation
                          <>
                            <circle cx="12" cy="12" r="10" />
                            <motion.path 
                              d="M12 6v6l4 2" 
                              animate={{ rotate: 360 }} 
                              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                              style={{ transformOrigin: "12px 12px" }}
                            />
                          </>
                        )}
                        {index === 2 && ( // Pricing Animation
                          <>
                            <motion.path 
                              d="M12 1v22M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" 
                              animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </>
                        )}
                      </motion.svg>
                    ) : (
                      <lord-icon
                        src={feature.iconSrc}
                        trigger="loop"
                        delay="2000"
                        colors="primary:#3b82f6,secondary:#1e293b"
                        style={{ width: "70px", height: "70px" }}
                      />
                    )}
                  </motion.div>
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-blue-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-[280px]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Separator */}
        <div className="w-full border-t border-dashed border-zinc-200 mt-12 md:mt-16 mb-12" />

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <button className="bg-zinc-950 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:scale-95">
            Reserve Your Slot
          </button>
        </motion.div>
      </div>
    </section>
  );
}
