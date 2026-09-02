import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["logo.png", "pwa-192.png", "pwa-512.png"],
      manifest: {
        name: "Boteco Vitória",
        short_name: "Vitória",
        description:
          "Cardápio, eventos e localização do Boteco Vitória no Jardim Botânico, Porto Alegre.",
        theme_color: "#0b0b0b",
        background_color: "#0b0b0b",
        display: "standalone",
        orientation: "portrait",
        lang: "pt-BR",
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "pwa-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,woff2}"],
        navigateFallback: "/index.html",
      },
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
});
