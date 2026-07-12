import type { SVGProps } from "react";

/* Shared inline-SVG icon set for Verity Cleaning.
   Size is controlled by the parent CSS context (e.g. `.btn svg{width:18px}`).
   stroke="currentColor" so icons inherit text color. */

type IconProps = SVGProps<SVGSVGElement> & { sw?: number };

function Base({ sw = 2, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const Phone = (p: IconProps) => (
  <Base sw={2.2} {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Base>
);

export const Sms = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </Base>
);

export const Check = (p: IconProps) => (
  <Base sw={2.5} {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Base>
);

export const CheckCircle = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </Base>
);

export const Pin = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Base>
);

export const Shield = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </Base>
);

export const Users = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Base>
);

export const Medal = (p: IconProps) => (
  <Base sw={2} {...p}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </Base>
);

export const Star = (p: IconProps) => (
  <Base sw={2} fill="currentColor" {...p}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </Base>
);

export const Clock = (p: IconProps) => (
  <Base sw={2} {...p}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </Base>
);

export const Sparkles = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
    <path d="m5 3 .8 2.2L8 6l-2.2.8L5 9l-.8-2.2L2 6l2.2-.8L5 3z" />
  </Base>
);

export const Home = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </Base>
);

export const Building = (p: IconProps) => (
  <Base sw={2} {...p}>
    <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
    <path d="M7 22V4" />
    <path d="M17 22V4" />
    <path d="M2 12h20" />
    <path d="M2 7h20" />
    <path d="M2 17h20" />
  </Base>
);

export const SprayBottle = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M12 2h2v4h-2V2z" />
    <path d="M9 6h8l1 3v2h-10V9l1-3z" />
    <path d="M9 11v8a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-8H9z" />
    <path d="M10 2H8" />
    <path d="M8 4l-2 2" />
  </Base>
);

export const Bucket = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M21 9H3v4a9 9 0 0 0 18 0V9z" />
    <path d="M21 9a9 9 0 0 0-18 0" />
    <path d="M12 13v6" />
    <circle cx="12" cy="13" r="2" />
  </Base>
);

export const Menu = (p: IconProps) => (
  <Base sw={2} {...p}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </Base>
);

export const ArrowRight = (p: IconProps) => (
  <Base sw={2} {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </Base>
);

export const FacebookIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const InstagramIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...p}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Map = (p: IconProps) => (
  <Base sw={1.8} {...p}>
    <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
    <path d="M9 4v14M15 6v14" />
  </Base>
);

export const Heart = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </Base>
);

export const Yelp = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="m9 10 3 2 3-2" strokeLinejoin="round" />
  </Base>
);

export const Nextdoor = (p: IconProps) => (
  <Base sw={2} {...p}>
    <path d="m3 11 9-8 9 8" />
    <path d="M5 10v10h14V10" />
    <path d="M9 20v-6h6v6" />
  </Base>
);

