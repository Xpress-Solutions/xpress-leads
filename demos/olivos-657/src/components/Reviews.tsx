const reviews = [
  {
    quote:
      "Sentamos no balcão e fomos muito bem atendidos pela Jey. Drinks autorais e a possibilidade de pedir clássicos pela quantidade de garrafas.",
    author: "Visitante no Google",
  },
  {
    quote:
      "O milho kewpie conquistou. Ambiente aconchegante sem frescura — comida e bebida no mesmo nível.",
    author: "Restaurant Guru",
  },
  {
    quote:
      "Point de date na Cidade Baixa: pratos para compartilhar, luz baixa e a primeira página do cardápio dedicada aos drinks.",
    author: "Destemperados",
  },
];

export function Reviews() {
  return (
    <section className="section pt-0">
      <div className="wrap">
        <p className="kicker">Quem senta</p>
        <h2 className="section-title mt-4">O que se fala da mesa.</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.author}
              className="border-l border-[color:var(--brand)]/40 pl-5"
            >
              <p className="font-display text-xl leading-snug italic text-[color:var(--foreground)]/88">
                “{review.quote}”
              </p>
              <footer className="mt-4 text-xs tracking-[0.16em] text-[color:var(--muted)] uppercase">
                {review.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
