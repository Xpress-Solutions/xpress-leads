import brand from "../brand.json";

export function applyBrand() {
  const root = document.documentElement;
  root.style.setProperty("--background", brand.colors.background);
  root.style.setProperty("--foreground", brand.colors.foreground);
  root.style.setProperty("--brand", brand.colors.brand);
  root.style.setProperty("--accent", brand.colors.accent);
  root.style.setProperty("--surface", brand.colors.surface);
  root.style.setProperty("--muted", brand.colors.muted);
}
