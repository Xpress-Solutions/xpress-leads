import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section" id="sobre">
      <div className="wrap sobre-grid reveal" ref={ref}>
        <div className="sobre-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">O 1240 da Barão.</h2>
          <p>{SITE.identity}</p>
          <p>
            Não é boteco de noite nem armazém de brasa. É cafeteria que vira restaurante no
            almoço: selo circular na porta, placa vermelha e amarela na calçada, mesa de madeira
            e o número da rua no nome.
          </p>
          <ul className="sobre-points">
            <li>Entre as 31 melhores cafeterias de Porto Alegre no Restaurant Guru</li>
            <li>4,6 no Google · atendimento elogiado</li>
            <li>Segunda a sábado, 7h–18h30</li>
          </ul>
        </div>
        <div className="sobre-photo">
          <img
            src="/fotos/ambiente.jpg"
            alt="Interior do Barão 1240 — prateleira de madeira, vitrine e mosaico na parede"
          />
          <div className="sobre-badge">Jardim Botânico · POA</div>
        </div>
      </div>
    </section>
  );
}
