import { useEffect, useState } from "react";
import { WEEKLY_HOURS, type Weekday } from "../data/site";

function nowInPoa() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const weekdayRaw = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);

  const map: Record<string, Weekday> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  return { weekday: map[weekdayRaw] ?? 0, minutes: hour * 60 + minute };
}

export function useHours() {
  const [state, setState] = useState(() => nowInPoa());

  useEffect(() => {
    const id = window.setInterval(() => setState(nowInPoa()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const day = WEEKLY_HOURS[state.weekday];
  const open = Boolean(
    day.slots?.some((slot) => state.minutes >= slot.startMin && state.minutes < slot.endMin),
  );

  const next = day.slots?.find((slot) => state.minutes < slot.startMin);

  return {
    weekday: state.weekday,
    label: day.label,
    open,
    headline: open ? "Aberto agora" : "Fechado agora",
    detail: open
      ? day.slots?.map((s) => s.label).join(" · ")
      : next
        ? `Abre às ${next.label.split("–")[0]?.trim()}`
        : day.slots
          ? day.slots.map((s) => s.label).join(" · ")
          : "Confira o horário",
  };
}
