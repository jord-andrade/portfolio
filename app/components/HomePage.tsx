import ProjectCard from "./ProjectCard";
import { getLocalizedProjects } from "../data/projects";
import {
  email,
  getContactHref,
  type Locale,
  siteContent,
} from "../data/site-content";

type HomePageProps = {
  locale: Locale;
};

export default function HomePage({ locale }: HomePageProps) {
  const copy = siteContent[locale];
  const localizedProjects = getLocalizedProjects(locale);
  const contact = getContactHref(locale);
  const isEnglish = locale === "en";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jordan Andrade",
    url: "https://jord-andrade.dev",
    jobTitle: isEnglish
      ? "Full-stack developer focused on Data and AI"
      : "Desenvolvedor Full-stack com foco em Dados e IA",
    sameAs: [
      "https://github.com/jord-andrade",
      "https://www.linkedin.com/in/jord-andrade/",
    ],
  };

  return (
    <main id="conteudo" lang={copy.lang}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> {copy.hero.eyebrow}
          </p>
          <h1 id="hero-title">
            {copy.hero.title}
            <span>{copy.hero.titleAccent}</span>
          </h1>
          <p className="hero-intro">{copy.hero.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={isEnglish ? "#projects" : "#projetos"}>
              {copy.hero.projectsCta} <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-ghost"
              href={contact.href}
              target={contact.channel === "whatsapp" ? "_blank" : undefined}
              rel={contact.channel === "whatsapp" ? "noreferrer" : undefined}
            >
              {contact.channel === "whatsapp"
                ? copy.hero.whatsappCta
                : copy.hero.emailCta}{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-disciplines" aria-label={copy.hero.disciplinesLabel}>
            {copy.hero.disciplines.map((discipline) => (
              <span key={discipline}>{discipline}</span>
            ))}
          </div>
        </div>

        <div className="hero-canvas hero-system-visual" aria-hidden="true">
          <div className="system-visual-topline">
            <span>{copy.hero.visual.eyebrow}</span>
            <span>{copy.hero.canvasRegion}</span>
          </div>

          <div className="system-visual-heading">
            <span>JA / 2026</span>
            <strong>{copy.hero.visual.title}</strong>
          </div>

          <div className="system-flow">
            <div className="system-endpoint system-input">
              <small>IN</small>
              <span>{copy.hero.visual.input}</span>
            </div>

            <div className="system-nodes">
              {copy.hero.visual.nodes.map((node, index) => (
                <div className="system-node" key={node.code}>
                  <span>0{index + 1}</span>
                  <strong>{node.code}</strong>
                  <small>{node.label}</small>
                </div>
              ))}
            </div>

            <div className="system-endpoint system-output">
              <small>OUT</small>
              <span>{copy.hero.visual.output}</span>
            </div>
          </div>

          <div className="system-signal">
            <i />
            <span>{copy.hero.visual.signal}</span>
          </div>

          <div className="system-visual-bottomline">
            <span>{copy.hero.visual.status}</span>
            <span>jord-andrade.dev</span>
          </div>
        </div>
      </section>

      <section className="manifesto-strip" aria-label={isEnglish ? "Current work" : "Trabalho atual"}>
        <div className="shell manifesto-inner">
          {copy.proofStrip.map((item) => (
            <p key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </p>
          ))}
        </div>
      </section>

      <section
        className="section shell projects-section"
        id={isEnglish ? "projects" : "projetos"}
        aria-labelledby="projects-title"
      >
        <div className="section-heading projects-heading">
          <div>
            <p className="section-kicker">{copy.projects.kicker}</p>
            <h2 id="projects-title">{copy.projects.title}</h2>
          </div>
          <p>{copy.projects.intro}</p>
        </div>

        <div className="projects-list">
          {localizedProjects.map((project, index) => (
            <ProjectCard project={project} index={index} locale={locale} key={project.slug} />
          ))}
        </div>
      </section>

      <section
        className="section expertise-section"
        id="expertise"
        aria-labelledby="expertise-title"
      >
        <div className="shell">
          <div className="section-heading light-heading">
            <div>
              <p className="section-kicker">{copy.expertise.kicker}</p>
              <h2 id="expertise-title">{copy.expertise.title}</h2>
            </div>
            <p>{copy.expertise.intro}</p>
          </div>

          <div className="expertise-grid">
            {copy.expertise.items.map((item) => (
              <article key={item.number}>
                <span className="expertise-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <small>{item.stack}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section about-section"
        id={isEnglish ? "journey" : "sobre"}
        aria-labelledby="journey-title"
      >
        <div className="shell journey-layout">
          <div className="journey-intro">
            <p className="section-kicker">{copy.journey.kicker}</p>
            <h2 id="journey-title">{copy.journey.title}</h2>
            <p>{copy.journey.intro}</p>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/jord-andrade/"
              target="_blank"
              rel="noreferrer"
            >
              {copy.journey.link} <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ol className="journey-list">
            {copy.journey.stages.map((stage, index) => (
              <li key={stage.marker}>
                <div className="journey-index">
                  <span>0{index + 1}</span>
                  <small>{stage.marker}</small>
                </div>
                <div>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="contact-section"
        id={isEnglish ? "contact" : "contato"}
        aria-labelledby="contact-title"
      >
        <div className="shell contact-inner">
          <p className="section-kicker">{copy.contact.kicker}</p>
          <h2 id="contact-title">{copy.contact.title}</h2>
          <p>{copy.contact.intro}</p>
          <a
            className="contact-primary"
            href={contact.href}
            target={contact.channel === "whatsapp" ? "_blank" : undefined}
            rel={contact.channel === "whatsapp" ? "noreferrer" : undefined}
          >
            {contact.channel === "whatsapp"
              ? copy.hero.whatsappCta
              : `${copy.contact.emailLabel}: ${email}`}{" "}
            <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-alternatives">
            <a href={`mailto:${email}`}>{copy.contact.emailLabel}</a>
            <a
              href="https://www.linkedin.com/in/jord-andrade/"
              target="_blank"
              rel="noreferrer"
            >
              {copy.contact.linkedinLabel}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
