import { Agenda } from "./components/Agenda";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Manifesto } from "./components/Manifesto";
import { Navbar } from "./components/Navbar";
import { Petisco } from "./components/Petisco";
import { Sobre } from "./components/Sobre";
import { Torneiras } from "./components/Torneiras";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <Hero />
        <Manifesto />
        <Petisco />
        <Torneiras />
        <Agenda />
        <Sobre />
        <Gallery />
        <Location />
        <FinalCta />
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
