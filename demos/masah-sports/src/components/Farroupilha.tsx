import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Farroupilha() {
  const ref = useReveal();
  return (
    <section className="section farro" id="farroupilha">
      <div className="wrap farro-grid reveal" ref={ref}>
        <figure className="farro-photo">
          <img
            src="/fotos/lacador.jpg"
            alt="O Laçador, petisco do Masah! Sports Bar no Comida di Buteco — foto Israh Ramos"
          />
          <figcaption>{SITE.photoCredit}</figcaption>
        </figure>
        <div>
          <span className="chip">Petisco da casa</span>
          <h2 className="title">Farroupilha.</h2>
          <p className="lead">
            Pão ciabatta com pasta de alho, iscas de entrecôte grelhadas, camada de queijo, toque
            de sweet chilli Masah e crispy de alho-poró. É o prato que o concurso está falando —
            e que ainda não tem página da casa.
          </p>
          <p className="lead" style={{ marginTop: 14 }}>
            Em 2024 o Masah! entrou com O Laçador. Em 2025/26 o nome na ficha é Farroupilha — a
            avenida onde a loja 03 abre à noite.
          </p>
          <div className="hero-actions" style={{ marginTop: 20 }}>
            <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Reservar / perguntar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
