"use client";

import { HOURS_NOTE, SITE, WEEKLY_HOURS, type Weekday } from "@/data/site";
import { getHoursState } from "@/lib/hours";
import { useEffect, useState } from "react";

const DAYS: Weekday[] = [1, 2, 3, 4, 5, 6, 0];

export function Localizacao() {
  const [hours, setHours] = useState(() => getHoursState());

  useEffect(() => {
    setHours(getHoursState());
  }, []);

  return (
    <section className="section border-t border-[color:var(--line)]" id="localizacao">
      <div className="wrap">
        <p className="kicker">Onde</p>
        <h2 className="section-title mt-4">A República, 657.</h2>
        <p className="section-lead mt-5">
          {SITE.address.full}
          <br />
          {SITE.address.nearby}
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="hero-door min-h-[320px] overflow-hidden rounded-sm">
            <iframe
              title="Mapa do Olivos 657 na Cidade Baixa"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full border-0 grayscale contrast-125"
            />
          </div>

          <aside className="bg-[color:var(--surface)] p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="kicker">Hoje · {hours.label}</p>
                <p className="font-display mt-3 text-3xl">{hours.headline}</p>
                <p className="mt-2 text-sm text-[color:var(--foreground)]/65">{hours.detail}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-[0.68rem] tracking-[0.14em] uppercase ${
                  hours.open
                    ? "bg-[color:var(--brand)] text-[#14180f]"
                    : "border border-[color:var(--line)] text-[color:var(--muted)]"
                }`}
              >
                {hours.open ? "Aberto" : "Fechado"}
              </span>
            </div>

            <ul className="mt-8 space-y-3 text-sm">
              {DAYS.map((day) => {
                const item = WEEKLY_HOURS[day];
                const isToday = hours.weekday === day;
                return (
                  <li
                    key={day}
                    className={`flex justify-between gap-4 border-b border-[color:var(--line)] pb-2 ${
                      isToday ? "text-[color:var(--brand)]" : "text-[color:var(--foreground)]/70"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span>{item.slots?.map((s) => s.label).join(" · ") ?? "Fechado"}</span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-[color:var(--muted)]">{HOURS_NOTE}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-brand" href={SITE.maps} target="_blank" rel="noreferrer">
                Abrir no Maps
              </a>
              <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                Ligar
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
