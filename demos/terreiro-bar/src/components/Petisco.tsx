import { SITE } from "../data/site";

export function Petisco() {
  return (
    <section className="section axe" id="axe">
      <div className="wrap">
        <p className="kicker">{SITE.petisco.contest}</p>
        <h2 className="section-title">O axé no prato.</h2>
        <p className="section-lead">
          O Terreiro está no Comida di Buteco 2026. A Porção de Axé é a página que o concurso ainda
          não tinha — da casa, na Luiz Afonso.
        </p>
        <article className="axe-card">
          <img
            src="/fotos/acaraje.jpg"
            alt="Acarajé do Terreiro — dendê, vatapá e vinagrete na mesa da casa"
          />
          <div className="axe-copy">
            <p className="kicker">{SITE.petisco.contest}</p>
            <h3>{SITE.petisco.name}</h3>
            <p>{SITE.petisco.blurb}</p>
            <p>
              Na primeira quarta de cada mês a casa serve acarajé. No restante da semana, comida de
              boteco com a mesma raiz — e as torneiras da Cabocla ao lado.
            </p>
            <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Pedir mesa no WhatsApp
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
