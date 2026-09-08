import { TEAM } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Team() {
  const ref = useReveal();

  return (
    <section className="section team" id="equipe">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Quem corta</p>
        <h2 className="section-title">Anderson e a gurizada.</h2>
        <p className="section-lead">
          A Strong não é franquia. É o Anderson — ex-atleta, dono da cadeira — e a equipe da Dr.
          Flores. Cliente do Centro chama pelo nome.
        </p>
        <div className="team-grid">
          {TEAM.map((person) => (
            <article className="team-card" key={person.name}>
              <h3>{person.name}</h3>
              <small>{person.role}</small>
              <p>{person.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
