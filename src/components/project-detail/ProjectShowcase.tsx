"use client";
import { ProjectData } from "@/data/projects";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectShowcase({ project }: { project: ProjectData }) {
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
              className={`relative rounded-[40px] overflow-hidden border border-zinc-200/50 group ${
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
    </section>
  );
}
