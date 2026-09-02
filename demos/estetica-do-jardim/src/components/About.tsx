import { business } from "@/data/business";

export function About() {
  return (
    <section id="casa" className="bg-brand py-20 text-surface md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-12 md:px-6">
        <div className="md:col-span-5">
          <p className="text-xs font-semibold tracking-[0.24em] text-ipe uppercase">
            A casa
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold md:text-5xl">
            A estética Jardim. A da La Plata.
          </h2>
        </div>
        <div className="space-y-5 text-lg text-surface/85 md:col-span-7">
          <p>{business.description}</p>
          <p>{business.address.landmark}</p>
          <p>
            Dois endereços aparecem nos cadastros — {business.address.street} e a
            Rua Buenos Aires, 205. Mesma marca, mesma calçada do Jardim Botânico.
            Confirme o ponto na visita; o nome já é o do bairro.
          </p>
        </div>
      </div>
    </section>
  );
}
