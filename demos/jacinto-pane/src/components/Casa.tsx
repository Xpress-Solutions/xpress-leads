import { SITE } from "@/data/site";

export function Casa() {
  return (
    <section id="casa" className="section bg-[color:var(--flour)] text-[color:var(--ink)]">
      <div className="wrap grid items-start gap-12 md:grid-cols-2">
        <div>
          <p className="kicker !text-[#7a6236]">A casa</p>
          <h2 className="font-display mt-3 text-[clamp(2.4rem,6vw,4.2rem)] leading-[0.95]">
            O 209 da Jacinto Gomes.
          </h2>
          <p className="mt-5 text-lg text-[#3d4a58]">
            Joana Gabech e Gabriel Durante abriram a Jacinto Pane&amp;Cucina no
            espaço que por mais de 50 anos foi o Bar Salim — casa dos avós
            dela. A operação começou em janeiro de 2021 com pães de fermentação
            natural e pratos para levar.
          </p>
          <p className="mt-4 text-lg text-[#3d4a58]">
            O Jornal do Comércio registrou a atmosfera que a casa quis
            guardar: um lugar de gente que trabalha. Santana, colada em Santa
            Cecília, a poucos minutos do Jardim Botânico.
          </p>
        </div>
        <div className="rounded-[28px] bg-[color:var(--background)] p-8 text-[color:var(--foreground)]">
          <p className="font-display text-4xl leading-none text-[color:var(--brand)]">
            Pane &amp; Cucina
          </p>
          <p className="mt-4 text-[color:var(--muted)]">
            Experiência culinária para pedir e compartilhar — a frase da própria
            casa no cardápio digital.
          </p>
          <dl className="mt-8 grid gap-4">
            <div>
              <dt className="text-xs tracking-[0.16em] text-[color:var(--brand)] uppercase">
                Endereço
              </dt>
              <dd className="mt-1">{SITE.address.full}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-[color:var(--brand)] uppercase">
                Horário
              </dt>
              <dd className="mt-1">{SITE.hoursLine}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-[color:var(--brand)] uppercase">
                Nota
              </dt>
              <dd className="mt-1">★ {SITE.rating} no Google</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
