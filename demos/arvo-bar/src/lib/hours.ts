import { WEEKLY_HOURS, type Weekday } from "../data/site";

export function getHoursNow(now = new Date()) {
  const weekday = now.getDay() as Weekday;
  const day = WEEKLY_HOURS[weekday];
  const minutes = now.getHours() * 60 + now.getMinutes();

  if (!day.slots) {
    return {
      weekday,
      label: day.label,
      open: false,
      headline: "Fechado",
      detail: "A gente volta terça, 18h.",
    };
  }

  const open = day.slots.some((slot) => minutes >= slot.startMin && minutes < slot.endMin);
  return {
    weekday,
    label: day.label,
    open,
    headline: open ? "Aberto agora" : "Fecha à meia-noite · abre de noite",
    detail: day.slots.map((s) => s.label).join(" · "),
  };
}
