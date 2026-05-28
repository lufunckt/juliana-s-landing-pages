import { createFileRoute } from "@tanstack/react-router";
import { SectionLanding } from "@/components/section-landing";
import { getSection } from "@/lib/sections";

const section = getSection("diario-emocional")!;

export const Route = createFileRoute("/diario-emocional")({
  head: () => ({
    meta: [
      { title: `${section.title} — Juliana Grimaldi` },
      { name: "description", content: section.shortDesc },
      { property: "og:title", content: `${section.title} — Juliana Grimaldi` },
      { property: "og:description", content: section.shortDesc },
    ],
    links: [{ rel: "canonical", href: "/diario-emocional" }],
  }),
  component: () => <SectionLanding section={section} />,
});
