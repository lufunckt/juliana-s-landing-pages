import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-bold tracking-wide text-secondary">
            JULIANA GRIMALDI
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-brand-teal">
            Atualização de Memórias
          </span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-secondary md:flex">
          <Link to="/" className="hover:text-brand-teal transition-colors">
            Processos
          </Link>
          <a
            href="https://julianagrimaldioficial.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-teal transition-colors"
          >
            A Metodologia
          </a>
        </nav>
        <a
          href="https://wa.link/thno3v"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-brand-teal px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-brand-teal-dark hover:shadow-md"
        >
          Agende Agora
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold">Juliana Grimaldi</p>
            <p className="mt-2 text-sm text-secondary-foreground/70">
              Especialista em Atualização de Memórias — Neurociência aplicada ao comportamento.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-teal">Processos</p>
            <ul className="mt-3 space-y-1.5 text-sm text-secondary-foreground/80">
              <li>
                <Link to="/protagonismo-profissional" className="hover:text-brand-teal">
                  Protagonismo Profissional
                </Link>
              </li>
              <li>
                <Link to="/desbloqueio-emocional" className="hover:text-brand-teal">
                  Desbloqueio Emocional
                </Link>
              </li>
              <li>
                <Link to="/diagnostico-emocional" className="hover:text-brand-teal">
                  Diagnóstico Emocional
                </Link>
              </li>
              <li>
                <Link to="/diario-emocional" className="hover:text-brand-teal">
                  Diário Emocional
                </Link>
              </li>
              <li>
                <Link to="/autonomia-interna" className="hover:text-brand-teal">
                  Autonomia Interna
                </Link>
              </li>
              <li>
                <Link to="/visibilidade-natural" className="hover:text-brand-teal">
                  Visibilidade Natural
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-brand-teal">Contato</p>
            <a
              href="https://wa.link/thno3v"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block rounded-md bg-brand-teal px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-secondary-foreground/50">
          © {new Date().getFullYear()} Juliana Grimaldi. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
