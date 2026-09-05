const BITS = [
  "LOCO DE ESPECIAL",
  "FEITO NA BRASA",
  "LAÇADOR!",
  "CHINA 14",
  "NOVO HAMBURGO",
  "BAH!TCHÊ",
  "4,9 NO GOOGLE",
  "QUA–DOM À NOITE",
];

export function Strip() {
  const line = [...BITS, ...BITS];
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        {line.map((bit, i) => (
          <span key={`${bit}-${i}`}>★ {bit}</span>
        ))}
      </div>
    </div>
  );
}
