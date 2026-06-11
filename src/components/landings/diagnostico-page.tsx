import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  FileText,
  Compass,
  Shield,
  MessageCircle,
  Activity,
} from "lucide-react";

const wa = "https://wa.link/thno3v";

export function DiagnosticoPage() {
  return (
    <main className="bg-background text-foreground selection:bg-brand-teal/30">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-brand-navy pt-16 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal rounded-full blur-[150px] -mr-64 -mt-64" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <Link
              to="/LP/"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal hover:opacity-80 transition-all mb-8"
            >
              ← Todos os processos
            </Link>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-teal mb-4">
              Sessão única · 1:1 · Confidencial
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
              Em <span className="text-brand-teal italic">2 horas</span>, a origem do que te trava.
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-white/80 max-w-xl md:text-2xl font-light">
              Um mapeamento emocional estruturado. Saia com um diagnóstico técnico e a clareza
              definitiva sobre a raiz dos seus padrões.
            </p>
            <div className="mt-12">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-teal px-8 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:bg-brand-teal-dark transition-all"
              >
                Agendar diagnóstico — R$ 397 <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative">
            <div className="rounded-3xl border border-brand-teal/30 bg-white/5 p-10 backdrop-blur-xl relative z-10 shadow-2xl">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-12 w-12 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Protocolo da Sessão</h3>
                  <p className="text-xs text-brand-teal font-bold uppercase tracking-widest">
                    Estrutura técnica
                  </p>
                </div>
              </div>
              <ul className="space-y-8">
                {[
                  ["00:00", "Escuta e contextualização clínica"],
                  ["00:30", "Mapeamento de padrões recorrentes"],
                  ["01:00", "Identificação técnica da memória raiz"],
                  ["01:30", "Entrega do diagnóstico e plano de ação"],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-6 group">
                    <span className="font-mono text-brand-teal font-bold text-lg">{t}</span>
                    <div className="space-y-1">
                      <span className="text-white font-medium group-hover:text-brand-teal transition-colors">
                        {d}
                      </span>
                      <div className="h-px w-full bg-white/10 group-last:hidden" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand-teal/20 rounded-full" />
          </div>
        </div>
      </section>

      {/* INDICAÇÃO SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
                Indicação Clínica
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold text-brand-navy md:text-6xl">
                Este diagnóstico é o seu próximo passo se...
              </h2>
            </div>
            <Activity className="h-16 w-16 text-brand-teal/20 hidden lg:block" strokeWidth={1} />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                i: Compass,
                t: "Perdida na origem",
                d: "Você sabe que algo te impede de avançar, mas não consegue nomear exatamente o quê.",
              },
              {
                i: Shield,
                t: "Já tentou de tudo",
                d: "Terapias convencionais, cursos e livros parecem apenas arranhar a superfície do seu problema.",
              },
              {
                i: MessageCircle,
                t: "Busca direção técnica",
                d: "Antes de se comprometer com um processo longo, você quer um mapa técnico do que precisa ser trabalhado.",
              },
            ].map(({ i: Icon, t, d }) => (
              <div
                key={t}
                className="p-10 rounded-3xl bg-muted/30 border border-border/50 hover:bg-white hover:shadow-2xl hover:border-brand-teal/20 transition-all duration-500 group"
              >
                <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center text-brand-teal mb-8 shadow-sm group-hover:bg-brand-teal group-hover:text-white transition-all">
                  <Icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">{t}</h3>
                <p className="text-lg text-foreground/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES SECTION */}
      <section className="py-24 md:py-32 bg-brand-navy text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
            <div className="mb-16 lg:mb-0">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-brand-navy/20 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1454165833767-027ffea9e772?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover mix-blend-luminosity"
                  alt="Diagnóstico"
                />
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
                Entregáveis
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl mb-12">
                Não é uma conversa. É um <span className="italic">diagnóstico</span>.
              </h2>
              <div className="grid gap-8">
                {[
                  {
                    t: "Mapa emocional personalizado",
                    d: "Visualização clara dos padrões implícitos que se repetem na sua vida hoje.",
                  },
                  {
                    t: "Identificação da memória raiz",
                    d: "A origem técnica — não a superfície — do seu bloqueio principal.",
                  },
                  {
                    t: "Plano de direção estratégica",
                    d: "O próximo passo concreto que você precisa dar, com total clareza.",
                  },
                ].map(({ t, d }) => (
                  <div key={t} className="flex gap-6 items-start">
                    <div className="mt-1 h-10 w-10 shrink-0 rounded-full border border-brand-teal/30 flex items-center justify-center text-brand-teal">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">{t}</h3>
                      <p className="text-white/70 leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-display text-4xl font-extrabold leading-tight text-brand-navy md:text-6xl mb-10">
            Você não precisa de mais conselhos. Precisa de{" "}
            <span className="text-brand-teal italic underline decoration-brand-teal/30 underline-offset-8">
              direção
            </span>
            .
          </p>
          <p className="text-xl text-foreground/70 mb-12">
            Agende seu diagnóstico emocional e pare de lutar contra o que você ainda não entende.
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-brand-teal px-10 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-2xl hover:bg-brand-teal-dark hover:-translate-y-1 transition-all"
          >
            Agendar minha sessão — R$ 397 <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
