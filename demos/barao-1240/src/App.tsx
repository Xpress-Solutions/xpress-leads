import { About } from "./components/About";
import { Encomenda } from "./components/Encomenda";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Hoje } from "./components/Hoje";
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
      <main id="conteudo">
        <Hero />
        <QuickInfo />
        <Hoje />
        <div className="mosaic" aria-hidden="true" />
        <MenuBoard />
        <Encomenda />
        <About />
        <Reviews />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
