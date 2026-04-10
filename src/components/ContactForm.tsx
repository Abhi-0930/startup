"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";

const services = [
  "Web Development",
  "UI/UX Design",
  "Blockchain",
  "SaaS Platform",
  "AI Integration",
  "Fintech",
  "Branding",
  "Other"
];

const currencies = [
  { code: "USD", symbol: "$", min: 1000, max: 150000, step: 1000, labelMin: "1k", labelMax: "150k+" },
  { code: "EUR", symbol: "€", min: 1000, max: 150000, step: 1000, labelMin: "1k", labelMax: "150k+" },
  { code: "GBP", symbol: "£", min: 1000, max: 150000, step: 1000, labelMin: "1k", labelMax: "150k+" },
  { code: "INR", symbol: "₹", min: 50000, max: 10000000, step: 10000, labelMin: "50k", labelMax: "1Cr+" }
];

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currency, setCurrency] = useState(currencies[0]);
  const [budget, setBudget] = useState(currencies[0].min); 
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  
  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-8 rounded-[2.5rem] bg-zinc-50 border border-zinc-200 text-zinc-950"
      >
        <div className="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center mb-8">
          <CheckCircle2 size={40} className="text-white" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Message Received.</h2>
        <p className="text-zinc-500 max-w-sm font-medium leading-relaxed">
          Thanks for reaching out! Our lead engineer will review your project and get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-10 text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="p-8 md:p-12 rounded-[2.5rem] bg-white text-zinc-950 border border-zinc-100 shadow-2xl relative overflow-hidden group">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/[0.03] blur-[120px] pointer-events-none" />
      
      <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-4">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="Elon Musk" 
              className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border border-zinc-100 focus:border-zinc-900 focus:ring-0 outline-none transition-all placeholder:text-zinc-300 font-medium"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-4">Email Address</label>
            <input 
              required
              type="email" 
              placeholder="elon@mars.com" 
              className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border border-zinc-100 focus:border-zinc-900 focus:ring-0 outline-none transition-all placeholder:text-zinc-300 font-medium"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-4">Company / Website</label>
          <input 
            type="text" 
            placeholder="tesla.com" 
            className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border border-zinc-100 focus:border-zinc-900 focus:ring-0 outline-none transition-all placeholder:text-zinc-300 font-medium"
          />
        </div>

        {/* Service Chips */}
        <div className="space-y-4">
          <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-4">What do you need help with?</label>
          <div className="flex flex-wrap gap-2">
            {services.map(service => (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all ${
                  selectedServices.includes(service)
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-zinc-50 text-zinc-500 border-zinc-100 hover:border-zinc-300 hover:text-black"
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Budget Slider */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 ml-4">
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Project Budget Range</label>
            
            <div className="flex items-center gap-3">
              {/* Currency Selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-100 text-sm font-bold text-zinc-600 hover:border-zinc-300 transition-all"
                >
                  {currency.code}
                  <ChevronDown size={14} className={`transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isCurrencyOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-full mb-2 left-0 bg-white border border-zinc-100 rounded-2xl shadow-xl overflow-hidden z-20 min-w-[80px]"
                    >
                      {currencies.map((curr) => (
                        <button
                          key={curr.code}
                          type="button"
                          onClick={() => {
                            setCurrency(curr);
                            setBudget(curr.min);
                            setIsCurrencyOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm font-bold transition-colors ${
                            currency.code === curr.code ? "bg-zinc-950 text-white" : "text-zinc-600 hover:bg-zinc-50"
                          }`}
                        >
                          {curr.code}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Budget Display */}
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-50 border border-zinc-100">
                <span className="text-red-500 font-bold">{currency.symbol}</span>
                <span className="text-lg font-medium tracking-tight text-zinc-900">
                  {budget >= currency.max ? currency.labelMax.replace(currency.symbol, '') : `${budget.toLocaleString()}`}
                </span>
              </div>
            </div>
          </div>
          
          <div className="px-4">
            <input 
              type="range" 
              min={currency.min} 
              max={currency.max} 
              step={currency.step}
              value={budget}
              onChange={(e) => setBudget(parseInt(e.target.value))}
              className="w-full h-1.5 bg-zinc-100 rounded-full appearance-none cursor-pointer accent-zinc-900"
            />
            <div className="flex justify-between mt-4">
              <span className="text-[10px] font-medium text-zinc-300 uppercase tracking-[0.1em]">{currency.symbol}{currency.labelMin}</span>
              <span className="text-[10px] font-medium text-zinc-300 uppercase tracking-[0.1em]">{currency.symbol}{currency.labelMax}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-4">Project Details</label>
          <textarea 
            rows={4} 
            placeholder="Tell us about your project goals, timeline, and any specific requirements..." 
            className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:border-zinc-900 focus:ring-0 outline-none transition-all placeholder:text-zinc-300 font-medium resize-none"
          />
        </div>

        <button 
          type="submit"
          className="w-full group relative flex items-center justify-center gap-3 px-8 py-5 bg-zinc-950 text-white rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl active:scale-[0.98]"
        >
          <span>Send Inquiry</span>
          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>

        <p className="text-center text-[10px] text-zinc-300 font-bold uppercase tracking-[0.2em]">
          Safe & Secure Lead Submission
        </p>
      </form>
    </div>
  );
}
