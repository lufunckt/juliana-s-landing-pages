import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/LP/",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
