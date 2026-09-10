import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  css: {
    // Evita o PostCSS/Tailwind do Next raiz ao rodar a demo no monorepo.
    postcss: {},
  },
  server: {
    host: true,
    port: 5175,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
