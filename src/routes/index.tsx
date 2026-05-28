import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase,
  HeartHandshake,
  Search,
  BookOpen,
  Shield,
  Megaphone,
  ArrowRight,
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
      { title: "Processos de Transformação — Juliana Grimaldi" },
      {
        name: "description",
        content:
          "Um caminho guiado para reprogramar, na raiz, os padrões emocionais. Conheça os 6 processos de Atualização de Memórias.",
      },
      { property: "og:title", content: "Processos de Transformação — Juliana Grimaldi" },
      {
        property: "og:description",
        content:
          "Reestruturação emocional baseada em neurociência. Escolha o processo certo para sua jornada.",
      },
    ],
  }),
  component: HubPage,
});

function HubPage() {
  return (
    <main>
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_30%,oklch(0.74_0.13_180/0.4),transparent_55%),radial-gradient(circle_at_85%_70%,oklch(0.3_0.1_220/0.5),transparent_55%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-teal">
            Processos Estruturados de Transformação
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white md:text-6xl">
            Um caminho guiado para reprogramar, na raiz, os padrões emocionais.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Um processo guiado para acessar, na raiz, as memórias emocionais que mantêm você no
            mesmo lugar — mesmo quando você tenta fazer diferente.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <Link
                key={s.slug}
                to={`/${s.slug}` as string}
                className="group relative flex flex-col rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-muted text-brand-teal transition-colors group-hover:bg-brand-teal group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h2 className="mt-6 font-display text-xl font-bold leading-tight text-secondary">
                  {s.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">
                  {s.shortDesc}
                </p>
                <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-brand-teal px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white">
                  {s.ctaLabel}
                  {s.price && <span>: {s.price}</span>}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
