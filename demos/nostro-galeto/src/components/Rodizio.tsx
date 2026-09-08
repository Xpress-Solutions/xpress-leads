import { ENTRADAS, RODIZIO } from "../data/menu";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Rodizio() {
  const ref = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">O que chega na mesa</p>
        <h2 className="section-title">Rodízio de galeto e massas.</h2>
        <p className="section-lead">
          Abre com agnoline, segue polenta frita, maionese caseira e o galeto ao primo canto.
          Depois as massas — tortéi, nhoque, lasanha, ravióli, espaguete, caneloni. Prove um pouco
          de cada.
        </p>
        <div className="menu-grid">
          {RODIZIO.map((item) => (
            <article className="dish" key={item.name}>
              {item.tag ? <span className="dish-tag">{item.tag}</span> : null}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <h3
          className="section-title"
          style={{ fontSize: "clamp(1.8rem, 5vw, 2.6rem)", marginTop: 48 }}
        >
          Antes do assado
        </h3>
        <div className="menu-grid">
          {ENTRADAS.map((item) => (
            <article className="dish" key={item.name}>
              {item.tag ? <span className="dish-tag">{item.tag}</span> : null}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <p className="menu-note">
          Preços e porções mudam. Confirme no salão, pelo telefone {SITE.phoneDisplay} ou no{" "}
          <a href={SITE.ifood} target="_blank" rel="noreferrer" style={{ color: "var(--brand)" }}>
            iFood
          </a>
          .
        </p>
      </div>
    </section>
  );
}
