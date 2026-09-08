const rooms = [
  {
    title: "A porta",
    text: "Despretensiosa. Duas mesas na calçada, e o resto da personalidade fica para dentro. A sofisticação não se anuncia na fachada.",
  },
  {
    title: "Três salões",
    text: "Luz baixa, decoração nostálgica, objetos do acervo dos sócios. Na entrada, páginas ilustradas por Javier Mariscal revestem a parede.",
  },
  {
    title: "O balcão",
    text: "Sete lugares. Olho no olho com a Jey. É dali que saem o clássico que não está na carta e o drink pedido na hora.",
  },
];

export function Casa() {
  return (
    <section className="section border-y border-[color:var(--line)] bg-[color:var(--surface)]" id="casa">
      <div className="wrap">
        <p className="kicker">A casa</p>
        <h2 className="section-title mt-4 max-w-2xl">
          Contraponto ao bar de rua da Cidade Baixa.
        </h2>
        <p className="section-lead mt-5">
          Ambiente fechado, iluminação controlada, serviço de mesa. Melhor para casal ou grupo
          pequeno do que para turma. Capacidade de cerca de 70 pessoas.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {rooms.map((room, i) => (
            <article key={room.title} className="border-t border-[color:var(--brand)]/35 pt-6">
              <span className="font-display text-4xl text-[color:var(--brand)]">
                0{i + 1}
              </span>
              <h3 className="font-display mt-4 text-3xl italic">{room.title}</h3>
              <p className="mt-4 leading-relaxed text-[color:var(--foreground)]/68">{room.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
