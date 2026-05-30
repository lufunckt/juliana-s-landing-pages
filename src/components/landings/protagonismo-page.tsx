import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

const wa = "https://wa.link/thno3v";

const identificacao = [
  "Você se cala para evitar julgamento.",
  "Você recua quando deveria sustentar seu valor.",
  "Você duvida de si, mesmo tendo competência.",
  "Você sente que precisa provar o tempo todo que merece estar onde está.",
];

const impactos = [
  "Seu posicionamento profissional.",
  "Seus comportamentos sabotadores no ambiente corporativo.",
  "Sua capacidade de tomar decisões.",
  "Sua segurança para se expressar.",
  "Sua forma de sustentar valor.",
  "Seu crescimento e desenvolvimento profissional.",
];

const paraQuem = [
  "Entrega muito, mas sente que cresce pouco.",
  "Se cala para evitar julgamento.",
  "Hesita quando precisa se posicionar.",
  "Assume responsabilidades, mas não sustenta o próprio valor.",
  "Sente insegurança diante de exposição, cobrança ou reconhecimento.",
  "Tem comportamentos de autossabotagem no ambiente profissional.",
  "Quer crescer na carreira sem continuar sendo conduzida pelo medo, pela culpa ou pela necessidade de aprovação.",
];

const resultados = [
  "Mais clareza para decidir.",
  "Mais firmeza para se posicionar.",
  "Mais autonomia para ocupar espaço.",
  "Mais segurança para sustentar seu próprio valor.",
];

export function ProtagonismoPage() {
  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(ellipse_at_70%_30%,oklch(0.74_0.13_180/0.35),transparent_60%),radial-gradient(circle_at_15%_85%,oklch(0.3_0.09_215/0.55),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Link to="/" className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal hover:text-white">
            ← Todos os processos
          </Link>
          <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-teal">
            Atualização de Memórias · 10 encontros
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[1.05] md:text-6xl lg:text-7xl">
            Protagonismo Profissional
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/85 md:text-2xl">
            Você não trava na carreira por falta de competência.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
            Trava porque seu cérebro ainda opera em padrões emocionais que geram insegurança,
            hesitação e autossabotagem.
          </p>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/60 md:text-base">
            Um processo em 10 encontros, com sessões de até 1h30, para identificar e atualizar as
            memórias emocionais que impactam seu posicionamento, seus comportamentos no ambiente
            corporativo, suas decisões e seu crescimento profissional.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md bg-brand-teal px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[var(--shadow-glow)] transition-all hover:bg-brand-teal-dark"
            >
              Ver Método: R$ 2.997 <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white/10"
            >
              Falar com a equipe
            </a>
          </div>
        </div>
      </section>

      {/* IDENTIFICAÇÃO */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">Identificação</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-secondary md:text-5xl">
          Você entrega muito, mas sente que cresce pouco.
        </h2>
        <div className="mt-10 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>Você assume responsabilidades, resolve problemas e sustenta demandas importantes.</p>
          <p>Mas, quando precisa se posicionar, algo dentro de você hesita.</p>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {identificacao.map((i) => (
            <li
              key={i}
              className="rounded-xl border border-border bg-card p-5 text-foreground/80 shadow-[var(--shadow-card)]"
            >
              {i}
            </li>
          ))}
        </ul>
        <div className="mt-12 border-l-2 border-brand-teal pl-6">
          <p className="text-lg text-foreground/80">
            Você carrega responsabilidades, mas não consegue sustentar a própria potência profissional.
          </p>
          <p className="mt-4 text-lg font-semibold text-secondary">
            Isso não é falta de capacidade. É um padrão emocional operando no automático.
          </p>
        </div>
      </section>

      {/* APROFUNDAMENTO */}
      <section className="bg-secondary py-24 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">Aprofundamento</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Sua carreira não pode continuar limitada por padrões emocionais que fazem você diminuir
            a própria potência.
          </h2>
          <div className="mt-10 space-y-5 text-lg leading-relaxed text-white/75">
            <p>
              Muitas vezes, o que trava o crescimento profissional não é ausência de preparo,
              conhecimento ou experiência.
            </p>
            <p>
              É a forma como o cérebro aprendeu a responder diante de exposição, cobrança,
              autoridade, julgamento, reconhecimento e risco.
            </p>
            <p>
              Quando essas situações ativam memórias emocionais antigas, o comportamento pode se
              tornar automático.
            </p>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-5">
            {[
              "Você hesita.",
              "Você se esconde.",
              "Você evita conflitos.",
              "Não se posiciona com firmeza.",
              "Não ocupa o espaço proporcional ao seu valor.",
            ].map((s) => (
              <div
                key={s}
                className="rounded-lg border border-white/15 bg-white/5 p-5 text-sm text-white/85"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">O Método</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-secondary md:text-5xl">
          10 encontros. Sessões de até 1h30. Atuação na raiz.
        </h2>
        <div className="mt-10 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            O Protagonismo Profissional é um processo realizado em 10 encontros, com sessões de até
            1h30.
          </p>
          <p>
            Através da neurociência e da reconsolidação de memórias, trabalhamos diretamente na raiz
            dos padrões automáticos que fazem você recuar, se esconder ou não sustentar sua
            potência profissional.
          </p>
        </div>
        <div className="mt-12">
          <p className="text-sm font-semibold text-secondary">
            O processo é focado em identificar e atualizar memórias emocionais que impactam:
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {impactos.map((i) => (
              <li key={i} className="flex gap-3 rounded-xl bg-muted/60 p-5">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal" />
                <span className="text-foreground/85">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">Para quem é</p>
          <h2 className="mt-4 text-4xl font-bold text-secondary md:text-5xl">
            Esse processo é para você se:
          </h2>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {paraQuem.map((p, i) => (
              <li key={p} className="flex gap-6 py-5">
                <span className="font-display text-sm font-bold text-brand-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">Resultado</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-secondary md:text-5xl">
          Quando a raiz emocional muda, sua postura começa a mudar também.
        </h2>
        <div className="mt-10 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>O objetivo não é transformar você em outra pessoa.</p>
          <p>
            É permitir que você sustente, com mais consciência e segurança, a profissional que você
            já é.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {resultados.map((r) => (
            <div
              key={r}
              className="rounded-xl border border-brand-teal/30 bg-card p-6 text-foreground/90 shadow-[var(--shadow-card)]"
            >
              {r}
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-secondary py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Sua carreira não pode continuar limitada por padrões emocionais que fazem você diminuir
            a própria potência.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            Inicie o processo de Protagonismo Profissional e comece a atualizar as respostas
            emocionais que impactam seu crescimento.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md bg-brand-teal px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[var(--shadow-glow)] transition-all hover:bg-brand-teal-dark"
            >
              Ver Método: R$ 2.997 <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white/10"
            >
              Falar com a equipe
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
