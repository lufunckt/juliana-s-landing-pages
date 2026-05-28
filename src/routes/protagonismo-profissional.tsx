import { createFileRoute } from "@tanstack/react-router";
import { ProtagonismoPage } from "@/components/landings/protagonismo-page";
import { getSection } from "@/lib/sections";

const s = getSection("protagonismo-profissional")!;

export const Route = createFileRoute("/protagonismo-profissional")({
  head: () => ({
    meta: [
      { title: `${s.title} — Juliana Grimaldi` },
      { name: "description", content: s.shortDesc },
      { property: "og:title", content: `${s.title} — Juliana Grimaldi` },
      { property: "og:description", content: s.shortDesc },
    ],
    links: [{ rel: "canonical", href: "/protagonismo-profissional" }],
  }),
  component: ProtagonismoPage,
});
