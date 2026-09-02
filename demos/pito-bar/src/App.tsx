import { Casa } from "./components/Casa.tsx";
import { Cta } from "./components/Cta.tsx";
import { Footer } from "./components/Footer.tsx";
import { Galeria } from "./components/Galeria.tsx";
import { Hero } from "./components/Hero.tsx";
import { Local } from "./components/Local.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { Petisco } from "./components/Petisco.tsx";
import { Strip } from "./components/Strip.tsx";
import { WhatsAppIcon } from "./components/WhatsAppIcon.tsx";
import { SITE } from "./data/site.ts";

export function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <Hero />
        <Strip />
        <Petisco />
        <Casa />
        <Galeria />
        <Local />
        <Cta />
      </div>
      <Footer />
      <a className="fab" href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <WhatsAppIcon />
      </a>
    </>
  );
}
