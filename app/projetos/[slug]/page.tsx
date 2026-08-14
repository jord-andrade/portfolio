import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import ProjectVisual from "../../components/ProjectVisual";
import { getProject, projects } from "../../data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: `${project.name} — Estudo de caso`,
      description: project.summary,
      url: `https://jord-andrade.dev/projetos/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const style = {
    "--project-accent": project.accent,
    "--project-accent-soft": project.accentSoft,
  } as CSSProperties;

  return (
    <main className="case-study" id="conteudo" style={style}>
      <section className="case-hero shell">
        <Link className="back-link" href="/#projetos">
          <span aria-hidden="true">←</span> Todos os projetos
        </Link>

        {project.workingTitle && (
          <p className="content-note working-title-note">
            <span aria-hidden="true">i</span>
            Este produto ainda não tem nome oficial. O título usado aqui descreve o que
            ele faz.
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
                Visitar projeto <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="case-development-status">Em desenvolvimento</span>
            )}
          </div>
        </div>

        <dl className="case-meta">
          <div>
            <dt>Período</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>Frente</dt>
            <dd>{project.category}</dd>
          </div>
          <div>
            <dt>Escopo</dt>
            <dd>{project.scope}</dd>
          </div>
        </dl>

        <div className="case-cover">
          <ProjectVisual project={project} priority size="hero" />
        </div>
      </section>

      <section className="case-narrative shell" aria-labelledby="case-context-title">
        <div>
          <p className="section-kicker">O contexto</p>
          <h2 id="case-context-title">O que precisava mudar.</h2>
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
              <p className="section-kicker">A entrega</p>
              <h2 id="case-delivery-title">Um sistema pensado de ponta a ponta.</h2>
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
            <p className="section-kicker">Por dentro do produto</p>
            <h2 id="case-gallery-title">Fluxos, dados e detalhes.</h2>
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
            <p className="section-kicker">Tecnologia</p>
            <h2>A base por trás da experiência.</h2>
          </div>
          <ul aria-label={`Tecnologias utilizadas no projeto ${project.name}`}>
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
