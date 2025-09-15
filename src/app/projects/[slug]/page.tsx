import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/markdown";
import ProjectDetail from "@/components/ProjectDetail";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found."
    };
  }

  return {
    title: `${project.metadata.title} | Sabique Islam`,
    description: project.metadata.description,
    openGraph: {
      title: project.metadata.title,
      description: project.metadata.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.metadata.title,
      description: project.metadata.description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetail
      title={project.metadata.title}
      description={project.metadata.description}
      link={project.metadata.link}
      live={project.metadata.live}
      tags={project.metadata.tags}
      content={project.content}
    />
  );
}