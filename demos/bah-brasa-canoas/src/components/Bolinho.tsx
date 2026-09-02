import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Bolinho() {
  const ref = useReveal();

  return (
    <section className="section bolinho" id="bolinho">
      <div className="wrap bolinho-grid reveal" ref={ref}>
        <div className="bolinho-photo">
          <img
            src="/fotos/bolinho-do-brasa.jpg"
            alt="Bolinho do Brasa no prato preto, crosta frita aberta, molho e tomate-cereja"
          />
        </div>
        <div className="bolinho-copy">
          <p className="kicker">{SITE.contest.name}</p>
          <h2 className="section-title">O Bolinho do Brasa.</h2>
          <p>
            É o petisco da casa no Comida di Buteco 2026 — o que leva o clique pra Canoas. Prato
            preto, crosta frita, molho no meio: o bolinho que a matéria publicou e o site da casa
            ainda não tinha.
          </p>
          <p>
            Durante o concurso o petisco saía a {SITE.contest.price}. Fora da temporada, o ponto
            continua o mesmo: Berto Círio, 329, São Luís.
          </p>
          <p className="credit">
            {SITE.contest.photoCredit} ·{" "}
            <a href={SITE.contest.url} target="_blank" rel="noreferrer">
              Ver a matéria
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
