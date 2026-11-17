// Build config for the Flávia Lisboa site.
// @lovable.dev/vite-tanstack-config bundles tanstackStart, React, Tailwind, path aliases and nitro.
// Do not add those plugins manually or the app will break with duplicate plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  // Hosted on Netlify: build server output as a Netlify Function.
  nitro: { preset: "netlify" },
});
