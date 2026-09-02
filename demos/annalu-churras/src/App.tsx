import { About } from "./components/About";
import { Dishes } from "./components/Dishes";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Navbar } from "./components/Navbar";
import { PoroBrasa } from "./components/PoroBrasa";
import { Strip } from "./components/Strip";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <Hero />
        <Strip />
        <PoroBrasa />
        <Dishes />
        <About />
        <Location />
        <FinalCta />
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
