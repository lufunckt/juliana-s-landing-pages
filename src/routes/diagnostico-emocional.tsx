import { createFileRoute } from "@tanstack/react-router";
import { DiagnosticoPage } from "@/components/landings/diagnostico-page";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/diagnostico-emocional")({
  head: () => buildHead("diagnostico-emocional", "/diagnostico-emocional"),
  component: DiagnosticoPage,
});
