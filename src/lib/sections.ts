export type Section = {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  ctaLabel: string;
  price?: string;
  icon: "briefcase" | "heart-handshake" | "search" | "book" | "shield" | "megaphone";
  hero: { kicker: string; headline: string; subhead: string };
  pains: string[];
  pillars: { title: string; desc: string }[];
  outcomes: string[];
  forWho: string[];
  ctaUrl: string;
};

const wa = "https://wa.link/thno3v";

export const sections: Section[] = [
  {
    slug: "protagonismo-profissional",
    title: "Protagonismo Profissional",
    category: "Carreira & Performance",
    shortDesc: "Reestruturação emocional para posicionamento, performance e evolução na carreira.",
    ctaLabel: "Ver Método",
    price: "R$ 2.997",
    icon: "briefcase",
    ctaUrl: wa,
    hero: {
      kicker: "PROTAGONISMO PROFISSIONAL",
      headline: "Assuma a liderança da sua carreira sem depender de aprovação externa.",
      subhead:
        "Um processo profundo de reestruturação emocional para profissionais de alto desempenho que querem posicionamento, presença e evolução real, sem autossabotagem.",
    },
    pains: [
      "Você entrega resultados, mas sente que sua evolução não acompanha o esforço.",
      "Trava na hora de se posicionar, pedir aumento ou negociar oportunidades.",
      "Compara-se constantemente e duvida do próprio valor, mesmo com histórico de entregas.",
    ],
    pillars: [
      {
        title: "Mapeamento da Raiz",
        desc: "Identificamos as memórias emocionais que sustentam padrões de autossabotagem profissional.",
      },
      {
        title: "Reprogramação Neural",
        desc: "Reconsolidamos memórias e reorganizamos circuitos para encerrar ciclos de autoexigência tóxica.",
      },
      {
        title: "Posicionamento Real",
        desc: "Você passa a agir com clareza, autoridade e leveza, ocupando o espaço que já é seu.",
      },
    ],
    outcomes: [
      "Clareza para tomar decisões de carreira com segurança",
      "Fim do medo de exposição e da síndrome do impostor",
      "Negociações e posicionamento com autoridade natural",
      "Energia preservada — sem operar em modo sobrevivência",
    ],
    forWho: [
      "Profissionais sêniores, líderes e empreendedoras",
      "Quem sente que a próxima fase exige uma versão mais inteira",
      "Quem busca evolução sem precisar 'se forçar' a ser outra pessoa",
    ],
  },
  {
    slug: "desbloqueio-emocional",
    title: "Desbloqueio Emocional: Relacionamento e Dinheiro",
    category: "Relacionamentos & Finanças",
    shortDesc:
      "Reestruturação emocional para transformar padrões que impactam seus relacionamentos e dinheiro.",
    ctaLabel: "Ver Pacote",
    price: "R$ 1.997",
    icon: "heart-handshake",
    ctaUrl: wa,
    hero: {
      kicker: "DESBLOQUEIO EMOCIONAL",
      headline:
        "Reescreva, na raiz, os padrões que travam seus relacionamentos e sua relação com dinheiro.",
      subhead:
        "Um pacote estruturado de reconsolidação de memória para desbloquear afeto, abundância e a sensação real de merecimento.",
    },
    pains: [
      "Relacionamentos repetem o mesmo desfecho, com pessoas diferentes.",
      "Dinheiro entra, mas escorre — você sente que nunca é suficiente.",
      "Auto-sabotagem na intimidade, no recebimento e no pedir.",
    ],
    pillars: [
      {
        title: "Raiz Afetiva",
        desc: "Acessamos as memórias que ditam quem você atrai e como se entrega nos vínculos.",
      },
      {
        title: "Raiz Financeira",
        desc: "Identificamos crenças implícitas sobre merecer, receber, cobrar e prosperar.",
      },
      {
        title: "Nova Programação",
        desc: "Reorganizamos os circuitos para que afeto e dinheiro deixem de ser campo de luta.",
      },
    ],
    outcomes: [
      "Relacionamentos mais saudáveis e recíprocos",
      "Liberdade para cobrar e receber sem culpa",
      "Fim dos ciclos de autoboicote financeiro",
      "Sensação consistente de merecimento",
    ],
    forWho: [
      "Quem percebe os mesmos padrões se repetindo há anos",
      "Quem quer transformar a relação com dinheiro de forma estrutural",
      "Quem deseja relacionamentos com presença e reciprocidade",
    ],
  },
  {
    slug: "diagnostico-emocional",
    title: "Diagnóstico da Raiz Emocional",
    category: "Sessão 1:1",
    shortDesc:
      "Sessão profunda para identificar a raiz dos padrões emocionais que estão travando sua vida.",
    ctaLabel: "Agendar Sessão",
    price: "R$ 397",
    icon: "search",
    ctaUrl: wa,
    hero: {
      kicker: "DIAGNÓSTICO DA RAIZ EMOCIONAL",
      headline: "Em 2h, você descobre a raiz exata dos padrões que travam sua vida.",
      subhead:
        "Uma sessão confidencial de mapeamento emocional, baseada em neurociência comportamental, para você sair com clareza e direção.",
    },
    pains: [
      "Você tentou de tudo, mas sente que sempre volta ao mesmo ponto.",
      "Sabe que algo trava, mas não consegue nomear o quê.",
      "Quer começar uma jornada de transformação com direção clara.",
    ],
    pillars: [
      {
        title: "Escuta Estratégica",
        desc: "Mapeamos sua história emocional sem julgamento, com olhar técnico.",
      },
      {
        title: "Identificação da Raiz",
        desc: "Localizamos as memórias implícitas que sustentam seus bloqueios atuais.",
      },
      {
        title: "Plano de Direção",
        desc: "Você sai com um diagnóstico claro e o próximo passo definido.",
      },
    ],
    outcomes: [
      "Clareza sobre a origem real dos seus padrões",
      "Mapa emocional personalizado",
      "Direção concreta para a próxima etapa",
      "Alívio imediato — entender já regula o sistema nervoso",
    ],
    forWho: [
      "Quem quer começar a jornada com diagnóstico técnico",
      "Quem está cansada de soluções genéricas",
      "Quem precisa de clareza antes de comprometer-se com um processo",
    ],
  },
  {
    slug: "diario-emocional",
    title: "Diário Emocional",
    category: "Ferramenta prática",
    shortDesc:
      "Ferramenta prática (eu me percebendo) para identificar gatilhos emocionais no seu dia a dia.",
    ctaLabel: "Comprar Diário",
    price: "R$ 97",
    icon: "book",
    ctaUrl: wa,
    hero: {
      kicker: "DIÁRIO EMOCIONAL",
      headline:
        "Eu me percebendo: a ferramenta diária para enxergar seus gatilhos antes que eles te conduzam.",
      subhead:
        "Um diário guiado, baseado em neurociência, para você desenvolver consciência emocional consistente — em poucos minutos por dia.",
    },
    pains: [
      "Você reage primeiro e percebe depois.",
      "Sente que a emoção te conduz, em vez de você conduzir a emoção.",
      "Quer um método simples, sem terapia, para começar a se observar.",
    ],
    pillars: [
      {
        title: "Rastreio de Gatilhos",
        desc: "Estrutura simples para identificar o que realmente disparou a emoção.",
      },
      {
        title: "Consciência Diária",
        desc: "Prompts curtos guiados que criam o hábito de auto-observação.",
      },
      {
        title: "Padrões Visíveis",
        desc: "Em semanas, você enxerga claramente quais ciclos se repetem.",
      },
    ],
    outcomes: [
      "Reduz reatividade emocional",
      "Cria autoconhecimento mensurável",
      "Base sólida para qualquer processo terapêutico",
      "Hábito de 5 minutos com impacto profundo",
    ],
    forWho: [
      "Quem quer começar por uma porta acessível",
      "Quem já faz terapia e quer potencializar o processo",
      "Quem busca consistência sem complicação",
    ],
  },
  {
    slug: "autonomia-interna",
    title: "Autonomia Interna",
    category: "Limites & Energia",
    shortDesc:
      "O fim do esgotamento. Aprenda a dizer 'não' sem culpa, defina limites e priorize você.",
    ctaLabel: "Quero Me Priorizar",
    icon: "shield",
    ctaUrl: wa,
    hero: {
      kicker: "AUTONOMIA INTERNA",
      headline: "Diga 'não' sem culpa. Priorize você sem se sentir egoísta.",
      subhead:
        "Um processo para encerrar o ciclo de exaustão emocional causado pela necessidade de aprovação e pela dificuldade de impor limites.",
    },
    pains: [
      "Você se sobrecarrega para não decepcionar.",
      "Sente culpa imediata ao colocar um limite.",
      "Vive cansada porque cuida de todos, menos de si.",
    ],
    pillars: [
      {
        title: "Raiz da Culpa",
        desc: "Mapeamos as memórias que ensinaram que cuidar de você é egoísmo.",
      },
      {
        title: "Regulação do Sistema",
        desc: "Reduzimos o medo de desaprovação que dispara o 'sim' automático.",
      },
      {
        title: "Limites Naturais",
        desc: "Limites deixam de ser confronto e passam a ser expressão sua.",
      },
    ],
    outcomes: [
      "Capacidade real de dizer 'não' com tranquilidade",
      "Fim da exaustão por excesso de compromissos",
      "Energia preservada para o que importa",
      "Relacionamentos mais honestos e menos pesados",
    ],
    forWho: [
      "Quem vive em estado de esgotamento",
      "Quem se anula para manter a paz",
      "Quem quer reconquistar o próprio tempo",
    ],
  },
  {
    slug: "visibilidade-natural",
    title: "Visibilidade Natural",
    category: "Voz & Presença",
    shortDesc:
      "Expresse-se com clareza e segurança, sendo ouvida e respeitada sem precisar forçar nada.",
    ctaLabel: "Quero Ter Voz",
    icon: "megaphone",
    ctaUrl: wa,
    hero: {
      kicker: "VISIBILIDADE NATURAL",
      headline: "Sua voz ouvida, sua presença respeitada — sem precisar performar.",
      subhead:
        "Um processo de reestruturação emocional para você se expressar com clareza, segurança e autoridade orgânica.",
    },
    pains: [
      "Você sente que precisa 'fazer força' para ser ouvida.",
      "Engole opiniões em reuniões e depois se arrepende.",
      "Sente-se invisível mesmo entregando muito.",
    ],
    pillars: [
      {
        title: "Raiz do Silenciamento",
        desc: "Identificamos as memórias que ensinaram seu sistema a se calar.",
      },
      {
        title: "Segurança Interna",
        desc: "Reorganizamos a resposta de medo associada à exposição.",
      },
      {
        title: "Expressão Orgânica",
        desc: "Você fala porque tem o que dizer — não para conquistar espaço.",
      },
    ],
    outcomes: [
      "Voz firme e tranquila em qualquer contexto",
      "Presença que não depende de validação",
      "Comunicação clara, sem rodeios ou pedidos de desculpa",
      "Autoridade percebida de forma natural",
    ],
    forWho: [
      "Quem se sente invisível no trabalho ou nas relações",
      "Quem fala muito mas não se sente ouvida",
      "Quem quer presença real, não performance",
    ],
  },
];

export const getSection = (slug: string) => sections.find((s) => s.slug === slug);
