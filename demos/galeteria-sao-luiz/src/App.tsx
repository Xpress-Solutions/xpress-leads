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

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <main>
          <Hero />
          <QuickInfo />
          <MenuBoard />
          <Highlights />
          <About />
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
