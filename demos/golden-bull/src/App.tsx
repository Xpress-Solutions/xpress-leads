import { useEffect } from "react";
import { About } from "./components/About.tsx";
import { Dish } from "./components/Dish.tsx";
import { FinalCta } from "./components/FinalCta.tsx";
import { Footer } from "./components/Footer.tsx";
import { Hero } from "./components/Hero.tsx";
import { Location } from "./components/Location.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { BRAND } from "./data/site.ts";

function applyBrand() {
  const root = document.documentElement;
  const { colors } = BRAND;
  root.style.setProperty("--background", colors.background);
  root.style.setProperty("--foreground", colors.foreground);
  root.style.setProperty("--brand", colors.brand);
  root.style.setProperty("--accent", colors.accent);
  root.style.setProperty("--surface", colors.surface);
  root.style.setProperty("--muted", colors.muted);
}

export function App() {
  useEffect(() => {
    applyBrand();
  }, []);

  applyBrand();

  return (
    <>
      <a className="skip" href="#inicio">
        Ir para o conteúdo
      </a>
      <Navbar />
      <main>
        <Hero />
        <Dish />
        <About />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
