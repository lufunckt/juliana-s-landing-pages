import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase,
  HeartHandshake,
  Search,
  BookOpen,
  Shield,
  Megaphone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { sections } from "@/lib/sections";

const iconMap = {
  briefcase: Briefcase,
  "heart-handshake": HeartHandshake,
  search: Search,
  book: BookOpen,
  shield: Shield,
  megaphone: Megaphone,
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Juliana Grimaldi — 6 Processos de Reestruturação Emocional" },
      {
        name: "description",
        content:
          "Reprograme, na raiz, os padrões emocionais que travam sua carreira, relacionamentos e dinheiro. Conheça os 6 processos baseados em neurociência.",
      },
      {
        name: "keywords",
        content:
          "reestruturação emocional, neurociência comportamental, autossabotagem, reconsolidação de memória, terapia emocional, Juliana Grimaldi",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      {
        property: "og:title",
        content: "Juliana Grimaldi — 6 Processos de Reestruturação Emocional",
      },
      {
        property: "og:description",
        content:
          "Reestruturação emocional baseada em neurociência. Escolha o processo certo para a sua jornada.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/LP/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Juliana Grimaldi — 6 Processos de Reestruturação Emocional",
      },
    ],
    links: [{ rel: "canonical", href: "https://julianagrimaldioficial.com.br/LP/" }],
  }),
  component: HubPage,
});

function HubPage() {
  return (
    <main className="bg-background selection:bg-brand-teal/30">
      <section className="relative overflow-hidden bg-brand-navy pt-20 pb-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-teal rounded-full blur-[150px] opacity-10" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-navy-deep rounded-full blur-[150px] opacity-20" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-teal text-xs font-bold uppercase tracking-[0.2em] mb-10">
            <Sparkles className="h-4 w-4" />
            Processos Estruturados de Transformação
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-[1.1] text-white md:text-7xl lg:text-8xl">
            A sua liberdade começa na <span className="text-brand-teal italic">raiz</span>.
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-xl leading-relaxed text-white/70 md:text-2xl font-light">
            Um caminho guiado para acessar e reprogramar as memórias emocionais que mantêm você no
            mesmo lugar — mesmo quando você tenta fazer diferente.
          </p>
        </div>
      </section>

      <section className="relative -mt-16 z-20 mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <Link
                key={s.slug}
                to={`/${s.slug}` as string}
                className="group relative flex flex-col rounded-3xl border border-border bg-white p-10 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-brand-teal/30"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted/50 text-brand-teal transition-all group-hover:bg-brand-teal group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                  <Icon className="h-8 w-8" strokeWidth={1.5} />
                </div>

                <h2 className="mt-8 font-display text-2xl font-bold leading-tight text-brand-navy group-hover:text-brand-teal transition-colors">
                  {s.title}
                </h2>

                <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/70">
                  {s.shortDesc}
                </p>

                <div className="mt-8 inline-flex items-center gap-3 font-bold text-xs uppercase tracking-widest text-brand-teal border-b-2 border-brand-teal/20 pb-1 group-hover:border-brand-teal transition-all">
                  {s.ctaLabel}
                  {s.price && <span className="text-brand-navy/40">· {s.price}</span>}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-navy mb-6">
            Qual o melhor momento para começar?
          </h2>
          <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
            Cada processo foi desenhado para uma fase específica da sua jornada. Seja para um ajuste
            pontual em uma sessão única ou uma reestruturação profunda em 10 encontros.
          </p>
          <a
            href="https://julianagrimaldioficial.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-teal font-bold uppercase tracking-widest text-sm hover:underline underline-offset-8"
          >
            Conheça a Metodologia Completa →
          </a>
        </div>
      </section>
    </main>
  );
}
