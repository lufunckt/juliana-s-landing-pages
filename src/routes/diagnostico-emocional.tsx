import { createFileRoute } from "@tanstack/react-router";
import { DiagnosticoPage } from "@/components/landings/diagnostico-page";
import { getSection } from "@/lib/sections";

const s = getSection("diagnostico-emocional")!;

export const Route = createFileRoute("/diagnostico-emocional")({
  head: () => ({
    meta: [
      { title: `${s.title} — Juliana Grimaldi` },
      { name: "description", content: s.shortDesc },
      { property: "og:title", content: `${s.title} — Juliana Grimaldi` },
      { property: "og:description", content: s.shortDesc },
    ],
    links: [{ rel: "canonical", href: "/diagnostico-emocional" }],
  }),
  component: DiagnosticoPage,
});
