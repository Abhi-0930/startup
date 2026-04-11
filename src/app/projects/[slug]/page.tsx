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
  const slug = params.slug as string;

  const project = projectsData.find((p) => p.slug === slug) || projectsData.find((p) => p.id === slug);

  useEffect(() => {
    // Scroll to top on page transition
    window.scrollTo(0, 0);
  }, [slug]);

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
