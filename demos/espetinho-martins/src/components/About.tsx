import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div>
          <p className="kicker">A casa</p>
          <h2 className="title">Nome do dono. Ofício de espeto.</h2>
          <p>{SITE.identity}</p>
          <p>
            Fora do circuito do Centro: o Martins acende às 18h na Circular, Vila Jardim, e vai até
            meia-noite. Espetinho de esquina — quem busca o Kachurrasco chega aqui, não em guia de
            terceiro.
          </p>
          <p>{SITE.pitch}</p>
        </div>
        <ul className="about-points">
          <li>Martins — nome da casa, não marca de rede</li>
          <li>Espetinho de esquina: ofício no letreiro</li>
          <li>Kachurrasco no Comida di Buteco 2026</li>
          <li>Av. Circular, 593 — Vila Jardim</li>
          <li>Segunda a sábado, 18h à 0h</li>
        </ul>
      </div>
    </section>
  );
}
