import { TEAM } from "../data/team";
import { useReveal } from "../hooks/useReveal";

export function Team() {
  const ref = useReveal();

  return (
    <section className="section team" id="equipe">
      <div className="wrap">
        <div className="section-head reveal" ref={ref}>
          <p className="section-kicker">Quem corta</p>
          <h2 className="section-title">A confraria na cadeira.</h2>
          <p className="section-lead">
            Os clientes pedem pelo nome. Bruno Galante abriu a casa em 2018; Igor, Fábio e
            Scheffer dividem as cadeiras.
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map((member) => (
            <article className="team-card" key={member.name}>
              <img src={member.photo} alt={member.alt} />
              <div>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
