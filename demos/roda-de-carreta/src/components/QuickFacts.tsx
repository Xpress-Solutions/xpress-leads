import { SITE } from "../data/site";

export function QuickFacts() {
  return (
    <section className="facts" aria-label="Números da casa">
      <div className="wrap facts-grid">
        <article className="fact">
          <b>{SITE.cuts} cortes</b>
          <span>Espeto corrido</span>
        </article>
        <article className="fact">
          <b>{SITE.capacity}</b>
          <span>Salão de madeira</span>
        </article>
        <article className="fact">
          <b>Desde {SITE.founded}</b>
          <span>{SITE.foundedNote}</span>
        </article>
        <article className="fact">
          <b>35 CTG</b>
          <span>Ipiranga, 5300</span>
        </article>
      </div>
    </section>
  );
}
