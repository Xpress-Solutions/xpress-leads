import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <img src="/logo.png" alt={SITE.name} />
          <strong>{SITE.legalName}</strong>
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
          <a href="#cardapio">O almoço</a>
          <a href="#sobre">Desde 1988</a>
          <a href="#localizacao">Localização</a>
          <a href={SITE.cardapioWeb} target="_blank" rel="noreferrer">
            Cardápio digital
          </a>
        </div>
        <div className="foot-social">
          <strong>Fale com a casa</strong>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram {SITE.instagramHandle}
          </a>
          <a href={SITE.maps} target="_blank" rel="noreferrer">
            Google Maps
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="wrap foot-copy">
        Apresentação demonstrativa · {SITE.name} · Santana, Porto Alegre · desde {SITE.founded}
      </div>
    </footer>
  );
}
