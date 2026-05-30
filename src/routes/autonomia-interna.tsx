import { createFileRoute } from "@tanstack/react-router";
import { AutonomiaPage } from "@/components/landings/autonomia-page";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/autonomia-interna")({
  head: () => buildHead("autonomia-interna", "/autonomia-interna"),
  component: AutonomiaPage,
});
