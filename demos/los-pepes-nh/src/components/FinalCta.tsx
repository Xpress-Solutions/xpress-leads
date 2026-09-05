import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function FinalCta() {
  const ref = useReveal();

  return (
    <section className="final-cta" id="agenda">
      <div className="wrap final-cta-inner reveal" ref={ref}>
        <img src="/logo.jpeg" alt="" width={88} height={88} />
        <h2>Vem pra Los Pepes.</h2>
        <p>Escolhe o combo, marca a cadeira. Corte, barba e sobrancelha no Centro de Novo Hamburgo.</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.booksy} target="_blank" rel="noreferrer">
            Agendar horário
          </a>
          <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer">
            Chamar no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
