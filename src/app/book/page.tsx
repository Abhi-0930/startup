"use client";

import React from "react";
import Cal from "@calcom/embed-react";
import { motion } from "framer-motion";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
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
