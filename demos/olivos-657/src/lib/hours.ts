import { WEEKLY_HOURS, type Weekday } from "@/data/site";

export function getHoursState(now = new Date()) {
  const weekday = now.getDay() as Weekday;
  const minutes = now.getHours() * 60 + now.getMinutes();
  const today = WEEKLY_HOURS[weekday];

  if (!today.slots) {
    return {
      weekday,
      label: today.label,
      open: false,
      headline: "Fechado",
      detail: "A casa abre de quarta a domingo, a partir das 18h30.",
    };
  }

  const open = today.slots.some((slot) => minutes >= slot.startMin && minutes < slot.endMin);

  return {
    weekday,
    label: today.label,
    open,
    headline: open ? "Aberto agora" : "Fecha / ainda não abriu",
    detail: today.slots.map((s) => s.label).join(" · "),
  };
}
