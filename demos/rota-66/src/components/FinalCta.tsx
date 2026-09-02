import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="pedir">
      <div className="wrap">
        <div className="final-box">
          <p className="section-kicker">Extremo Sul</p>
          <h2>A Restinga já tem página da casa.</h2>
          <p>Spin Bacon, horário na Nilo Wulff e o WhatsApp no mesmo lugar.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
              Ligar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
