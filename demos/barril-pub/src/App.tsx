import { About } from "./components/About";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { HouseStrip } from "./components/HouseStrip";
import { Location } from "./components/Location";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { Press } from "./components/Press";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <Hero />
        <HouseStrip />
        <Menu />
        <About />
        <Gallery />
        <Press />
        <Location />
        <FinalCta />
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
