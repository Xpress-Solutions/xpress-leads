import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div>
          <p className="kicker">A casa</p>
          <h2 className="title">O nome é a marca.</h2>
          <p>{SITE.identity}</p>
          <p>
            Na Elmo Lenz, 1480, Vera Cruz. Churrascaria-restaurante de Gravataí: almoço a
            partir das 11h, preço de casa (R$ 20–40) e atendimento que os fregueses tratam
            como família. Sem site até agora — a página é o balcão e o Google.
          </p>
        </div>
        <ul className="about-points">
          <li>Bar e Bar — nome duplicado, não rede</li>
          <li>Churrasco e almoço, não noite de pub</li>
          <li>4.7 no Google · casa de cidade</li>
          <li>Rua Elmo Lenz, 1480 — Gravataí</li>
        </ul>
      </div>
    </section>
  );
}
