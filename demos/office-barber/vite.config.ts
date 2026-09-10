import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {},
  },
  server: {
    host: true,
    port: 5177,
  },
});
