import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import ProjectDetailClient from "@/components/project-detail/ProjectDetailClient";
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug).toLowerCase();
  
  const project = projectsData.find((p) => {
    const pSlug = p.slug.toLowerCase();
    const pId = p.id.toLowerCase();
    return pSlug === decodedSlug || pId === decodedSlug;
  });

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} Case Study | Code Loom`,
    description: project.subtitle || project.description.slice(0, 160),
    openGraph: {
      title: `${project.title} | Code Loom Portfolio`,
      description: project.subtitle,
      url: `https://codeloom.in/projects/${project.slug}`,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.subtitle,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  // Robust finding: check slug and id, case-insensitive, and handle potential encoding
  const decodedSlug = decodeURIComponent(slug).toLowerCase();
  
  const project = projectsData.find((p) => {
    const pSlug = p.slug.toLowerCase();
    const pId = p.id.toLowerCase();
    return pSlug === decodedSlug || pId === decodedSlug;
  });

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
