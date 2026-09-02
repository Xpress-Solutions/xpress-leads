import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="casa">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">A Felizardo, não Florianópolis.</h2>
          <p>{SITE.identity}</p>
          <p>{SITE.notFloripa}</p>
          <ul className="about-points">
            <li>Rua Felizardo, 336 — Jardim Botânico, Porto Alegre</li>
            <li>Legado familiar de mais de 50 anos no ofício</li>
            <li>Peça o Daniel — os clientes já pedem</li>
          </ul>
        </div>
        <aside className="about-panel">
          <strong>336</strong>
          <p>
            Número da casa na Felizardo. Sem site de terceiro, sem Instagram local, sem o domínio
            de Santa Catarina. Quem senta aqui conhece o nome da cadeira.
          </p>
        </aside>
      </div>
    </section>
  );
}
