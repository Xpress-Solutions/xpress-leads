import { useReveal } from "../hooks/useReveal";

const SHOTS = [
  {
    src: "/fotos/fachada.jpg",
    alt: "Fachada do Barril Pub na Av. Wenceslau Escobar: madeira, vermelho-tijolo e logo no barril",
    caption: "Fachada · Wenceslau Escobar, 2997",
  },
  {
    src: "/fotos/deck.jpg",
    alt: "Deck de madeira do Barril Pub com logo no barril e mesas na calçada",
    caption: "Deck e logo no barril",
  },
  {
    src: "/fotos/salao.jpg",
    alt: "Interior com balcão em U, cadeiras de madeira e lousa de cervejas",
    caption: "Salão e balcão em U",
  },
  {
    src: "/fotos/torneiras.jpg",
    alt: "Bruno servindo chope nas torneiras do Barril Pub",
    caption: "As torneiras da casa",
  },
  {
    src: "/fotos/jardim.jpg",
    alt: "Pátio do Barril com parede verde-floresta, fogo e cadeiras 1824",
    caption: "Jardim e parede verde",
  },
] as const;

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A casa em foto</p>
        <h2 className="section-title">Madeira, barril e pátio.</h2>
        <p className="section-lead">
          Fotos reais da Wenceslau — fachada, salão, torneiras e o jardim. Nenhuma stock de pub
          genérico.
        </p>
        <div className="gallery-grid">
          {SHOTS.map((shot) => (
            <figure key={shot.src}>
              <img src={shot.src} alt={shot.alt} />
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
