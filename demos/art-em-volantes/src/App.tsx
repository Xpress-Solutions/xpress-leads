import { About } from "./components/About";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Navbar } from "./components/Navbar";
import { Oficio } from "./components/Oficio";
import { Portfolio } from "./components/Portfolio";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <Hero />
        <Oficio />
        <Portfolio />
        <About />
        <Location />
        <FinalCta />
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
