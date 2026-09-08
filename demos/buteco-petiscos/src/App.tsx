import { Casa } from "./components/Casa";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Mesa } from "./components/Mesa";
import { Navbar } from "./components/Navbar";
import { Petisco } from "./components/Petisco";
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
        <Hero />
        <QuickInfo />
        <Petisco />
        <Mesa />
        <Casa />
        <Reviews />
        <Location />
        <FinalCta />
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
