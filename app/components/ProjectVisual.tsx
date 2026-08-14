import Image from "next/image";
import type { Project } from "../data/projects";

type ProjectVisualProps = {
  project: Project;
  priority?: boolean;
  size?: "card" | "hero";
};

export default function ProjectVisual({
  project,
  priority = false,
  size = "card",
}: ProjectVisualProps) {
  if (project.cover) {
    return (
      <Image
        src={project.cover}
        alt={`Visão geral do projeto ${project.name}`}
        fill
        sizes={size === "hero" ? "100vw" : "(max-width: 900px) 100vw, 62vw"}
        className="project-cover"
        priority={priority}
      />
    );
  }

  return (
    <div
      className={`project-art project-art-${project.visual.variant} project-art-${size}`}
      aria-hidden="true"
    >
      <div className="project-art-topline">
        <span>{project.visual.eyebrow}</span>
        <span>0{project.visual.signals.length}</span>
      </div>

      <div className="project-art-stage">
        {project.visual.variant === "data-agent" && (
          <div className="data-agent-diagram">
            <div className="data-agent-question">?</div>
            <div className="data-agent-path" />
            <div className="data-agent-core">
              <span>AGENTE</span>
              <strong>↳</strong>
            </div>
            <div className="data-agent-result">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        )}

        {project.visual.variant === "document" && (
          <div className="document-diagram">
            <div className="document-sheet document-sheet-back" />
            <div className="document-sheet document-sheet-front">
              <span />
              <i />
              <i />
              <i />
              <b />
              <b />
            </div>
            <div className="document-approval">✓</div>
          </div>
        )}

        <p>{project.visual.statement}</p>
      </div>

      <ul className="project-art-signals">
        {project.visual.signals.map((signal) => (
          <li key={signal}>{signal}</li>
        ))}
      </ul>
    </div>
  );
}
