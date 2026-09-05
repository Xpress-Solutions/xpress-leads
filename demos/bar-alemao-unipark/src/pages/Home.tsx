import { About } from "../components/About";
import { AccessMap } from "../components/AccessMap";
import { FinalCta } from "../components/FinalCta";
import { Hero } from "../components/Hero";
import { MenuBoard } from "../components/MenuBoard";
import { QuickInfo } from "../components/QuickInfo";
import { Reviews } from "../components/Reviews";
import { Sinuca } from "../components/Sinuca";
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
              <p className="section-kicker">O que tem pra mesa</p>
              <h2 className="section-title">Cardápio do campus.</h2>
              <p className="section-lead">
                Litrão, buffet, mocotó, porção e o quentão do frio. Itens a partir do que a casa
                já mostra no Google — preço se confirma no salão.
              </p>
            </div>
          </div>
          <MenuBoard />
        </div>
      </section>
      <Sinuca />
      <About />
      <AccessMap />
      <Reviews />
      <FinalCta />
    </main>
  );
}
