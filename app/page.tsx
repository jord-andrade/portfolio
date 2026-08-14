import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

const expertise = [
  {
    number: "01",
    title: "Engenharia de produto",
    description:
      "Interfaces responsivas, aplicações web e arquiteturas que continuam simples de evoluir depois do lançamento.",
    stack: "Next.js · React · TypeScript",
  },
  {
    number: "02",
    title: "Dados aplicados",
    description:
      "Pipelines, análises e visualizações que transformam bases complexas em decisões mais claras para pessoas e negócios.",
    stack: "Python · Pandas · SQL",
  },
  {
    number: "03",
    title: "Sistemas conectados",
    description:
      "Integrações entre pagamentos, APIs, webhooks, comunicação e operação para eliminar trabalho fragmentado.",
    stack: "APIs · PostgreSQL · Automação",
  },
];

const process = [
  ["Entender", "Mapear o problema, as pessoas e as restrições antes de escolher a tecnologia."],
  ["Estruturar", "Definir fluxos, arquitetura e prioridades para reduzir risco e retrabalho."],
  ["Construir", "Entregar em ciclos curtos, com atenção igual ao detalhe visual e à base técnica."],
  ["Evoluir", "Observar o uso real e transformar aprendizado em uma próxima versão melhor."],
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jordan Andrade",
    url: "https://jord-andrade.dev",
    jobTitle: "Desenvolvedor Full-stack e Cientista de Dados",
    sameAs: [
      "https://github.com/jandrade-dev",
      "https://www.linkedin.com/in/jordan-andrade-lopez/",
    ],
  };

  return (
    <main id="conteudo">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Desenvolvedor full-stack · Dados & IA
          </p>
          <h1 id="hero-title">
            Complexidade entra.
            <span>Clareza sai.</span>
          </h1>
          <p className="hero-intro">
            Sou Jordan Andrade. Projeto e construo produtos digitais que conectam
            experiências claras, sistemas sólidos e dados que ajudam a decidir.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Explorar projetos <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-ghost" href="mailto:andradelopesjordan@gmail.com">
              Iniciar conversa <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-disciplines" aria-label="Áreas de atuação">
            <span>Produto</span>
            <span>Engenharia</span>
            <span>Dados</span>
          </div>
        </div>

        <div className="hero-canvas" aria-hidden="true">
          <div className="canvas-topline">
            <span>jord-andrade.dev</span>
            <span>BR / 2026</span>
          </div>
          <div className="canvas-orbit orbit-one" />
          <div className="canvas-orbit orbit-two" />
          <div className="canvas-core">JA</div>
          <div className="canvas-note note-product">
            <small>01</small>
            <span>produto</span>
          </div>
          <div className="canvas-note note-code">
            <small>02</small>
            <span>código</span>
          </div>
          <div className="canvas-note note-data">
            <small>03</small>
            <span>dados</span>
          </div>
          <div className="canvas-bottomline">
            <span>do conceito</span>
            <i />
            <span>à produção</span>
          </div>
        </div>
      </section>

      <section className="manifesto-strip" aria-label="Proposta de valor">
        <div className="shell manifesto-inner">
          <p>Estratégia suficiente para escolher bem.</p>
          <p>Engenharia sólida para crescer.</p>
          <p>Design claro para ser usado.</p>
        </div>
      </section>

      <section className="section shell projects-section" id="projetos" aria-labelledby="projects-title">
        <div className="section-heading projects-heading">
          <div>
            <p className="section-kicker">Trabalho selecionado</p>
            <h2 id="projects-title">Projetos com contexto, não só telas.</h2>
          </div>
          <p>
            Produtos vistos por dentro: o problema, as escolhas e os sistemas que
            sustentam cada experiência.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.slug} />
          ))}
        </div>
      </section>

      <section className="section expertise-section" id="expertise" aria-labelledby="expertise-title">
        <div className="shell">
          <div className="section-heading light-heading">
            <div>
              <p className="section-kicker">Como eu contribuo</p>
              <h2 id="expertise-title">Da interface à infraestrutura de dados.</h2>
            </div>
            <p>
              Uma visão transversal reduz as passagens de bastão e aproxima decisão de
              execução.
            </p>
          </div>

          <div className="expertise-grid">
            {expertise.map((item) => (
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

      <section className="section shell process-section" aria-labelledby="process-title">
        <div className="section-heading process-heading">
          <div>
            <p className="section-kicker">Processo</p>
            <h2 id="process-title">Menos cerimônia. Mais direção.</h2>
          </div>
        </div>
        <ol className="process-list">
          {process.map(([title, description], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section about-section" id="sobre" aria-labelledby="about-title">
        <div className="shell about-grid">
          <div className="about-marker" aria-hidden="true">
            <span>J</span>
            <span>A</span>
          </div>
          <div className="about-copy">
            <p className="section-kicker">Sobre</p>
            <h2 id="about-title">
              Curiosidade técnica com compromisso de produto.
            </h2>
            <div className="about-columns">
              <p>
                Trabalho no encontro entre desenvolvimento full-stack e ciência de dados.
                Gosto de entender como uma operação funciona, encontrar o ponto de maior
                atrito e construir uma solução que pareça simples para quem usa.
              </p>
              <p>
                Isso significa pensar na experiência, modelar os dados, integrar serviços e
                cuidar da arquitetura — sempre com atenção ao que gera valor de verdade.
              </p>
            </div>
            <a
              className="text-link"
              href="https://github.com/jandrade-dev"
              target="_blank"
              rel="noreferrer"
            >
              Ver atividade no GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato" aria-labelledby="contact-title">
        <div className="shell contact-inner">
          <p className="section-kicker">Próximo projeto</p>
          <h2 id="contact-title">Tem um problema difícil na mesa?</h2>
          <p>
            Conte o contexto. A melhor conversa começa antes da solução estar pronta.
          </p>
          <a className="contact-email" href="mailto:andradelopesjordan@gmail.com">
            andradelopesjordan@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
