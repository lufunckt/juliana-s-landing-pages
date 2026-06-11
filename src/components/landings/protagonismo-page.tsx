import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Briefcase, TrendingUp, UserCheck, ShieldCheck } from "lucide-react";

const wa = "https://wa.link/thno3v";

const identificacao = [
  "Sente que sua entrega é maior do que o reconhecimento que recebe.",
  "Tem dificuldade de dizer 'não' para demandas que não são suas.",
  "Sente um desconforto desproporcional ao precisar se posicionar em reuniões.",
  "A síndrome da impostora aparece toda vez que um novo desafio surge.",
  "Evita conversas difíceis ou feedbacks necessários para o seu crescimento.",
];

const impactos = [
  "Posicionamento e autoridade",
  "Tomada de decisão sob pressão",
  "Gestão de conflitos e limites",
  "Sustentação da própria potência",
  "Relacionamento com a hierarquia",
  "Visibilidade e reconhecimento",
];

const resultados = [
  "Postura profissional mais consciente e segura.",
  "Capacidade de colocar limites sem culpa.",
  "Sustentação da autoridade técnica e comportamental.",
  "Redução da autossabotagem em momentos decisivos.",
];

export function ProtagonismoPage() {
  return (
    <main className="bg-background text-foreground selection:bg-brand-teal/30">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-navy pt-16 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,207,180,0.08)_0%,transparent_70%)]" />
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
              Atualização de Memórias · 10 encontros
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
              Protagonismo <span className="text-brand-teal">Profissional</span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-white/80 max-w-xl md:text-2xl font-light">
              Você não trava na carreira por falta de competência. Trava por padrões emocionais que
              geram hesitação e autossabotagem.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-teal px-8 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:bg-brand-teal-dark hover:-translate-y-1 transition-all"
              >
                Ver Método: R$ 2.997 <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-5 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
              >
                Falar com a equipe
              </a>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000"
                alt="Professional Growth"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-brand-teal p-6 rounded-2xl shadow-xl z-20">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICAÇÃO SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
                Identificação
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold text-brand-navy leading-tight md:text-5xl">
                Você entrega muito, mas sente que cresce pouco.
              </h2>
              <div className="mt-8 space-y-6 text-lg text-foreground/70 leading-relaxed">
                <p>
                  Você assume responsabilidades, resolve problemas e sustenta demandas importantes.
                </p>
                <p className="font-semibold text-brand-navy">
                  Mas, quando precisa se posicionar, algo dentro de você hesita.
                </p>
              </div>

              <div className="mt-12 p-8 border-l-4 border-brand-teal bg-muted/30 rounded-r-2xl">
                <p className="text-xl font-medium text-brand-navy italic">
                  "Isso não é falta de capacidade. É um padrão emocional operando no automático."
                </p>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 grid gap-4">
              {identificacao.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-2xl border border-border bg-background hover:shadow-md transition-all"
                >
                  <Check className="h-6 w-6 text-brand-teal shrink-0" />
                  <p className="text-foreground/80 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METHOD SECTION */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
              O Método
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold text-brand-navy md:text-5xl">
              10 encontros para sustentar sua potência.
            </h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              Trabalhamos diretamente na raiz dos padrões automáticos que fazem você recuar ou se
              esconder profissionalmente.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {impactos.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-border/50 shadow-sm flex items-center gap-5"
              >
                <div className="h-12 w-12 rounded-xl bg-brand-navy text-brand-teal flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className="text-lg font-bold text-brand-navy leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 mb-16 lg:mb-0">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
                Resultados
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold text-brand-navy md:text-5xl mb-8">
                Quando a raiz emocional muda, sua postura acompanha.
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-10">
                O objetivo não é transformar você em outra pessoa, mas permitir que você sustente a
                profissional que você já é.
              </p>
              <div className="space-y-4">
                {resultados.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-center p-5 rounded-xl bg-brand-navy text-white"
                  >
                    <UserCheck className="h-5 w-5 text-brand-teal" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                    className="w-full h-full object-cover"
                    alt="Confidence"
                  />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl mt-12">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600"
                    className="w-full h-full object-cover"
                    alt="Meeting"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-brand-navy text-white text-center relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl mb-8">
            Ocupe o espaço proporcional ao seu valor.
          </h2>
          <p className="text-xl text-white/70 leading-relaxed mb-12">
            Inicie o processo de Protagonismo Profissional e atualize as respostas emocionais que
            impactam seu crescimento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-brand-teal px-10 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-2xl hover:bg-brand-teal-dark transition-all"
            >
              Agendar Entrevista <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-teal/30" />
      </section>
    </main>
  );
}
