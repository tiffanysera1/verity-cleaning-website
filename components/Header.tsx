"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Menu, ChevronDown } from "./Icons";
import { SERVICES } from "./servicesData";

const RESOURCE_LINKS: [string, string][] = [
  ["/#footer-area", "Service Area"],
  ["/#footer-contact", "Contact Us"],
];

/* Closing is delayed rather than instant on mouseleave: the panel sits a
   few pixels below the trigger, and that gap isn't part of either
   element's hoverable box, so an instant close fired while the cursor
   was still crossing the gap (before it reached the panel). */
const CLOSE_DELAY = 250;

function NavDropdown({
  label,
  links,
  onNavigate,
}: {
  label: string;
  links: [string, string][];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function cancelClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function scheduleClose() {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  }

  return (
    <div
      className="nav-drop"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className="nav-drop-trigger"
        aria-expanded={open}
        onClick={() => {
          cancelClose();
          setOpen((o) => !o);
        }}
      >
        {label}
        <ChevronDown />
      </button>
      <div className={open ? "nav-drop-panel open" : "nav-drop-panel"}>
        {links.map(([href, text]) => (
          <a
            key={href}
            href={href}
            onClick={() => {
              cancelClose();
              setOpen(false);
              onNavigate();
            }}
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const serviceLinks: [string, string][] = [
    ...SERVICES.map((s): [string, string] => [`/services/${s.slug}/`, s.title]),
    ["/services/", "View all services"],
  ];

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="brand" href="/" aria-label="Verity Cleaning — home">
          <Image src="/logo.png" alt="Verity Cleaning" width={696} height={293} className="brand-mark" priority />
        </a>

        <nav
          className={open ? "nav-links open" : "nav-links"}
          id="primary-nav"
          aria-label="Primary"
        >
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <NavDropdown label="Services" links={serviceLinks} onNavigate={() => setOpen(false)} />
          <a href="/#how-it-works" onClick={() => setOpen(false)}>How It Works</a>
          <a href="/#trust" onClick={() => setOpen(false)}>Why Verity</a>
          <a href="/#reviews" onClick={() => setOpen(false)}>Reviews</a>
          <NavDropdown label="Resources" links={RESOURCE_LINKS} onNavigate={() => setOpen(false)} />
        </nav>

        <div className="nav-cta">
          <a href="/#quote" className="btn btn--primary">
            Get My Quote
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
