import { Link } from "@tanstack/react-router";
import {
  Briefcase,
  HeartHandshake,
  Search,
  BookOpen,
  Shield,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Brain,
  Sparkles,
} from "lucide-react";
import type { Section } from "@/lib/sections";

const iconMap = {
  briefcase: Briefcase,
  "heart-handshake": HeartHandshake,
  search: Search,
  book: BookOpen,
  shield: Shield,
  megaphone: Megaphone,
};

export function SectionLanding({ section }: { section: Section }) {
  const Icon = iconMap[section.icon];

  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,oklch(0.74_0.13_180/0.4),transparent_50%),radial-gradient(circle_at_80%_70%,oklch(0.3_0.1_220/0.5),transparent_50%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-teal hover:text-white transition-colors"
            >
              <ArrowRight className="h-3 w-3 rotate-180" /> Todos os processos
            </Link>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-brand-teal">
              {section.hero.kicker}
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-white md:text-6xl">
              {section.hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              {section.hero.subhead}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={section.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-brand-teal px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[var(--shadow-glow)] transition-all hover:bg-brand-teal-dark"
              >
                {section.ctaLabel}
                {section.price && <span className="opacity-90">— {section.price}</span>}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={section.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/30 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </div>
          <div className="relative hidden md:flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-brand-teal/20 blur-3xl" />
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-brand-teal/40 bg-white/5 backdrop-blur-sm">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border border-brand-teal/60 bg-brand-teal/10">
                <Icon className="h-20 w-20 text-brand-teal" strokeWidth={1.2} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
          O que está realmente acontecendo
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-secondary md:text-4xl">
          Você reconhece esses padrões?
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {section.pains.map((p) => (
            <div
              key={p}
              className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <Brain className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
            A Metodologia aplicada
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-secondary md:text-4xl">
            Três pilares baseados em neurociência
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/70">
            Fundamentada em protocolos de neuroplasticidade e reconsolidação de memória para
            reorganizar emoções na raiz.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {section.pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="relative rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
              >
                <div className="absolute -top-4 left-7 flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal text-xs font-bold text-white">
                  0{i + 1}
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-secondary">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes + For Who */}
      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
            Resultados esperados
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-secondary">
            O que muda na sua vida
          </h2>
          <ul className="mt-8 space-y-4">
            {section.outcomes.map((o) => (
              <li key={o} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal" />
                <span className="text-foreground/80">{o}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <Sparkles className="h-8 w-8 text-brand-teal" strokeWidth={1.5} />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
            Para quem é
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold text-secondary">
            Este processo é para você se...
          </h3>
          <ul className="mt-6 space-y-3">
            {section.forWho.map((f) => (
              <li
                key={f}
                className="border-l-2 border-brand-teal/40 pl-4 text-sm text-foreground/80"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_50%_50%,oklch(0.74_0.13_180/0.5),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
            O começo da mudança
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            Pronto para interromper os padrões que te limitam?
          </h2>
          <p className="mt-6 text-white/80">
            Tudo começa com uma conversa. Sem julgamentos, com escuta técnica e acolhedora.
          </p>
          <a
            href={section.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-brand-teal px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[var(--shadow-glow)] transition-all hover:bg-brand-teal-dark"
          >
            {section.ctaLabel}
            {section.price && <span>— {section.price}</span>}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
