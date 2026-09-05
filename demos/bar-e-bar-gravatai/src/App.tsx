import { About } from "./components/About";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Mesa } from "./components/Mesa";
import { Navbar } from "./components/Navbar";
import { Oficio } from "./components/Oficio";
import { Reserva } from "./components/Reserva";
import { Reviews } from "./components/Reviews";
import { Strip } from "./components/Strip";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <Hero />
        <Strip />
        <Oficio />
        <Mesa />
        <About />
        <Reviews />
        <Reserva />
        <Location />
        <FinalCta />
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
