"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Does Code Loom offer custom end-to-end engineering?",
    answer: "Absolutely. We specialize in bespoke digital infrastructure. From architectural planning to deployment and scaling, we build tailored systems that integrate seamlessly with your business objectives."
  },
  {
    question: "What is your typical engagement timeline?",
    answer: "For high-performance MVPs, we usually target a 30-day launch window. For complex enterprise environments, timelines typically range from 3 to 6 months, depending on the architectural complexity."
  },
  {
    question: "How do you handle post-launch stability and scaling?",
    answer: "Stability is non-negotiable. We provide comprehensive post-launch management, including 24/7 infrastructure monitoring, security patching, and proactive scaling as your user base grows."
  },
  {
    question: "Who owns the Intellectual Property and source code?",
    answer: "Upon project completion and final payment, 100% of the intellectual property, source code, and biological assets are transferred to the client. We believe in total transparency and client ownership."
  },
  {
    question: "What is your approach to transparency and pricing?",
    answer: "We operate on a fixed-fee, value-based model. We provide detailed project blueprints and cost breakdowns upfront, ensuring no hidden fees or unexpected line items during the engineering phase."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20 -mt-28 md:-mt-32 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl relative">
        
        {/* Header Area with Avatar */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0"
          >
            <Image 
              src="/avatars/avatar-1.png" 
              alt="Expert Support" 
              fill 
              className="object-cover"
            />
          </motion.div>
          <div className="text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight mb-3"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-500 text-base md:text-lg font-medium max-w-xl"
            >
              Code Loom is powered by a passionate team of experts who care about your success.
            </motion.p>
          </div>
        </div>

        {/* Chat-Like FAQ Grid */}
        <div className="space-y-4 relative">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-end"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`relative group flex items-center gap-4 px-6 py-4 md:px-8 md:py-6 rounded-[24px] md:rounded-[32px] border transition-all duration-300 ${isOpen ? 'bg-zinc-900 text-white border-zinc-900 shadow-xl' : 'bg-white text-zinc-900 border-zinc-200 hover:border-zinc-300 shadow-sm'}`}
                >
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border transition-colors ${isOpen ? 'bg-white/10 border-white/20 text-white' : 'bg-zinc-50 border-zinc-100 text-zinc-400'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                  <span className="text-base md:text-lg font-bold tracking-tight text-left">
                    {faq.question}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden w-full max-w-2xl mt-4 self-start"
                    >
                      <div className="bg-white p-6 md:p-7 rounded-[24px] md:rounded-[32px] border border-zinc-200 shadow-sm text-zinc-600 text-sm md:text-base leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
