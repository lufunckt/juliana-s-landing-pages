import { createFileRoute } from "@tanstack/react-router";
import { DiarioPage } from "@/components/landings/diario-page";
import { getSection } from "@/lib/sections";

const s = getSection("diario-emocional")!;

export const Route = createFileRoute("/diario-emocional")({
  head: () => ({
    meta: [
      { title: `${s.title} — Juliana Grimaldi` },
      { name: "description", content: s.shortDesc },
      { property: "og:title", content: `${s.title} — Juliana Grimaldi` },
      { property: "og:description", content: s.shortDesc },
    ],
    links: [{ rel: "canonical", href: "/diario-emocional" }],
  }),
  component: DiarioPage,
});
