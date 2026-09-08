import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Quintas() {
  const ref = useReveal();

  return (
    <section className="section quintas" id="quintas">
      <div className="wrap quintas-box reveal" ref={ref}>
        <p className="section-kicker">Quintas no Poeta</p>
        <h2 className="section-title">Quinta tem música. O resto da semana tem mesa.</h2>
        <p className="section-lead">
          O Instagram da casa reserva as quintas para o som. Nos outros dias o verso é outro: xis,
          Cocó Crispy, chope e a Andradas passando na calçada. Confirma a programação no
          @poetabarbr.
        </p>
        <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer">
          Ver as quintas no Instagram
        </a>
      </div>
    </section>
  );
}
