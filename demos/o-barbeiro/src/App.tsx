import { About } from "./components/About";
import { Craft } from "./components/Craft";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
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
          <Craft />
          <About />
          <Reviews />
          <Location />
          <FinalCta />
        </main>
      </div>
      <Footer />
    </>
  );
}
