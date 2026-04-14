"use client";

import { useEffect } from "react";
import ProjectHero from "./ProjectHero";
import ProjectOverview from "./ProjectOverview";
import ProjectShowcase from "./ProjectShowcase";
import ProjectFooter from "./ProjectFooter";
import { ProjectData } from "@/data/projects";

interface ProjectDetailClientProps {
  project: ProjectData;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [project.slug]);

  return (
    <main className="bg-white">
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectShowcase project={project} />
      <ProjectFooter currentId={project.id} />
    </main>
  );
}
