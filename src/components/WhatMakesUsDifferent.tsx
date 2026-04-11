"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, LayoutDashboard, Shield, Users, Clock, CreditCard } from "lucide-react";

const features = [
  {
    title: "Launch in 30 Days",
    description: "We don't believe in six-month cycles. We build and launch high-performance MVPs in just 30 days.",
    icon: <Clock className="text-zinc-900" size={32} />,
    badge: "Speed",
    delay: 0.1
  },
  {
    title: "Expert In-house Team",
    description: "No outsourcing, no juniors. Every single member of our in-house team is a verified tech expert dedicated to your success.",
    icon: <Users className="text-zinc-900" size={32} />,
    badge: "Elite Squad",
    delay: 0.2
  },
  {
    title: "Separate Project CRM",
    description: "Manage your entire project in one place. Review status, track progress, and raise inquiries through your dedicated project portal.",
    icon: <LayoutDashboard className="text-zinc-900" size={32} />,
    badge: "Transparency",
    delay: 0.3
  },
  {
    title: "High-End Infrastructure",
    description: "We use elite designs involving Redis and Kafka to boost performance, eliminate latency, and make your platform ultra-fast.",
    icon: <Zap className="text-zinc-900" size={32} />,
    badge: "Performance",
    delay: 0.4
  },
  {
    title: "3 Months Free Maintenance",
    description: "We don't just ship and leave. We provide 3 months of comprehensive free maintenance to ensure your product stays flawless.",
    icon: <Shield className="text-zinc-900" size={32} />,
    badge: "Support",
    delay: 0.5
  },
  {
    title: "Fixed & Fair Pricing",
    description: "Clear, predefined pricing with no hidden fees or monthly surprises. You know exactly what you pay before we start writing code.",
    icon: <CreditCard className="text-zinc-900" size={32} />,
    badge: "Budget",
    delay: 0.6
  }
];

export default function WhatMakesUsDifferent() {
  return (
    <section id="difference" className="relative py-12 md:py-20 -mt-20 md:-mt-32 bg-white overflow-hidden">
      {/* Structural Background (Dashed Grid) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal Dashed Lines */}
        <div className="absolute top-[20%] left-0 w-full border-t border-dashed border-zinc-100" />
        <div className="absolute top-[50%] left-0 w-full border-t border-dashed border-zinc-100" />
        <div className="absolute top-[80%] left-0 w-full border-t border-dashed border-zinc-100" />
        
        {/* Vertical Dashed Lines */}
        <div className="absolute top-0 left-[15%] h-full border-l border-dashed border-zinc-100" />
        <div className="absolute top-0 right-[15%] h-full border-r border-dashed border-zinc-100" />
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 md:w-3 h-2 md:h-3 bg-zinc-900 rounded-[2px]" />
            <span className="text-[10px] md:text-[12px] font-bold text-zinc-400 uppercase tracking-[0.3em]">The Difference</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-zinc-900 leading-[1.05]"
          >
            What makes us <br />
            <span className="text-zinc-300">stand out.</span>
          </motion.h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100 overflow-hidden rounded-[32px] md:rounded-[48px]">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="bg-white p-8 md:p-12 flex flex-col group hover:bg-zinc-50/50 transition-colors duration-500 relative overflow-hidden"
            >
              {/* Feature Icon + Badge */}
              <div className="flex items-start justify-between mb-12">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-zinc-50 border border-zinc-100 flex items-center justify-center transition-all duration-500 group-hover:border-zinc-200 group-hover:shadow-sm"
                >
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                </motion.div>
                <div className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{feature.badge}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>

              {/* Border Decorator */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-zinc-900 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 md:mt-32 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl text-zinc-400 font-medium max-w-xl"
          >
            We are not just another agency. We are your dedicated tech partners, building the future of your company.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/book" className="group flex items-center gap-6 bg-zinc-900 text-white pl-8 pr-3 py-3 rounded-full font-bold text-lg hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              <span>Reserve Your Slot</span>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
