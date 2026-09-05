import { Cardapio } from "./components/Cardapio";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Local } from "./components/Local";
import { Navbar } from "./components/Navbar";
import { Pedido } from "./components/Pedido";
import { Reviews } from "./components/Reviews";
import { Tesouro } from "./components/Tesouro";
import { WhatsApp } from "./components/WhatsApp";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <div className="stripe" aria-hidden="true" />
        <Tesouro />
        <Cardapio />
        <Pedido />
        <Reviews />
        <Local />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
