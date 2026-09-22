import { Casa } from "./components/Casa";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Localizacao } from "./components/Localizacao";
import { Navbar } from "./components/Navbar";
import { Sanduba } from "./components/Sanduba";
import { Sobre } from "./components/Sobre";
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
        <Sanduba />
        <Casa />
        <Sobre />
        <Localizacao />
        <FinalCta />
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
