import { SITE } from "../data/site";

const SHOTS = [
  {
    src: "/fotos/fachada.jpg",
    alt: "Fachada de esquina da Larica na Av. Santos Dumont, 710, com a placa corten",
    caption: "A placa na esquina",
  },
  {
    src: "/fotos/interior.jpg",
    alt: "Salão com parede de telha ondulada, camisas da seleção e mesas de madeira",
    caption: "Telha, neon e a seleção na parede",
  },
  {
    src: "/fotos/maionese.jpg",
    alt: "Paula na cozinha com pastel no papel e a maionese da casa",
    caption: "Pastel e a maionese da avó",
  },
  {
    src: "/fotos/owners.jpg",
    alt: "Porta da Larica com a placa LARICA 4º DISTRITO",
    caption: "Quem toca a casa",
  },
] as const;

export function Gallery() {
  return (
    <section className="section gallery" id="galeria">
      <div className="wrap">
        <p className="kicker">A casa em foto</p>
        <h2 className="section-title">Fachada, salão, prato.</h2>
        <p className="lead">
          Fotos reais da esquina — não é stock. Mais do dia a dia no Instagram.
        </p>
        <div className="gallery-grid">
          {SHOTS.map((shot) => (
            <figure key={shot.src + shot.caption}>
              <img src={shot.src} alt={shot.alt} />
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
        <a className="ig-link" href={SITE.instagram} target="_blank" rel="noreferrer">
          {SITE.instagramHandle} no Instagram
        </a>
      </div>
    </section>
  );
}
