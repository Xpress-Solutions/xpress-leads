import { FEATURED } from "../data/menu";
import { SITE } from "../data/site";

export function Petisco() {
  return (
    <section className="section petisco" id="petisco">
      <div className="wrap petisco-grid">
        <figure className="petisco-photo">
          <img src={FEATURED.photo} alt={FEATURED.photoAlt} width={1021} height={682} />
          <figcaption className="petisco-badge">{FEATURED.edition}</figcaption>
        </figure>
        <div className="petisco-copy">
          <p className="kicker">O petisco da edição</p>
          <h2 className="section-title">Vem votar na Victor Barreto.</h2>
          <h3>{FEATURED.name}</h3>
          <p className="petisco-price">{FEATURED.price}</p>
          <p>{FEATURED.desc}</p>
          <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Quero o Deliciaporo
          </a>
        </div>
      </div>
    </section>
  );
}
