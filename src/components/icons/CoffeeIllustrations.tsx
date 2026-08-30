export function LatteIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <rect x="10" y="10" width="100" height="100" rx="22" fill="#f3e3cf" />
      <path
        d="M35 50h50l-5 30a10 10 0 0 1-10 8H50a10 10 0 0 1-10-8Z"
        fill="#fff"
      />
      <path
        d="M35 50h50l-5 30a10 10 0 0 1-10 8H50a10 10 0 0 1-10-8Z"
        fill="#e7b989"
      />
      <ellipse cx="60" cy="50" rx="25" ry="6" fill="#fff8ef" />
      <path
        d="M85 55h4a9 9 0 0 1 0 18h-5"
        fill="none"
        stroke="#8a5a34"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M50 30c3-4 3-7 0-11M60 30c3-4 3-7 0-11M70 30c3-4 3-7 0-11"
        fill="none"
        stroke="#c99a63"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function BeansIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <rect x="10" y="10" width="100" height="100" rx="22" fill="#e9d3b4" />
      <g fill="#6b4326">
        <ellipse cx="45" cy="50" rx="16" ry="11" transform="rotate(-25 45 50)" />
        <ellipse cx="75" cy="45" rx="16" ry="11" transform="rotate(20 75 45)" />
        <ellipse cx="55" cy="75" rx="16" ry="11" transform="rotate(-10 55 75)" />
        <ellipse cx="82" cy="78" rx="14" ry="10" transform="rotate(35 82 78)" />
      </g>
      <g stroke="#3f2717" strokeWidth="2" strokeLinecap="round">
        <path d="M37 50c4-4 12-4 16 0" fill="none" />
        <path d="M67 45c4-4 12-4 16 0" fill="none" />
        <path d="M47 75c4-4 12-4 16 0" fill="none" />
      </g>
    </svg>
  )
}

export function CroissantIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <rect x="10" y="10" width="100" height="100" rx="22" fill="#f6e6c8" />
      <path
        d="M25 75c8-30 30-45 40-45 8 0 14 6 12 14-2 8-12 10-10 18 2 8 14 6 16 14 2 9-10 20-28 20-16 0-33-8-30-21Z"
        fill="#d99b4c"
      />
      <path
        d="M32 70c6-22 22-33 30-34M55 42c-2 8 6 10 8 18M58 62c4 6 12 6 14 12"
        fill="none"
        stroke="#a5652a"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function PourOverIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <rect x="10" y="10" width="100" height="100" rx="22" fill="#ecdcc2" />
      <path d="M40 40h40l-8 22a2 2 0 0 1-2 1H50a2 2 0 0 1-2-1Z" fill="#8a5a34" />
      <rect x="45" y="63" width="30" height="26" rx="4" fill="#5c3a20" />
      <path
        d="M50 30c3 5 3 8 0 13M60 28c3 5 3 8 0 13M70 30c3 5 3 8 0 13"
        fill="none"
        stroke="#c99a63"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}
