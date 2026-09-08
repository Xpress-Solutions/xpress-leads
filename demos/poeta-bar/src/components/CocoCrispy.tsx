import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function CocoCrispy() {
  const ref = useReveal();

  return (
    <section className="section coco" id="coco-crispy">
      <div className="wrap coco-grid reveal" ref={ref}>
        <div className="coco-photo">
          <img
            src="/fotos/coco-crispy.png"
            alt="Cocó Crispy: frango empanado no panko com crispy de alho-poró e molhos da casa"
          />
          <div className="coco-stamp">Comida di Buteco 2026</div>
        </div>
        <div className="coco-copy">
          <p className="section-kicker">O petisco da edição</p>
          <h2 className="section-title">Cocó Crispy.</h2>
          <p className="section-lead">
            Frango empanado na farinha panko. Acompanha crispy de alho-poró e molhos da casa.
            É o verso que o Poeta mandou para o concurso — e o que a mesa pede na Andradas.
          </p>
          <div className="coco-meta">
            <strong className="coco-price">R$ 40</strong>
            <span className="price-note">Preço do circuito 2026</span>
          </div>
          <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Quero o Cocó
          </a>
        </div>
      </div>
    </section>
  );
}
