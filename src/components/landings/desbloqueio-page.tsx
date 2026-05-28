import { Link } from "@tanstack/react-router";
import { Heart, DollarSign, ArrowRight, Sparkles } from "lucide-react";

const wa = "https://wa.link/thno3v";

export function DesbloqueioPage() {
  return (
    <main className="bg-background">
      {/* HERO dividido — duas raízes, um método */}
      <section className="relative overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_25%_30%,oklch(0.6_0.2_15/0.4),transparent_55%),radial-gradient(circle_at_75%_70%,oklch(0.74_0.13_180/0.5),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Link to="/" className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal hover:text-white">
            ← Todos os processos
          </Link>
          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-teal">
            Pacote · Relacionamento & Dinheiro
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] md:text-7xl">
            Os dois lugares onde o mesmo padrão te trava: <span className="italic text-brand-teal">afeto e dinheiro</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
            A raiz é uma só — merecimento. E é dela que partimos. Um pacote de reconsolidação de
            memória que reorganiza, ao mesmo tempo, como você recebe amor e como você recebe dinheiro.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={wa} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-3 rounded-md bg-brand-teal px-7 py-4 text-sm font-bold uppercase tracking-wider shadow-[var(--shadow-glow)] hover:bg-brand-teal-dark transition-all">
              Quero o pacote — R$ 1.997 <ArrowRight className="h-4 w-4" />
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer"
               className="rounded-md border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white/10">
              Tirar dúvidas
            </a>
          </div>
        </div>
      </section>

      {/* DUAS COLUNAS — padrões paralelos */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
          O padrão se repete em dois palcos
        </p>
        <h2 className="mt-4 text-center font-display text-4xl font-bold text-secondary">
          Mesma raiz. Dois sintomas.
        </h2>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Heart,
              tag: "RELACIONAMENTO",
              title: "Você se entrega — e depois cobra de si por ter se entregado.",
              items: [
                "Repete o mesmo desfecho com pessoas diferentes",
                "Sente que precisa fazer por merecer ser amada",
                "Confunde intensidade com intimidade",
                "Tem dificuldade de receber sem se justificar",
              ],
            },
            {
              icon: DollarSign,
              tag: "DINHEIRO",
              title: "Dinheiro entra. Você não sente que ele é seu.",
              items: [
                "Cobra menos do que vale para 'garantir' o cliente",
                "Sente culpa ao gastar com você",
                "Sabota o crescimento na iminência do próximo nível",
                "Vive em escassez mesmo com a conta no azul",
              ],
            },
          ].map(({ icon: Icon, tag, title, items }) => (
            <div key={tag} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-teal/10 blur-2xl" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-brand-teal">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-[11px] font-bold tracking-[0.25em] text-brand-teal">{tag}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-secondary">{title}</h3>
                <ul className="mt-6 space-y-2.5 text-sm text-foreground/75">
                  {items.map((i) => <li key={i} className="border-l-2 border-brand-teal/40 pl-3">{i}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MÉTODO UNIFICADO */}
      <section className="bg-muted/50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Sparkles className="mx-auto h-8 w-8 text-brand-teal" strokeWidth={1.5} />
          <h2 className="mt-5 font-display text-4xl font-bold text-secondary">
            Um único processo. Duas dimensões resolvidas na raiz.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-foreground/70">
            Porque a memória que escreve 'não mereço amor sem provar' é a mesma que escreve 'não
            mereço dinheiro sem sofrer'.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-border bg-border px-6 md:grid-cols-3 md:px-0">
          {[
            ["Acesso à raiz", "Mapeamos as memórias afetivas e financeiras que estão escritas no mesmo arquivo emocional."],
            ["Reconsolidação", "Reescrevemos esses registros usando protocolos de neuroplasticidade aplicada."],
            ["Nova programação", "Afeto e dinheiro deixam de ser campo de luta. Viram fluxo."],
          ].map(([t, d], i) => (
            <div key={t} className="bg-card p-8">
              <p className="text-xs font-bold tracking-widest text-brand-teal">0{i + 1}</p>
              <h3 className="mt-3 font-display text-xl font-bold text-secondary">{t}</h3>
              <p className="mt-3 text-sm text-foreground/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ANTES/DEPOIS */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="font-display text-4xl font-bold text-secondary">A reorganização emocional, lado a lado.</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          <div className="bg-muted p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Antes</p>
            <ul className="mt-5 space-y-3 text-foreground/70">
              <li>"Preciso provar que mereço."</li>
              <li>"Se eu cobrar mais, vão embora."</li>
              <li>"Amor verdadeiro custa caro."</li>
              <li>"Vou me sabotar de novo."</li>
            </ul>
          </div>
          <div className="bg-secondary p-8 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-teal">Depois</p>
            <ul className="mt-5 space-y-3 text-white/85">
              <li>"Mereço porque existo."</li>
              <li>"Cobro o que entrego."</li>
              <li>"Amor recíproco é o padrão."</li>
              <li>"Permito o próximo nível."</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-brand-teal/30 bg-card p-8 shadow-[var(--shadow-card)]">
          <div>
            <p className="font-display text-2xl font-bold text-secondary">Pacote completo — R$ 1.997</p>
            <p className="mt-1 text-sm text-foreground/70">4 sessões 1:1 · Diagnóstico inicial · Diário Emocional incluso</p>
          </div>
          <a href={wa} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 rounded-md bg-brand-teal px-7 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-teal-dark">
            Começar agora <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
