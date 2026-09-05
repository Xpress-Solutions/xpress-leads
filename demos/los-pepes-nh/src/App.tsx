import { Casa } from "./components/Casa";
import { Equipe } from "./components/Equipe";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Local } from "./components/Local";
import { Navbar } from "./components/Navbar";
import { Reviews } from "./components/Reviews";
import { Servicos } from "./components/Servicos";
import { Strip } from "./components/Strip";

export default function App() {
  return (
    <>
      <a className="skip" href="#inicio">
        Ir para o conteúdo
      </a>
      <Navbar />
      <main>
        <Hero />
        <Strip />
        <Servicos />
        <Equipe />
        <Casa />
        <Reviews />
        <Local />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
