import { About } from "./components/About.tsx";
import { FinalCta } from "./components/FinalCta.tsx";
import { FloatingCta } from "./components/FloatingCta.tsx";
import { Footer } from "./components/Footer.tsx";
import { Hero } from "./components/Hero.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { Patio } from "./components/Patio.tsx";
import { Stones } from "./components/Stones.tsx";
import { Works } from "./components/Works.tsx";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <Hero />
        <Stones />
        <Works />
        <About />
        <Patio />
        <FinalCta />
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
