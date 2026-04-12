"use client";
import React, { useState, useEffect } from "react";
import { ProjectData } from "@/data/projects";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectShowcase({ project }: { project: ProjectData }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 max-w-[1400px]">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {project.gallery.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image.src)}
              className={`relative rounded-[40px] overflow-hidden border border-zinc-200/50 group cursor-zoom-in ${
                image.span === "wide" ? "md:col-span-2" : "col-span-1"
              }`}
              style={{
                aspectRatio: image.span === "wide" ? "21/9" : "4/3"
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {image.caption && (
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full text-[12px] font-bold text-zinc-900 border border-black/5 shadow-sm">
                  {image.caption}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Client Quote Section */}
        {project.clientQuote && (
          <div className="mt-40 max-w-4xl mx-auto text-center space-y-12">
            <div className="w-16 h-1 w-16 h-1 bg-zinc-200 mx-auto" />
            <blockquote className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
              "{project.clientQuote.text}"
            </blockquote>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-bold uppercase tracking-widest text-zinc-900">{project.clientQuote.author}</span>
              <span className="text-xs font-medium text-zinc-500">{project.clientQuote.role}</span>
            </div>
          </div>
        )}
      </div>

      {/* Small Dialogue Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xl cursor-zoom-out"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[80vh] bg-zinc-100 rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl border border-white/20 flex items-center justify-center p-2"
            >
              <div className="relative w-full h-full min-h-[400px] md:min-h-[600px]">
                <Image 
                  src={selectedImage}
                  alt="Selected Project Detail"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-all active:scale-95 z-[110]"
              >
                <X size={24} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
