import { SITE } from "../data/site.ts";

type InstagramLinkProps = {
  className?: string;
  label?: string;
  onClick?: () => void;
};

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InstagramLink({ className = "ig-link", label, onClick }: InstagramLinkProps) {
  return (
    <a className={className} href={SITE.instagram} target="_blank" rel="noreferrer" onClick={onClick}>
      <InstagramIcon />
      <span>{label ?? SITE.instagramHandle}</span>
    </a>
  );
}
