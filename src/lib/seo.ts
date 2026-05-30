// SEO metadata per landing page (PT-BR, keyword-optimized).
// Title <60 chars, description <160 chars, keyword-rich Open Graph + JSON-LD.

export type SeoMeta = {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  serviceType: string;
  price?: string;
  priceCurrency?: string;
};

export const SITE_NAME = "Juliana Grimaldi";
export const PROVIDER = {
  "@type": "Person",
  name: "Juliana Grimaldi",
  jobTitle: "Especialista em Reestruturação Emocional",
  url: "/",
} as const;

export const seoBySlug: Record<string, SeoMeta> = {
  "protagonismo-profissional": {
    title: "Protagonismo Profissional: Carreira sem Autossabotagem",
    description:
      "Processo em 10 sessões de reestruturação emocional para líderes que querem posicionamento, autoridade e evolução na carreira sem autossabotagem.",
    keywords:
      "protagonismo profissional, autossabotagem carreira, síndrome do impostor, posicionamento profissional, mentoria executiva, reestruturação emocional, neurociência aplicada à carreira",
    serviceType: "Coaching de Carreira e Reestruturação Emocional",
    price: "2997",
    priceCurrency: "BRL",
  },
  "desbloqueio-emocional": {
    title: "Desbloqueio Emocional: Relacionamentos e Dinheiro",
    description:
      "Reestruture na raiz os padrões emocionais que travam seus relacionamentos e sua relação com dinheiro. 8 sessões de reconsolidação de memória.",
    keywords:
      "desbloqueio emocional, padrões em relacionamentos, bloqueio financeiro, autossabotagem dinheiro, reconsolidação de memória, terapia de relacionamento, abundância financeira",
    serviceType: "Terapia de Reestruturação Emocional",
    price: "1997",
    priceCurrency: "BRL",
  },
  "diagnostico-emocional": {
    title: "Diagnóstico Emocional 1:1 — Sessão de 2h",
    description:
      "Sessão única de 2 horas para mapear a raiz dos padrões que travam sua vida. Diagnóstico técnico baseado em neurociência comportamental.",
    keywords:
      "diagnóstico emocional, sessão de mapeamento emocional, raiz emocional, neurociência comportamental, terapia 1 a 1, autoconhecimento profundo, gatilhos emocionais",
    serviceType: "Sessão de Diagnóstico Emocional",
    price: "397",
    priceCurrency: "BRL",
  },
  "diario-emocional": {
    title: "Diário Emocional: Eu Me Percebendo — Ferramenta Guiada",
    description:
      "Diário guiado baseado em neurociência para identificar gatilhos emocionais e desenvolver autoconsciência em 5 minutos por dia. R$ 97.",
    keywords:
      "diário emocional, diário guiado, autoconhecimento diário, gatilhos emocionais, inteligência emocional, ferramenta de autopercepção, neurociência prática",
    serviceType: "Produto Digital — Ferramenta de Autoconhecimento",
    price: "97",
    priceCurrency: "BRL",
  },
  "autonomia-interna": {
    title: "Autonomia Interna: Diga Não Sem Culpa e Pare de se Esgotar",
    description:
      "Processo para encerrar o ciclo de exaustão emocional, impor limites sem culpa e priorizar você sem se sentir egoísta. Baseado em neurociência.",
    keywords:
      "autonomia interna, dizer não sem culpa, impor limites, esgotamento emocional, burnout feminino, autocuidado, priorizar a si mesma, limites saudáveis",
    serviceType: "Processo de Reestruturação Emocional",
  },
  "visibilidade-natural": {
    title: "Visibilidade Natural: Tenha Voz e Presença sem Performar",
    description:
      "Reestruturação emocional para ser ouvida e respeitada com autoridade orgânica — sem precisar elevar a voz, performar ou pedir licença.",
    keywords:
      "visibilidade natural, ter voz no trabalho, presença executiva, autoridade feminina, silenciamento emocional, comunicação assertiva, expressão pessoal",
    serviceType: "Processo de Reestruturação Emocional",
  },
};

export function buildHead(slug: string, path: string) {
  const seo = seoBySlug[slug];
  if (!seo) return { meta: [], links: [], scripts: [] };

  const fullTitle = `${seo.title} | ${SITE_NAME}`;
  const meta = [
    { title: fullTitle },
    { name: "description", content: seo.description },
    { name: "keywords", content: seo.keywords },
    { name: "author", content: SITE_NAME },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    // Open Graph
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: seo.description },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "pt_BR" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:url", content: path },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: seo.description },
  ];

  const offers = seo.price
    ? {
        "@type": "Offer",
        price: seo.price,
        priceCurrency: seo.priceCurrency ?? "BRL",
        availability: "https://schema.org/InStock",
      }
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: seo.title,
    description: seo.description,
    serviceType: seo.serviceType,
    provider: PROVIDER,
    areaServed: "BR",
    inLanguage: "pt-BR",
    url: path,
    ...(offers ? { offers } : {}),
  };

  return {
    meta,
    links: [{ rel: "canonical", href: path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  };
}
