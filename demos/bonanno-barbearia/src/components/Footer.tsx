import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <img src="/logo.jpeg" alt={SITE.name} />
          <strong>Bonanno</strong>
          <p>
            {SITE.tagline}
            <br />
            {SITE.address.street}
            <br />
            {SITE.address.neighborhood} · {SITE.address.city}
          </p>
        </div>
        <div className="foot-links">
          <strong>No site</strong>
          <a href="#servicos">Serviços</a>
          <a href="#equipe">Equipe</a>
          <a href="#localizacao">Localização</a>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <div className="foot-social">
          <strong>Fale com a casa</strong>
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={SITE.booksy} target="_blank" rel="noreferrer">
            Booksy
          </a>
          <a href={SITE.maps} target="_blank" rel="noreferrer">
            Google Maps
          </a>
        </div>
      </div>
      <div className="wrap foot-copy">
        Apresentação demonstrativa · {SITE.name} · {SITE.address.neighborhood}, {SITE.address.city}
      </div>
    </footer>
  );
}
