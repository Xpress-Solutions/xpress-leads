import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function Localizacao() {
  return (
    <section id="local" className="bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
        <div>
          <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-accent uppercase">
            República 409
          </p>
          <h2 className="font-display mt-3 text-5xl leading-[0.92] md:text-6xl">
            No fervo da Cidade Baixa.
          </h2>
          <p className="mt-5 text-foreground/78">
            {site.address.full}. {site.address.nearby}.
          </p>
          <ul className="mt-8 space-y-2 text-sm">
            {site.hours.map((row) => (
              <li key={row.day} className="flex justify-between border-b border-foreground/8 py-2">
                <span className="text-muted">{row.day}</span>
                <span className="text-foreground">{row.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted">{site.hoursNote}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.maps}>Como chegar</Button>
            <Button href={`tel:${site.phoneTel}`} variant="ghost">
              {site.phoneDisplay}
            </Button>
          </div>
        </div>
        <div className="min-h-[320px] overflow-hidden border border-foreground/10">
          <iframe
            title="Mapa da Pinacoteca Café na Rua da República"
            src={site.mapsEmbed}
            className="h-full min-h-[320px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
