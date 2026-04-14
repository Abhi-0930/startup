"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronDown, Search, Loader2, AlertCircle } from "lucide-react";
import PhoneInput, { getCountries, getCountryCallingCode, isValidPhoneNumber } from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en.json';
import 'react-phone-number-input/style.css';

const services = [
  "Web Development",
  "App Development",
  "AI Automation",
  "AI Applications",
  "MVP Prototyping",
  "SEO Improvement",
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
    otherService: ""
  });
  
  const [currency, setCurrency] = useState(currencies[0]);
  const [budget, setBudget] = useState(currencies[0].min); 
  const [phone, setPhone] = useState<string | undefined>();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  // Validation States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [country, setCountry] = useState<any>("IN");
  const [isCountrySelectorOpen, setIsCountrySelectorOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountrySelectorOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  const countries = getCountries();
  const filteredCountries = countries.filter(c => {
    const name = en[c as keyof typeof en]?.toLowerCase() || "";
    const code = getCountryCallingCode(c as any);
    return name.includes(countrySearch.toLowerCase()) || code.includes(countrySearch);
  });
  
  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
    if (errors.services) {
      setErrors(prev => {
        const { services, ...rest } = prev;
        return rest;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (phone && !isValidPhoneNumber(phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (selectedServices.length === 0) {
      newErrors.services = "Select at least one service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        phone,
        services: selectedServices.includes("Other") 
          ? [...selectedServices.filter(s => s !== "Other"), `Other: ${formData.otherService}`]
          : selectedServices,
        budget: `${currency.symbol}${budget.toLocaleString()} (${currency.code})`,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send inquiry. Please try again later.");
      }

      setIsSubmitted(true);
      // Reset form
      setFormData({ name: "", email: "", company: "", details: "", otherService: "" });
      setPhone(undefined);
      setSelectedServices([]);
    } catch (err: any) {
      setSubmitError(err.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName: string) => `
    w-full h-14 px-6 rounded-2xl bg-zinc-50 border transition-all placeholder:text-zinc-300 font-medium outline-none
    ${errors[fieldName] ? 'border-red-500 bg-red-50/30' : 'border-zinc-100 focus:border-zinc-900 focus:bg-white'}
  `;

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-8 rounded-[2.5rem] bg-zinc-50 border border-zinc-200 text-zinc-950"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
          className="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center mb-8 shadow-2xl shadow-black/20"
        >
          <CheckCircle2 size={40} className="text-white" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-4 tracking-tight">Inquiry Sent.</h2>
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
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5c00]/[0.03] blur-[120px] pointer-events-none" />
      
      <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest ml-4">Full Name</label>
            <input 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              type="text" 
              placeholder="John Doe" 
              className={inputClasses("name")}
            />
            {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tight ml-4 mt-1">{errors.name}</p>}
          </div>
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest ml-4">Email Address</label>
            <input 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              type="email" 
              placeholder="john@example.com" 
              className={inputClasses("email")}
            />
            {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tight ml-4 mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Company Field */}
        <div className="md:max-w-2xl">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest ml-4">Company / Website</label>
            <input 
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              type="text" 
              placeholder="example.com" 
              className={inputClasses("company")}
            />
          </div>
        </div>

        {/* Phone Field */}
        <div className="md:max-w-2xl relative" ref={dropdownRef}>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest ml-4">Phone Number</label>
            <div className={`h-14 rounded-2xl bg-zinc-50 border flex items-center px-2 transition-all ${errors.phone ? 'border-red-500 bg-red-50/30' : 'border-zinc-100 focus-within:border-zinc-900 focus-within:bg-white'}`}>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCountrySelectorOpen(!isCountrySelectorOpen)}
                  className="h-11 px-3 rounded-xl flex items-center gap-2 transition-all hover:bg-zinc-100 group min-w-[90px]"
                >
                  <img 
                    src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
                    className="w-5 h-3.5 rounded-sm shadow-sm"
                    alt={country}
                  />
                  <ChevronDown size={14} className={`text-zinc-400 transition-transform ${isCountrySelectorOpen ? 'rotate-180' : ''}`} />
                  <span className="text-sm font-medium text-zinc-900">+{getCountryCallingCode(country as any)}</span>
                </button>

                <AnimatePresence>
                  {isCountrySelectorOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 mt-3 w-[320px] bg-white rounded-2xl border border-zinc-100 shadow-2xl z-50 overflow-hidden flex flex-col"
                    >
                      <div className="p-4 border-b border-zinc-50 bg-zinc-50/50 flex items-center gap-3">
                        <Search size={16} className="text-zinc-400" />
                        <input 
                          autoFocus
                          type="text"
                          placeholder="Search country..."
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          className="w-full bg-transparent border-none outline-none text-sm font-medium placeholder:text-zinc-400"
                        />
                      </div>
                      <div className="max-h-[300px] overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-zinc-200">
                        {filteredCountries.map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => {
                              setCountry(c);
                              setIsCountrySelectorOpen(false);
                              setCountrySearch("");
                            }}
                            className={`w-full px-5 py-3 text-left flex items-center justify-between transition-all hover:bg-zinc-50 group ${country === c ? 'bg-zinc-50' : ''}`}
                          >
                            <div className="flex items-center gap-4">
                              <img 
                                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${c}.svg`}
                                className="w-6 h-4 rounded-sm shadow-sm flex-shrink-0"
                                alt={c}
                              />
                              <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">
                                {en[c as keyof typeof en]}
                              </span>
                            </div>
                            <span className="text-sm font-medium text-zinc-400">+{getCountryCallingCode(c as any)}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex-1">
                <PhoneInput
                  displayInitialValueAsLocalNumber
                  country={country}
                  value={phone}
                  onChange={setPhone}
                  placeholder="98765 43210"
                  className="custom-phone-input"
                />
              </div>
            </div>
            {errors.phone && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tight ml-4 mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Service Chips */}
        <div className="space-y-4">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest ml-4">What do you need help with?</label>
          <div className="flex flex-wrap gap-2">
            {services.map(service => (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                  selectedServices.includes(service)
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-zinc-50 text-zinc-500 border-zinc-100 hover:border-zinc-300 hover:text-black"
                }`}
              >
                {service}
              </button>
            ))}
          </div>
          {errors.services && <p className="text-[10px] text-red-500 font-bold uppercase tracking-tight ml-4">{errors.services}</p>}

          <AnimatePresence>
            {selectedServices.includes("Other") && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden"
              >
                <input 
                  value={formData.otherService}
                  onChange={(e) => setFormData({ ...formData, otherService: e.target.value })}
                  type="text" 
                  placeholder="Please specify your project type..." 
                  className="w-full h-12 px-6 rounded-xl bg-zinc-50 border border-zinc-100 focus:border-zinc-950 focus:ring-0 outline-none transition-all placeholder:text-zinc-300 font-medium text-sm"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Budget Slider */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 ml-4">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Project Budget Range</label>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-100 text-sm font-semibold text-zinc-600 hover:border-zinc-300 transition-all"
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
                          className={`w-full px-4 py-2 text-left text-sm font-semibold transition-colors ${
                            currency.code === curr.code ? "bg-[#ff5c00] text-white" : "text-zinc-600 hover:bg-zinc-50"
                          }`}
                        >
                          {curr.code}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-zinc-50 border border-zinc-100 focus-within:border-[#ff5c00] transition-colors">
                <span className="text-[#ff5c00] font-bold">{currency.symbol}</span>
                <input
                  type="text"
                  value={budget >= currency.max ? currency.labelMax.replace(currency.symbol, '') : budget.toLocaleString()}
                  onChange={(e) => {
                    const val = e.target.value.replace(/,/g, '').replace(/[^0-9]/g, '');
                    if (val === '') {
                      setBudget(0);
                    } else {
                      setBudget(parseInt(val));
                    }
                  }}
                  className="w-[100px] bg-transparent text-lg font-medium tracking-tight text-zinc-900 outline-none p-0"
                />
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
              className="w-full h-1.5 bg-zinc-100 rounded-full appearance-none cursor-pointer accent-[#ff5c00]"
            />
            <div className="flex justify-between mt-4">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.1em]">{currency.symbol}{currency.labelMin}</span>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.1em]">{currency.symbol}{currency.labelMax}</span>
            </div>
          </div>
        </div>

        {/* Details Field */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest ml-4">Project Details</label>
          <textarea 
            rows={4} 
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            placeholder="Tell us about your project goals, timeline, and any specific requirements..." 
            className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:border-zinc-900 focus:ring-0 outline-none transition-all placeholder:text-zinc-300 font-medium resize-none shadow-sm"
          />
        </div>

        {/* Submit Section */}
        <div className="space-y-4">
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full group relative flex items-center justify-center gap-3 px-8 py-5 bg-[#ff5c00] text-white rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl active:scale-[0.98] shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed`}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={24} className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Inquiry</span>
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>

          <AnimatePresence>
            {submitError && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 justify-center p-4 bg-red-50 rounded-xl text-red-600 border border-red-100"
              >
                <AlertCircle size={18} />
                <span className="text-sm font-bold tracking-tight">{submitError}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-center text-[10px] text-zinc-300 font-semibold uppercase tracking-[0.2em]">
          Safe & Secure Lead Submission
        </p>
      </form>
    </div>
  );
}
