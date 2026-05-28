import { Link } from "@tanstack/react-router";
import { ArrowRight, Wind } from "lucide-react";

const wa = "https://wa.link/thno3v";

export function AutonomiaPage() {
  return (
    <main className="bg-background">
      {/* HERO minimal, espaço pra respirar */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 [background-image:radial-gradient(ellipse_at_top,oklch(0.96_0.04_180/0.6),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-40">
          <Link to="/" className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal hover:text-secondary">
            ← Todos os processos
          </Link>
          <Wind className="mx-auto mt-10 h-9 w-9 text-brand-teal" strokeWidth={1.2} />
          <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-teal">
            Autonomia Interna
          </p>
          <h1 className="mt-7 font-display text-5xl font-bold leading-[1.05] text-secondary md:text-7xl">
            "Não."
          </h1>
          <p className="mt-6 font-display text-2xl italic text-secondary/70 md:text-3xl">
            Uma palavra. Sem a culpa que vinha junto.
          </p>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-foreground/75">
            Um processo para encerrar o ciclo de exaustão sustentado pela necessidade de agradar —
            e devolver, para você, o direito de se priorizar sem se justificar.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer"
             className="mt-10 inline-flex items-center gap-3 rounded-md bg-brand-teal px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[var(--shadow-glow)] hover:bg-brand-teal-dark transition-all">
            Quero me priorizar <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ESPELHO — frases curtas em destaque */}
      <section className="border-y border-border bg-muted/40 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
            Você se reconhece?
          </p>
          <div className="mt-12 space-y-10">
            {[
              "Diz 'sim' antes mesmo da pergunta terminar.",
              "Sente o corpo cansar enquanto a boca aceita mais uma demanda.",
              "Coloca o limite — e logo depois pede desculpa por tê-lo colocado.",
              "Cuida de todos. Acorda exausta. Repete.",
            ].map((p, i) => (
              <p key={p} className="font-display text-2xl leading-snug text-secondary md:text-3xl">
                <span className="mr-3 font-mono text-sm text-brand-teal align-top">0{i + 1}</span>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CAMINHO — 4 movimentos */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">O caminho</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold text-secondary">
          Quatro movimentos para devolver você a si mesma.
        </h2>
        <div className="mt-14 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
          {[
            ["Raiz da culpa", "Mapeamos a memória implícita que te ensinou que cuidar de você é egoísmo."],
            ["Regulação do sistema nervoso", "Reduzimos a resposta automática de medo da desaprovação."],
            ["Limite como expressão", "Limites deixam de ser confronto. Viram um traço seu — natural."],
            ["Energia preservada", "O corpo descansa. A presença chega onde precisa, sem rasgar você no caminho."],
          ].map(([t, d], i) => (
            <div key={t} className="flex flex-col gap-4 bg-card p-8 md:flex-row md:items-center md:gap-12">
              <div className="flex items-center gap-5 md:w-1/2">
                <span className="font-display text-5xl font-bold text-brand-teal/50">0{i + 1}</span>
                <h3 className="font-display text-2xl font-bold text-secondary">{t}</h3>
              </div>
              <p className="text-foreground/75 md:w-1/2">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CITAÇÃO + CTA */}
      <section className="bg-secondary py-28 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-display text-3xl leading-snug italic md:text-4xl">
            "Você não nasceu para sustentar todos. Você nasceu para se sustentar — e, a partir
            daí, escolher quem caminha com você."
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer"
             className="mt-12 inline-flex items-center gap-3 rounded-md bg-brand-teal px-7 py-4 text-sm font-bold uppercase tracking-wider hover:bg-brand-teal-dark">
            Começar agora <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
