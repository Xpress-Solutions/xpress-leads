import { Avaliacoes } from "./components/Avaliacoes";
import { Cardapio } from "./components/Cardapio";
import { Casa } from "./components/Casa";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Galeria } from "./components/Galeria";
import { Hero } from "./components/Hero";
import { Localizacao } from "./components/Localizacao";
import { Musica } from "./components/Musica";
import { Navbar } from "./components/Navbar";
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
        <div className="checker" aria-hidden="true" />
        <Strip />
        <Casa />
        <Cardapio />
        <Musica />
        <Galeria />
        <Avaliacoes />
        <Localizacao />
        <FinalCta />
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
