import { Clock, FileText, Compass, Shield, MessageCircle, Activity } from "lucide-react";

import {
  Eyebrow,
  FinalCTASection,
  HeroShell,
  PrimaryCTA,
  SectionHeading,
  SectionShell,
  wa,
} from "./shared";

export function DiagnosticoPage() {
  return (
    <main className="bg-background text-foreground selection:bg-brand-teal/30">
      <HeroShell
        eyebrow="Sessão única · 1:1 · Confidencial"
        title={
          <>
            Em <span className="text-brand-teal italic">2 horas</span>, a origem do que te trava.
          </>
        }
        lead="Um mapeamento emocional estruturado. Saia com um diagnóstico técnico e a clareza definitiva sobre a raiz dos seus padrões."
        ctas={<PrimaryCTA href={wa}>Agendar diagnóstico — R$ 397</PrimaryCTA>}
        decoration={
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/20 rounded-full blur-[150px] -mr-64 -mt-64" />
        }
        aside={
          <>
            <div className="rounded-3xl border border-brand-teal/30 bg-white/5 p-10 backdrop-blur-xl relative z-10 shadow-2xl">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-12 w-12 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Protocolo da Sessão</h3>
                  <Eyebrow>Estrutura técnica</Eyebrow>
                </div>
              </div>
              <ul className="space-y-8">
                {[
                  ["00:00", "Escuta e contextualização clínica"],
                  ["00:30", "Mapeamento de padrões recorrentes"],
                  ["01:00", "Identificação técnica da memória raiz"],
                  ["01:30", "Entrega do diagnóstico e plano de ação"],
                ].map(([t, d]) => (
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
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand-teal/20 rounded-full" />
          </>
        }
      />

      <SectionShell tone="white">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <SectionHeading
            className="mb-0"
            eyebrow="Indicação Clínica"
            title="Este diagnóstico é o seu próximo passo se..."
          />
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
      </SectionShell>

      <SectionShell tone="navy">
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
            <SectionHeading
              tone="white"
              eyebrow="Entregáveis"
              title={
                <>
                  Não é uma conversa. É um <span className="italic">diagnóstico</span>.
                </>
              }
            />
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
      </SectionShell>

      <FinalCTASection
        title={
          <>
            Você não precisa de mais conselhos. Precisa de{" "}
            <span className="text-brand-teal italic underline decoration-brand-teal/30 underline-offset-8">
              direção
            </span>
            .
          </>
        }
        lead="Agende seu diagnóstico emocional e pare de lutar contra o que você ainda não entende."
      >
        <PrimaryCTA href={wa} size="lg">
          Agendar minha sessão — R$ 397
        </PrimaryCTA>
      </FinalCTASection>
    </main>
  );
}
