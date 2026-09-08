import { TEAM } from "../data/site.ts";
import { useReveal } from "../hooks/useReveal.ts";

export function Equipe() {
  const ref = useReveal();

  return (
    <section className="section equipe" id="equipe">
      <div className="wrap">
        <div className="section-head reveal" ref={ref}>
          <p className="kicker">As cadeiras</p>
          <h2 className="section-title">Pepeu e Côco.</h2>
          <p className="lead">
            A casa tem nome de gente. No Booksy tu escolhe o barbeiro — o fundador ou o Côco.
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map((person) => (
            <article key={person.name} className="team-card">
              <img src={person.photo} alt={person.alt} />
              <div>
                <p className="kicker">{person.role}</p>
                <h3>{person.name}</h3>
                <p>{person.text}</p>
                <span>{person.handle}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
