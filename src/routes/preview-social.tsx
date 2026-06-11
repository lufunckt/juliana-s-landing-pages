import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { toPng, toJpeg } from "html-to-image";
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

type Format = "png" | "jpg";

async function exportNode(node: HTMLElement, filename: string, format: Format) {
  // Wait for images inside the node to finish decoding before snapshotting.
  const imgs = Array.from(node.querySelectorAll("img"));
  await Promise.all(
    imgs.map((img) =>
      img.complete && img.naturalWidth > 0
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            img.addEventListener("load", () => resolve(), { once: true });
            img.addEventListener("error", () => resolve(), { once: true });
          }),
    ),
  );

  const opts = { pixelRatio: 2, cacheBust: true, backgroundColor: "#ffffff" };
  const dataUrl =
    format === "png" ? await toPng(node, opts) : await toJpeg(node, { ...opts, quality: 0.95 });

  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = `${filename}.${format}`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

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
        <img src={image} alt="" crossOrigin="anonymous" className="aspect-[1.91/1] w-full object-cover" />
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
        <img src={image} alt="" crossOrigin="anonymous" className="aspect-[1.91/1] w-full object-cover" />
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

function ExportButtons({
  getNode,
  filename,
}: {
  getNode: () => HTMLElement | null;
  filename: string;
}) {
  const onExport = async (format: Format) => {
    const node = getNode();
    if (!node) return;
    try {
      await exportNode(node, filename, format);
    } catch (err) {
      console.error("Export failed", err);
      alert("Falha ao exportar. Veja o console para detalhes.");
    }
  };
  return (
    <div className="mt-3 flex gap-2">
      <button
        onClick={() => onExport("png")}
        className="rounded-md bg-brand-teal px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-brand-teal-dark"
      >
        PNG
      </button>
      <button
        onClick={() => onExport("jpg")}
        className="rounded-md border border-border bg-background px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-foreground hover:bg-muted"
      >
        JPG
      </button>
    </div>
  );
}

function CardBlock({
  slug,
  seo,
  fullTitle,
  domain,
  path,
}: {
  slug: string;
  seo: (typeof seoBySlug)[string];
  fullTitle: string;
  domain: string;
  path: string;
}) {
  const twitterRef = useRef<HTMLDivElement>(null);
  const linkedinRef = useRef<HTMLDivElement>(null);

  return (
    <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <header className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-teal">
            {slug}
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold text-secondary">{seo.title}</h2>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <Link
            to={path}
            className="rounded-md border border-border bg-background px-3 py-1.5 font-semibold uppercase tracking-wider text-foreground hover:bg-muted"
          >
            Abrir página
          </Link>
          {seo.ogImage && (
            <a
              href={seo.ogImage}
              download={`${slug}-og.jpg`}
              className="rounded-md border border-border bg-background px-3 py-1.5 font-semibold uppercase tracking-wider text-foreground hover:bg-muted"
            >
              Baixar OG original
            </a>
          )}
        </div>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
            X / Twitter · summary_large_image
          </p>
          <div ref={twitterRef}>
            <TwitterCard
              image={seo.ogImage}
              title={fullTitle}
              description={seo.description}
              domain={domain}
            />
          </div>
          <ExportButtons getNode={() => twitterRef.current} filename={`${slug}-twitter`} />
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
            LinkedIn · Open Graph
          </p>
          <div ref={linkedinRef}>
            <LinkedInCard image={seo.ogImage} title={fullTitle} domain={domain} />
          </div>
          <ExportButtons getNode={() => linkedinRef.current} filename={`${slug}-linkedin`} />
        </div>
      </div>

      <dl className="mt-8 grid gap-3 text-xs md:grid-cols-2">
        <div>
          <dt className="font-bold uppercase tracking-wider text-foreground/60">
            Title ({fullTitle.length} chars)
          </dt>
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
          <h1 className="mt-3 font-display text-4xl font-bold text-secondary">Preview Social</h1>
          <p className="mt-2 max-w-2xl text-foreground/70">
            Pré-visualização dos cards de X/Twitter e LinkedIn de cada landing. Use os botões{" "}
            <span className="font-mono text-xs">PNG</span> /{" "}
            <span className="font-mono text-xs">JPG</span> para exportar a imagem do card e
            anexar nos seus testes.
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
              <CardBlock
                key={slug}
                slug={slug}
                seo={seo}
                fullTitle={fullTitle}
                domain={domain}
                path={path}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
