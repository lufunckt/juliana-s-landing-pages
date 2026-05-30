import { createFileRoute } from "@tanstack/react-router";
import { VisibilidadePage } from "@/components/landings/visibilidade-page";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/visibilidade-natural")({
  head: () => buildHead("visibilidade-natural", "/visibilidade-natural"),
  component: VisibilidadePage,
});
