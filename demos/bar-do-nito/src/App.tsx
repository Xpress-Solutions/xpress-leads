import { About } from "./components/About";
import { Agenda } from "./components/Agenda";
import { Casa } from "./components/Casa";
import { Feijoada } from "./components/Feijoada";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Mesa } from "./components/Mesa";
import { Navbar } from "./components/Navbar";
import { QuickInfo } from "./components/QuickInfo";
import { Reviews } from "./components/Reviews";

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
          <QuickInfo />
          <Agenda />
          <Feijoada />
          <About />
          <Casa />
          <Mesa />
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
