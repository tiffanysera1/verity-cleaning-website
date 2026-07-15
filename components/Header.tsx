"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, ChevronDown } from "./Icons";
import { SERVICES } from "./servicesData";

const RESOURCE_LINKS: [string, string][] = [
  ["/#footer-area", "Service Area"],
  ["/#footer-contact", "Contact Us"],
];

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

  return (
    <div
      className="nav-drop"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="nav-drop-trigger"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
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
    ["/#services", "View all services"],
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
