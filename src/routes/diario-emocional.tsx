import { createFileRoute } from "@tanstack/react-router";
import { DiarioPage } from "@/components/landings/diario-page";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/diario-emocional")({
  head: () => buildHead("diario-emocional", "/diario-emocional"),
  component: DiarioPage,
});
