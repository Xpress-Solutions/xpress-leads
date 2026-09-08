import { AvenueStrip } from "./components/AvenueStrip";
import { Carnes } from "./components/Carnes";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Galeria } from "./components/Galeria";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Navbar } from "./components/Navbar";
import { Sobre } from "./components/Sobre";
import { Turnos } from "./components/Turnos";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <Hero />
        <AvenueStrip />
        <Turnos />
        <Sobre />
        <Carnes />
        <Galeria />
        <Location />
        <FinalCta />
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
