import { SITE } from "@/data/site";
import { LogoMark } from "@/components/LogoMark";

export function Casa() {
  return (
    <section id="casa" className="section">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="kicker mb-4">
            <span className="h-px w-8 bg-[color:var(--brand)]" />
            Desde {SITE.since}
          </p>
          <h2 className="font-display text-[clamp(2.4rem,6vw,4rem)] leading-[0.92] uppercase text-[color:var(--ink)]">
            Ponto de rotina na avenida.
          </h2>
          <div className="mt-5 space-y-4 text-lg text-[color:var(--ink)]/78">
            <p>{SITE.line}</p>
            <p>
              A casa se apresenta como restaurante de comida caseira: prato
              feito, à la minuta e lanches — no local e com tele-entrega. O
              Google marca café da manhã e brunch; o letreiro mostra o vermelho
              da lancheria, não um bar de noite.
            </p>
            <p>
              {SITE.pitch}
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] bg-[color:var(--brand)] px-8 py-12 text-[#fff8f0] shadow-[var(--shadow)]">
          <LogoMark className="absolute -right-8 -top-8 h-48 w-48 opacity-20" title="" />
          <p className="font-display text-sm tracking-[0.2em] uppercase text-[#ffd28a]">
            Bar e lancheria
          </p>
          <p className="font-display mt-3 text-5xl uppercase leading-none">
            La Bamba
          </p>
          <p className="mt-6 max-w-sm text-[#fff8f0]/85">
            Na Dorival desde 1996. Mesa na calçada, atendimento rápido e o
            horário que a cidade já memorizou.
          </p>
          <p className="mt-8 text-sm font-semibold text-[#ffd28a]">
            {SITE.address.full}
          </p>
        </div>
      </div>
    </section>
  );
}
