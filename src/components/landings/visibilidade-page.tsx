import { Link } from "@tanstack/react-router";
import { ArrowRight, Mic, Volume2 } from "lucide-react";

const wa = "https://wa.link/thno3v";

export function VisibilidadePage() {
  return (
    <main className="bg-background">
      {/* HERO — tipografia ousada, alto contraste */}
      <section className="relative overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_80%_20%,oklch(0.74_0.13_180/0.5),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Link to="/" className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal hover:text-white">
            ← Todos os processos
          </Link>
          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-teal">
            Visibilidade Natural · Voz & Presença
          </p>
          <h1 className="mt-6 font-display text-6xl font-bold leading-[0.95] md:text-[7.5rem]">
            Fale.
            <br />
            <span className="text-brand-teal">Sem performar.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/75">
            Um processo de reestruturação emocional para você ser ouvida e respeitada — sem
            precisar elevar a voz, sem precisar provar, sem precisar pedir licença.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer"
             className="mt-10 inline-flex items-center gap-3 rounded-md bg-brand-teal px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[var(--shadow-glow)] hover:bg-brand-teal-dark transition-all">
            Quero ter voz <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* CICLO DO SILENCIAMENTO */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">O ciclo invisível</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold text-secondary">
          O silenciamento não começa quando você não fala.
        </h2>
        <p className="mt-3 max-w-2xl text-foreground/70">
          Começa muito antes — no instante em que o sistema nervoso decide que falar é arriscado.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {[
            ["Pensa", "A ideia surge clara."],
            ["Hesita", "O corpo sinaliza ameaça."],
            ["Edita", "A frase vira diplomática."],
            ["Engole", "Outra pessoa diz — e leva."],
          ].map(([t, d], i) => (
            <div key={t} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-teal font-display text-lg font-bold text-brand-teal">
                {i + 1}
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-secondary">{t}</h3>
              <p className="mt-2 text-sm text-foreground/70">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-2xl rounded-xl border-l-4 border-brand-teal bg-muted/50 p-6 font-display text-xl italic text-secondary">
          E no fim do dia você sente: "eu sabia. Eu tinha a resposta certa."
        </p>
      </section>

      {/* PILARES */}
      <section className="bg-secondary py-24 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">O que reescrevemos</p>
          <h2 className="mt-4 font-display text-4xl font-bold">Sua nova arquitetura de voz.</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              { i: Mic, t: "Segurança interna", d: "Reduzimos a resposta de medo associada à exposição. O corpo para de te interromper." },
              { i: Volume2, t: "Expressão orgânica", d: "Você fala porque tem o que dizer — não para conquistar espaço." },
              { i: ArrowRight, t: "Presença que ocupa", d: "Sua voz deixa de implorar. Passa a ser referência." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="border-t-2 border-brand-teal pt-6">
                <Icon className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-2xl font-bold">{t}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl font-bold leading-tight text-secondary md:text-5xl">
          A sala vai continuar tendo voz demais.
          <br />
          <span className="italic text-brand-teal">A diferença é que uma delas vai ser a sua.</span>
        </h2>
        <a href={wa} target="_blank" rel="noopener noreferrer"
           className="mt-10 inline-flex items-center gap-3 rounded-md bg-brand-teal px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[var(--shadow-glow)] hover:bg-brand-teal-dark">
            Quero ter voz <ArrowRight className="h-4 w-4" />
        </a>
      </section>
    </main>
  );
}
