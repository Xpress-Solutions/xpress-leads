import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function SpinBacon() {
  const ref = useReveal();

  return (
    <section className="section spin" id="spin-bacon">
      <div className="wrap spin-grid reveal" ref={ref}>
        <figure className="spin-photo">
          <img
            src="/fotos/spin-bacon.jpg"
            alt="Spin Bacon da Rota 66 — petisco do Comida di Buteco 2026, foto de Israh Ramos"
          />
          <figcaption>Foto: Israh Ramos · Revista Sabores do Sul · Comida di Buteco 2026</figcaption>
        </figure>
        <div className="spin-copy">
          <p className="section-kicker">O petisco da edição</p>
          <h2 className="section-title">Spin Bacon.</h2>
          <p>
            A Rota 66 está no Comida di Buteco 2026 com o Spin Bacon. É o prato que coloca a
            Restinga no circuito — lancheria de avenida, não bar de revista.
          </p>
          <p>
            Temporada do concurso: petisco a R$ 40. A casa abre todos os dias, das 11h30 à
            meia-noite, na Nilo Wulff.
          </p>
          <div className="hero-actions">
            <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Quero o Spin Bacon
            </a>
            <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
