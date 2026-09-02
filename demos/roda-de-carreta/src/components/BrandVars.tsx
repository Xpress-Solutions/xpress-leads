import { useEffect } from "react";
import { BRAND } from "../data/brand";

export function BrandVars() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--background", BRAND.colors.background);
    root.style.setProperty("--foreground", BRAND.colors.foreground);
    root.style.setProperty("--brand", BRAND.colors.brand);
    root.style.setProperty("--accent", BRAND.colors.accent);
    root.style.setProperty("--surface", BRAND.colors.surface);
    root.style.setProperty("--muted", BRAND.colors.muted);
    root.style.setProperty("--display", `"${BRAND.typography.display}", "Times New Roman", serif`);
    root.style.setProperty("--body", `"${BRAND.typography.body}", "Segoe UI", sans-serif`);
  }, []);

  return null;
}
