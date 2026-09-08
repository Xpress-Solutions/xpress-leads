import { About } from "./components/About";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Navbar } from "./components/Navbar";
import { Noite } from "./components/Noite";
import { QuickInfo } from "./components/QuickInfo";
import { Reviews } from "./components/Reviews";
import { Rodizio } from "./components/Rodizio";

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
        <Rodizio />
        <Noite />
        <About />
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
