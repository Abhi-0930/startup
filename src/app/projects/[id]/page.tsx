"use client";
import { useParams, notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import ProjectShowcase from "@/components/project-detail/ProjectShowcase";
import ProjectFooter from "@/components/project-detail/ProjectFooter";
import { useEffect } from "react";

export default function ProjectPage() {
  const params = useParams();
  const id = params.id as string;

  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    // Scroll to top on page transition
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white">
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectShowcase project={project} />
      <ProjectFooter currentId={project.id} />
    </main>
  );
}
