import { SITE } from "../data/site.ts";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <strong>{SITE.shortName}</strong>
          <p>
            {SITE.address.street} · {SITE.address.neighborhood}
          </p>
        </div>
        <p>Marmoraria de avenida · Porto Alegre/RS · desde {SITE.founded}</p>
      </div>
    </footer>
  );
}
