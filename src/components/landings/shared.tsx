import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const wa = "https://wa.link/thno3v";

// ──────────────────────────────────────────────────────────────────────────────
// Shared atoms — keep ALL landings on the same typographic + spacing grammar.
// Tokens used:
//  - font-display = Plus Jakarta Sans (local, @fontsource)
//  - font-sans    = Inter (local, @fontsource)
//  - brand-navy / brand-teal / brand-teal-dark
// ──────────────────────────────────────────────────────────────────────────────

type Tone = "navy" | "light" | "muted" | "white";

export function BackLink({ tone = "teal" }: { tone?: "teal" | "navy" }) {
  const cls =
    tone === "teal"
      ? "text-brand-teal hover:opacity-80"
      : "text-brand-navy/70 hover:text-brand-navy";
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-center text-xs font-semibold uppercase tracking-[0.25em] transition-all mb-8",
        cls,
      )}
    >
      ← Todos os processos
    </Link>
  );
}

export function Eyebrow({
  children,
  tone = "teal",
  className,
}: {
  children: ReactNode;
  tone?: "teal" | "muted";
  className?: string;
}) {
  const color = tone === "teal" ? "text-brand-teal" : "text-brand-navy/50";
  return (
    <span
      className={cn(
        "text-[11px] font-bold uppercase tracking-[0.3em]",
        color,
        className,
      )}
    >
      {children}
    </span>
  );
}

export function PrimaryCTA({
  href,
  children,
  size = "md",
  className,
}: {
  href: string;
  children: ReactNode;
  size?: "md" | "lg";
  className?: string;
}) {
  const padding = size === "lg" ? "px-10 py-5" : "px-8 py-5";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-3 rounded-full bg-brand-teal text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:bg-brand-teal-dark hover:-translate-y-0.5 transition-all duration-300",
        padding,
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

export function OutlineCTA({
  href,
  children,
  tone = "light",
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const cls =
    tone === "light"
      ? "border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
      : "border-brand-navy/20 text-brand-navy hover:bg-brand-navy/5";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-3 rounded-full border px-8 py-5 text-sm font-bold uppercase tracking-wider transition-all",
        cls,
        className,
      )}
    >
      {children}
    </a>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// HeroShell — standard hero anatomy: back link + eyebrow + h1 + lead + CTAs,
// with optional right-column slot (image / card / illustration).
// ──────────────────────────────────────────────────────────────────────────────

export function HeroShell({
  tone = "navy",
  eyebrow,
  title,
  lead,
  ctas,
  aside,
  decoration,
  asideRatio = "balanced",
}: {
  tone?: "navy" | "light";
  eyebrow: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  ctas?: ReactNode;
  aside?: ReactNode;
  decoration?: ReactNode;
  asideRatio?: "balanced" | "wide";
}) {
  const bg = tone === "navy" ? "bg-brand-navy text-white" : "bg-[#F2F7F7] text-brand-navy";
  const grid =
    asideRatio === "wide"
      ? "lg:grid lg:grid-cols-12 lg:gap-16"
      : "lg:grid lg:grid-cols-2 lg:gap-16";
  return (
    <section
      className={cn(
        "relative min-h-[85vh] flex items-center overflow-hidden pt-16",
        bg,
      )}
    >
      {decoration && <div className="absolute inset-0 pointer-events-none">{decoration}</div>}
      <div className={cn("relative mx-auto max-w-7xl px-6 py-20 items-center", grid)}>
        <div className={asideRatio === "wide" ? "lg:col-span-7" : ""}>
          <BackLink tone={tone === "navy" ? "teal" : "navy"} />
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1
            className={cn(
              "mt-4 font-display font-extrabold leading-[1.05] text-5xl md:text-7xl",
              tone === "navy" ? "text-white" : "text-brand-navy",
            )}
          >
            {title}
          </h1>
          {lead && (
            <p
              className={cn(
                "mt-8 max-w-xl text-xl leading-relaxed font-light md:text-2xl",
                tone === "navy" ? "text-white/80" : "text-foreground/75",
              )}
            >
              {lead}
            </p>
          )}
          {ctas && <div className="mt-12 flex flex-wrap items-center gap-5">{ctas}</div>}
        </div>
        {aside && (
          <div
            className={cn(
              "mt-16 lg:mt-0 relative",
              asideRatio === "wide" && "lg:col-span-5",
            )}
          >
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// SectionShell + SectionHeading — standard content section wrapper.
// ──────────────────────────────────────────────────────────────────────────────

const TONE_BG: Record<Tone, string> = {
  navy: "bg-brand-navy text-white",
  light: "bg-[#F2F7F7] text-brand-navy",
  muted: "bg-muted/30 text-foreground",
  white: "bg-white text-foreground",
};

export function SectionShell({
  tone = "white",
  id,
  className,
  children,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("relative py-24 md:py-32 overflow-hidden", TONE_BG[tone], className)}
    >
      <div className="relative mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "navy",
  className,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "navy" | "white";
  className?: string;
}) {
  const wrap =
    align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl";
  const titleColor = tone === "navy" ? "text-brand-navy" : "text-white";
  const leadColor = tone === "navy" ? "text-foreground/70" : "text-white/70";
  return (
    <div className={cn(wrap, "mb-16 md:mb-20", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-6 font-display text-4xl font-bold leading-tight md:text-5xl",
          titleColor,
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={cn("mt-6 text-lg leading-relaxed md:text-xl", leadColor)}>{lead}</p>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// FinalCTASection — last block on every landing.
// ──────────────────────────────────────────────────────────────────────────────

export function FinalCTASection({
  tone = "white",
  title,
  lead,
  children,
}: {
  tone?: "white" | "navy";
  title: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
}) {
  const bg = tone === "navy" ? "bg-brand-navy text-white" : "bg-white text-brand-navy";
  const leadColor = tone === "navy" ? "text-white/70" : "text-foreground/70";
  return (
    <section className={cn("py-24 md:py-32 relative overflow-hidden", bg)}>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">{title}</h2>
        {lead && <p className={cn("mt-8 text-xl leading-relaxed", leadColor)}>{lead}</p>}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          {children}
        </div>
      </div>
    </section>
  );
}
