"use client";

import React from "react";
import Cal from "@calcom/embed-react";
import { motion } from "framer-motion";

export default function BookPage() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Premium Cyberpunk Backdrop - Reused from Hero for consistency */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '12s' }} />
        <div 
          className="absolute inset-0 opacity-40"
          style={{ 
            backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', 
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10 flex flex-col items-center overflow-x-hidden">
        {/* Inline Cal.com Embed */}
        <motion.div 
          className="w-full max-w-[1000px] bg-white rounded-[32px] border border-zinc-100 shadow-[0_32px_80px_rgba(0,0,0,0.06)] overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-2 sm:p-4 overflow-hidden">
            <Cal 
              namespace="30min"
              calLink="abhishek-d7y31n/30min"
              style={{ width: "100%", height: "100%", minHeight: "650px", overflow: "hidden" }}
              config={{
                layout: 'month_view',
                theme: 'light' // Theme of the calendar itself (matches page bg)
              }}
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
