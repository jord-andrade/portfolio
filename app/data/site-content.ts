export type Locale = "pt" | "en";

export const email = "andradelopesjordan@gmail.com";

export const siteContent = {
  pt: {
    lang: "pt-BR",
    navigation: {
      projects: "Projetos",
      expertise: "Foco técnico",
      about: "Trajetória",
      contact: "Contato",
      contactCta: "Vamos conversar",
      menuOpen: "Abrir menu",
      menuClose: "Fechar menu",
      mobileLabel: "Navegação móvel",
      mainLabel: "Navegação principal",
      languageLabel: "Ver site em inglês",
      languageShort: "EN",
    },
    hero: {
      eyebrow: "Jordan Andrade · Desenvolvedor full-stack",
      title: "Sou Jordan Andrade.",
      titleAccent: "Construo produtos com dados e IA.",
      intro:
        "Trabalho da interface à modelagem de dados para transformar sistemas complexos em produtos claros, rastreáveis e prontos para evoluir.",
      projectsCta: "Explorar projetos",
      emailCta: "Conversar por e-mail",
      whatsappCta: "Conversar no WhatsApp",
      disciplinesLabel: "Tecnologias principais",
      disciplines: ["TypeScript", "Python", "PostgreSQL"],
      canvasRegion: "BR / 2026",
      visual: {
        eyebrow: "ARQUITETURA DE PRODUTO / 01",
        title: "Da interface à evidência.",
        input: "problema",
        output: "produto",
        nodes: [
          { code: "UI", label: "interface" },
          { code: "API", label: "sistema" },
          { code: "DB", label: "dados" },
          { code: "AI", label: "inteligência" },
        ],
        signal: "Decisões rastreáveis em cada camada",
        status: "FULL-STACK / DATA / AI",
      },
    },
    proofStrip: [
      { value: "01", label: "produto público" },
      { value: "02", label: "ferramentas de IA em desenvolvimento" },
      { value: "03", label: "estudos de caso documentados" },
    ],
    projects: {
      kicker: "Trabalho que posso mostrar",
      title: "Projetos com status, decisões e evidências.",
      intro:
        "Cada caso separa claramente o que já está online do que ainda está sendo construído — sem transformar hipótese em resultado.",
    },
    expertise: {
      kicker: "Foco técnico",
      title: "Produtos de dados e IA, ponta a ponta.",
      intro:
        "Minha principal contribuição é conectar interface, software e dados sem perder a rastreabilidade da solução.",
      items: [
        {
          number: "01",
          title: "Engenharia full-stack",
          description:
            "Interfaces responsivas, serviços e arquiteturas que continuam compreensíveis depois do lançamento.",
          stack: "Next.js · React · TypeScript",
        },
        {
          number: "02",
          title: "Produtos orientados por dados",
          description:
            "Modelagem, consultas e visualizações que preservam contexto e ajudam pessoas a tomar decisões.",
          stack: "Python · Pandas · PostgreSQL",
        },
        {
          number: "03",
          title: "IA com controle humano",
          description:
            "Fluxos em que a automação acelera o trabalho, mas execução, evidência e aprovação continuam visíveis.",
          stack: "Agentes · Avaliação · Automação",
        },
      ],
    },
    journey: {
      kicker: "Minha trajetória",
      title: "Desenvolvimento primeiro. Dados no centro.",
      intro:
        "Minha base profissional é desenvolvimento de software. Foi construindo sistemas que me aproximei de bancos de dados, análise e automação — hoje concentro essa combinação em produtos web e ferramentas de IA.",
      stages: [
        {
          marker: "BASE",
          title: "Desenvolvimento de software",
          description:
            "Aplicações web, integrações, back-ends e o trabalho de transformar requisitos em algo utilizável.",
        },
        {
          marker: "FOCO",
          title: "Dados aplicados ao produto",
          description:
            "Bancos, análises e interfaces que tornam informações complexas mais fáceis de investigar e usar.",
        },
        {
          marker: "AGORA",
          title: "Produtos próprios com IA",
          description:
            "Um produto público em evolução e duas ferramentas em desenvolvimento, documentadas com seus limites reais.",
        },
      ],
      link: "Ver trajetória profissional no LinkedIn",
    },
    contact: {
      kicker: "Contato direto",
      title: "Quer construir algo que precisa funcionar de verdade?",
      intro:
        "Conte o contexto, o que já existe e onde está o maior atrito. Eu respondo com perguntas antes de prometer uma solução.",
      emailLabel: "E-mail",
      linkedinLabel: "LinkedIn",
    },
    footer: {
      description:
        "Desenvolvedor full-stack focado em produtos de dados e IA.",
      emailLabel: "E-mail",
    },
    projectCard: {
      open: "Abrir",
      caseStudy: "Ver estudo de caso",
      workingTitle: "Nome em definição",
      caseStudyLabel: "Ver estudo de caso",
      technologyLabel: "Tecnologias do",
    },
    projectPage: {
      back: "Todos os projetos",
      workingTitle:
        "Este produto ainda não tem nome oficial. O título usado aqui descreve o que ele faz.",
      visit: "Visitar projeto",
      inDevelopment: "Em desenvolvimento",
      period: "Período",
      category: "Frente",
      scope: "Escopo",
      evidenceKicker: "Evidências disponíveis",
      evidenceTitle: "O que já pode ser verificado.",
      contextKicker: "O contexto",
      contextTitle: "O que precisava mudar.",
      deliveryKicker: "A entrega",
      deliveryTitle: "Um sistema pensado de ponta a ponta.",
      galleryKicker: "Por dentro do produto",
      galleryTitle: "Fluxos, dados e detalhes.",
      stackKicker: "Tecnologia",
      stackTitle: "A base por trás da experiência.",
      technologiesLabel: "Tecnologias utilizadas no projeto",
    },
  },
  en: {
    lang: "en",
    navigation: {
      projects: "Projects",
      expertise: "Technical focus",
      about: "Journey",
      contact: "Contact",
      contactCta: "Let’s talk",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      mobileLabel: "Mobile navigation",
      mainLabel: "Main navigation",
      languageLabel: "View site in Portuguese",
      languageShort: "PT",
    },
    hero: {
      eyebrow: "Jordan Andrade · Full-stack developer",
      title: "I’m Jordan Andrade.",
      titleAccent: "I build products with data and AI.",
      intro:
        "I work from interface to data modeling to turn complex systems into clear, traceable products that are ready to evolve.",
      projectsCta: "Explore projects",
      emailCta: "Start an email",
      whatsappCta: "Chat on WhatsApp",
      disciplinesLabel: "Core technologies",
      disciplines: ["TypeScript", "Python", "PostgreSQL"],
      canvasRegion: "BR / 2026",
      visual: {
        eyebrow: "PRODUCT ARCHITECTURE / 01",
        title: "From interface to evidence.",
        input: "problem",
        output: "product",
        nodes: [
          { code: "UI", label: "interface" },
          { code: "API", label: "system" },
          { code: "DB", label: "data" },
          { code: "AI", label: "intelligence" },
        ],
        signal: "Traceable decisions at every layer",
        status: "FULL-STACK / DATA / AI",
      },
    },
    proofStrip: [
      { value: "01", label: "public product" },
      { value: "02", label: "AI tools in development" },
      { value: "03", label: "documented case studies" },
    ],
    projects: {
      kicker: "Work I can show",
      title: "Projects with status, decisions, and evidence.",
      intro:
        "Each case clearly separates what is already online from what is still being built — without presenting a hypothesis as a result.",
    },
    expertise: {
      kicker: "Technical focus",
      title: "Data and AI products, end to end.",
      intro:
        "My main contribution is connecting interface, software, and data without losing the solution’s traceability.",
      items: [
        {
          number: "01",
          title: "Full-stack engineering",
          description:
            "Responsive interfaces, services, and architectures that remain understandable after launch.",
          stack: "Next.js · React · TypeScript",
        },
        {
          number: "02",
          title: "Data-driven products",
          description:
            "Models, queries, and visualizations that preserve context and help people make decisions.",
          stack: "Python · Pandas · PostgreSQL",
        },
        {
          number: "03",
          title: "Human-controlled AI",
          description:
            "Workflows where automation moves faster while execution, evidence, and approval remain visible.",
          stack: "Agents · Evaluation · Automation",
        },
      ],
    },
    journey: {
      kicker: "My journey",
      title: "Software first. Data at the center.",
      intro:
        "My professional foundation is software development. Building systems brought me closer to databases, analysis, and automation — today I bring that combination to web products and AI tools.",
      stages: [
        {
          marker: "BASE",
          title: "Software development",
          description:
            "Web applications, integrations, back ends, and the work of turning requirements into something people can use.",
        },
        {
          marker: "FOCUS",
          title: "Data applied to products",
          description:
            "Databases, analysis, and interfaces that make complex information easier to investigate and use.",
        },
        {
          marker: "NOW",
          title: "Independent AI products",
          description:
            "One evolving public product and two tools in development, documented with their real limitations.",
        },
      ],
      link: "See professional experience on LinkedIn",
    },
    contact: {
      kicker: "Direct contact",
      title: "Building something that needs to work in the real world?",
      intro:
        "Share the context, what already exists, and where the biggest friction is. I’ll respond with questions before promising a solution.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
    },
    footer: {
      description: "Full-stack developer focused on data and AI products.",
      emailLabel: "Email",
    },
    projectCard: {
      open: "Open",
      caseStudy: "View case study",
      workingTitle: "Working title",
      caseStudyLabel: "View case study",
      technologyLabel: "Technologies used in",
    },
    projectPage: {
      back: "All projects",
      workingTitle:
        "This product does not have an official name yet. The title used here describes what it does.",
      visit: "Visit project",
      inDevelopment: "In development",
      period: "Period",
      category: "Area",
      scope: "Scope",
      evidenceKicker: "Available evidence",
      evidenceTitle: "What can already be verified.",
      contextKicker: "Context",
      contextTitle: "What needed to change.",
      deliveryKicker: "The delivery",
      deliveryTitle: "A system designed end to end.",
      galleryKicker: "Inside the product",
      galleryTitle: "Flows, data, and details.",
      stackKicker: "Technology",
      stackTitle: "The foundation behind the experience.",
      technologiesLabel: "Technologies used in project",
    },
  },
} as const;

export function getContactHref(locale: Locale) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

  if (number) {
    const message =
      locale === "pt"
        ? "Olá, Jordan! Vi seu portfólio e gostaria de conversar sobre um projeto."
        : "Hi Jordan! I found your portfolio and would like to talk about a project.";

    return {
      channel: "whatsapp" as const,
      href: `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
    };
  }

  const subject = locale === "pt" ? "Contato pelo portfólio" : "Portfolio enquiry";
  const body =
    locale === "pt"
      ? "Olá, Jordan! Vi seu portfólio e gostaria de conversar sobre..."
      : "Hi Jordan! I found your portfolio and would like to talk about...";

  return {
    channel: "email" as const,
    href: `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}
