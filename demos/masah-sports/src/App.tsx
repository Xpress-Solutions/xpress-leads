import { Cardapio } from "./components/Cardapio";
import { Casa } from "./components/Casa";
import { Fab } from "./components/Fab";
import { Farroupilha } from "./components/Farroupilha";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Jogos } from "./components/Jogos";
import { Local } from "./components/Local";
import { Navbar } from "./components/Navbar";
import { Ticker } from "./components/Ticker";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <Hero />
        <Ticker />
        <Jogos />
        <Farroupilha />
        <Cardapio />
        <Casa />
        <Local />
        <FinalCta />
      </div>
      <Footer />
      <Fab />
    </>
  );
}
