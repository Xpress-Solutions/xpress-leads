import { TEAM } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Equipe() {
  const ref = useReveal();

  return (
    <section className="section equipe" id="equipe">
      <div className="wrap">
        <div className="section-head reveal" ref={ref}>
          <p className="section-kicker">Quem corta</p>
          <h2 className="section-title">A equipe da casa.</h2>
          <p className="section-lead">
            Rafael, Meni, Ricardo e Nando. Cliente pede pelo nome — a cadeira tem dono.
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map((person) => (
            <article key={person.name} className="team-card">
              {person.photo ? (
                <img src={person.photo} alt={person.name} width={320} height={320} />
              ) : (
                <div className="team-fallback" aria-hidden="true">
                  {person.name.slice(0, 1)}
                </div>
              )}
              <div className="team-body">
                <p className="team-role">{person.role}</p>
                <h3>{person.name}</h3>
                <p>{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
