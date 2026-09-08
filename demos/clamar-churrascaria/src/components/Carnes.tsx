import { CORTES, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Carnes() {
  const ref = useReveal();

  return (
    <section className="section carnes" id="carnes">
      <div className="wrap reveal" ref={ref}>
        <p className="kicker">Na brasa</p>
        <h2 className="section-title">O que sai do fogo.</h2>
        <p className="section-lead">
          Não há cardápio online da Clamar — essa é a lacuna. Abaixo, o ofício de uma
          churrascaria de avenida. Preço e corte do dia: ligue.
        </p>
        <div className="corte-grid">
          {CORTES.map((corte) => (
            <article className="corte" key={corte.name}>
              <h3>{corte.name}</h3>
              <p>{corte.note}</p>
            </article>
          ))}
        </div>
        <figure className="carnes-photo">
          <img
            src="/fotos/carnes.png"
            alt="Prato da casa: picanha, costela, arroz e farofa"
          />
        </figure>
        <p className="carnes-note">
          Confirme o que tem hoje pelo {SITE.phoneDisplay}. Sem inventar rodízio que a casa
          não anunciou.
        </p>
      </div>
    </section>
  );
}
