import type { CSSProperties } from "react";
import { Casa } from "./components/Casa";
import { Edicoes } from "./components/Edicoes";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Local } from "./components/Local";
import { Navbar } from "./components/Navbar";
import { Petisco } from "./components/Petisco";
import { BRAND } from "./data/site";

export default function App() {
  const skin = {
    "--background": BRAND.colors.background,
    "--foreground": BRAND.colors.foreground,
    "--brand": BRAND.colors.brand,
    "--accent": BRAND.colors.accent,
    "--surface": BRAND.colors.surface,
    "--muted": BRAND.colors.muted,
  } as CSSProperties;

  return (
    <div style={skin}>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <Hero />
        <Petisco />
        <Casa />
        <Edicoes />
        <Local />
        <FinalCta />
      </div>
      <Footer />
      <FloatingCta />
    </div>
  );
}
