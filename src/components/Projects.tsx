import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "Finlytics Redesign",
      category: "UX/UI Design",
      image: "/project1/zvQ7tedi7AxHplgmospF42dcjQo.png_width=1200&height=800.png",
      span: "normal",
      delay: "0s",
    },
    {
      id: "02",
      title: "Atlas Technologies",
      category: "Web & Brand Design",
      image: "/project2/xktGFEeTfvx5MDldvQxlaw79M.png_width=800&height=1200.png",
      span: "normal",
      delay: "-5s",
    },
    {
      id: "03",
      title: "Orbital Bank",
      category: "Motion & 3D Design",
      image: "/project3/uqJwE4mTSKeNtBAX8YU8vy1hkVs.png_width=2400&height=1600.png",
      span: "wide",
      delay: "-10s",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Selected Work</h2>
        {/* Optional "Process" dot indicator like Lamossa */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-full text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          Latest Projects
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`group flex flex-col gap-6 ${project.span === 'wide' ? 'md:col-span-2' : 'col-span-1'}`}
          >
            {/* Massive Rounded Container - Outer shadow/border for the 'glass' effect */}
            <div className="relative overflow-hidden rounded-[32px] border border-black/5 shadow-sm bg-zinc-100"
                 style={{ 
                    // Dynamic aspect ratio: wide cards get an ultra-widescreen feel
                    aspectRatio: project.span === 'wide' ? '21/9' : '4/3' 
                 }}>
              
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover animate-slow-scale"
                style={{ animationDelay: project.delay }}
                priority
              />
              
              {/* Optional slight dark gradient overlay to make images feel richer at the edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
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
        ))}
      </div>
    </section>
  );
}
