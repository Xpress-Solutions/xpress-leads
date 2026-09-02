export function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect width="64" height="64" fill="var(--background)" />
      <rect x="26" y="6" width="12" height="52" rx="2" fill="var(--foreground)" />
      <path d="M26 10h12v8H26z" fill="var(--accent)" />
      <path d="M26 22h12v8H26z" fill="#1D3557" />
      <path d="M26 34h12v8H26z" fill="var(--accent)" />
      <path d="M26 46h12v8H26z" fill="#1D3557" />
      <rect x="24" y="4" width="16" height="4" fill="var(--brand)" />
      <rect x="24" y="56" width="16" height="4" fill="var(--brand)" />
    </svg>
  );
}
