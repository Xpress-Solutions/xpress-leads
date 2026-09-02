import { WEEKLY_HOURS, type Weekday } from "../data/site";

function minutesNow(d: Date) {
  return d.getHours() * 60 + d.getMinutes();
}

export function useHours(now = new Date()) {
  const weekday = now.getDay() as Weekday;
  const today = WEEKLY_HOURS[weekday];
  const mins = minutesNow(now);
  const open = Boolean(
    today.slots?.some((slot) => mins >= slot.startMin && mins < slot.endMin)
  );

  return {
    weekday,
    label: today.label,
    open,
    hours: today.slots?.[0]?.label ?? "Fechado",
  };
}
