import { SITE } from "@/data/site";

export function Local() {
  return (
    <section id="local" className="section bg-[color:var(--linen)] text-[color:var(--ink)]">
      <div className="wrap">
        <p className="kicker !text-[#7a6236]">Onde fica</p>
        <h2 className="font-display mt-3 text-[clamp(2.4rem,6vw,4rem)] leading-[0.95]">
          Rua Jacinto Gomes, 209.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="min-h-[320px] overflow-hidden rounded-[24px] border border-black/8">
            <iframe
              title="Mapa — Jacinto Pane & Cucina"
              src={SITE.mapsEmbed}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-[24px] bg-white p-6 shadow-[var(--shadow)]">
            <p className="font-display text-3xl text-[color:var(--background)]">
              Aberto agora?
            </p>
            <p className="mt-2 text-[#5a6570]">{SITE.hoursNote}</p>
            <ul className="mt-6 grid gap-2">
              {SITE.hours.map((row) => (
                <li
                  key={row.day}
                  className="flex justify-between border-b border-black/6 py-2 text-sm"
                >
                  <span>{row.day}</span>
                  <span
                    className={
                      row.hours === "Fechado" ? "text-[#8a7a68]" : "font-semibold"
                    }
                  >
                    {row.hours}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-ink" href={SITE.maps}>
                Como chegar
              </a>
              <a className="btn btn-ghost !text-[color:var(--ink)] !border-[#003364]/25" href={SITE.whatsapp}>
                Encomendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
