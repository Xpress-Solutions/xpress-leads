import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="about-bg" aria-hidden="true">
        <img src="/fotos/orla.jpg" alt="" />
      </div>
      <div className="wrap about-copy reveal" ref={ref}>
        <p className="kicker">Sobre a casa</p>
        <h2 className="section-title">Ponto de orla, não de avenida.</h2>
        <p>{SITE.identity}</p>
        <p>
          Quem senta aqui descreve o mesmo clima: arejado, acolhedor, comida quente. A
          Beladora fica na Av. Guaíba, em Ipanema — calçadão, pôr do sol e mesa até 1h.
        </p>
        <ul className="about-points">
          <li>Av. Guaíba, 10748 — Ipanema, Porto Alegre</li>
          <li>Comida di Buteco 2026 · Espetinho Beladora</li>
          <li>Terça a domingo, horários variados até 1h</li>
        </ul>
      </div>
    </section>
  );
}
