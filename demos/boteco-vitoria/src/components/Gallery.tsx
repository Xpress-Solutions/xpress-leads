import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  { src: "/fotos/ambiente.jpg", alt: "Salão interno do Boteco Vitória, com placas e bufê" },
  { src: "/fotos/bufe.jpg", alt: "Bufê de feijoada do Boteco Vitória" },
  { src: "/fotos/feijoada.jpg", alt: "Prato de feijoada servido no Vitória" },
  { src: "/fotos/cachaca.jpg", alt: "Cachaça 51 e placas na parede do boteco" },
  { src: "/fotos/petisco-cdb.jpg", alt: "Petisco do Boteco Vitória no Comida di Buteco" },
  { src: "/fotos/varal.jpg", alt: "Varal d’Praia, petisco do Comida di Buteco 2024" },
];

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Galeria</p>
        <h2 className="section-title">O clima do Vitória.</h2>
        <p className="section-lead">
          Ambiente, comida, chope e gente. Fotos de referência da demo — o Instagram da casa
          tem o dia a dia real.
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
