import { TEAM } from "../data/services";
import { useReveal } from "../hooks/useReveal";

export function Team() {
  const ref = useReveal();

  return (
    <section className="section" id="equipe">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">Quem corta</p>
          <h2 className="section-title">A confraria da cadeira.</h2>
          <p className="section-lead">
            Os nomes que aparecem nas avaliações do Booksy. Escolhe o profissional e reserva
            direto.
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
