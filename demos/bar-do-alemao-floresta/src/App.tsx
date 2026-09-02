import { About } from "./components/About";
import { Dish } from "./components/Dish";
import { Editions } from "./components/Editions";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Navbar } from "./components/Navbar";
import { QuickInfo } from "./components/QuickInfo";

export default function App() {
  return (
    <>
      <a className="skip" href="#inicio">
        Ir para o conteúdo
      </a>
      <Navbar />
      <main>
        <Hero />
        <QuickInfo />
        <Dish />
        <About />
        <Editions />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
