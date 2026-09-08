import { TEAM } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Team() {
  const ref = useReveal();

  return (
    <section className="section team" id="equipe">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="kicker">Quem corta</p>
          <h2 className="section-title">A equipe.</h2>
          <p className="section-lead">
            Camiseta preta, selo dourado no peito. Os dois nomes que o Booksy
            devolve quando alguém avalia a Office Barber.
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map((person) => (
            <article className="member" key={person.name}>
              <img src={person.photo} alt={person.name} />
              <div className="member-body">
                <p className="role">{person.role}</p>
                <h3>{person.name}</h3>
                <p>{person.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
