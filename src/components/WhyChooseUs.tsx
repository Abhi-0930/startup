"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Clock, 
  DollarSign, 
  ShieldAlert, 
  Users, 
  Crosshair 
} from "lucide-react";

const features = [
  {
    title: "Impact-Driven Solutions",
    description: "Every product we build is custom-crafted to create real business impact.",
    icon: BarChart3,
  },
  {
    title: "Fast & Reliable Delivery",
    description: "Get high-quality results in days or weeks, not months.",
    icon: Clock,
  },
  {
    title: "Transparent & Fair Pricing",
    description: "Honest, customized pricing with no hidden fees or surprises.",
    icon: DollarSign,
  },
  {
    title: "Expert Problem Solvers",
    description: "We tackle technical and creative challenges with innovative solutions.",
    icon: ShieldAlert,
  },
  {
    title: "Seamless Collaboration",
    description: "Clear communication and feedback at every stage of the project.",
    icon: Users,
  },
  {
    title: "Direct Access to Top Talent",
    description: "Work directly with senior experts—no long-term hiring needed.",
    icon: Crosshair,
  },
];

export default function WhyChooseUs() {
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
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                {/* Animated Icon Container */}
                <div className="relative mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-zinc-100 group-hover:border-blue-200 group-hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)] transition-all duration-500"
                  >
                    <Icon 
                      size={32} 
                      className="text-blue-600 group-hover:text-blue-500 transition-colors duration-500" 
                      strokeWidth={1.5}
                    />
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
