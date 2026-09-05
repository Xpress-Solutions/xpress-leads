import brand from "../brand.json";

const VARS = {
  "--background": brand.colors.background,
  "--foreground": brand.colors.foreground,
  "--brand": brand.colors.brand,
  "--accent": brand.colors.accent,
  "--surface": brand.colors.surface,
  "--muted": brand.colors.muted,
} as const;

export function applyBrand() {
  const root = document.documentElement;
  for (const [key, value] of Object.entries(VARS)) {
    root.style.setProperty(key, value);
  }
}

export { brand };
