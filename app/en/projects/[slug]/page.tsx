import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCase from "../../../components/ProjectCase";
import { getLocalizedProject, projects } from "../../../data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getLocalizedProject(slug, "en");

  if (!project) return {};

  const path = `/en/projects/${project.slug}`;
  const portuguesePath = `/projetos/${project.slug}`;
  const image = project.cover
    ? `https://jord-andrade.dev${project.cover}`
    : undefined;

  return {
    title: project.name,
    description: project.summary,
    alternates: {
      canonical: path,
      languages: { "pt-BR": portuguesePath, en: path },
    },
    openGraph: {
      locale: "en_US",
      title: `${project.name} — Case study`,
      description: project.summary,
      url: `https://jord-andrade.dev${path}`,
      images: image ? [{ url: image, alt: project.name }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Case study`,
      description: project.summary,
      images: image ? [image] : [],
    },
  };
}

export default async function EnglishProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getLocalizedProject(slug, "en");

  if (!project) notFound();

  return <ProjectCase locale="en" project={project} />;
}
