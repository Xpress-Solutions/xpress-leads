import { Casa } from "./components/Casa";
import { Cortes } from "./components/Cortes";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Navbar } from "./components/Navbar";
import { QuickInfo } from "./components/QuickInfo";
import { Reservas } from "./components/Reservas";
import { Reviews } from "./components/Reviews";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <Hero />
        <QuickInfo />
        <Cortes />
        <Casa />
        <Reservas />
        <Gallery />
        <Reviews />
        <Location />
        <FinalCta />
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
