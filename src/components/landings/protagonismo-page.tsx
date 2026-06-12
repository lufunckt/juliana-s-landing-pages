import { Check, TrendingUp, UserCheck, ShieldCheck } from "lucide-react";

import {
  FinalCTASection,
  HeroShell,
  OutlineCTA,
  PrimaryCTA,
  SectionHeading,
  SectionShell,
  wa,
} from "./shared";

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
      <HeroShell
        eyebrow="Atualização de Memórias · 10 encontros"
        title={
          <>
            Protagonismo <span className="text-brand-teal">Profissional</span>
          </>
        }
        lead="Você não trava na carreira por falta de competência. Trava por padrões emocionais que geram hesitação e autossabotagem."
        ctas={
          <>
            <PrimaryCTA href={wa}>Ver Método: R$ 2.997</PrimaryCTA>
            <OutlineCTA href={wa}>Falar com a equipe</OutlineCTA>
          </>
        }
        decoration={
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,207,180,0.08)_0%,transparent_70%)]" />
        }
        aside={
          <>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-white/10">
              <img
                src={ogProtagonismo}
                alt="Professional Growth"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-brand-teal p-6 rounded-2xl shadow-xl z-20">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
          </>
        }
      />

      <SectionShell tone="white">
        <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading
              className="mb-8"
              eyebrow="Identificação"
              title="Você entrega muito, mas sente que cresce pouco."
            />
            <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
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
      </SectionShell>

      <SectionShell tone="muted">
        <SectionHeading
          align="center"
          eyebrow="O Método"
          title="10 encontros para sustentar sua potência."
          lead="Trabalhamos diretamente na raiz dos padrões automáticos que fazem você recuar ou se esconder profissionalmente."
        />

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
      </SectionShell>

      <SectionShell tone="white">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <SectionHeading
              className="mb-8"
              eyebrow="Resultados"
              title="Quando a raiz emocional muda, sua postura acompanha."
            />
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
      </SectionShell>

      <FinalCTASection
        tone="navy"
        title="Ocupe o espaço proporcional ao seu valor."
        lead="Inicie o processo de Protagonismo Profissional e atualize as respostas emocionais que impactam seu crescimento."
      >
        <PrimaryCTA href={wa} size="lg">
          Agendar Entrevista
        </PrimaryCTA>
      </FinalCTASection>
    </main>
  );
}
