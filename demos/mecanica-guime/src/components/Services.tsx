import { SERVICES } from "../data/site";

export function Services() {
  return (
    <section className="section" id="oficio">
      <div className="wrap">
        <div className="oficio-head">
          <p className="kicker">O que a casa faz</p>
          <h2 className="section-title">O ofício da porta.</h2>
          <p className="section-lead">
            Mecânica, elétrica, lanternagem, alinhamento e peças — o mesmo endereço,
            sem desdobrar o carro em cinco oficinas.
          </p>
        </div>
        <div className="oficio-list">
          {SERVICES.map((item) => (
            <article className="oficio-row" key={item.code}>
              <span className="oficio-code">{item.code}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
