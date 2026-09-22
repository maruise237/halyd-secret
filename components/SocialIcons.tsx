type IconProps = { size?: number; strokeWidth?: number; className?: string };

export function InstagramIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M14.5 8.5h2V5.2c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.93 1.83-4.93 5.2V13H6.4v3.7h2.85V22h3.7v-5.3h2.8l.45-3.7h-3.25v-2.4c0-1.07.29-1.8 1.85-1.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ThreadsIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 21c-4.4 0-7.5-2.7-7.5-8.9S7.7 3 12.1 3c3.5 0 5.9 1.7 6.8 4.4l-1.9.6c-.7-1.9-2.3-3-4.9-3-3.3 0-5.4 2.1-5.4 6.9v.3c.6-1 1.9-1.8 3.9-1.8 3 0 5 1.7 5 4.4 0 2.6-2 4.4-5.1 4.4-2.4 0-4-1-4.6-2.6l1.8-.8c.4 1 1.3 1.6 2.8 1.6 1.7 0 2.9-.8 2.9-2.4 0-1.5-1.2-2.5-3.2-2.5-1.4 0-2.4.5-2.9 1.3-.1.4-.1.8-.1 1.3 0 3.9 1.9 5.9 5.4 5.9 3.7 0 5.8-2 5.8-6.3v-.7c0-4.9-2.6-8-7.5-8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
