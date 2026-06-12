import ogVisibilidade from "@/assets/og-visibilidade.jpg";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Mic, Volume2, Sparkles } from "lucide-react";

const wa = "https://wa.link/thno3v";

export function VisibilidadePage() {
  return (
    <main className="bg-background text-foreground selection:bg-brand-teal/30">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-navy pt-16 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-teal rounded-full blur-[180px] opacity-10" />
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
              Visibilidade Natural · Voz & Presença
            </p>
            <h1 className="font-display text-7xl font-extrabold leading-[0.9] md:text-[8rem] lg:text-[10rem]">
              Fale.
            </h1>
            <h2 className="font-display text-4xl md:text-6xl font-light italic text-brand-teal mt-4">
              Sem performar.
            </h2>
            <p className="mt-10 max-w-xl text-xl leading-relaxed text-white/75 md:text-2xl font-light">
              Um processo de reestruturação emocional para você ser ouvida e respeitada — sem
              precisar elevar a voz, sem precisar provar nada.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-4 rounded-full bg-brand-teal px-10 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-2xl hover:bg-brand-teal-dark hover:-translate-y-1 transition-all"
            >
              Quero ter voz <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-16 lg:mt-0 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-white/10">
              <img
                src={ogVisibilidade}
                alt="Voice and Presence"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 h-32 w-32 bg-white rounded-2xl shadow-xl flex items-center justify-center rotate-12 z-20">
              <Mic className="h-12 w-12 text-brand-teal" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* CICLO DO SILENCIAMENTO SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
              O ciclo invisível
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold text-brand-navy leading-tight md:text-6xl">
              O silenciamento não começa quando você não fala.
            </h2>
            <p className="mt-6 text-xl text-foreground/70">
              Começa no instante em que o seu sistema nervoso decide que falar é arriscado.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Pensa", "A ideia surge clara e potente na sua mente."],
              ["Hesita", "O corpo sinaliza ameaça e o peito aperta."],
              ["Edita", "A frase vira diplomática, perdendo a força original."],
              ["Engole", "Outra pessoa diz o que você pensou — e leva o crédito."],
            ].map(([t, d], i) => (
              <div
                key={t}
                className="relative p-10 rounded-3xl bg-muted/30 border border-border/50 group hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-6 right-8 font-display text-6xl font-bold text-brand-teal/10 group-hover:text-brand-teal/20 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-brand-navy mb-4">{t}</h3>
                <p className="text-foreground/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 rounded-3xl border-l-8 border-brand-teal bg-brand-navy text-white relative overflow-hidden">
            <p className="font-display text-2xl md:text-3xl italic leading-relaxed font-light">
              "E no fim do dia você sente: eu sabia. Eu tinha a resposta certa, mas a deixei
              guardada."
            </p>
            <div className="absolute bottom-0 right-0 p-8 opacity-10">
              <Volume2 className="h-24 w-24" />
            </div>
          </div>
        </div>
      </section>

      {/* PILARES SECTION */}
      <section className="py-24 md:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 mb-16 lg:mb-0">
              <div className="relative">
                <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                    className="w-full h-full object-cover"
                    alt="Communication"
                  />
                </div>
                <div className="absolute -top-10 -right-10 h-40 w-40 bg-brand-teal rounded-full flex items-center justify-center p-8 text-white text-center font-bold italic leading-tight text-lg shadow-xl">
                  "Voz é presença."
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
                O que reescrevemos
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold text-brand-navy md:text-5xl mb-12">
                Sua nova arquitetura de voz.
              </h2>
              <div className="space-y-12">
                {[
                  {
                    i: Mic,
                    t: "Segurança interna",
                    d: "Reduzimos a resposta de medo associada à exposição. O corpo para de te interromper.",
                  },
                  {
                    i: Volume2,
                    t: "Expressão orgânica",
                    d: "Você fala porque tem o que dizer — não para conquistar espaço ou provar algo.",
                  },
                  {
                    i: Sparkles,
                    t: "Presença que ocupa",
                    d: "Sua voz deixa de implorar por atenção. Ela passa a ser a referência natural do ambiente.",
                  },
                ].map(({ i: Icon, t, d }) => (
                  <div key={t} className="flex gap-6">
                    <div className="h-12 w-12 rounded-xl bg-brand-navy text-brand-teal flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-brand-navy mb-3">{t}</h3>
                      <p className="text-foreground/70 leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-4xl font-bold leading-tight text-brand-navy md:text-6xl mb-10">
            A sala vai continuar tendo voz demais.
          </h2>
          <p className="text-4xl md:text-5xl italic text-brand-teal font-light mb-12">
            A diferença é que uma delas vai ser a sua.
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 rounded-full bg-brand-teal px-10 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-2xl hover:bg-brand-teal-dark hover:scale-105 transition-all"
          >
            Quero ter voz e presença <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
