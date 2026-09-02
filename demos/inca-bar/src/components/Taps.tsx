import { useReveal } from "../hooks/useReveal";

const SCHOOLS = [
  { name: "Alemã", text: "Lagers e weiss no copo certo." },
  { name: "Americana", text: "IPA, stout e o que a lousa mandar." },
  { name: "Belga", text: "Dubbel, saison, coisa de abadia." },
  { name: "Inglesa", text: "Pale ale, porter, amargor clássico." },
];

export function Taps() {
  const ref = useReveal();

  return (
    <section className="section taps" id="torneiras">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Tap list</p>
        <h2 className="section-title">Vinte torneiras. Quatro escolas.</h2>
        <p className="section-lead">
          Casarão da Boa Vista com cerca de 19 chopes artesanais e uma linha de espumante. A carta
          gira — o sommelier da casa escolhe o que pinga, com peso em rótulos gaúchos.
        </p>
        <ul className="school-row">
          {SCHOOLS.map((school) => (
            <li key={school.name}>
              <strong>{school.name}</strong>
              <span>{school.text}</span>
            </li>
          ))}
        </ul>
        <p className="section-note">
          Happy hour: pint pelo preço de half pint, em geral até as 21h. Régua de cervejas no
          balcão — a lousa manda no que está aberto hoje.
        </p>
      </div>
    </section>
  );
}
