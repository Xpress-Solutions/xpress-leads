import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div>
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">Resenha é encontro. Gourmet é o capricho.</h2>
          <p>{SITE.identity}</p>
          <p>
            Na Vila Ipiranga, no 1220 da Av. do Forte, a mesa começa cedo e
            termina tarde. Reviews falam de prato elaborado com preço de
            boteco, cerveja gelada e atmosfera caseira — alto astral sem pose
            de restaurante.
          </p>
          <ul className="about-points">
            <li>Boteco elevado de avenida, não pub escondido</li>
            <li>Abre 11h — almoço de terça e resenha de sábado</li>
            <li>Mesas ao ar livre, entrega e para levar</li>
            <li>Campeão do Comida di Buteco 2026 no RS</li>
          </ul>
        </div>
        <aside className="about-card">
          <p className="section-kicker">Por que o site</p>
          <p>{SITE.pitch}</p>
          <p className="about-approach">{SITE.approach}</p>
        </aside>
      </div>
    </section>
  );
}
