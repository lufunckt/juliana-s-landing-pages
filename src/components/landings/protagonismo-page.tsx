import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Target, TrendingUp, Crown, Check } from "lucide-react";

const wa = "https://wa.link/thno3v";

export function ProtagonismoPage() {
  return (
    <main className="bg-background">
      {/* HERO — executivo, denso, com KPI lateral */}
      <section className="relative overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(ellipse_at_top_right,oklch(0.74_0.13_180/0.5),transparent_55%),radial-gradient(circle_at_10%_80%,oklch(0.25_0.1_260/0.7),transparent_60%)]" />
        <div className="absolute inset-y-0 left-1/2 hidden w-px bg-white/10 md:block" />
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <Link to="/" className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal hover:text-white">
              ← Todos os processos
            </Link>
            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-teal">
              Programa Premium · 6 sessões
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] md:text-6xl">
              Você entrega resultado. Só que <em className="not-italic text-brand-teal">sua carreira não acompanha</em>.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/75">
              Protagonismo Profissional é um processo de reestruturação emocional para profissionais
              de alto desempenho que querem parar de provar — e começar a ocupar.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={wa} target="_blank" rel="noopener noreferrer"
                 className="group inline-flex items-center gap-3 rounded-md bg-brand-teal px-7 py-4 text-sm font-bold uppercase tracking-wider shadow-[var(--shadow-glow)] hover:bg-brand-teal-dark transition-all">
                Aplicar para o método
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-xs uppercase tracking-wider text-white/60">Investimento: R$ 2.997</span>
            </div>
          </div>
          <div className="relative flex flex-col justify-center gap-4">
            {[
              { kpi: "73%", label: "dos profissionais de alta performance operam abaixo do potencial percebido" },
              { kpi: "8x", label: "mais decisões assertivas após reconsolidação de memórias emocionais" },
              { kpi: "0", label: "necessidade de aprovação como motor primário de ação" },
            ].map((s) => (
              <div key={s.kpi} className="flex items-baseline gap-5 border-l-2 border-brand-teal pl-5">
                <span className="font-display text-5xl font-bold text-brand-teal">{s.kpi}</span>
                <p className="text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO — 3 dores em formato tabela */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">O sintoma na superfície</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-secondary">
          Você não está estagnada. Está operando em <span className="italic text-brand-teal">loop de proteção</span>.
        </h2>
        <div className="mt-14 divide-y divide-border border-y border-border">
          {[
            ["Trava no posicionamento", "Reuniões viram revisão mental. Você fala depois — pensando: 'devia ter dito'."],
            ["Auto-exigência crônica", "Resultado nunca é suficiente para silenciar a voz interna que cobra mais."],
            ["Síndrome do impostor", "Conquistas viram coincidência. Erros viram identidade."],
          ].map(([t, d]) => (
            <div key={t} className="grid gap-2 py-6 md:grid-cols-[1fr_2fr] md:gap-12">
              <h3 className="font-display text-xl font-semibold text-secondary">{t}</h3>
              <p className="text-foreground/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MÉTODO — timeline horizontal */}
      <section className="bg-secondary py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">O método aplicado à carreira</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold">Três fases. Um novo sistema operacional.</h2>
          <div className="relative mt-16 grid gap-10 md:grid-cols-3">
            <div className="absolute top-7 left-[8%] right-[8%] hidden h-px bg-brand-teal/40 md:block" />
            {[
              { n: "01", t: "Mapeamento da Raiz", d: "Identificamos as memórias implícitas que sustentam o ciclo de autosabotagem profissional." , i: Target },
              { n: "02", t: "Reconsolidação Neural", d: "Reorganizamos os circuitos emocionais para encerrar respostas automáticas de proteção." , i: TrendingUp },
              { n: "03", t: "Ocupação do Espaço", d: "Você passa a se posicionar com autoridade orgânica. Sem performance, sem desgaste." , i: Crown },
            ].map(({ n, t, d, i: Icon }) => (
              <div key={n} className="relative">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-teal bg-secondary">
                  <Icon className="h-6 w-6 text-brand-teal" />
                </div>
                <p className="mt-6 text-xs font-bold tracking-widest text-brand-teal">FASE {n}</p>
                <h3 className="mt-2 font-display text-2xl font-bold">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS + INVESTIMENTO */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">O que muda</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-secondary">Sua nova régua profissional</h2>
          <ul className="mt-10 space-y-5">
            {[
              "Decisões de carreira tomadas em horas — não em semanas de ruminação.",
              "Negociações conduzidas a partir do valor, não da gratidão.",
              "Exposição pública sem cortisol elevado.",
              "Energia preservada para o que cria — não para o que prova.",
              "Liderança que inspira em vez de controlar.",
            ].map((o) => (
              <li key={o} className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal" />
                <span className="text-foreground/85">{o}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="relative overflow-hidden rounded-2xl border border-brand-teal/30 bg-secondary p-8 text-white shadow-[var(--shadow-glow)]">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-teal/20 blur-3xl" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">Investimento</p>
          <p className="mt-3 font-display text-5xl font-bold">R$ 2.997</p>
          <p className="mt-2 text-sm text-white/60">ou parcelado</p>
          <ul className="mt-8 space-y-3 text-sm text-white/85">
            <li className="flex gap-2"><Check className="h-4 w-4 text-brand-teal" /> 6 sessões 1:1 ao vivo</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-brand-teal" /> Diagnóstico emocional incluso</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-brand-teal" /> Suporte entre sessões</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-brand-teal" /> Acesso ao Diário Emocional</li>
          </ul>
          <a href={wa} target="_blank" rel="noopener noreferrer"
             className="mt-8 flex items-center justify-center gap-2 rounded-md bg-brand-teal px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-teal-dark transition-colors">
            Aplicar agora <ArrowUpRight className="h-4 w-4" />
          </a>
        </aside>
      </section>
    </main>
  );
}
