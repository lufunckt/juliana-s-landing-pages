import { Wind, CheckCircle2 } from "lucide-react";

import autonomiaImage from "@/assets/og-autonomia.jpg";

import {
  FinalCTASection,
  HeroShell,
  OutlineCTA,
  PrimaryCTA,
  SectionHeading,
  SectionShell,
  wa,
} from "./shared";

export function AutonomiaPage() {
  return (
    <main className="bg-background text-foreground selection:bg-brand-teal/30">
      <HeroShell
        eyebrow="Autonomia Interna"
        title={
          <>
            Diga <span className="text-brand-teal italic">Não</span> sem culpa.
          </>
        }
        lead="Recupere seu direito de se priorizar. Um processo profundo para encerrar o ciclo de exaustão e a necessidade de agradar a todos."
        ctas={
          <>
            <PrimaryCTA href={wa}>Quero me priorizar</PrimaryCTA>
            <OutlineCTA href="#metodo">Conhecer o método</OutlineCTA>
          </>
        }
        decoration={
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-teal rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-navy-deep rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-teal rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          </div>
        }
        aside={
          <>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-brand-navy-deep/50 border border-white/10 shadow-2xl relative z-10">
              <img
                src={autonomiaImage}
                alt="Autonomia Interna"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-teal/20 rounded-full blur-2xl -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-navy-deep/40 rounded-full blur-2xl -z-0" />
          </>
        }
      />

      <SectionShell tone="white">
        <div className="md:grid md:grid-cols-2 gap-16 items-center">
          <div className="relative mb-16 md:mb-0">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy to-transparent opacity-40 z-10" />
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
            <SectionHeading
              className="mb-12"
              eyebrow="O Peso do Silêncio"
              title="Você sente que está sempre no final da sua própria lista?"
            />
            <div className="space-y-8">
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
      </SectionShell>

      <SectionShell tone="muted" id="metodo">
        <SectionHeading
          align="center"
          eyebrow="O Caminho"
          title="Quatro movimentos para devolver você a si mesma."
          lead="Baseado em neurociência e atualização de memórias, trabalhamos a raiz do comportamento, não apenas o sintoma."
        />

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
          ].map((item) => (
            <div
              key={item.icon}
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
      </SectionShell>

      <FinalCTASection
        tone="navy"
        title={
          <>
            <Wind className="mx-auto h-12 w-12 text-brand-teal/40 mb-10" strokeWidth={1} />
            <span className="italic font-light">
              "Você não nasceu para sustentar todos. Você nasceu para se sustentar — e, a partir
              daí, escolher quem caminha com você."
            </span>
          </>
        }
        lead={
          <span className="flex items-center justify-center gap-4 text-brand-teal">
            <span className="h-px w-8 bg-brand-teal/50" />
            <span className="text-sm font-bold uppercase tracking-widest">Juliana Grimaldi</span>
            <span className="h-px w-8 bg-brand-teal/50" />
          </span>
        }
      >
        <PrimaryCTA href={wa} size="lg">
          Começar minha jornada
        </PrimaryCTA>
      </FinalCTASection>
    </main>
  );
}
