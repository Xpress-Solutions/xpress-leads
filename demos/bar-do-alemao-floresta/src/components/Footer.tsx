import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="foot-name">Bar do Alemão</p>
        <p>{SITE.address}</p>
        <p>
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          {" · "}
          <a href={SITE.maps} target="_blank" rel="noreferrer">
            Mapa
          </a>
        </p>
        <p className="foot-copy">
          Demo Xpress · unidade da Floresta · {SITE.photoCredit}
        </p>
      </div>
    </footer>
  );
}
