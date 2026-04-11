"use client";

import React, { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function BookPage() {
  const router = useRouter();
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("on", {
        action: "bookingSuccessful",
        callback: (event) => {
          console.log("Booking successful!", event);
          setIsBooked(true);
          // 5 second delay so user can see the confirmation on Cal.com before redirection
          setTimeout(() => {
            router.push("/");
          }, 5000);
        }
      });
    })();
  }, [router]);

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 relative overflow-hidden">
      <AnimatePresence>
        {isBooked && (
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-4"
          >
            <div className="bg-[#09090b] text-white rounded-2xl p-4 shadow-2xl border border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="text-emerald-400" size={20} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">Meeting Scheduled!</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <p className="text-xs text-zinc-400">Redirecting to home in 5s</p>
                  <Loader2 className="animate-spin text-zinc-500" size={12} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center">
        {/* Inline Cal.com Embed */}
        <motion.div 
          className="w-full max-w-[1000px] bg-white rounded-[32px] border border-zinc-100 shadow-[0_32px_80px_rgba(0,0,0,0.06)] overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-2 sm:p-4 overflow-hidden">
            <Cal 
              namespace="30min"
              calLink="abhishek-d7y31n/30min"
              style={{ width: "100%", height: "100%", minHeight: "650px", overflow: "hidden" }}
              config={{
                layout: 'month_view',
                theme: 'light'
              }}
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
