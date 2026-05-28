import { createFileRoute } from "@tanstack/react-router";
import { AutonomiaPage } from "@/components/landings/autonomia-page";
import { getSection } from "@/lib/sections";

const s = getSection("autonomia-interna")!;

export const Route = createFileRoute("/autonomia-interna")({
  head: () => ({
    meta: [
      { title: `${s.title} — Juliana Grimaldi` },
      { name: "description", content: s.shortDesc },
      { property: "og:title", content: `${s.title} — Juliana Grimaldi` },
      { property: "og:description", content: s.shortDesc },
    ],
    links: [{ rel: "canonical", href: "/autonomia-interna" }],
  }),
  component: AutonomiaPage,
});
