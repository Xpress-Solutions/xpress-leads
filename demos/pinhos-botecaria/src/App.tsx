import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { Galeria } from "./components/Galeria";
import { Hero } from "./components/Hero";
import { Local } from "./components/Local";
import { MenuBoard } from "./components/MenuBoard";
import { Navbar } from "./components/Navbar";
import { Noite } from "./components/Noite";
import { Petisco } from "./components/Petisco";
import { Reviews } from "./components/Reviews";
import { Sobre } from "./components/Sobre";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Petisco />
        <MenuBoard />
        <Noite />
        <Sobre />
        <Galeria />
        <Reviews />
        <Local />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
