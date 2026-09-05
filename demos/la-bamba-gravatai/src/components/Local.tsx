import { SITE } from "@/data/site";

export function Local() {
  return (
    <section id="local" className="section">
      <div className="wrap grid gap-10 lg:grid-cols-2">
        <div>
          <p className="kicker mb-4">
            <span className="h-px w-8 bg-[color:var(--brand)]" />
            Onde fica
          </p>
          <h2 className="font-display text-[clamp(2.4rem,6vw,4rem)] leading-[0.92] uppercase text-[color:var(--ink)]">
            Av. Dorival, 184
          </h2>
          <p className="mt-4 text-lg text-[color:var(--ink)]/75">
            {SITE.address.full}
          </p>
          <a
            className="mt-2 inline-block text-xl font-bold text-[color:var(--brand)]"
            href={`tel:${SITE.phoneTel}`}
          >
            {SITE.phoneDisplay}
          </a>

          <ul className="mt-8 space-y-2">
            {SITE.hours.map((row) => (
              <li
                key={row.day}
                className="flex justify-between border-b border-black/8 py-2 text-sm"
              >
                <span className="font-semibold">{row.day}</span>
                <span
                  className={
                    row.hours === "Fechado"
                      ? "text-[color:var(--muted)]"
                      : "text-[color:var(--brand)]"
                  }
                >
                  {row.hours}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-brand" href={SITE.maps} target="_blank" rel="noreferrer">
              Abrir no Maps
            </a>
            <a className="btn btn-ink" href={`tel:${SITE.phoneTel}`}>
              Ligar agora
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] shadow-[var(--shadow)]">
          <iframe
            title="La Bamba no Google Maps"
            src={SITE.mapsEmbed}
            className="h-[420px] w-full border-0 lg:h-full lg:min-h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
