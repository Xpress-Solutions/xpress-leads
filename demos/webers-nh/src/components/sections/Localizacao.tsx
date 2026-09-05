import { business, hours } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Localizacao() {
  return (
    <section id="localizacao" className="bg-weber-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          title="Na 24 de Maio"
          subtitle="Rincão / Vila Rosa — o estacionamento costuma encher antes do meio-dia."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="rounded-sm bg-weber-linen p-6">
              <h3 className="font-display text-2xl text-weber-brand">Endereço</h3>
              <p className="mt-3 text-weber-ink/80">
                {business.address.street}
                <br />
                {business.address.neighborhood}
                <br />
                {business.address.city} — {business.address.state}
                <br />
                CEP {business.address.zip}
              </p>

              <h3 className="font-display mt-6 text-2xl text-weber-brand">
                Telefone
              </h3>
              <a
                href={business.phoneLink}
                className="mt-2 inline-block text-lg font-semibold text-weber-brand hover:underline"
              >
                {business.phone}
              </a>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={business.mapsUrl} external>
                  Abrir no Google Maps
                </Button>
                <Button href={business.phoneLink} variant="secondary">
                  Ligar agora
                </Button>
              </div>
            </div>

            <div className="mt-6 rounded-sm border border-weber-muted/25 p-6">
              <h3 className="font-display text-2xl text-weber-brand">Horários</h3>
              <p className="mt-1 text-xs text-weber-muted">Almoço — só almoço.</p>
              <ul className="mt-4 space-y-2">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between text-sm text-weber-ink/75"
                  >
                    <span className="font-medium text-weber-ink">{h.day}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-weber-muted/20">
            <iframe
              title="Localização do Restaurante Weber's no Google Maps"
              src="https://maps.google.com/maps?q=Restaurante%20Weber%27s%20Vinte%20e%20Quatro%20de%20Maio%20222%20Novo%20Hamburgo&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="h-[420px] w-full border-0 lg:h-full lg:min-h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
