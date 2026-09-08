import { SITE, TEAM } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Team() {
  const ref = useReveal();
  const tiago = TEAM[0];

  return (
    <section className="section team" id="tiago">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A cadeira</p>
        <h2 className="section-title">Tiago B. Gonçalves.</h2>
        <div className="team-grid">
          <figure className="team-photo">
            <img src={tiago.photo} alt="Tiago B. Gonçalves, barbeiro da Gentlemen's BarberShop" />
            <figcaption>{tiago.role}</figcaption>
          </figure>
          <div className="team-copy">
            <p>{tiago.bio}</p>
            <p>
              Quase toda avaliação do Booksy cita o mesmo nome. Não é equipe de quatro cadeiras — é o
              barbeiro da Félix da Cunha, atualizando o corte de quem já não troca de profissional.
            </p>
            <ul className="team-points">
              <li>Único barbeiro listado no Booksy da casa.</li>
              <li>Clientes falam de tesoura, pontualidade e conversa.</li>
              <li>Dono da cadeira desde a abertura, em 2014.</li>
            </ul>
            <div className="loc-actions">
              <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                Falar com o Tiago
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
