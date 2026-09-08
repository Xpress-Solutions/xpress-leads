import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Sobre() {
  const ref = useReveal();

  return (
    <section className="section sobre" id="sobre">
      <div className="wrap sobre-grid reveal" ref={ref}>
        <div>
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">Toalha de papel. Sem cartão.</h2>
          <p>
            A Giovanaz é uma das churrascarias mais clássicas de Porto Alegre: salão comprido,
            forro de madeira, cadeiras de madeira e garçom de camisa branca com o espeto na mão.
          </p>
          <p>
            Fica na {SITE.address.street}, {SITE.address.neighborhood} — {SITE.address.nearby}.
            Quase oito mil avaliações no Google. Quem conhece, entra na fila.
          </p>
          <ul className="sobre-points">
            <li>Espeto corrido no ritmo da casa — o prato não esfria</li>
            <li>Maionese e polenta frita que o porto-alegrense cita de memória</li>
            <li>Pagamento em dinheiro ou PIX. Cartão não passa</li>
          </ul>
        </div>
        <div className="sobre-photo">
          <img
            src="/fotos/salao.jpg"
            alt="Salão da Giovanaz: toalhas claras, cadeiras de madeira e forro de tábuas"
          />
          <div className="sobre-badge">Salão da Venâncio Aires, 10 · Cidade Baixa</div>
        </div>
      </div>
    </section>
  );
}
