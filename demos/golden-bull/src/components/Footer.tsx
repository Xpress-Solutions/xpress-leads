import { SITE } from "../data/site.ts";
import { WhatsAppIcon } from "./WhatsAppIcon.tsx";

export function Footer() {
  return (
    <>
      <footer className="foot">
        <div className="wrap">
          <p>
            <strong>GOLDEN BULL</strong>
          </p>
          <p>{SITE.address}</p>
          <p>{SITE.hours}</p>
          <p style={{ marginTop: 16 }}>
            Telefone e WhatsApp ainda não saem em guia público. O botão abre a ficha no
            Google — de lá dá para ligar ou traçar a rota até a Cipó, 1264.
          </p>
        </div>
      </footer>
      <div className="fab">
        <a href={SITE.maps} target="_blank" rel="noreferrer" aria-label="WhatsApp ou ligar pelo Google">
          <WhatsAppIcon />
        </a>
      </div>
    </>
  );
}
