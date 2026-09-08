import { features } from "@/data/business";
import { BrandIcon } from "@/components/icons";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TudoUmPouco() {
  return (
    <section className="bg-anita-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle
          title="Tem de tudo um pouco."
          subtitle="Padaria, mercado, comida, churrasquinho e chope. Tudo no mesmo lugar."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-anita-orange/10 text-anita-orange transition-colors duration-300 group-hover:bg-anita-orange group-hover:text-white">
                <BrandIcon name={feature.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-2xl tracking-wide text-anita-black uppercase">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-anita-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
