import { createFileRoute, Link } from "@tanstack/react-router";
import { seoBySlug, SITE_NAME } from "@/lib/seo";

export const Route = createFileRoute("/preview-social")({
  head: () => ({
    meta: [
      { title: "Preview Social — Cards X/Twitter & LinkedIn" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PreviewSocialPage,
});

const slugToPath: Record<string, string> = {
  "protagonismo-profissional": "/protagonismo-profissional",
  "desbloqueio-emocional": "/desbloqueio-emocional",
  "diagnostico-emocional": "/diagnostico-emocional",
  "diario-emocional": "/diario-emocional",
  "autonomia-interna": "/autonomia-interna",
  "visibilidade-natural": "/visibilidade-natural",
};

function TwitterCard({
  image,
  title,
  description,
  domain,
}: {
  image?: string;
  title: string;
  description: string;
  domain: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#cfd9de] bg-white font-sans text-[15px] text-[#0f1419]">
      {image ? (
        <img src={image} alt="" className="aspect-[1.91/1] w-full object-cover" />
      ) : (
        <div className="flex aspect-[1.91/1] w-full items-center justify-center bg-[#e8edf1] text-sm text-[#536471]">
          sem imagem
        </div>
      )}
      <div className="border-t border-[#cfd9de] px-3 py-2.5">
        <div className="text-[13px] leading-tight text-[#536471]">{domain}</div>
        <div className="mt-0.5 line-clamp-1 font-normal leading-snug">{title}</div>
        <div className="mt-0.5 line-clamp-2 text-[13px] leading-snug text-[#536471]">
          {description}
        </div>
      </div>
    </div>
  );
}

function LinkedInCard({
  image,
  title,
  domain,
}: {
  image?: string;
  title: string;
  domain: string;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-[#e0e0e0] bg-white font-sans text-[#000000e6] shadow-sm">
      {image ? (
        <img src={image} alt="" className="aspect-[1.91/1] w-full object-cover" />
      ) : (
        <div className="flex aspect-[1.91/1] w-full items-center justify-center bg-[#edf3f8] text-sm text-[#00000099]">
          sem imagem
        </div>
      )}
      <div className="bg-[#edf3f8] px-3 py-2.5">
        <div className="line-clamp-2 text-[14px] font-semibold leading-snug">{title}</div>
        <div className="mt-1 text-[12px] uppercase tracking-wide text-[#00000099]">
          {domain}
        </div>
      </div>
    </div>
  );
}

function PreviewSocialPage() {
  const domain = typeof window !== "undefined" ? window.location.host : "julianagrimaldi.app";
  const entries = Object.entries(seoBySlug);

  return (
    <main className="min-h-screen bg-muted/40 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <Link to="/" className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-teal hover:opacity-75">
            ← Voltar
          </Link>
          <h1 className="mt-3 font-display text-4xl font-bold text-secondary">
            Preview Social
          </h1>
          <p className="mt-2 max-w-2xl text-foreground/70">
            Pré-visualização de como cada landing aparece quando compartilhada no X/Twitter e no
            LinkedIn. Usa os mesmos metadados Open Graph e Twitter Card emitidos em produção
            por <code className="rounded bg-muted px-1.5 py-0.5 text-xs">src/lib/seo.ts</code>.
          </p>
          <p className="mt-1 text-xs text-foreground/60">
            Domínio simulado: <span className="font-mono">{domain}</span>
          </p>
        </div>

        <div className="space-y-12">
          {entries.map(([slug, seo]) => {
            const path = slugToPath[slug] ?? `/${slug}`;
            const fullTitle = `${seo.title} | ${SITE_NAME}`;
            return (
              <section key={slug} className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <header className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-teal">
                      {slug}
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-bold text-secondary">
                      {seo.title}
                    </h2>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <Link
                      to={path}
                      className="rounded-md border border-border bg-background px-3 py-1.5 font-semibold uppercase tracking-wider text-foreground hover:bg-muted"
                    >
                      Abrir página
                    </Link>
                    <a
                      href={`https://cards-dev.twitter.com/validator?url=${encodeURIComponent(
                        `https://${domain}${path}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-border bg-background px-3 py-1.5 font-semibold uppercase tracking-wider text-foreground hover:bg-muted"
                    >
                      Validador X
                    </a>
                    <a
                      href={`https://www.linkedin.com/post-inspector/inspect/${encodeURIComponent(
                        `https://${domain}${path}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-border bg-background px-3 py-1.5 font-semibold uppercase tracking-wider text-foreground hover:bg-muted"
                    >
                      Inspector LinkedIn
                    </a>
                  </div>
                </header>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
                      X / Twitter · summary_large_image
                    </p>
                    <TwitterCard
                      image={seo.ogImage}
                      title={fullTitle}
                      description={seo.description}
                      domain={domain}
                    />
                  </div>
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
                      LinkedIn · Open Graph
                    </p>
                    <LinkedInCard image={seo.ogImage} title={fullTitle} domain={domain} />
                  </div>
                </div>

                <dl className="mt-8 grid gap-3 text-xs md:grid-cols-2">
                  <div>
                    <dt className="font-bold uppercase tracking-wider text-foreground/60">Title ({fullTitle.length} chars)</dt>
                    <dd className="mt-1 text-foreground/80">{fullTitle}</dd>
                  </div>
                  <div>
                    <dt className="font-bold uppercase tracking-wider text-foreground/60">
                      Description ({seo.description.length} chars)
                    </dt>
                    <dd className="mt-1 text-foreground/80">{seo.description}</dd>
                  </div>
                </dl>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
