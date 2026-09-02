import { SITE } from "../data/site.ts";

export function Dish() {
  return (
    <section className="section dish" id="petisco">
      <div className="wrap dish-grid">
        <figure className="dish-photo">
          <img
            src={SITE.photoSrc}
            alt="Bruscheta Golden do Golden Bull — pães abertos com carne desfiada, molho dourado e alecrim"
          />
          <figcaption>{SITE.photoCredit}</figcaption>
        </figure>
        <div>
          <p className="kicker">{SITE.dishCircuito}</p>
          <h2 className="display">{SITE.dish}</h2>
          <p className="price">{SITE.dishPrice}</p>
          <p className="lead">{SITE.dishCopy}</p>
          <p className="lead" style={{ marginTop: 14 }}>
            O concurso pedia verdura na criação. Aqui o alecrim entra no tabuleiro — e o dourado do molho leva o nome da casa.
          </p>
        </div>
      </div>
    </section>
  );
}
