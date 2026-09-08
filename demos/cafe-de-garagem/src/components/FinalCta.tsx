import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function FinalCta() {
  const ref = useReveal();

  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box reveal" ref={ref}>
          <p className="section-kicker">A porta está no nível da rua</p>
          <h2>Vem pra calçada.</h2>
          <p>
            WhatsApp, telefone ou Instagram. A garagem é pequena — melhor
            confirmar se tem mesa e se a coxinha ainda está no balcão.
          </p>
          <div className="final-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer">
              {SITE.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
