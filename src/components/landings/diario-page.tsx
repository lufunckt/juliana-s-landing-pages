import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Sunrise, Moon, Eye } from "lucide-react";

const wa = "https://wa.link/thno3v";

export function DiarioPage() {
  return (
    <main className="bg-background">
      {/* HERO — produto, mais quente e leve */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.96_0.02_180)] via-background to-[oklch(0.94_0.03_210)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <Link to="/" className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal hover:text-secondary">
              ← Todos os processos
            </Link>
            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-teal">
              Ferramenta diária · 5 min por dia
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] text-secondary md:text-6xl">
              Eu me <span className="italic text-brand-teal">percebendo</span>.
            </h1>
            <p className="mt-3 font-display text-2xl text-secondary/70">Um diário emocional guiado.</p>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-foreground/75">
              Pequenos prompts. Cinco minutos por dia. O hábito mais simples e mais poderoso para
              parar de reagir — e começar a escolher.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={wa} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-3 rounded-md bg-brand-teal px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[var(--shadow-glow)] hover:bg-brand-teal-dark transition-all">
                Comprar diário — R$ 97 <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-xs text-foreground/60">Versão digital · Acesso imediato</span>
            </div>
          </div>
          {/* Mock visual do diário */}
          <div className="relative mx-auto">
            <div className="absolute inset-0 -rotate-3 rounded-2xl bg-brand-teal/15 blur-2xl" />
            <div className="relative w-72 rotate-2 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <BookOpen className="h-7 w-7 text-brand-teal" />
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-teal">Hoje · 07:42</p>
              <p className="mt-3 font-display text-lg font-semibold text-secondary leading-snug">
                "O que disparou essa emoção, exatamente?"
              </p>
              <div className="mt-5 space-y-2">
                <div className="h-1.5 w-full rounded-full bg-muted" />
                <div className="h-1.5 w-5/6 rounded-full bg-muted" />
                <div className="h-1.5 w-2/3 rounded-full bg-muted" />
              </div>
              <p className="mt-6 text-xs italic text-foreground/50">prompt 3 de 4 · padrão detectado: evitação</p>
            </div>
          </div>
        </div>
      </section>

      {/* RITUAL DIÁRIO */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">O ritual</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold text-secondary">
          Duas pausas por dia. Uma vida emocional inteira.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { i: Sunrise, t: "Manhã — Intenção", d: "Antes do dia te conduzir, você nomeia como quer chegar. 3 prompts curtos." },
            { i: Moon, t: "Noite — Revisão", d: "Antes de dormir, você mapeia o que te disparou. Padrões viram visíveis." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <Icon className="h-8 w-8 text-brand-teal" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-2xl font-bold text-secondary">{t}</h3>
              <p className="mt-3 text-foreground/75">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROMPTS EXEMPLO */}
      <section className="bg-secondary py-24 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">Exemplos de prompts</p>
          <h2 className="mt-4 font-display text-4xl font-bold">As perguntas que mudam tudo.</h2>
          <div className="mt-12 space-y-5">
            {[
              "Qual emoção apareceu primeiro, antes de eu reagir?",
              "Onde, no meu corpo, ela se manifestou?",
              "Esse padrão é meu — ou herdado?",
              "O que eu faria se não estivesse com medo da resposta?",
            ].map((q, i) => (
              <div key={q} className="flex gap-5 border-l-2 border-brand-teal pl-5">
                <span className="font-mono text-sm text-brand-teal">0{i + 1}</span>
                <p className="font-display text-xl text-white/90">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ GANHA + CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <Eye className="h-9 w-9 text-brand-teal" strokeWidth={1.5} />
            <h2 className="mt-5 font-display text-4xl font-bold text-secondary">Em 21 dias, você se vê.</h2>
            <p className="mt-5 text-foreground/75">
              Não é um caderno bonito para preencher. É um instrumento técnico de auto-observação
              construído a partir da neurociência comportamental.
            </p>
            <ul className="mt-7 space-y-2 text-foreground/80">
              <li>· Reduz reatividade emocional</li>
              <li>· Cria autoconhecimento mensurável</li>
              <li>· Base sólida para qualquer processo terapêutico</li>
              <li>· Funciona em 5 minutos por dia</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-teal/30 bg-card p-8 text-center shadow-[var(--shadow-card)]">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">Acesso imediato</p>
            <p className="mt-3 font-display text-6xl font-bold text-secondary">R$ 97</p>
            <p className="mt-2 text-sm text-foreground/60">Pagamento único · Versão digital</p>
            <a href={wa} target="_blank" rel="noopener noreferrer"
               className="mt-8 flex items-center justify-center gap-2 rounded-md bg-brand-teal px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-teal-dark">
              Quero meu diário <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
