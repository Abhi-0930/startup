"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you accept custom requirements?",
    answer: "Absolutely. Every business has unique challenges. We thrive on building tailor-made solutions that fit your specific workflow and goals."
  },
  {
    question: "What is your turnaround time?",
    answer: "For most MVPs and high-performance websites, we deliver within 30 days. Complex enterprise systems usually take 2-4 months depending on the scope."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes. We offer maintenance packages to ensure your application stays fast, secure, and up-to-date as your business scales."
  },
  {
    question: "Can you handle branding and marketing too?",
    answer: "While we are engineering-first, we have a network of top-tier designers and strategists to ensure your product looks as good as it works."
  },
  {
    question: "What's your pricing?",
    answer: "We offer fixed, transparent pricing based on the project scope. No hidden fees, no hourly surprises. You know the cost before we write a single line of code."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20 -mt-28 md:-mt-32 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative">
        
        {/* Header Area with Avatar */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0"
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
              className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-500 text-lg md:text-xl font-medium max-w-xl"
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
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border transition-colors ${isOpen ? 'bg-white/10 border-white/20 text-white' : 'bg-zinc-50 border-zinc-100 text-zinc-400'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                  <span className="text-lg md:text-xl font-bold tracking-tight text-left">
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
                      <div className="bg-white p-8 rounded-[24px] md:rounded-[32px] border border-zinc-200 shadow-sm text-zinc-600 text-base md:text-lg leading-relaxed font-medium">
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
