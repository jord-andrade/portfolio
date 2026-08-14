import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "../data/projects";
import ProjectVisual from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const style = {
    "--project-accent": project.accent,
    "--project-accent-soft": project.accentSoft,
  } as CSSProperties;

  return (
    <article className="project-card" style={style}>
      <Link
        className="project-visual"
        href={`/projetos/${project.slug}`}
        aria-label={`Ver estudo de caso ${project.name}`}
      >
        <span className="project-index">0{index + 1}</span>
        <ProjectVisual project={project} priority={index === 0} />
        <span className="project-open" aria-hidden="true">
          Abrir <b>↗</b>
        </span>
      </Link>

      <div className="project-copy">
        <div className="project-meta">
          <span>{project.label}</span>
          <span>{project.period}</span>
        </div>
        <div className="project-name-row">
          <h3>{project.name}</h3>
          {project.workingTitle && <span>Nome em definição</span>}
        </div>
        <p>{project.summary}</p>
        <ul className="project-tech-preview" aria-label={`Tecnologias do ${project.name}`}>
          {project.technologies.slice(0, 4).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <Link className="text-link" href={`/projetos/${project.slug}`}>
          Ver estudo de caso <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
