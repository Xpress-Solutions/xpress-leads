import identity from "../../brand.json";

export const BRAND = identity;

export function applyBrandToDocument() {
  const root = document.documentElement;
  const { colors } = BRAND;
  root.style.setProperty("--background", colors.background);
  root.style.setProperty("--foreground", colors.foreground);
  root.style.setProperty("--brand", colors.brand);
  root.style.setProperty("--accent", colors.accent);
  root.style.setProperty("--surface", colors.surface);
  root.style.setProperty("--muted", colors.muted);
}
