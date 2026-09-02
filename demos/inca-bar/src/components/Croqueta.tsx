import { Link } from "react-router-dom";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Croqueta() {
  const ref = useReveal();

  return (
    <section className="section croqueta" id="croqueta">
      <div className="wrap croqueta-grid reveal" ref={ref}>
        <figure className="croqueta-photo">
          <img
            src="/fotos/croqueta.jpg"
            alt="Croqueta Andina do Inca: croquetes de milho no prato cerâmico turquesa, com três molhos — foto Israh Ramos / Sabores do Sul"
          />
          <figcaption>Croqueta Andina · Comida di Buteco 2026 · foto Israh Ramos</figcaption>
        </figure>
        <div className="croqueta-copy">
          <p className="section-kicker">O petisco da edição</p>
          <h2 className="section-title">Croqueta Andina.</h2>
          <p>
            Croquetes de milho recheados com alho-poró, provolone e muçarela. No prato: maionese
            com coentro, sweet chilli e mostarda com mel.
          </p>
          <p>
            É o Inca no concurso — milho andino, não bolinho genérico de buteco. Quem vem pelo
            circuito encontra a ficha; quem já é da casa pede com a régua.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/cardapio">
              Ver tapas
            </Link>
            <a className="btn btn-ghost" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Pedir mesa no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
