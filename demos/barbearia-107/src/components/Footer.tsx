import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <img src="/logo.jpeg" alt={SITE.name} />
          <strong>Barbearia 107</strong>
          <p>
            {SITE.address.street}
            <br />
            {SITE.address.neighborhood} — {SITE.address.city}
          </p>
          <p>
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          </p>
        </div>
        <div className="foot-links">
          <strong>No site</strong>
          <a href="#combos">Combos</a>
          <a href="#fabricio">Fabricio</a>
          <a href="#localizacao">Onde fica</a>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <div className="foot-social">
          <strong>Marcar horário</strong>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={SITE.booksy} target="_blank" rel="noreferrer">
            Booksy
          </a>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            {SITE.instagramHandle}
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
