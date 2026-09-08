import { business, hours } from "@/data/business";
import { Button } from "@/components/ui/Button";

export function Localizacao() {
  return (
    <section id="localizacao" className="bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">Onde</p>
          <h2 className="font-display mt-2 text-5xl text-foreground">Vasco da Gama, 207.</h2>
          <p className="mt-4 text-foreground/70">
            Casarão no coração do Bom Fim. Mesas na calçada, barril na porta, vitrine de
            garrafas atrás da grade mostarda.
          </p>
          <p className="mt-6 text-lg text-foreground">{business.address.full}</p>
          <a href={business.phoneLink} className="mt-2 inline-block text-accent hover:underline">
            {business.phone}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={business.mapsUrl} external>
              Como chegar
            </Button>
            <Button href={business.phoneLink} variant="ghost">
              Ligar
            </Button>
          </div>

          <ul className="mt-10 space-y-2 border-t border-accent/15 pt-6 text-sm">
            {hours.map((row) => (
              <li key={row.day} className="flex justify-between gap-4">
                <span className="text-foreground/55">{row.day}</span>
                <span className={row.hours === "Fechado" ? "text-foreground/40" : "text-foreground"}>
                  {row.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-h-[320px] overflow-hidden border border-accent/15">
          <iframe
            title="Casa Vasco no Google Maps"
            src={business.mapsEmbed}
            className="h-full min-h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
