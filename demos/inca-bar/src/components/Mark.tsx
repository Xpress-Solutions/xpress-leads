export function Mark({ className }: { className?: string }) {
  return (
    <img
      className={className}
      src="/logo.svg"
      alt=""
      width={80}
      height={80}
    />
  );
}
