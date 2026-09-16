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

export type ProjectEvidence = {
  value: string;
  label: string;
  detail: string;
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
  evidence: ProjectEvidence[];
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
    evidence: [
      {
        value: "SQL + Python",
        label: "execução no mesmo fluxo",
        detail: "Consultas e cálculos permanecem visíveis junto da resposta.",
      },
      {
        value: "Notebook",
        label: "histórico inspecionável",
        detail: "Células e resultados preservam o caminho percorrido pela análise.",
      },
      {
        value: "Em construção",
        label: "impacto ainda não medido",
        detail: "O case não apresenta hipótese de produto como resultado de produção.",
      },
    ],
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
    evidence: [
      {
        value: "HTML + PDF",
        label: "saída reproduzível",
        detail: "O mesmo conteúdo aprovado alimenta a visualização e o arquivo final.",
      },
      {
        value: "4 checagens",
        label: "validação geométrica",
        detail: "Cortes, sobreposições, páginas vazias e densidade são verificados.",
      },
      {
        value: "Em construção",
        label: "impacto ainda não medido",
        detail: "A implementação é descrita sem alegar adoção ou resultado inexistente.",
      },
    ],
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
      "Um explorador público de dados nutricionais do USDA, com 13,6 mil alimentos em três idiomas, fichas com porções reais, registros relacionados e rankings por nutriente, além de comparação, código de barras e diário alimentar.",
    website: "https://datanutri.com",
    cover: "/dataNutri/cover_nutri.png",
    visual: {
      variant: "nutrition",
      eyebrow: "Busca → comparação → contexto",
      statement: "Uma base técnica organizada para investigação, não para prescrição.",
      signals: ["USDA", "3 idiomas", "Rankings"],
    },
    accent: "#1685a5",
    accentSoft: "#dff6fb",
    note:
      "O score nutricional é uma heurística experimental e não validada. O DataNutri é uma ferramenta informativa, não uma recomendação médica.",
    challenge:
      "Bases nutricionais são extensas, cheias de valores ausentes e difíceis de comparar. O desafio era permitir investigação rápida sem transformar ausência em zero, simplificar demais a fonte ou apresentar uma métrica experimental como verdade clínica.",
    response:
      "Cada alimento tem uma página renderizada no servidor com a tabela por 100 g, as porções caseiras da USDA, registros similares e do mesmo nome, e texto escrito a partir dos próprios valores nos registros mais buscados. Doze páginas de ranking ordenam o catálogo por nutriente. Uma página de metodologia documenta datasets, valores diários, ausências e o escore. Busca com ranking por relevância no PostgreSQL, comparação, leitura de código de barras, diário e receitas completam o produto, servido em inglês, português e espanhol.",
    evidence: [
      {
        value: "13,6 mil",
        label: "alimentos em 3 idiomas",
        detail: "Foundation, SR Legacy e FNDDS com nomes traduzidos à mão; Branded Foods com busca por texto completo.",
      },
      {
        value: "USDA",
        label: "fonte declarada",
        detail: "Origem, release, valores diários e limites do escore documentados na página de metodologia.",
      },
      {
        value: "12 rankings",
        label: "páginas por nutriente",
        detail: "Os 100 alimentos com mais proteína, fibra, potássio, selênio, lisina e outros por 100 g, com cobertura por dataset.",
      },
    ],
    features: [
      {
        title: "Fichas que respondem à pergunta",
        description:
          "Valores por 100 g e por porção caseira da USDA, registros similares e do mesmo nome no HTML, e texto próprio nos alimentos mais buscados. Ausência e zero são estados diferentes.",
      },
      {
        title: "Rankings por nutriente",
        description:
          "Doze páginas ordenam os 13,6 mil registros por um nutriente, dizem quantos o informam e ligam cada alimento à sua ficha, em inglês, português e espanhol.",
      },
      {
        title: "Busca e comparação",
        description:
          "Busca por relevância com full-text do PostgreSQL, filtros por categoria e nutriente, comparação lado a lado, código de barras para produtos e diário com totais do dia.",
      },
      {
        title: "Transparência de fonte",
        description:
          "Página de metodologia com datasets, release da USDA, valores diários da FDA, tratamento de ausências e a fórmula do escore experimental, sem pretensão clínica.",
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "next-intl",
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

type ProjectTranslation = Pick<
  Project,
  | "name"
  | "label"
  | "period"
  | "category"
  | "scope"
  | "headline"
  | "summary"
  | "visual"
  | "note"
  | "challenge"
  | "response"
  | "evidence"
  | "features"
  | "gallery"
>;

const englishProjects: Record<Project["slug"], ProjectTranslation> = {
  "analise-de-dados-com-ia": {
    name: "AI data analysis",
    label: "Product in development",
    period: "2026 — now",
    category: "AI · Data · Systems",
    scope: "Product · Agents · Platform",
    headline: "Ask the database. Get an answer grounded in measured data.",
    summary:
      "A conversational analytics environment that queries tables, writes and runs code in an isolated notebook, and returns traceable answers.",
    visual: {
      variant: "data-agent",
      eyebrow: "Question → execution → evidence",
      statement: "Data answers are stronger when the path remains visible.",
      signals: ["SQL", "Python", "Measured result"],
    },
    note: undefined,
    challenge:
      "A simple question about a real database can require schema discovery, queries, calculations, and several attempts. In conventional tools, that work is split across chat, editor, terminal, and memory — while the final answer may not show where it came from.",
    response:
      "The product brings conversation, database, notebook, and reporting into the same flow. The agent investigates tables, writes and runs code in an isolated environment, and supports each conclusion with observable results, while a durable runtime preserves analysis state.",
    evidence: [
      {
        value: "SQL + Python",
        label: "execution in one flow",
        detail: "Queries and calculations remain visible next to the answer.",
      },
      {
        value: "Notebook",
        label: "inspectable history",
        detail: "Cells and results preserve the path taken by the analysis.",
      },
      {
        value: "In progress",
        label: "impact not measured yet",
        detail: "The case does not present a product hypothesis as a production result.",
      },
    ],
    features: [
      {
        title: "Conversation that executes",
        description:
          "Natural-language intent becomes queries and executable code without hiding the path to the answer.",
      },
      {
        title: "Traceable notebook",
        description:
          "Cells, results, and artifacts remain available for inspection, continuation, and reproduction.",
      },
      {
        title: "State that survives",
        description:
          "Sessions, events, and executions are designed to remain consistent even when a connection drops.",
      },
      {
        title: "Evaluation with real cases",
        description:
          "A dedicated console checks the end-to-end delivery against real questions and datasets, not only isolated tests.",
      },
    ],
    gallery: undefined,
  },
  "curriculos-com-ia": {
    name: "AI-assisted résumés",
    label: "Tool in development",
    period: "2026 — now",
    category: "AI · Documents · Product",
    scope: "Product · AI · Documents",
    headline: "From raw résumé to consistent PDF, with human review at the center.",
    summary:
      "A tool that imports résumés, proposes explained improvements, and generates HTML/PDF only after the user approves the exact version.",
    visual: {
      variant: "document",
      eyebrow: "Content → approval → document",
      statement: "Enough automation to move faster. Enough control to trust it.",
      signals: ["Human review", "A4 HTML", "Validated PDF"],
    },
    note: undefined,
    challenge:
      "Generating a polished résumé is only part of the problem. The content must remain factual, no information can disappear, the document must fit the selected page count, and the result must remain stable when printed to PDF.",
    response:
      "The tool first creates an intermediate proposal with explanations. The user edits or approves that version; only then does the system generate self-contained HTML, print the PDF, and measure the document’s real geometry to detect overflow, overlap, orphaned elements, and imbalance.",
    evidence: [
      {
        value: "HTML + PDF",
        label: "reproducible output",
        detail: "The same approved content feeds both the preview and final file.",
      },
      {
        value: "4 checks",
        label: "geometric validation",
        detail: "Clipping, overlap, empty pages, and density are checked.",
      },
      {
        value: "In progress",
        label: "impact not measured yet",
        detail: "The implementation is described without claiming adoption or results that do not exist.",
      },
    ],
    features: [
      {
        title: "Approval of the exact version",
        description:
          "AI proposes and explains; the person reviews the approved copy before any final document is produced.",
      },
      {
        title: "Self-contained document",
        description:
          "The result is independent A4 HTML prepared for consistent viewing, download, and PDF printing.",
      },
      {
        title: "Geometric validation",
        description:
          "Browser and PDF output are inspected for clipping, overlap, blank pages, and unsuitable density.",
      },
      {
        title: "Visible safety and cost",
        description:
          "Untrusted HTML passes through allowlists, while estimates, limits, and actual costs are recorded by stage.",
      },
    ],
    gallery: undefined,
  },
  datanutri: {
    name: "DataNutri",
    label: "Public data product",
    period: "2024 — now",
    category: "Nutrition · Data · Web",
    scope: "Product · Data · Engineering",
    headline: "Explore foods and compare nutrients without losing source context.",
    summary:
      "A public explorer of USDA nutrition data: 13.6k foods in three languages, food pages with real portions, related records and nutrient rankings, plus comparison, barcode lookup and a food diary.",
    visual: {
      variant: "nutrition",
      eyebrow: "Search → comparison → context",
      statement: "A structured technical foundation for investigation, not prescription.",
      signals: ["USDA", "3 languages", "Rankings"],
    },
    note:
      "The nutrition score is an experimental, unvalidated heuristic. DataNutri is an informational tool, not medical advice.",
    challenge:
      "Nutrition datasets are extensive, full of missing values, and difficult to compare. The challenge was to enable fast investigation without turning absence into zero, oversimplifying the source, or presenting an experimental metric as clinical truth.",
    response:
      "Every food has a server-rendered page with the per-100 g table, USDA household portions, similar and same-name records, and, for the most searched records, text written from their own values. Twelve ranking pages order the catalog by nutrient. A methodology page documents datasets, Daily Values, missing values and the score. Relevance-ranked search in PostgreSQL, comparison, barcode lookup, a diary and recipes complete the product, served in English, Portuguese and Spanish.",
    evidence: [
      {
        value: "13.6k",
        label: "foods in 3 languages",
        detail: "Foundation, SR Legacy and FNDDS with hand-translated names; Branded Foods with full-text search.",
      },
      {
        value: "USDA",
        label: "declared source",
        detail: "Origin, release, Daily Values and the score’s limits documented on the methodology page.",
      },
      {
        value: "12 rankings",
        label: "nutrient pages",
        detail: "The 100 foods highest in protein, fiber, potassium, selenium, lysine and more per 100 g, with coverage per dataset.",
      },
    ],
    features: [
      {
        title: "Food pages that answer the question",
        description:
          "Values per 100 g and per USDA household portion, similar and same-name records in the HTML, and hand-written text on the most searched foods. Missing values and zero are different states.",
      },
      {
        title: "Nutrient rankings",
        description:
          "Twelve pages order the 13.6k records by one nutrient, say how many report it and link every food to its page, in English, Portuguese and Spanish.",
      },
      {
        title: "Search and comparison",
        description:
          "Relevance search with PostgreSQL full-text, category and nutrient filters, side-by-side comparison, barcode lookup for products and a diary with daily totals.",
      },
      {
        title: "Source transparency",
        description:
          "A methodology page with datasets, USDA release, FDA Daily Values, handling of missing values and the formula of the experimental score, with no clinical claim.",
      },
    ],
    gallery: [
      {
        src: "/dataNutri/detail.png",
        alt: "DataNutri nutrition detail page",
        caption: "Nutrition detail with score, macronutrients, and composition.",
      },
      {
        src: "/dataNutri/table.png",
        alt: "DataNutri foods table",
        caption: "Dataset exploration with search, filters, and pagination.",
      },
      {
        src: "/dataNutri/table-heatmap.png",
        alt: "DataNutri nutrient heatmap",
        caption: "Heatmap revealing concentrations and patterns across foods.",
      },
      {
        src: "/dataNutri/similar.png",
        alt: "DataNutri similar foods comparison",
        caption: "Suggestions and comparison among nutritionally similar foods.",
      },
      {
        src: "/dataNutri/score.png",
        alt: "DataNutri nutrition score",
        caption: "Experimental indicator shown alongside the data that composes it.",
      },
    ],
  },
};

export function getLocalizedProjects(locale: "pt" | "en" = "pt"): Project[] {
  if (locale === "pt") return projects;

  return projects.map((project) => ({
    ...project,
    ...englishProjects[project.slug],
  }));
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getLocalizedProject(slug: string, locale: "pt" | "en" = "pt") {
  return getLocalizedProjects(locale).find((project) => project.slug === slug);
}
