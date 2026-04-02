"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    id: "01",
    title: "Finlytics Redesign",
    category: "UX/UI Design",
    images: [
      "/project1/zvQ7tedi7AxHplgmospF42dcjQo.png_width=1200&height=800.png",
      "/project1/5kd7Hmen8Zb7gfwj1BZyuA0ko.png_width=1200&height=800.png",
      "/project1/MAVstedJYqQvsrJ7l1kxjR498.jpg_width=1200&height=904.png",
    ],
    span: "normal",
    delay: "0s",
  },
  {
    id: "02",
    title: "Atlas Technologies",
    category: "Web & Brand Design",
    images: [
      "/project2/xktGFEeTfvx5MDldvQxlaw79M.png_width=800&height=1200.png",
      "/project2/vdtm4vbMi9SyPgj2Z1bVuq9b2o.png_width=960&height=1200.png",
    ],
    span: "normal",
    delay: "-5s",
  },
  {
    id: "03",
    title: "Orbital Bank",
    category: "Motion & 3D Design",
    images: [
      "/project3/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png_width=2400&height=1600.png",
      "/project3/1KCYDj61X5Ycm5Vp5kluuhMho.png_width=2400&height=1600.png",
      "/project3/TwCiV5MUt16Q38ftZYKlEhNhbJI.png_width=1984&height=2400.png",
    ],
    span: "wide",
    delay: "-10s",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    // Slight offset based on ID so they don't all crossfade at the exact same millisecond
    const rawId = parseInt(project.id);
    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % project.images.length);
      }, 3500);
      return () => clearInterval(timer);
    }, rawId * 500);
    return () => clearTimeout(timeout);
  }, [project.images.length, project.id]);

  return (
    <div className={`group flex flex-col gap-6 ${project.span === 'wide' ? 'md:col-span-2' : 'col-span-1'}`}>
      {/* Massive Rounded Container - Outer shadow/border for the 'glass' effect */}
      <div 
        className="relative overflow-hidden rounded-[32px] border border-black/5 shadow-sm bg-neutral-900"
        style={{ 
          // Dynamic aspect ratio: wide cards get an ultra-widescreen feel
          aspectRatio: project.span === 'wide' ? '21/9' : '4/3' 
        }}
      >
        {project.images.map((src, idx) => (
          <div 
            key={src} 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentImg ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={src}
              alt={`${project.title} Image ${idx + 1}`}
              fill
              className="object-cover animate-slow-scale"
              style={{ animationDelay: project.delay }}
              priority={idx === 0}
            />
          </div>
        ))}
        
        {/* Optional slight dark gradient overlay to make images feel richer at the edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
      </div>

      {/* Bottom Details Row */}
      <div className="flex items-center justify-between px-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-[22px] font-semibold tracking-tight text-zinc-900">{project.title}</h3>
          <span className="text-[14px] font-medium text-zinc-500">{project.category}</span>
        </div>
        
        <Link 
          href="#"
          className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:border-black group-hover:text-white text-zinc-900"
        >
          <ArrowRight size={20} className="transform transition-transform duration-300 group-hover:-rotate-45" />
        </Link>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Selected Work</h2>
        {/* Optional "Process" dot indicator like Lamossa */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-full text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          Latest Projects
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
