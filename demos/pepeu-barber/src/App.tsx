import { Casa } from "./components/Casa.tsx";
import { Equipe } from "./components/Equipe.tsx";
import { FinalCta } from "./components/FinalCta.tsx";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp.tsx";
import { Footer } from "./components/Footer.tsx";
import { Gallery } from "./components/Gallery.tsx";
import { Hero } from "./components/Hero.tsx";
import { Local } from "./components/Local.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { Reviews } from "./components/Reviews.tsx";
import { Servicos } from "./components/Servicos.tsx";
import { Strip } from "./components/Strip.tsx";

export default function App() {
  return (
    <>
      <a className="skip" href="#inicio">
        Ir ao conteúdo
      </a>
      <Navbar />
      <main>
        <Hero />
        <Strip />
        <Servicos />
        <Equipe />
        <Casa />
        <Gallery />
        <Reviews />
        <Local />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
