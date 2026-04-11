"use client";

import React, { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2, Target, Zap, Clock, ClipboardList, Lightbulb, UserCheck } from "lucide-react";

const takeaways = [
  {
    icon: <Target className="text-zinc-900" size={20} />,
    title: "Growth Roadmap",
    desc: "A high-level strategy to scale your product or launch your new idea."
  },
  {
    icon: <Zap className="text-zinc-900" size={20} />,
    title: "Tech Stack Audit",
    desc: "Expert feedback on your existing or proposed technology choices."
  },
  {
    icon: <Clock className="text-zinc-900" size={20} />,
    title: "Execution Timeline",
    desc: "Precise estimates on how long your project will take to build."
  }
];

const prerequisites = [
  {
    icon: <Lightbulb className="text-zinc-400 group-hover:text-zinc-900 transition-colors" size={18} />,
    text: "A clear core concept of the problem you are solving."
  },
  {
    icon: <UserCheck className="text-zinc-400 group-hover:text-zinc-900 transition-colors" size={18} />,
    text: "Defined target audience and their core needs."
  },
  {
    icon: <ClipboardList className="text-zinc-400 group-hover:text-zinc-900 transition-colors" size={18} />,
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
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (isBooked && countdown === 0) {
      router.push("/");
    }
    return () => clearTimeout(timer);
  }, [isBooked, countdown, router]);

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <AnimatePresence>
        {isBooked && (
          <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-4"
          >
            <div className="bg-zinc-900 text-white rounded-2xl p-4 shadow-2xl border border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="text-emerald-400" size={20} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">Meeting Scheduled!</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <p className="text-xs text-zinc-400">Redirecting to home in {countdown}s</p>
                  <Loader2 className="animate-spin text-zinc-500" size={12} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 max-w-5xl relative z-20 isolate">
        <div className="flex flex-col items-center text-center space-y-6 mb-12">
          <div className="space-y-4">
            <span className="text-black uppercase tracking-[0.3em] font-medium text-[9px] !important" style={{ color: '#000000' }}>Strategic Consultation</span>
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
                    {React.cloneElement(item.icon as React.ReactElement, { size: 18 })}
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
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5">{React.cloneElement(item.icon as React.ReactElement, { size: 16 })}</div>
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
