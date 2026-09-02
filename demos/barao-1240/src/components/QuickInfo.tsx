import { SITE } from "../data/site";
import { useHours } from "../hooks/useHours";

export function QuickInfo() {
  const hours = useHours();

  return (
    <section className="strip" aria-label="Informações rápidas">
      <div className="wrap strip-grid">
        <div>
          <b>{hours.headline}</b>
          <span>
            {hours.label} · {hours.detail}
          </span>
          <div className={`pill ${hours.open ? "pill-on" : "pill-off"}`}>
            {hours.open ? "Aberto" : "Fechado"}
          </div>
        </div>
        <div>
          <b>{SITE.address.street}</b>
          <span>
            {SITE.address.neighborhood} · {SITE.address.city}
          </span>
        </div>
        <div>
          <b>{SITE.phoneDisplay}</b>
          <span>WhatsApp e telefone da casa</span>
        </div>
      </div>
    </section>
  );
}
