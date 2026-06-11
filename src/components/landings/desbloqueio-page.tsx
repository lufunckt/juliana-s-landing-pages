import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles, Brain } from "lucide-react";

const wa = "https://wa.link/thno3v";

const identificacao = [
  "Sente que as mesmas situações despertam reações que você não consegue controlar.",
  "Percebe que atrai ou se mantém em relacionamentos com dinâmicas repetitivas.",
  "Experimenta um sentimento de 'paralisia' ou medo diante de novas escolhas.",
  "Sente que algumas dores antigas ainda influenciam sua vida atual.",
  "Tem dificuldade de romper ciclos que já compreendeu racionalmente.",
  "Deseja transformar a forma como reage diante de situações que antes geravam sofrimento.",
];

export function DesbloqueioPage() {
  return (
    <main className="bg-background text-foreground selection:bg-brand-teal/30">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-brand-navy pt-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-teal rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-navy-deep rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <Link
              to="/"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal hover:opacity-80 transition-all mb-8"
            >
              ← Todos os processos
            </Link>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-teal mb-4">
              Atualização de Memórias · 8 encontros
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[1.1] text-white md:text-7xl">
              Desbloqueio <span className="text-brand-teal">Emocional</span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-white/80 max-w-2xl md:text-2xl font-light">
              Quando o padrão emocional muda, a vida começa a mudar junto. Acesse a raiz dos
              comportamentos que limitam sua liberdade.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-teal px-8 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:bg-brand-teal-dark transition-all"
              >
                Ver Pacote: R$ 1.997 <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-brand-navy-deep/50 border border-white/10 shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1516589174184-c6852651428c?auto=format&fit=crop&q=80&w=800"
                alt="Desbloqueio Emocional"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl z-20 max-w-[200px]">
              <Sparkles className="h-8 w-8 text-brand-teal mb-3" />
              <p className="text-sm font-medium text-brand-navy">
                Transformação real começa na memória emocional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICAÇÃO SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
              Identificação
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold text-brand-navy leading-tight md:text-5xl">
              Você percebe que alguns padrões continuam se repetindo...
            </h2>
            <p className="mt-6 text-xl text-foreground/70">
              Mesmo quando você já entendeu racionalmente o que precisa mudar.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {identificacao.map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-border bg-background hover:border-brand-teal/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                  <Check className="h-5 w-5" />
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 rounded-3xl bg-brand-navy text-white relative overflow-hidden">
            <div className="relative z-10 md:flex items-center gap-12">
              <Brain className="h-16 w-16 text-brand-teal shrink-0 mb-6 md:mb-0" strokeWidth={1} />
              <div>
                <p className="text-2xl font-light leading-relaxed">
                  "Às vezes, não é falta de consciência. É uma{" "}
                  <span className="text-brand-teal font-semibold">memória emocional antiga</span>{" "}
                  ainda conduzindo suas respostas no presente."
                </p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* METHOD SECTION */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
                O Processo
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold text-brand-navy md:text-5xl">
                8 encontros para acessar a sua liberdade.
              </h2>
              <div className="mt-10 space-y-6 text-lg text-foreground/70 leading-relaxed">
                <p>
                  Durante o processo, acessamos as memórias emocionais que hoje sustentam
                  comportamentos de autossabotagem, insegurança e bloqueios.
                </p>
                <p>
                  Através de uma abordagem baseada na neurociência e na reconsolidação de memórias,
                  atuamos diretamente na raiz dos padrões emocionais automáticos.
                </p>
                <p className="font-semibold text-brand-navy">
                  O objetivo é permitir que o cérebro reorganize novas respostas emocionais.
                </p>
              </div>

              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex items-center gap-3 rounded-full bg-brand-navy px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-navy-deep transition-all"
              >
                Agendar entrevista <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-16 lg:mt-0 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600"
                    className="w-full h-full object-cover"
                    alt="Equilíbrio"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-brand-teal/20 p-8 flex items-end">
                  <p className="text-brand-navy font-bold text-xl leading-tight">
                    Clareza & Consciência
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-brand-navy p-8 flex items-start">
                  <p className="text-brand-teal font-bold text-xl leading-tight">
                    Liberdade Interna
                  </p>
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600"
                    className="w-full h-full object-cover"
                    alt="Paz"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-brand-navy leading-tight md:text-6xl">
            Você não precisa continuar repetindo padrões.
          </h2>
          <p className="mt-8 text-xl text-foreground/70 leading-relaxed">
            Inicie o processo de Desbloqueio Emocional e comece a transformar as respostas que hoje
            limitam sua vida.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-brand-teal px-10 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:bg-brand-teal-dark transition-all"
            >
              Ver Pacote: R$ 1.997 <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-brand-navy/20 px-10 py-5 text-sm font-bold uppercase tracking-wider text-brand-navy hover:bg-brand-navy/5 transition-all"
            >
              Falar com a equipe
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
