import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Bolinho() {
  const ref = useReveal();

  return (
    <section className="section bolinho" id="bolinho">
      <div className="wrap bolinho-grid reveal" ref={ref}>
        <figure className="bolinho-photo">
          <img
            src="/fotos/bolinho-resenha.jpg"
            alt="Bolinho Resenha: croquetes dourados na tábua, pimenta-biquinho, chimichurri e molhos da casa"
          />
          <figcaption>{SITE.photoCredit}</figcaption>
        </figure>
        <div className="bolinho-copy">
          <p className="section-kicker">O petisco do concurso</p>
          <h2 className="section-title">Bolinho Resenha.</h2>
          <p>
            Bolinho de verduras com bacon e queijo, acompanhado da maionese da casa
            e chimichurri. Foi com esse prato que a Resenha Gourmet venceu o
            circuito de Porto Alegre do Comida di Buteco 2026 e representou o
            Rio Grande do Sul na fase nacional.
          </p>
          <p>
            Chegue pelo bolinho. A casa está na Av. do Forte e o petisco ainda
            não tinha página — agora tem.
          </p>
          <ul className="bolinho-facts">
            <li>Verdura + bacon + queijo</li>
            <li>Maionese da casa e chimichurri</li>
            <li>R$ 40 na temporada do concurso</li>
            <li>Campeão regional · finalista nacional</li>
          </ul>
          <div className="hero-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Quero o bolinho
            </a>
            <a className="btn btn-ghost" href="#cardapio">
              Ver almoço e noite
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
