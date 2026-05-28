import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, FileText, Compass, Shield, MessageCircle } from "lucide-react";

const wa = "https://wa.link/thno3v";

export function DiagnosticoPage() {
  return (
    <main className="bg-background">
      {/* HERO — clínico, foco em 2h */}
      <section className="relative overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_70%_30%,oklch(0.74_0.13_180/0.5),transparent_50%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.4fr_1fr] md:items-center md:py-32">
          <div>
            <Link to="/" className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal hover:text-white">
              ← Todos os processos
            </Link>
            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-teal">
              Sessão única · 1:1 · Confidencial
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] md:text-6xl">
              Em <span className="text-brand-teal">2 horas</span>, a origem exata do que te trava.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
              Uma sessão estruturada de mapeamento emocional. Você sai com diagnóstico técnico,
              clareza sobre a raiz dos seus padrões e a próxima direção definida.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={wa} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-3 rounded-md bg-brand-teal px-7 py-4 text-sm font-bold uppercase tracking-wider shadow-[var(--shadow-glow)] hover:bg-brand-teal-dark transition-all">
                Agendar diagnóstico — R$ 397 <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          {/* Cartão clínico */}
          <div className="rounded-2xl border border-brand-teal/40 bg-white/5 p-8 backdrop-blur">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-brand-teal" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Estrutura da sessão</span>
            </div>
            <ul className="mt-6 space-y-5 text-sm">
              {[
                ["00:00", "Escuta inicial e contextualização"],
                ["00:30", "Mapeamento de padrões recorrentes"],
                ["01:00", "Identificação da memória raiz"],
                ["01:30", "Diagnóstico e plano de direção"],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4 border-l border-white/15 pl-4">
                  <span className="font-mono text-brand-teal">{t}</span>
                  <span className="text-white/80">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">Indicação clínica</p>
        <h2 className="mt-4 font-display text-4xl font-bold text-secondary">Este diagnóstico é para você se...</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { i: Compass, t: "Você está perdida na origem", d: "Sabe que algo trava, mas não consegue nomear o quê." },
            { i: Shield, t: "Já tentou de tudo", d: "Terapias, cursos, conselhos — e sente que sempre volta ao mesmo ponto." },
            { i: MessageCircle, t: "Quer direção antes de comprometer", d: "Antes de entrar num processo longo, quer um mapa técnico." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="border-t-2 border-brand-teal pt-5">
              <Icon className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-xl font-bold text-secondary">{t}</h3>
              <p className="mt-2 text-sm text-foreground/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ENTREGÁVEIS */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">O que você leva da sessão</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-secondary">Não é uma conversa. É um diagnóstico.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { t: "Mapa emocional personalizado", d: "Visualização dos padrões implícitos que se repetem na sua vida." },
              { t: "Identificação da memória raiz", d: "A origem técnica — não a superfície — do bloqueio principal." },
              { t: "Plano de direção", d: "O próximo passo concreto, com ou sem continuidade no processo." },
              { t: "Regulação imediata", d: "Entender já regula. Você sai da sessão com o sistema nervoso mais leve." },
            ].map(({ t, d }) => (
              <div key={t} className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <FileText className="h-6 w-6 flex-shrink-0 text-brand-teal" />
                <div>
                  <h3 className="font-display text-lg font-bold text-secondary">{t}</h3>
                  <p className="mt-1.5 text-sm text-foreground/70">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-display text-3xl font-bold leading-tight text-secondary md:text-4xl">
          Você não precisa de mais um conselho. Precisa de um <span className="italic text-brand-teal">diagnóstico</span>.
        </p>
        <a href={wa} target="_blank" rel="noopener noreferrer"
           className="mt-10 inline-flex items-center gap-3 rounded-md bg-brand-teal px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[var(--shadow-glow)] hover:bg-brand-teal-dark">
          Agendar minha sessão — R$ 397 <ArrowRight className="h-4 w-4" />
        </a>
      </section>
    </main>
  );
}
