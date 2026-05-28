import { createFileRoute } from "@tanstack/react-router";
import { VisibilidadePage } from "@/components/landings/visibilidade-page";
import { getSection } from "@/lib/sections";

const s = getSection("visibilidade-natural")!;

export const Route = createFileRoute("/visibilidade-natural")({
  head: () => ({
    meta: [
      { title: `${s.title} — Juliana Grimaldi` },
      { name: "description", content: s.shortDesc },
      { property: "og:title", content: `${s.title} — Juliana Grimaldi` },
      { property: "og:description", content: s.shortDesc },
    ],
    links: [{ rel: "canonical", href: "/visibilidade-natural" }],
  }),
  component: VisibilidadePage,
});
