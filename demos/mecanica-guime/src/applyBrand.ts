import identity from "../brand.json";

const vars = {
  "--background": identity.colors.background,
  "--foreground": identity.colors.foreground,
  "--brand": identity.colors.brand,
  "--accent": identity.colors.accent,
  "--surface": identity.colors.surface,
  "--muted": identity.colors.muted,
} as const;

export function applyBrand() {
  const root = document.documentElement;
  for (const [name, value] of Object.entries(vars)) {
    root.style.setProperty(name, value);
  }
}

export const brand = identity;
