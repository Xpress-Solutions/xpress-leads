import identity from "../../brand.json";

export const brand = identity;

export function applyBrandVars(target: HTMLElement = document.documentElement) {
  const { colors } = brand;
  target.style.setProperty("--background", colors.background);
  target.style.setProperty("--foreground", colors.foreground);
  target.style.setProperty("--brand", colors.brand);
  target.style.setProperty("--accent", colors.accent);
  target.style.setProperty("--surface", colors.surface);
  target.style.setProperty("--muted", colors.muted);
}
