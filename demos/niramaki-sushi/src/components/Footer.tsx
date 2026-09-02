import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <img src="/logo.jpeg" alt={SITE.name} />
          <strong>{SITE.name}</strong>
          <p>
            {SITE.address.street}
            <br />
            {SITE.address.neighborhood} — {SITE.address.city}/{SITE.address.state}
          </p>
          <p>
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          </p>
        </div>
        <div className="foot-links">
          <strong>No site</strong>
          <a href="#cardapio">Cardápio</a>
          <a href="#sobre">A casa</a>
          <a href="#localizacao">Onde fica</a>
          <a href={SITE.menuUrl} target="_blank" rel="noreferrer">
            Cardápio digital
          </a>
        </div>
        <div className="foot-social">
          <strong>Fale com a casa</strong>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram {SITE.instagramHandle}
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
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
