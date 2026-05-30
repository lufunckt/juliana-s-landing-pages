import { createFileRoute } from "@tanstack/react-router";
import { ProtagonismoPage } from "@/components/landings/protagonismo-page";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/protagonismo-profissional")({
  head: () => buildHead("protagonismo-profissional", "/protagonismo-profissional"),
  component: ProtagonismoPage,
});
