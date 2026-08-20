import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "../data/projects";
import { type Locale, siteContent } from "../data/site-content";
import ProjectVisual from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
  index: number;
  locale: Locale;
};

export default function ProjectCard({ project, index, locale }: ProjectCardProps) {
  const style = {
    "--project-accent": project.accent,
    "--project-accent-soft": project.accentSoft,
  } as CSSProperties;
  const copy = siteContent[locale].projectCard;
  const caseHref =
    locale === "en"
      ? `/en/projects/${project.slug}`
      : `/projetos/${project.slug}`;

  return (
    <article className="project-card" style={style}>
      <Link
        className="project-visual"
        href={caseHref}
        aria-label={`${copy.caseStudyLabel}: ${project.name}`}
      >
        <span className="project-index">0{index + 1}</span>
        <ProjectVisual project={project} priority={index === 0} />
        <span className="project-open" aria-hidden="true">
          {copy.open} <b>↗</b>
        </span>
      </Link>

      <div className="project-copy">
        <div className="project-meta">
          <span>{project.label}</span>
          <span>{project.period}</span>
        </div>
        <div className="project-name-row">
          <h3>{project.name}</h3>
          {project.workingTitle && <span>{copy.workingTitle}</span>}
        </div>
        <p>{project.summary}</p>
        <dl className="project-evidence-preview">
          {project.evidence.slice(0, 2).map((item) => (
            <div key={item.label}>
              <dt>{item.value}</dt>
              <dd>{item.label}</dd>
            </div>
          ))}
        </dl>
        <ul
          className="project-tech-preview"
          aria-label={`${copy.technologyLabel} ${project.name}`}
        >
          {project.technologies.slice(0, 4).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <Link className="text-link" href={caseHref}>
          {copy.caseStudy} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
