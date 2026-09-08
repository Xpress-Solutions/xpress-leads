import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">A Princesinha da esquina.</h2>
          <p>
            Na famosa esquina da Avenida Princesa Isabel com a Rua São Luís está a Churrascaria
            Princesa Isabel — para o bairro, só Princesinha. Espeto corrido desde {SITE.founded},
            no ponto, sem virar restaurante de hotel.
          </p>
          <p>
            Casa simples: azulejo verde na fachada, papel na mesa, fila na calçada. O Destemperados
            ainda lembra que daqui saíram outros nomes da cidade. O que ficou neste endereço é o
            almoço de Santana.
          </p>
          <ul className="about-points">
            <li>Esquina da Princesa Isabel · Rua São Luís, 410</li>
            <li>Sem reserva — quem chega, senta</li>
            <li>Pagamento só em dinheiro ou PIX</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/fachada.jpg"
            alt="Fachada de esquina da Churrascaria Princesa Isabel: azulejo verde, faixa amarela e letreiro vermelho"
          />
          <div className="about-badge">Desde {SITE.founded}</div>
        </div>
      </div>
    </section>
  );
}
