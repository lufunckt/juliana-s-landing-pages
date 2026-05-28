import { createFileRoute } from "@tanstack/react-router";
import { DesbloqueioPage } from "@/components/landings/desbloqueio-page";
import { getSection } from "@/lib/sections";

const s = getSection("desbloqueio-emocional")!;

export const Route = createFileRoute("/desbloqueio-emocional")({
  head: () => ({
    meta: [
      { title: `${s.title} — Juliana Grimaldi` },
      { name: "description", content: s.shortDesc },
      { property: "og:title", content: `${s.title} — Juliana Grimaldi` },
      { property: "og:description", content: s.shortDesc },
    ],
    links: [{ rel: "canonical", href: "/desbloqueio-emocional" }],
  }),
  component: DesbloqueioPage,
});
