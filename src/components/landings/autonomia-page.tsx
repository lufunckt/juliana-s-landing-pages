import { Link } from "@tanstack/react-router";
import { ArrowRight, Wind, CheckCircle2 } from "lucide-react";

const wa = "https://wa.link/thno3v";

export function AutonomiaPage() {
  return (
    <main className="bg-background text-foreground selection:bg-brand-teal/30">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-navy pt-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-teal rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-navy-deep rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-teal rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:grid md:grid-cols-2 md:gap-12 md:py-32 items-center">
          <div className="text-left">
            <Link
              to="/LP/"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal hover:opacity-80 transition-all mb-8"
            >
              ← Todos os processos
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-brand-teal/50" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-teal">
                Autonomia Interna
              </p>
            </div>
            <h1 className="font-display text-5xl font-extrabold leading-[1.1] text-white md:text-7xl lg:text-8xl">
              Diga <span className="text-brand-teal italic">Não</span> sem culpa.
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-white/80 max-w-xl md:text-2xl font-light">
              Recupere seu direito de se priorizar. Um processo profundo para encerrar o ciclo de
              exaustão e a necessidade de agradar a todos.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-teal px-8 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:bg-brand-teal-dark hover:-translate-y-1 transition-all duration-300"
              >
                Quero me priorizar <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-5 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                Conhecer o método
              </a>
            </div>
          </div>

          <div className="mt-16 md:mt-0 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-brand-navy-deep/50 border border-white/10 shadow-2xl relative z-10">
              {/* User Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-white/20">
                <p className="text-sm uppercase tracking-widest">Espaço para sua imagem</p>
              </div>
              <img
                src="/src/assets/og-autonomia.jpg"
                alt="Autonomia Interna"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-teal/20 rounded-full blur-2xl -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-navy-deep/40 rounded-full blur-2xl -z-0" />
          </div>
        </div>
      </section>

      {/* PAIN POINTS SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="md:grid md:grid-cols-2 gap-16 items-center">
            <div className="relative mb-16 md:mb-0">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy to-transparent opacity-40 z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-brand-navy/20">
                  <p className="text-sm uppercase tracking-widest">Imagem Ilustrativa</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800"
                  alt="Exaustão"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-teal p-8 rounded-2xl shadow-xl hidden lg:block max-w-xs">
                <p className="text-white font-medium italic">
                  "Muitas vezes o 'sim' para o outro é um 'não' agressivo para nós mesmas."
                </p>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
                O Peso do Silêncio
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold text-brand-navy leading-tight md:text-5xl">
                Você sente que está sempre no final da sua própria lista?
              </h2>
              <div className="mt-12 space-y-8">
                {[
                  "Diz 'sim' automaticamente, mesmo quando o corpo grita não.",
                  "A exaustão virou seu estado natural de existência.",
                  "Coloca limites e imediatamente sente uma culpa paralisante.",
                  "Cuida de todos ao redor, mas não sobra energia para você.",
                ].map((p, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="text-lg text-foreground/80 leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section id="metodo" className="py-24 md:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
              O Caminho
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold text-brand-navy md:text-5xl">
              Quatro movimentos para devolver você a si mesma.
            </h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              Baseado em neurociência e atualização de memórias, trabalhamos a raiz do
              comportamento, não apenas o sintoma.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Raiz da Culpa",
                d: "Mapeamos a memória implícita que te ensinou que cuidar de você é egoísmo.",
                icon: "01",
              },
              {
                t: "Regulação",
                d: "Acalmamos a resposta de medo do seu sistema nervoso diante da desaprovação.",
                icon: "02",
              },
              {
                t: "Limites Naturais",
                d: "Limites deixam de ser confronto e passam a ser uma expressão natural do seu ser.",
                icon: "03",
              },
              {
                t: "Energia Vital",
                d: "O corpo descansa. A presença chega onde precisa, sem rasgar você no caminho.",
                icon: "04",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <span className="font-display text-5xl font-bold text-brand-teal/20 block mb-6">
                  {item.icon}
                </span>
                <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">{item.t}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy z-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Wind className="mx-auto h-12 w-12 text-brand-teal/40 mb-10" strokeWidth={1} />
          <p className="font-display text-3xl leading-snug italic text-white md:text-5xl font-light">
            "Você não nasceu para sustentar todos. Você nasceu para se sustentar — e, a partir daí,
            escolher quem caminha com você."
          </p>
          <div className="mt-12 flex items-center justify-center gap-4 text-brand-teal">
            <div className="h-px w-8 bg-brand-teal/50" />
            <span className="text-sm font-bold uppercase tracking-widest">Juliana Grimaldi</span>
            <div className="h-px w-8 bg-brand-teal/50" />
          </div>

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-16 inline-flex items-center gap-3 rounded-full bg-brand-teal px-10 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-2xl hover:bg-brand-teal-dark hover:scale-105 transition-all"
          >
            Começar minha jornada <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
