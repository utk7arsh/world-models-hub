// Minimal inline SVG icon set (stroke = currentColor, 1.6px). No emoji.
import * as React from "react";

type P = React.SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 16, ...p }: P) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...p,
  };
}

export const IconSearch = (p: P) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const IconTimeline = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 12h18" />
    <circle cx="7" cy="12" r="2.2" />
    <circle cx="14" cy="12" r="2.2" />
    <path d="M7 7v3M14 14v3M19 9v6" />
  </svg>
);

export const IconNeuron = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="2.4" />
    <circle cx="5" cy="6" r="1.6" />
    <circle cx="19" cy="7" r="1.6" />
    <circle cx="6" cy="18" r="1.6" />
    <circle cx="18" cy="17" r="1.6" />
    <path d="M10 11 6.3 7M14 11l3.4-3M10.5 13.5 7 16.6M13.7 13.4l3.4 2.7" />
  </svg>
);

export const IconChevron = (p: P) => (
  <svg {...base(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconLayers = (p: P) => (
  <svg {...base(p)}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
  </svg>
);

export const IconPanelLeft = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M9 4v16" />
  </svg>
);

export const IconPulse = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 12h4l2 6 4-14 2 8h6" />
  </svg>
);

export const IconArxiv = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 3h9l5 5v13H6z" />
    <path d="M15 3v5h5" />
    <path d="M9 13h6M9 17h6" />
  </svg>
);

export const IconCode = (p: P) => (
  <svg {...base(p)}>
    <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
  </svg>
);

export const IconExternal = (p: P) => (
  <svg {...base(p)}>
    <path d="M14 4h6v6M20 4l-9 9" />
    <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconHome = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 11 12 4l8 7" />
    <path d="M6 10v9h12v-9" />
  </svg>
);

export const IconGit = (p: P) => (
  <svg {...base(p)}>
    <circle cx="6" cy="6" r="2.4" />
    <circle cx="6" cy="18" r="2.4" />
    <circle cx="18" cy="9" r="2.4" />
    <path d="M6 8.4v7.2M8.2 7.2 15.8 8.7M18 11.3c0 3-2 4-4 4.3-2 .3-3 1-3 2.4" />
  </svg>
);

export const IconArrowRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconBrain = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 5.5A3 3 0 0 0 6.5 7 3 3 0 0 0 5 12a3 3 0 0 0 1.5 5A3 3 0 0 0 12 18.5Z" />
    <path d="M12 5.5A3 3 0 0 1 17.5 7 3 3 0 0 1 19 12a3 3 0 0 1-1.5 5A3 3 0 0 1 12 18.5Z" />
    <path d="M12 5.5v13" opacity="0.5" />
    <circle cx="8.5" cy="10" r="0.6" fill="currentColor" />
    <circle cx="15.5" cy="13" r="0.6" fill="currentColor" />
  </svg>
);
