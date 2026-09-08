import { TEAM } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Team() {
  const ref = useReveal();

  return (
    <section className="section team" id="equipe">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">Quem corta</p>
          <h2 className="section-title">Os guri da cadeira.</h2>
          <p className="section-lead">
            Cliente marca pelo nome. As avaliações do Booksy citam Lucas, Anderson, Antônio,
            Vitor e Diego — não um “profissional disponível”.
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map((person) => (
            <article className="team-card" key={person.name}>
              <img src={person.photo} alt={person.name} />
              <div>
                <h3>{person.name}</h3>
                <span>{person.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
