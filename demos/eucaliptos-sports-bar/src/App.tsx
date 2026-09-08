import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { House } from "./components/House";
import { Location } from "./components/Location";
import { MenuBoard } from "./components/MenuBoard";
import { Navbar } from "./components/Navbar";
import { Reviews } from "./components/Reviews";
import { Scoreboard } from "./components/Scoreboard";

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
          <Scoreboard />
          <MenuBoard />
          <House />
          <Gallery />
          <Reviews />
          <Location />
          <FinalCta />
        </main>
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
