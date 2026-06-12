import ogDiario from "@/assets/og-diario.jpg";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Sunrise, Moon, Eye, Sparkles } from "lucide-react";

const wa = "https://wa.link/thno3v";

export function DiarioPage() {
  return (
    <main className="bg-background text-foreground selection:bg-brand-teal/30">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#F2F7F7] pt-16">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#00CFB415_0%,transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <Link
              to="/"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal hover:opacity-80 transition-all mb-8"
            >
              ← Todos os processos
            </Link>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-teal mb-4">
              Ferramenta diária · 5 min por dia
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[1.02] text-brand-navy md:text-7xl">
              Eu me <span className="text-brand-teal italic">percebendo</span>.
            </h1>
            <p className="mt-4 font-display text-2xl text-brand-navy/60 font-light italic">
              Um diário emocional guiado.
            </p>
            <p className="mt-8 text-xl leading-relaxed text-foreground/75 max-w-lg md:text-2xl">
              Pequenos prompts. Cinco minutos por dia. O hábito mais simples para parar de apenas
              reagir — e começar a escolher.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-teal px-8 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:bg-brand-teal-dark hover:-translate-y-1 transition-all"
              >
                Comprar diário — R$ 97 <ArrowRight className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-navy/60 uppercase tracking-widest">
                <Sparkles className="h-4 w-4 text-brand-teal" />
                Versão digital · Acesso imediato
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 -rotate-6 rounded-3xl bg-brand-teal/10 blur-xl transition-transform group-hover:rotate-0" />
              <div className="relative rotate-3 rounded-3xl border border-border bg-white p-10 shadow-2xl transition-transform hover:rotate-0 duration-500">
                <div className="flex justify-between items-start mb-8">
                  <BookOpen className="h-10 w-10 text-brand-teal" strokeWidth={1.5} />
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-teal">
                      Hoje · 07:42
                    </p>
                    <p className="text-xs text-foreground/40 italic">prompt 3 de 4</p>
                  </div>
                </div>

                <p className="font-display text-2xl font-semibold text-brand-navy leading-tight mb-8">
                  "O que disparou essa emoção, exatamente?"
                </p>

                <div className="space-y-4 mb-10">
                  <div className="h-2 w-full rounded-full bg-muted/50 overflow-hidden">
                    <div className="h-full w-2/3 bg-brand-teal/20" />
                  </div>
                  <div className="h-2 w-5/6 rounded-full bg-muted/50" />
                  <div className="h-2 w-4/6 rounded-full bg-muted/50" />
                </div>

                <div className="pt-6 border-t border-border flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-brand-teal animate-pulse" />
                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-navy/40">
                    padrão detectado: evitação
                  </p>
                </div>
              </div>
            </div>

            {/* Float elements */}
            <div className="absolute -top-10 right-0 h-20 w-20 bg-white rounded-2xl shadow-lg flex items-center justify-center rotate-12">
              <Sunrise className="h-8 w-8 text-brand-teal" strokeWidth={1.5} />
            </div>
            <div className="absolute -bottom-10 left-0 h-20 w-20 bg-brand-navy rounded-2xl shadow-lg flex items-center justify-center -rotate-12">
              <Moon className="h-8 w-8 text-brand-teal" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </section>

      {/* RITUAL SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
              O Ritual
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold text-brand-navy md:text-6xl">
              Duas pausas por dia. Uma vida emocional inteira.
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
            {[
              {
                i: Sunrise,
                t: "Manhã — Intenção",
                d: "Antes do dia te conduzir, você nomeia como quer chegar. Três prompts curtos para alinhar sua consciência.",
                bg: "bg-[#F2F7F7]",
              },
              {
                i: Moon,
                t: "Noite — Revisão",
                d: "Antes de dormir, você mapeia o que te disparou durante o dia. Os padrões invisíveis tornam-se claros.",
                bg: "bg-brand-navy text-white",
              },
            ].map(({ i: Icon, t, d, bg }) => (
              <div
                key={t}
                className={`rounded-3xl p-12 text-left shadow-sm hover:shadow-2xl transition-all duration-500 ${bg}`}
              >
                <Icon
                  className={`h-12 w-12 mb-8 ${bg.includes("navy") ? "text-brand-teal" : "text-brand-teal"}`}
                  strokeWidth={1.2}
                />
                <h3 className="font-display text-3xl font-bold mb-6">{t}</h3>
                <p
                  className={`text-lg leading-relaxed ${bg.includes("navy") ? "text-white/70" : "text-foreground/70"}`}
                >
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMPTS SECTION */}
      <section className="py-24 md:py-32 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-6 gap-4 rotate-12 scale-150">
            {Array.from({ length: 24 }).map((_, i) => (
              <BookOpen key={i} className="h-12 w-12" />
            ))}
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl px-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
            Exemplos de prompts
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl mb-16">
            As perguntas que mudam tudo.
          </h2>

          <div className="space-y-8">
            {[
              "Qual emoção apareceu primeiro, antes de eu reagir?",
              "Onde, no meu corpo, ela se manifestou?",
              "Esse padrão é meu — ou herdado?",
              "O que eu faria se não estivesse com medo da resposta?",
            ].map((q, i) => (
              <div
                key={q}
                className="group flex gap-8 items-center p-6 rounded-2xl hover:bg-white/5 transition-all"
              >
                <span className="font-display text-4xl font-bold text-brand-teal/20 group-hover:text-brand-teal/100 transition-colors">
                  0{i + 1}
                </span>
                <p className="text-2xl font-light text-white/90 leading-snug">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROP SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 mb-16 lg:mb-0">
              <div className="relative">
                <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={ogDiario}
                    className="w-full h-full object-cover"
                    alt="Focus"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-brand-teal rounded-full flex items-center justify-center p-8 text-white text-center font-bold italic leading-tight text-lg shadow-xl">
                  "Em 21 dias, você se vê."
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Eye className="h-12 w-12 text-brand-teal mb-8" strokeWidth={1.5} />
              <h2 className="font-display text-4xl font-bold text-brand-navy md:text-5xl mb-6">
                Instrumento de auto-observação.
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-10">
                Não é um caderno bonito. É uma ferramenta técnica construída a partir da
                neurociência comportamental para criar autoconhecimento mensurável.
              </p>
              <ul className="space-y-4 mb-12">
                {[
                  "Reduz a reatividade emocional",
                  "Cria um mapa de padrões detectáveis",
                  "Base sólida para processos terapêuticos",
                  "Funciona com apenas 5 minutos por dia",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center font-medium text-brand-navy">
                    <div className="h-2 w-2 rounded-full bg-brand-teal" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="p-10 rounded-3xl border border-brand-teal/30 bg-muted/20 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-4">
                  Acesso imediato
                </p>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-sm font-bold text-brand-navy/50">R$</span>
                  <span className="text-6xl font-extrabold text-brand-navy">97</span>
                </div>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 rounded-full bg-brand-navy px-8 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:bg-brand-navy-deep transition-all"
                >
                  Quero meu diário <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
