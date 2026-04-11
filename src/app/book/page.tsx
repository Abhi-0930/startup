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
      {/* Visual Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zinc-50 rounded-full blur-[120px] -mr-48 -mt-48 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-50 rounded-full blur-[100px] -ml-24 -mb-24 opacity-40 pointer-events-none" />

      <AnimatePresence>
        {isBooked && (
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
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

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Content Column */}
          <div className="lg:col-span-5 space-y-12 md:sticky md:top-40">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="text-zinc-400 uppercase tracking-[0.3em] font-bold text-[10px]">Strategic Consultation</span>
              <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight leading-[0.95]">
                Book your <br />
                <span className="italic">session.</span>
              </h1>
              <p className="text-lg text-zinc-600 max-w-md leading-relaxed">
                30 minutes dedicated to breaking down your product vision and architecting a clear path to scale.
              </p>
            </motion.div>

            {/* Takeaways Section */}
            <div className="space-y-8">
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest">What we'll achieve Together</h3>
              <div className="space-y-6">
                {takeaways.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    className="flex gap-5 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0 transition-all group-hover:bg-zinc-900 group-hover:text-white group-hover:rotate-6">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-zinc-900">{item.title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Prerequisites Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-8 rounded-[32px] bg-zinc-50 border border-zinc-100 space-y-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.05] pointer-events-none">
                <ClipboardList size={80} />
              </div>
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest relative z-10">Prerequisites</h3>
              <div className="space-y-4 relative z-10">
                {prerequisites.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="mt-1 transition-colors">{item.icon}</div>
                    <p className="text-sm text-zinc-600 font-medium leading-relaxed group-hover:text-zinc-900 transition-colors">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Calendar Column */}
          <div className="lg:col-span-7">
            <motion.div 
              className="w-full bg-white rounded-[40px] border border-zinc-100 shadow-[0_40px_100px_rgba(0,0,0,0.08)] overflow-hidden"
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="p-1 sm:p-4 min-h-[600px]">
                <Cal 
                  namespace="30min"
                  calLink="abhishek-d7y31n/30min"
                  style={{ width: "100%", height: "100%", minHeight: "700px" }}
                  config={{
                    layout: 'month_view',
                    theme: 'light'
                  }}
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}
