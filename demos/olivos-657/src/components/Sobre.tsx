import { SITE } from "@/data/site";

export function Sobre() {
  return (
    <section className="section" id="sobre">
      <div className="wrap grid items-start gap-14 lg:grid-cols-2">
        <div>
          <p className="kicker">Sobre</p>
          <h2 className="section-title mt-4">Pioneiros da coquetelaria em Porto Alegre.</h2>
          <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-[color:var(--foreground)]/72">
            <p>
              O {SITE.name} abre a porta na {SITE.address.street}, no coração da Cidade Baixa,
              desde {SITE.founded}. Completa {SITE.years} — e ainda se esconde atrás de um número.
            </p>
            <p>
              A inspiração são os bares de Buenos Aires: luz baixa, clima reservado, carta que
              privilegia o amargo. Os drinks ficam com {SITE.partners.bar}, sócio-proprietário. A
              cozinha, com a chef e sócia {SITE.partners.kitchen} — comida de restaurante no
              tempo do bar.
            </p>
            <p>
              O azeite da casa vem da região de Porto Alegre. A carta de vinhos busca bodegas
              pequenas do Rio Grande do Sul. Cervejas artesanais completam, sem virar o assunto.
            </p>
          </div>
        </div>

        <aside className="hero-door relative overflow-hidden rounded-sm bg-[color:var(--surface)] p-8 md:p-10">
          <p className="font-display text-[6rem] leading-none text-[color:var(--brand)]/25">
            657
          </p>
          <ul className="relative mt-2 space-y-5 text-sm leading-relaxed">
            <li>
              <strong className="block font-display text-xl font-normal text-[color:var(--brand)]">
                {SITE.award}
              </strong>
              <span className="text-[color:var(--foreground)]/60">
                Também indicado em Carta de Drinks no mesmo prêmio.
              </span>
            </li>
            <li>
              <strong className="block font-display text-xl font-normal text-[color:var(--brand)]">
                Pet friendly
              </strong>
              <span className="text-[color:var(--foreground)]/60">
                Casa intimista, sem virar happy hour de avenida.
              </span>
            </li>
            <li>
              <strong className="block font-display text-xl font-normal text-[color:var(--brand)]">
                Instagram {SITE.instagramHandle}
              </strong>
              <span className="text-[color:var(--foreground)]/60">
                A porta continua discreta. O feed, um pouco menos.
              </span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
