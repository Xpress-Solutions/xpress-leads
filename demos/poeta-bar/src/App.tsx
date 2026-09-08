import { About } from "./components/About";
import { BrandBand } from "./components/BrandBand";
import { CocoCrispy } from "./components/CocoCrispy";
import { FinalCta } from "./components/FinalCta";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { MenuBoard } from "./components/MenuBoard";
import { Navbar } from "./components/Navbar";
import { QuickInfo } from "./components/QuickInfo";
import { Quintas } from "./components/Quintas";
import { Reviews } from "./components/Reviews";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  const menuRef = useReveal();

  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <main>
          <Hero />
          <BrandBand />
          <QuickInfo />
          <CocoCrispy />
          <section className="section menu" id="cardapio">
            <div className="wrap">
              <div className="reveal" ref={menuRef}>
                <p className="section-kicker">O que tem pra mesa</p>
                <h2 className="section-title">Xis, petisco e chope.</h2>
                <p className="section-lead">
                  O Cocó Crispy é oficial do concurso. Xis e chope são o ofício da casa. Preços
                  marcados como “consulte” pedem confirmação no salão.
                </p>
              </div>
              <MenuBoard />
            </div>
          </section>
          <About />
          <Quintas />
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
