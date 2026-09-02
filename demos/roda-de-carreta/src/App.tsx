import { BrandVars } from "./components/BrandVars";
import { Cultura } from "./components/Cultura";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { MenuBoard } from "./components/MenuBoard";
import { Navbar } from "./components/Navbar";
import { QuickFacts } from "./components/QuickFacts";
import { Reviews } from "./components/Reviews";
import { Sobre } from "./components/Sobre";

export default function App() {
  return (
    <>
      <BrandVars />
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <main>
          <Hero />
          <QuickFacts />
          <MenuBoard />
          <Cultura />
          <Sobre />
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
