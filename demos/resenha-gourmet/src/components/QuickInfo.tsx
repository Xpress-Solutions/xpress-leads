import { SITE } from "../data/site";
import { useHours } from "../hooks/useHours";

export function QuickInfo() {
  const hours = useHours();

  return (
    <section className="quick" aria-label="Informações rápidas">
      <div className="wrap quick-grid">
        <article>
          <span>Onde</span>
          <strong>{SITE.address.street}</strong>
          <p>
            {SITE.address.neighborhood} · {SITE.address.city}
          </p>
        </article>
        <article>
          <span>Quando</span>
          <strong>{SITE.hoursLabel}</strong>
          <p>
            Hoje · {hours.headline} {hours.detail}
          </p>
        </article>
        <article>
          <span>O prato</span>
          <strong>Bolinho Resenha</strong>
          <p>Campeão do Comida di Buteco 2026 no RS</p>
        </article>
        <article>
          <span>A nota</span>
          <strong>{SITE.rating} no Google</strong>
          <p>{SITE.reviewsCount} avaliações · {SITE.priceRange}</p>
        </article>
      </div>
    </section>
  );
}
