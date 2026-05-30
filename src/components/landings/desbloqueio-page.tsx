import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

const wa = "https://wa.link/thno3v";

const identificacao = [
  "Você se sabota.",
  "Você trava.",
  "Você se sente insegura.",
  "Você repete escolhas que geram sofrimento.",
  "Tem dificuldade de se posicionar nos relacionamentos, nas decisões e na vida.",
];

const paraQuem = [
  "Sente que repete padrões emocionais, mesmo tentando mudar.",
  "Tem comportamentos de autossabotagem.",
  "Sente insegurança para se posicionar.",
  "Vive bloqueios emocionais que afetam decisões, relacionamentos e escolhas.",
  "Sente que algumas dores antigas ainda influenciam sua vida atual.",
  "Tem dificuldade de romper ciclos que já compreendeu racionalmente.",
  "Deseja transformar a forma como reage diante de situações que antes geravam sofrimento ou paralisação.",
];

export function DesbloqueioPage() {
  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(ellipse_at_30%_25%,oklch(0.74_0.13_180/0.35),transparent_60%),radial-gradient(circle_at_85%_80%,oklch(0.3_0.09_215/0.55),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Link to="/" className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal hover:text-white">
            ← Todos os processos
          </Link>
          <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-teal">
            Atualização de Memórias · 8 encontros
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[1.05] md:text-6xl lg:text-7xl">
            Desbloqueio Emocional
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/85 md:text-2xl">
            Quando o padrão emocional muda, a vida começa a mudar junto.
          </p>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/60 md:text-base">
            Um processo em 8 encontros, com sessões de até 1h30, para acessar memórias emocionais
            que sustentam autossabotagem, insegurança, bloqueios emocionais, dificuldades nos
            relacionamentos e na forma como você se posiciona na vida.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md bg-brand-teal px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[var(--shadow-glow)] transition-all hover:bg-brand-teal-dark"
            >
              Ver Pacote: R$ 1.997 <ArrowRight className="h-4 w-4" />
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
          Você percebe que alguns padrões continuam se repetindo, mesmo quando tenta fazer diferente.
        </h2>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80">
          Você entende racionalmente o que precisa mudar, mas emocionalmente continua reagindo da
          mesma forma.
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {identificacao.map((i) => (
            <li
              key={i}
              className="rounded-xl border border-border bg-card p-5 text-foreground/85 shadow-[var(--shadow-card)]"
            >
              {i}
            </li>
          ))}
        </ul>
        <div className="mt-12 border-l-2 border-brand-teal pl-6">
          <p className="text-lg text-foreground/80">Às vezes, não é falta de consciência.</p>
          <p className="mt-3 text-lg font-semibold text-secondary">
            É uma memória emocional antiga ainda conduzindo suas respostas no presente.
          </p>
        </div>
      </section>

      {/* APROFUNDAMENTO */}
      <section className="bg-secondary py-24 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">Aprofundamento</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            O sofrimento se repete quando o cérebro continua respondendo a partir de registros
            emocionais antigos.
          </h2>
          <div className="mt-10 space-y-5 text-lg leading-relaxed text-white/75">
            <p>Muitas das suas reações não começam no momento atual.</p>
            <p>
              Elas são ativadas por memórias, associações e padrões que o cérebro aprendeu a
              reconhecer como ameaça, proteção ou sobrevivência.
            </p>
            <p>Por isso, você pode até saber o que deveria fazer.</p>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-4">
            {[
              "Mas, na hora de agir, o corpo recua.",
              "A emoção domina.",
              "O padrão se repete.",
              "Você se vê novamente no mesmo lugar.",
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
          8 encontros. Sessões de até 1h30. Acesso direto à raiz.
        </h2>
        <div className="mt-10 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            Desbloqueio Emocional é um processo realizado em 8 encontros, com sessões de até 1h30.
          </p>
          <p>
            Durante o processo, acessamos as memórias emocionais que hoje sustentam comportamentos
            de autossabotagem, insegurança, bloqueios emocionais, dificuldades nos relacionamentos
            e na forma como você se posiciona na vida.
          </p>
          <p>
            Através de uma abordagem baseada na neurociência e na reconsolidação de memórias,
            atuamos diretamente na raiz dos padrões emocionais automáticos.
          </p>
          <p>
            O objetivo é permitir que o cérebro reorganize novas respostas emocionais diante das
            situações que antes geravam sofrimento, repetição de padrões ou paralisação.
          </p>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">Para quem é</p>
          <h2 className="mt-4 text-4xl font-bold text-secondary md:text-5xl">
            Esse processo é para você se:
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {paraQuem.map((p) => (
              <li
                key={p}
                className="flex gap-3 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-teal" />
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
          Quando o padrão emocional muda, a vida começa a mudar junto.
        </h2>
        <div className="mt-10 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>A transformação não acontece apenas quando você entende o problema.</p>
          <p>
            Ela começa quando o cérebro passa a construir novas respostas diante das situações que
            antes ativavam dor, medo, insegurança ou repetição.
          </p>
          <p>
            O processo busca trazer mais clareza, consciência emocional e liberdade interna para
            que você pare de responder à vida a partir dos mesmos registros antigos.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-secondary py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Você não precisa continuar repetindo padrões que já percebeu, mas ainda não conseguiu
            transformar.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            Inicie o processo de Desbloqueio Emocional e comece a acessar a raiz das respostas que
            hoje limitam sua vida.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md bg-brand-teal px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[var(--shadow-glow)] transition-all hover:bg-brand-teal-dark"
            >
              Ver Pacote: R$ 1.997 <ArrowRight className="h-4 w-4" />
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
