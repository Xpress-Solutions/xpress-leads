import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <small>Lanches</small>
          <strong>Nova Bréscia</strong>
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
          <a href="#sobre">A casa</a>
          <a href="#localizacao">Onde fica</a>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <div className="foot-social">
          <strong>A esquina</strong>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            {SITE.instagramHandle}
          </a>
          <a href={SITE.maps} target="_blank" rel="noreferrer">
            Google Maps
          </a>
          <span>Sem delivery · débito, PIX ou dinheiro</span>
        </div>
      </div>
      <div className="wrap foot-copy">
        Apresentação demonstrativa · {SITE.name} · São Geraldo, Porto Alegre · desde {SITE.founded}
      </div>
    </footer>
  );
}
