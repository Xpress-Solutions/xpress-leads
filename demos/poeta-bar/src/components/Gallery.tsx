import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  { src: "/fotos/hero.png", alt: "Fachada do Poeta na Rua dos Andradas, com letreiro e toldo" },
  { src: "/fotos/coco-crispy.png", alt: "Cocó Crispy, petisco do Comida di Buteco 2026" },
  { src: "/fotos/xis-chope.png", alt: "Xis e caneca de chope no balcão" },
  { src: "/fotos/ambiente.png", alt: "Interior do bar com luz baixa e madeira" },
  { src: "/fotos/calcada.png", alt: "Mesas na calçada da Andradas ao entardecer" },
];

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Galeria</p>
        <h2 className="section-title">Fachada, petisco, letreiro.</h2>
        <p className="section-lead">
          Atmosfera da casa para a demo. O dia a dia real está no Instagram @poetabarbr.
        </p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
            </figure>
          ))}
        </div>
        <a className="gallery-link" href={SITE.instagram} target="_blank" rel="noreferrer">
          Veja mais no Instagram →
        </a>
      </div>
    </section>
  );
}
