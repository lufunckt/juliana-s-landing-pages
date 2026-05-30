import { createFileRoute } from "@tanstack/react-router";
import { DesbloqueioPage } from "@/components/landings/desbloqueio-page";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/desbloqueio-emocional")({
  head: () => buildHead("desbloqueio-emocional", "/desbloqueio-emocional"),
  component: DesbloqueioPage,
});
