import brand from "../brand.json";

export function applyBrand() {
  const root = document.documentElement;
  const { colors } = brand;
  root.style.setProperty("--background", colors.background);
  root.style.setProperty("--foreground", colors.foreground);
  root.style.setProperty("--brand", colors.brand);
  root.style.setProperty("--accent", colors.accent);
  root.style.setProperty("--surface", colors.surface);
  root.style.setProperty("--muted", colors.muted);
  root.style.setProperty("--display", '"Fraunces", "Iowan Old Style", Georgia, serif');
  root.style.setProperty("--body", '"Figtree", "Segoe UI", system-ui, sans-serif');
}
