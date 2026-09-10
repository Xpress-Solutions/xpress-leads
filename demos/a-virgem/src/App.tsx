import { About } from "./components/About";
import { Bella } from "./components/Bella";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { Proof } from "./components/Proof";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <Hero />
        <Proof />
        <Menu />
        <Bella />
        <About />
        <Gallery />
        <Location />
        <FinalCta />
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
