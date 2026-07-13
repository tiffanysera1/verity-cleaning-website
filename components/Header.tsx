"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "./Icons";

const LINKS: [string, string][] = [
  ["/#services", "Services"],
  ["/#why", "Why Verity"],
  ["/#process", "How It Works"],
  ["/#area", "Service Area"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="brand" href="/" aria-label="Verity Cleaning — home">
          <Image src="/logo.png" alt="" width={40} height={40} className="brand-mark" priority />
          <span className="brand-wordmark">
            <b>Verity Cleaning</b>
            <small>More Time Back</small>
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
          <a href="#quote" className="btn btn--primary">
            Get my quote
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
