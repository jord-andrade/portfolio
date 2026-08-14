export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type ProjectVisual = {
  variant: "data-agent" | "document" | "nutrition";
  eyebrow: string;
  statement: string;
  signals: string[];
};

export type Project = {
  slug: "analise-de-dados-com-ia" | "curriculos-com-ia" | "datanutri";
  name: string;
  workingTitle?: boolean;
  label: string;
  period: string;
  category: string;
  scope: string;
  headline: string;
  summary: string;
  website?: string;
  cover?: string;
  visual: ProjectVisual;
  accent: string;
  accentSoft: string;
  note?: string;
  challenge: string;
  response: string;
  features: ProjectFeature[];
  technologies: string[];
  gallery?: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "analise-de-dados-com-ia",
    name: "Análise de dados com IA",
    workingTitle: true,
    label: "Produto em desenvolvimento",
    period: "2026 — agora",
    category: "IA · Dados · Sistemas",
    scope: "Produto · Agentes · Plataforma",
    headline:
      "Pergunte ao banco. Receba uma resposta sustentada por dados medidos.",
    summary:
      "Um ambiente analítico conversacional que consulta tabelas, escreve e executa código em um notebook isolado e devolve respostas com rastreabilidade.",
    visual: {
      variant: "data-agent",
      eyebrow: "Pergunta → execução → evidência",
      statement: "Dados respondem melhor quando o caminho fica visível.",
      signals: ["SQL", "Python", "Resultado medido"],
    },
    accent: "#6f5cff",
    accentSoft: "#e8e4ff",
    challenge:
      "Uma pergunta simples sobre um banco real pode exigir descoberta de esquema, consultas, cálculos e várias tentativas. Em ferramentas convencionais, esse trabalho fica espalhado entre chat, editor, terminal e memória — e a resposta final nem sempre mostra de onde veio.",
    response:
      "O produto reúne conversa, banco, notebook e relatório no mesmo fluxo. O agente investiga as tabelas, escreve e executa código em um ambiente isolado e sustenta cada conclusão com resultados observáveis, enquanto um runtime durável preserva o estado da análise.",
    features: [
      {
        title: "Conversa que executa",
        description:
          "A intenção em linguagem natural vira consultas e código executável, sem esconder do usuário o percurso até a resposta.",
      },
      {
        title: "Notebook rastreável",
        description:
          "Células, resultados e artefatos permanecem disponíveis para inspeção, continuidade e reprodução da análise.",
      },
      {
        title: "Estado que sobrevive",
        description:
          "Sessões, eventos e execuções foram desenhados para continuar consistentes mesmo quando uma conexão é interrompida.",
      },
      {
        title: "Avaliação com casos reais",
        description:
          "Uma console dedicada verifica não só testes isolados, mas a entrega ponta a ponta contra perguntas e bases reais.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Vite",
      "Playwright",
    ],
  },
  {
    slug: "curriculos-com-ia",
    name: "Currículos com IA",
    workingTitle: true,
    label: "Ferramenta em desenvolvimento",
    period: "2026 — agora",
    category: "IA · Documentos · Produto",
    scope: "Produto · IA · Documentos",
    headline:
      "Do currículo bruto a um PDF consistente, com revisão humana no centro.",
    summary:
      "Uma ferramenta que importa currículos, propõe melhorias explicadas e gera HTML/PDF somente depois da aprovação da versão exata pelo usuário.",
    visual: {
      variant: "document",
      eyebrow: "Conteúdo → aprovação → documento",
      statement: "Automação suficiente para acelerar. Controle suficiente para confiar.",
      signals: ["Revisão humana", "HTML A4", "PDF validado"],
    },
    accent: "#ef5b3f",
    accentSoft: "#ffe5dd",
    challenge:
      "Gerar um currículo bonito é só parte do problema. O conteúdo precisa continuar factual, nenhuma informação pode desaparecer, o documento deve caber no número de páginas escolhido e o resultado precisa permanecer estável ao ser impresso em PDF.",
    response:
      "A ferramenta cria primeiro uma proposta intermediária com justificativas. O usuário edita ou aprova essa versão; só então o sistema gera um HTML autocontido, imprime o PDF e mede a geometria real do documento para detectar overflow, sobreposição, órfãs e desequilíbrios.",
    features: [
      {
        title: "Aprovação da versão exata",
        description:
          "A IA propõe e explica; a pessoa revisa o texto aprovado antes que qualquer documento final seja produzido.",
      },
      {
        title: "Documento autocontido",
        description:
          "O resultado é um HTML A4 independente, preparado para visualização, download e impressão consistente em PDF.",
      },
      {
        title: "Validação geométrica",
        description:
          "O navegador e o PDF são inspecionados para encontrar cortes, sobreposições, páginas vazias e densidade inadequada.",
      },
      {
        title: "Segurança e custo visíveis",
        description:
          "HTML não confiável passa por allowlists, enquanto estimativas, limites e custos reais ficam registrados por etapa.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "OpenAI API",
      "Playwright",
      "PostgreSQL",
    ],
  },
  {
    slug: "datanutri",
    name: "DataNutri",
    label: "Produto de dados",
    period: "2024 — agora",
    category: "Nutrição · Dados · Web",
    scope: "Produto · Dados · Engenharia",
    headline:
      "Explore alimentos e compare nutrientes sem perder o contexto da fonte.",
    summary:
      "Um explorador de dados nutricionais derivados do USDA, com busca, filtros, comparação, cálculo por porção e exportação em uma interface legível.",
    website: "https://datanutri.com",
    cover: "/dataNutri/cover_nutri.png",
    visual: {
      variant: "nutrition",
      eyebrow: "Busca → comparação → contexto",
      statement: "Uma base técnica organizada para investigação, não para prescrição.",
      signals: ["USDA", "Comparação", "CSV"],
    },
    accent: "#1685a5",
    accentSoft: "#dff6fb",
    note:
      "O score nutricional é uma heurística experimental e não validada. O DataNutri é uma ferramenta informativa, não uma recomendação médica.",
    challenge:
      "Bases nutricionais são extensas, cheias de valores ausentes e difíceis de comparar. O desafio era permitir investigação rápida sem transformar ausência em zero, simplificar demais a fonte ou apresentar uma métrica experimental como verdade clínica.",
    response:
      "A solução oferece busca, filtros e paginação determinística; páginas de alimento renderizadas no servidor; comparação de nutrientes; ranking de similares; cálculo por porção e exportação CSV. A aplicação consulta uma réplica somente leitura e mantém os dados originais acessíveis.",
    features: [
      {
        title: "Exploração previsível",
        description:
          "Busca, filtros e paginação determinística tornam uma base extensa navegável sem resultados que mudam de posição sem motivo.",
      },
      {
        title: "Comparação nutricional",
        description:
          "Alimentos podem ser comparados por nutrientes, porção e proximidade, com ausência e zero tratados como estados diferentes.",
      },
      {
        title: "Cálculo e exportação",
        description:
          "O usuário ajusta a quantidade da porção, recalcula os valores e exporta os recortes relevantes para CSV.",
      },
      {
        title: "Transparência de fonte",
        description:
          "A origem USDA permanece explícita e o score experimental é apresentado com limites claros, sem pretensão clínica.",
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "Tailwind CSS",
      "Vitest",
    ],
    gallery: [
      {
        src: "/dataNutri/detail.png",
        alt: "Página de detalhes nutricionais do DataNutri",
        caption: "Detalhe nutricional com score, macronutrientes e composição.",
      },
      {
        src: "/dataNutri/table.png",
        alt: "Tabela de alimentos do DataNutri",
        caption: "Exploração da base com pesquisa, filtros e paginação.",
      },
      {
        src: "/dataNutri/table-heatmap.png",
        alt: "Heatmap de nutrientes no DataNutri",
        caption: "Heatmap para revelar concentrações e padrões entre alimentos.",
      },
      {
        src: "/dataNutri/similar.png",
        alt: "Comparação de alimentos similares no DataNutri",
        caption: "Sugestões e comparação entre alimentos nutricionalmente próximos.",
      },
      {
        src: "/dataNutri/score.png",
        alt: "Score nutricional do DataNutri",
        caption: "Indicador experimental acompanhado dos dados que o compõem.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
