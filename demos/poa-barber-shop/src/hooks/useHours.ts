import { useMemo } from "react";
import { WEEKLY_HOURS, type Weekday } from "../data/site";

function minutesNow(date: Date) {
  return date.getHours() * 60 + date.getMinutes();
}

export function useHours() {
  return useMemo(() => {
    const now = new Date();
    const weekday = now.getDay() as Weekday;
    const day = WEEKLY_HOURS[weekday];
    const nowMin = minutesNow(now);
    const open = Boolean(day.slots?.some((s) => nowMin >= s.startMin && nowMin < s.endMin));

    return {
      weekday,
      label: day.label,
      open,
      headline: open ? day.slots?.[0]?.label ?? "Aberto" : "Fechado",
      detail: open ? "Passa ou agenda no Booksy." : day.slots ? `Abre às ${day.slots[0].label.split("–")[0].trim()}` : "Volta segunda, 9h.",
    };
  }, []);
}
