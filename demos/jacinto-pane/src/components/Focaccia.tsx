export function Focaccia() {
  return (
    <section id="focaccia" className="section bg-[color:var(--linen)] text-[color:var(--ink)]">
      <div className="wrap grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="kicker !text-[#7a6236]">O pão do dia</p>
          <h2 className="font-display mt-3 text-[clamp(2.6rem,7vw,4.6rem)] leading-[0.95] tracking-tight">
            A focaccia do Jacinto.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-[#3d4a58]">
            Quem pesquisa focaccia em Porto Alegre ainda cai em guia de terceiro.
            Aqui o pão tem rua, forno e nome: alcaparras, azeite e o miolo
            alveolar que o logo já desenha.
          </p>
          <ul className="mt-8 grid gap-3 text-[0.98rem]">
            <li className="rounded-2xl bg-white px-4 py-3 shadow-[var(--shadow)]">
              Melhor focaccia da cidade — nas palavras de quem volta.
            </li>
            <li className="rounded-2xl bg-white px-4 py-3 shadow-[var(--shadow)]">
              Fermentação natural no bairro, colada em Santa Cecília.
            </li>
            <li className="rounded-2xl bg-white px-4 py-3 shadow-[var(--shadow)]">
              Ticket de padaria de destinação: {""}
              <strong>R$ 20–40</strong>.
            </li>
          </ul>
        </div>

        <div
          className="alveoli relative aspect-[4/5] overflow-hidden rounded-[28px] md:aspect-square"
          style={{ background: "#DFCA9E" }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 320 320" className="absolute inset-0 h-full w-full">
            <ellipse cx="160" cy="168" rx="128" ry="86" fill="#e8d4aa" />
            <ellipse cx="108" cy="148" rx="20" ry="15" fill="#003364" opacity="0.88" />
            <ellipse cx="168" cy="160" rx="32" ry="22" fill="#003364" opacity="0.9" />
            <ellipse cx="220" cy="140" rx="16" ry="12" fill="#003364" opacity="0.85" />
            <ellipse cx="200" cy="196" rx="18" ry="13" fill="#003364" opacity="0.8" />
            <ellipse cx="132" cy="200" rx="14" ry="11" fill="#003364" opacity="0.75" />
            <ellipse cx="246" cy="178" rx="11" ry="8" fill="#003364" opacity="0.7" />
          </svg>
          <p className="font-display absolute bottom-6 left-6 right-6 text-3xl leading-none text-[#003364]">
            Miolo aberto.
            <br />
            Crosta de azeite.
          </p>
        </div>
      </div>
    </section>
  );
}
