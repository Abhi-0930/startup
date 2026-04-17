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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CreativeWork",
                "name": project.title,
                "headline": project.subtitle,
                "description": project.description,
                "image": project.heroImage,
                "author": {
                  "@type": "Organization",
                  "name": "Code Loom",
                  "url": "https://codeloom.in"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Code Loom",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://codeloom.in/logo.png"
                  }
                },
                "datePublished": project.year,
                "genre": project.category
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://codeloom.in"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Projects",
                    "item": "https://codeloom.in#work"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": project.title,
                    "item": `https://codeloom.in/projects/${project.slug}`
                  }
                ]
              }
            ]
          }),
        }}
      />
      <ProjectDetailClient project={project} />
    </>
  );
}
