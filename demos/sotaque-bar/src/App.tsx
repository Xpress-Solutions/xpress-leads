import { useEffect } from "react";
import { About } from "./components/About";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { Location } from "./components/Location";
import { MenuBoard } from "./components/MenuBoard";
import { Navbar } from "./components/Navbar";
import { QuickInfo } from "./components/QuickInfo";
import { Reviews } from "./components/Reviews";

function HashScroll() {
  useEffect(() => {
    const jump = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
    };

    const timer = window.setTimeout(jump, 80);
    window.addEventListener("hashchange", jump);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", jump);
    };
  }, []);

  return null;
}

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <HashScroll />
      <div id="conteudo">
        <main>
          <Hero />
          <QuickInfo />
          <About />
          <Highlights />
          <MenuBoard />
          <Gallery />
          <Reviews />
          <Location />
          <FinalCta />
        </main>
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
