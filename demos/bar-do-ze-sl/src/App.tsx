import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HoursLocation } from "./components/HoursLocation";
import { Navbar } from "./components/Navbar";
import { Praca } from "./components/Praca";
import { Reviews } from "./components/Reviews";
import { Xis } from "./components/Xis";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <main>
          <Hero />
          <Xis />
          <Praca />
          <Reviews />
          <HoursLocation />
          <FinalCta />
        </main>
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
