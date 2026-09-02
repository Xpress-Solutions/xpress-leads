import { business } from "@/data/business";
import { GardenMark } from "@/components/GardenMark";

export function Footer() {
  return (
    <footer className="bg-brand-deep py-14 text-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 md:flex-row md:px-6">
        <div>
          <div className="flex items-center gap-2.5">
            <GardenMark className="h-8 w-8 text-ipe" />
            <span className="font-display text-2xl">{business.name}</span>
          </div>
          <p className="mt-4 text-sm text-surface/60">
            {business.address.street}
            <br />
            {business.address.neighborhood}, {business.address.city} -{" "}
            {business.address.state}
          </p>
        </div>
        <p className="max-w-sm text-xs text-surface/40">
          Demo de apresentação Xpress. Horário e WhatsApp definitivo se confirmam
          no balcão — os diretórios atrasam.
        </p>
      </div>
    </footer>
  );
}
