import { DISH_2026, SITE } from "../data/site";

export function Dish() {
  return (
    <section className="section dish" id="bolinho">
      <div className="wrap dish-grid">
        <figure className="dish-photo">
          <img
            src="/fotos/bolinho-couve-sabores.jpg"
            alt="Bolinho de Couve da Vovó sobre folhas de couve, com pimenta-biquinho e pasta de alho-poró"
          />
          <figcaption className="dish-badge">Comida di Buteco {DISH_2026.year}</figcaption>
        </figure>
        <div className="dish-copy">
          <p className="kicker">O petisco da edição</p>
          <h2 className="section-title">{DISH_2026.name}</h2>
          <p>{DISH_2026.detail}</p>
          <p>
            Quem veio pelo concurso cai em ficha de terceiro. Aqui o bolinho tem o nome da
            casa, o horário de almoço e o telefone da Timóteo.
          </p>
          <div className="hero-actions dish-actions">
            <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Pedir no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
