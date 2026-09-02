import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div>
          <p className="kicker">A casa</p>
          <h2 className="title">Nome próprio. Ofício de espeto.</h2>
          <p>{SITE.identity}</p>
          <p>
            Fora do circuito do Centro: a Annalu acende às 18h na Gomes de Freitas, no Jardim
            Itu Sabará, e fecha à 23h. Churras pub de rua residencial — quem busca o petisco
            do concurso chega aqui, não em guia de terceiro.
          </p>
        </div>
        <ul className="about-points">
          <li>Annalu — nome da casa, não marca de rede</li>
          <li>Churras + pub: espeto e noite, não almoço de avenida</li>
          <li>Comida di Buteco 2024 e 2026</li>
          <li>Rua Gomes de Freitas, 421 — Jardim Itu Sabará</li>
        </ul>
      </div>
    </section>
  );
}
