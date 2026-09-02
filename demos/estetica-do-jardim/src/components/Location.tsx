import { business } from "@/data/business";

export function Location() {
  return (
    <section id="onde" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">
          Onde estamos
        </p>
        <h2 className="font-display mt-3 text-4xl font-semibold text-foreground md:text-5xl">
          La Plata, 699.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          {business.address.full}
          <br />
          {business.address.secondary}
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-brand/10 bg-surface">
          <iframe
            title="Mapa da Estética do Jardim na Rua La Plata"
            src={business.mapsEmbed}
            className="h-80 w-full border-0 md:h-[28rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="mt-6 max-w-2xl text-sm text-muted">{business.agendaNote}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold tracking-wide text-surface uppercase transition hover:bg-brand-deep"
          >
            Abrir no Google Maps
          </a>
          <a
            href={business.whatsappShare}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-brand/25 px-6 py-3 text-sm font-semibold tracking-wide text-brand uppercase transition hover:border-accent hover:text-accent"
          >
            Mensagem no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
