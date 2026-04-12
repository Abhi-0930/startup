"use client";

import React, { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2, Target, Zap, Clock, ClipboardList, Lightbulb, UserCheck } from "lucide-react";

const takeaways = [
  {
    icon: Target,
    title: "Growth Roadmap",
    desc: "A high-level strategy to scale your product or launch your new idea."
  },
  {
    icon: Zap,
    title: "Tech Stack Audit",
    desc: "Expert feedback on your existing or proposed technology choices."
  },
  {
    icon: Clock,
    title: "Execution Timeline",
    desc: "Precise estimates on how long your project will take to build."
  }
];

const prerequisites = [
  {
    icon: Lightbulb,
    text: "A clear core concept of the problem you are solving."
  },
  {
    icon: UserCheck,
    text: "Defined target audience and their core needs."
  },
  {
    icon: ClipboardList,
    text: "A list of current technical bottlenecks or scaling concerns."
  }
];

export default function BookPage() {
  const router = useRouter();
  const [isBooked, setIsBooked] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("on", {
        action: "bookingSuccessful",
        callback: (event) => {
          console.log("Booking successful!", event);
          setIsBooked(true);
        }
      });
    })();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isBooked && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (isBooked && countdown === 0) {
      router.push("/");
    }
    return () => clearInterval(timer);
  }, [isBooked, countdown, router]);

  if (isBooked) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-8"
        >
          <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center mx-auto shadow-2xl">
            <CheckCircle2 size={48} className="text-white" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-zinc-900 tracking-tight">Booking Confirmed!</h1>
            <p className="text-lg text-zinc-500 font-medium">
              We've sent the details to your email. Get ready to transform your product.
            </p>
          </div>
          <div className="pt-8">
            <p className="text-sm text-zinc-400 font-bold uppercase tracking-widest">
              Redirecting in {countdown}s...
            </p>
            <div className="mt-4 w-full h-1 bg-zinc-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-zinc-900"
              />
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white selection:bg-black selection:text-white pt-24 pb-12 overflow-x-hidden">
      <div className="container mx-auto max-w-7xl relative">
        {/* Subtle background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-50 rounded-full blur-[120px] opacity-50 -z-10" />

        <div className="flex flex-col items-center mb-12 px-6">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 font-bold text-[10px] uppercase tracking-widest">
              <Target size={12} className="text-zinc-400 font-bold" />
              <span>Free Strategy Session</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-[1.1] !important" style={{ color: '#000000' }}>
              Book your <span className="italic">session.</span>
            </h1>
            <p className="text-md text-black max-w-xl mx-auto leading-relaxed font-medium !important" style={{ color: '#000000' }}>
              30 minutes dedicated to breaking down your product vision and architecting a clear path to scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 px-4">
          {/* Takeaways Section */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold text-black uppercase tracking-[0.2em] text-center md:text-left !important" style={{ color: '#000000' }}>What we'll achieve Together</h3>
            <div className="space-y-6">
              {takeaways.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex gap-4 items-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-zinc-900" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-black text-md !important" style={{ color: '#000000' }}>{item.title}</h4>
                    <p className="text-xs text-black leading-relaxed font-medium !important" style={{ color: '#000000' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites Card */}
          <div className="p-8 rounded-[32px] bg-zinc-50 border border-zinc-100 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-[0.02] pointer-events-none">
              <ClipboardList size={80} />
            </div>
            <h3 className="text-[10px] font-bold text-black uppercase tracking-[0.2em] mb-6 relative z-10 !important" style={{ color: '#000000' }}>Prerequisites</h3>
            <div className="space-y-4 relative z-10">
              {prerequisites.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="mt-0.5">
                    <item.icon size={16} className="text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                  </div>
                  <p className="text-xs text-black font-medium leading-relaxed !important" style={{ color: '#000000' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar Section - Focused & Compact */}
        <div className="w-full max-w-4xl mx-auto bg-white rounded-[40px] border border-zinc-100 shadow-[0_32px_80px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="p-1 sm:p-2 min-h-[500px]">
            <Cal 
              namespace="30min"
              calLink="abhishek-d7y31n/30min"
              style={{ width: "100%", height: "100%", minHeight: "650px" }}
              config={{
                layout: 'month_view',
                theme: 'light'
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
