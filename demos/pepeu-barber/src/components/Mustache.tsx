type Props = {
  className?: string;
};

export function Mustache({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 36"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 20c8-14 22-16 32-8 4 3 8 8 20 8s16-5 20-8c10-8 24-6 32 8-10-4-20 2-28 10-6 6-14 8-24 4-4-2-8-6-12-6s-8 4-12 6c-10 4-18 2-24-4-8-8-18-14-28-10Z" />
    </svg>
  );
}
