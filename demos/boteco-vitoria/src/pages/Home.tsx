import { About } from "../components/About";
import { Events } from "../components/Events";
import { FinalCta } from "../components/FinalCta";
import { Gallery } from "../components/Gallery";
import { Hero } from "../components/Hero";
import { Highlights } from "../components/Highlights";
import { Location } from "../components/Location";
import { MenuBoard } from "../components/MenuBoard";
import { QuickInfo } from "../components/QuickInfo";
import { Reviews } from "../components/Reviews";
import { useReveal } from "../hooks/useReveal";

export function Home() {
  const menuRef = useReveal();

  return (
    <main>
      <Hero />
      <QuickInfo />
      <section className="section menu" id="cardapio">
        <div className="wrap">
          <div className="menu-head reveal" ref={menuRef}>
            <div>
              <p className="section-kicker">Cardápio online</p>
              <h2 className="section-title">O que tem pra mesa.</h2>
              <p className="section-lead">
                Cardápio da casa, com preço e porção. Busca e categorias pensadas para decidir
                ainda no celular.
              </p>
            </div>
          </div>
          <MenuBoard compact />
        </div>
      </section>
      <Highlights />
      <Events />
      <About />
      <Gallery />
      <Reviews />
      <Location />
      <FinalCta />
    </main>
  );
}
