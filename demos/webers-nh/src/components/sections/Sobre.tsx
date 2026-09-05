import { amenities, business } from "@/data/business";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Sobre() {
  return (
    <section id="casa" className="bg-weber-linen py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              title="Orgulho da casa alemã"
              subtitle="Abriu as portas em 10 de julho de 1998 e manteve o caráter familiar."
            />
            <div className="space-y-4 text-weber-ink/80">
              <p className="font-display text-2xl leading-snug text-weber-ink">
                Quase 30 anos de almoço no Rincão. Sem site que contasse o
                eisbein — até agora.
              </p>
              <p>
                O Weber&apos;s é buffet de comida caseira e típica alemã na Rua
                Vinte e Quatro de Maio, 222. Guias da cidade — Hagah e
                QuintoAndar — citam a casa como referência de Novo Hamburgo.
              </p>
              <p>
                Em 2023 a Câmara homenageou os 25 anos. A família manteve o
                ofício: temperos naturais, cardápio caseiro elaborado toda
                semana, muita coisa plantada e colhida pela própria equipe.
              </p>
              <p>{business.approach}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {amenities.map((item) => (
              <article
                key={item.title}
                className="rounded-sm bg-weber-surface p-5 shadow-[0_8px_24px_rgba(42,22,24,0.05)]"
              >
                <h3 className="font-display text-xl text-weber-brand">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-weber-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
