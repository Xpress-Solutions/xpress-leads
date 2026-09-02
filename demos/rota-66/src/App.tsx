import { About } from "./components/About";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { Reviews } from "./components/Reviews";
import { SpinBacon } from "./components/SpinBacon";
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
        <SpinBacon />
        <Menu />
        <About />
        <Reviews />
        <Location />
        <FinalCta />
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
