import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function FinalCta() {
  const ref = useReveal();

  return (
    <section className="section final">
      <div className="final-bg" aria-hidden="true">
        <img src="/fotos/hero-prato.jpg" alt="" />
      </div>
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Vem</p>
        <h2 className="section-title">O clique cai aqui. Não no diretório.</h2>
        <p className="section-lead" style={{ color: "rgba(255,246,228,0.8)" }}>
          Horário, o que tem hoje e encomenda no WhatsApp da casa — {SITE.phoneDisplay}.
        </p>
        <div className="final-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="btn btn-accent" href={`tel:${SITE.phoneTel}`}>
            Ligar
          </a>
        </div>
      </div>
    </section>
  );
}
