import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import brand from "../brand.json";
import App from "./App.tsx";
import "./index.css";

const root = document.documentElement;
root.style.setProperty("--background", brand.colors.background);
root.style.setProperty("--foreground", brand.colors.foreground);
root.style.setProperty("--brand", brand.colors.brand);
root.style.setProperty("--accent", brand.colors.accent);
root.style.setProperty("--surface", brand.colors.surface);
root.style.setProperty("--muted", brand.colors.muted);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
