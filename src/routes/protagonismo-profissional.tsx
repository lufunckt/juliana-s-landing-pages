import { createFileRoute } from "@tanstack/react-router";
import { SectionLanding } from "@/components/section-landing";
import { getSection } from "@/lib/sections";

const section = getSection("protagonismo-profissional")!;

export const Route = createFileRoute("/protagonismo-profissional")({
  head: () => ({
    meta: [
      { title: `${section.title} — Juliana Grimaldi` },
      { name: "description", content: section.shortDesc },
      { property: "og:title", content: `${section.title} — Juliana Grimaldi` },
      { property: "og:description", content: section.shortDesc },
    ],
    links: [{ rel: "canonical", href: "/protagonismo-profissional" }],
  }),
  component: () => <SectionLanding section={section} />,
});
