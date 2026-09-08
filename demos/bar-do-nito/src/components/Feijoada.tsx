import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Feijoada() {
  const ref = useReveal();

  return (
    <section className="section feijoada" id="feijoada">
      <div className="wrap feijoada-box reveal" ref={ref}>
        <div className="feijoada-copy">
          <p className="section-kicker">Sábado no Nito</p>
          <h2 className="section-title">Feijoada com samba.</h2>
          <p className="section-lead">
            Não é feijoada de hotel. É o almoço da esquina: prato da casa, samba no palco e
            mesa que precisa de reserva.
          </p>
          <p>
            Aos sábados o sobrado abre de manhã. Quem chega sem aviso encontra a casa cheia —
            o WhatsApp da reserva existe por isso.
          </p>
          <div className="hero-actions" style={{ marginTop: 22 }}>
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Reservar feijoada
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
              Ligar {SITE.phoneDisplay}
            </a>
          </div>
        </div>
        <aside className="feijoada-stamp">
          <em>todo sábado</em>
          <strong>Feijoada com Samba</strong>
          <p>Almoço no sobrado · Auxiliadora</p>
        </aside>
      </div>
    </section>
  );
}
