const ITEMS = [
  { title: "280 + 300 lugares", text: "Salão e pátio sob as árvores — grupo grande entra." },
  { title: "Reserva de aniversário", text: "Mesa para 50 amigos. A casa aguenta." },
  { title: "Espaço kids ao fundo", text: "Cama elástica, brinquedo e prato de criança." },
  { title: "Pet friendly", text: "Traga teu cusco. Chimarrão também." },
] as const;

export function QuickInfo() {
  return (
    <section className="quick" aria-label="O que a casa é">
      <div className="wrap quick-grid">
        {ITEMS.map((item) => (
          <article className="quick-card" key={item.title}>
            <b>{item.title}</b>
            <span>{item.text}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
