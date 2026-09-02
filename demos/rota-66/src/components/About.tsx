import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div>
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">Ponto de avenida no Extremo Sul.</h2>
          <p>{SITE.identity}</p>
          <p>
            Evkrumenn Lancheria &amp; Restaurante, na Restinga desde 2019. Mesa ao ar livre,
            delivery e o movimento de quem mora no corredor da Nilo Wulff — do almoço ao
            último lanche da noite.
          </p>
        </div>
        <ul className="about-points">
          <li>
            <b>Restinga</b>
            <span>Av. Economista Nilo Wulff, 902 · CEP 91790-000</span>
          </li>
          <li>
            <b>Todos os dias</b>
            <span>11h30 à meia-noite</span>
          </li>
          <li>
            <b>Comida di Buteco 2026</b>
            <span>Spin Bacon — a Restinga no circuito</span>
          </li>
          <li>
            <b>{SITE.priceRange}</b>
            <span>Ticket de lancheria, não de tasting</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
