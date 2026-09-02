import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    text: "Uma grande casa em um bairro residencial transformada em um bar bem descolado. Tem ambientes para grupos grandes e espaços mais intimistas. Na carta: pizza, pancho e risoto — e muitas torneiras.",
    who: "A. L.",
  },
  {
    text: "Pode levar pets. Se tiver sorte, você vai ser recepcionado pelo Cusco, o sócio majoritário no coração dos clientes. Carta de cervejas selecionada pelos sommeliers da casa.",
    who: "G. R.",
  },
  {
    text: "O bar é uma antiga residência: salão, varanda e pátio. Happy hour de pint pelo preço de half pint. Petiscos com um toque peruano — a mandioca frita com molho verde é pedida certa.",
    who: "J. K.",
  },
];

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Quem senta aqui</p>
        <h2 className="section-title">Segunda casa. Sem pose.</h2>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.who}>
              <p>“{review.text}”</p>
              <span>{review.who} · avaliação pública da casa</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
