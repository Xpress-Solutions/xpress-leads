export function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M32 16.5v7.2M32 16.5c4.6 3.2 7.4 5.8 7.4 10.4 0 4.2-3.3 6.8-7.4 6.8s-7.4-2.6-7.4-6.8c0-4.6 2.8-7.2 7.4-10.4Z"
        fill="none"
        stroke="#3d8848"
        strokeWidth="1.8"
      />
      <path
        d="M24 40.5h16M32 36.2v12.6M24 40.5c2.4 2.6 5.2 4.2 8 8.3 2.8-4.1 5.6-5.7 8-8.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
