import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "../data/projects";
import { type Locale, siteContent } from "../data/site-content";
import ProjectVisual from "./ProjectVisual";

type ProjectCaseProps = {
  locale: Locale;
  project: Project;
};

export default function ProjectCase({ locale, project }: ProjectCaseProps) {
  const copy = siteContent[locale].projectPage;
  const isEnglish = locale === "en";
  const style = {
    "--project-accent": project.accent,
    "--project-accent-soft": project.accentSoft,
  } as CSSProperties;

  return (
    <main className="case-study" id="conteudo" style={style} lang={isEnglish ? "en" : "pt-BR"}>
      <section className="case-hero shell">
        <Link className="back-link" href={isEnglish ? "/en#projects" : "/#projetos"}>
          <span aria-hidden="true">←</span> {copy.back}
        </Link>

        {project.workingTitle && (
          <p className="content-note working-title-note">
            <span aria-hidden="true">i</span>
            {copy.workingTitle}
          </p>
        )}

        {project.note && (
          <p className="content-note">
            <span aria-hidden="true">!</span> {project.note}
          </p>
        )}

        <div className="case-title-grid">
          <div>
            <p className="section-kicker">{project.label}</p>
            <h1 className={project.name.length > 18 ? "case-title-long" : undefined}>
              {project.name}
            </h1>
          </div>
          <div className="case-lead">
            <p>{project.headline}</p>
            {project.website ? (
              <a href={project.website} target="_blank" rel="noreferrer">
                {copy.visit} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="case-development-status">{copy.inDevelopment}</span>
            )}
          </div>
        </div>

        <dl className="case-meta">
          <div>
            <dt>{copy.period}</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>{copy.category}</dt>
            <dd>{project.category}</dd>
          </div>
          <div>
            <dt>{copy.scope}</dt>
            <dd>{project.scope}</dd>
          </div>
        </dl>

        <div className="case-cover">
          <ProjectVisual project={project} priority size="hero" />
        </div>
      </section>

      <section className="case-evidence shell" aria-labelledby="case-evidence-title">
        <div className="case-evidence-heading">
          <p className="section-kicker">{copy.evidenceKicker}</p>
          <h2 id="case-evidence-title">{copy.evidenceTitle}</h2>
        </div>
        <dl className="case-evidence-grid">
          {project.evidence.map((item) => (
            <div key={item.label}>
              <dt>{item.value}</dt>
              <dd>
                <strong>{item.label}</strong>
                <span>{item.detail}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="case-narrative shell" aria-labelledby="case-context-title">
        <div>
          <p className="section-kicker">{copy.contextKicker}</p>
          <h2 id="case-context-title">{copy.contextTitle}</h2>
        </div>
        <div className="narrative-copy">
          <p>{project.challenge}</p>
          <p>{project.response}</p>
        </div>
      </section>

      <section className="case-features" aria-labelledby="case-delivery-title">
        <div className="shell">
          <div className="section-heading light-heading">
            <div>
              <p className="section-kicker">{copy.deliveryKicker}</p>
              <h2 id="case-delivery-title">{copy.deliveryTitle}</h2>
            </div>
          </div>
          <div className="feature-grid">
            {project.features.map((feature, index) => (
              <article key={feature.title}>
                <span>0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className="case-gallery shell" aria-labelledby="case-gallery-title">
          <div className="gallery-heading">
            <p className="section-kicker">{copy.galleryKicker}</p>
            <h2 id="case-gallery-title">{copy.galleryTitle}</h2>
          </div>
          <div className="gallery-grid">
            {project.gallery.map((image, index) => (
              <figure
                className={index === 0 || index === 3 ? "gallery-wide" : ""}
                key={image.src}
              >
                <div className="gallery-media">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={
                      index === 0 || index === 3
                        ? "(max-width: 900px) 100vw, 88vw"
                        : "(max-width: 900px) 100vw, 44vw"
                    }
                  />
                </div>
                <figcaption>
                  <span>0{index + 1}</span>
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="case-stack">
        <div className="shell stack-grid">
          <div>
            <p className="section-kicker">{copy.stackKicker}</p>
            <h2>{copy.stackTitle}</h2>
          </div>
          <ul aria-label={`${copy.technologiesLabel} ${project.name}`}>
            {project.technologies.map((technology, index) => (
              <li key={technology}>
                <span>0{index + 1}</span>
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
