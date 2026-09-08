import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  {
    src: "/fotos/fachada.jpg",
    alt: "Fachada da Churrascaria Giovanaz com letreiro CHURRASCARIA em preto e GIOVANAZ em vermelho",
    caption: "O letreiro da Venâncio Aires",
  },
  {
    src: "/fotos/espeto.jpg",
    alt: "Linguiça e galeto no espeto da churrasqueira da casa",
    caption: "Espeto na brasa",
  },
  {
    src: "/fotos/salao-2.jpg",
    alt: "Mesas alinhadas no salão da Giovanaz, paredes brancas e forro de madeira",
    caption: "Salão pronto para o corrido",
  },
  {
    src: "/fotos/brasa.jpg",
    alt: "Fogo de lenha e espetos na churrasqueira da Giovanaz",
    caption: "A brasa da casa",
  },
  {
    src: "/fotos/salao-guia.jpg",
    alt: "Interior da Giovanaz com garçons no corredor central",
    caption: "Garçom no corredor",
  },
] as const;

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section galeria" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A casa de verdade</p>
        <h2 className="section-title">Fachada, espeto, salão.</h2>
        <p className="section-lead">
          Fotos da própria Giovanaz — Destino POA e Guia Porto Alegre. Sem banco de imagem.
        </p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
