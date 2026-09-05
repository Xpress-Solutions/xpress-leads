import { useEffect, useState } from "react";
import { WEEKLY_HOURS, type Weekday } from "../data/site";

export type HoursStatus = {
  weekday: Weekday
  label: string
  open: boolean
  headline: string
  detail: string
};

function saoPauloNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const weekdayMap: Record<string, Weekday> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const weekday = weekdayMap[parts.find((p) => p.type === "weekday")?.value ?? "Sun"] ?? 0;
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);

  return { weekday, minutes: hour * 60 + minute };
}

function previousDay(day: Weekday): Weekday {
  return (day === 0 ? 6 : day - 1) as Weekday;
}

function formatUntil(endMin: number) {
  const normalized = endMin >= 24 * 60 ? endMin - 24 * 60 : endMin;
  const h = Math.floor(normalized / 60)
    .toString()
    .padStart(2, "0");
  const m = (normalized % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
}

export function getHoursStatus(): HoursStatus {
  const now = saoPauloNow();
  const today = WEEKLY_HOURS[now.weekday];

  const lateFromYesterday = WEEKLY_HOURS[previousDay(now.weekday)].slots?.find(
    (slot) => slot.endMin > 24 * 60 && now.minutes < slot.endMin - 24 * 60,
  );

  if (lateFromYesterday) {
    return {
      weekday: now.weekday,
      label: today.label,
      open: true,
      headline: "Aberto",
      detail: `até ${formatUntil(lateFromYesterday.endMin)}`,
    };
  }

  const current = today.slots?.find(
    (slot) => now.minutes >= slot.startMin && now.minutes < slot.endMin,
  );

  if (current) {
    return {
      weekday: now.weekday,
      label: today.label,
      open: true,
      headline: "Aberto",
      detail: `até ${formatUntil(current.endMin)}`,
    };
  }

  const upcoming = today.slots?.find((slot) => now.minutes < slot.startMin);
  if (upcoming) {
    return {
      weekday: now.weekday,
      label: today.label,
      open: false,
      headline: "Abre hoje",
      detail: `às ${formatUntil(upcoming.startMin)}`,
    };
  }

  return {
    weekday: now.weekday,
    label: today.label,
    open: false,
    headline: today.slots ? "Já encerramos" : "Fechado hoje",
    detail: today.slots ? "volta no próximo expediente" : "domingo o campus descansa",
  };
}

export function useHours() {
  const [status, setStatus] = useState<HoursStatus>(() => getHoursStatus());

  useEffect(() => {
    const tick = () => setStatus(getHoursStatus());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return status;
}
