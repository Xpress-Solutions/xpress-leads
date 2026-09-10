import { useReveal } from "../hooks/useReveal";

const SHOTS = [
  {
    src: "/fotos/hero.jpeg",
    caption: "Cadeira e vitrine",
    alt: "Cliente na cadeira da Office Barber, vitrine para a Barão do Amazonas",
  },
  {
    src: "/fotos/fade-vitrine.jpeg",
    caption: "Fade na porta",
    alt: "Fade executado na Office Barber, com a porta de rua ao fundo",
  },
  {
    src: "/fotos/cadeira.jpeg",
    caption: "Ofício",
    alt: "Barbeiro da Office Barber executando desenho no fade",
  },
  {
    src: "/fotos/corte-desenho.jpeg",
    caption: "Detalhe",
    alt: "Corte com desenho feito na Office Barber",
  },
  {
    src: "/fotos/espelho.jpeg",
    caption: "Espelho da casa",
    alt: "Espelho com LED e logo Office Barber ao fundo",
  },
] as const;

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section" id="galeria">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="kicker">A loja</p>
          <h2 className="section-title">Fotos da casa.</h2>
          <p className="section-lead">
            Interior e cortes publicados no Booksy da Office Barber — a mesma
            vitrine da Barão, não banco de imagem.
          </p>
        </div>
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
