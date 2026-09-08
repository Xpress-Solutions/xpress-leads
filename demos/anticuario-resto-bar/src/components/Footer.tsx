import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <span className="nav-script">{SITE.shortName}</span>
          <strong>{SITE.name}</strong>
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
          <a href="#cardapio">Cardápio</a>
          <a href="#casa">A casa</a>
          <a href="#localizacao">Onde fica</a>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <div className="foot-social">
          <strong>Fale com a casa</strong>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            {SITE.instagramHandle}
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
        Apresentação demonstrativa · {SITE.name} · Cidade Baixa, Porto Alegre. Fotos de
        listagens públicas (Restaurant Guru / Google / Feiras & Cia).
      </div>
    </footer>
  );
}
