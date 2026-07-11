"use client";

import { useState } from "react";
import { Phone, Menu, Sparkles } from "./Icons";

const LINKS: [string, string][] = [
  ["/#services", "Services"],
  ["/#why", "Why Us"],
  ["/#process", "Our Process"],
  ["/#area", "Service Area"],
  ["/#quote", "Get an Estimate"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="brand" href="/" aria-label="Verity Cleaning — home">
          <Sparkles className="brand-mascot" />
          <span className="brand-wordmark">
            <b>Verity Cleaning</b>
            <small>Pure Spaces &bull; Pure Peace of Mind</small>
          </span>
        </a>

        <nav
          className={open ? "nav-links open" : "nav-links"}
          id="primary-nav"
          aria-label="Primary"
        >
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href="tel:+12058880199" className="btn btn--teal">
            <Phone />
            Call or Text
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
