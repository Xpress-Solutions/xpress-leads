const ITEMS = [
  "PARRILLA",
  "O MELHOR SANDUBA DO MUNDO",
  "FERNANDO MACHADO",
  "CENTRO HISTÓRICO",
  "SAMBA DE DOMINGO",
  "COMIDA DI BUTECO 2026",
];

export function Strip() {
  const line = [...ITEMS, ...ITEMS];
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        {line.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
