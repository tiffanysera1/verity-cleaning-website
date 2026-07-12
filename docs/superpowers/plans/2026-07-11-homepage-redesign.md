# Verity Cleaning Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Verity Cleaning homepage (`app/page.tsx` and every component it renders) into the premium, "sunlit room" redesign specified in `docs/superpowers/specs/2026-07-09-homepage-redesign-design.md`, replacing the current teal/navy local-service look while preserving every real business fact (phone, service area, licensing, pricing philosophy).

**Architecture:** Single Next.js App Router page (`app/page.tsx`) composed of ~14 presentational components under `components/`, styled entirely through one shared stylesheet (`app/globals.css`) using CSS custom properties for the design tokens. No backend, no new dependencies, no test framework — this is a static marketing site. Verification is `npx tsc --noEmit` (type safety) + `npm run build` (production build) + a headless-Chrome screenshot review after each task (the pattern already used successfully earlier this session).

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, plain CSS (no CSS-in-JS, no Tailwind), `next/font/google` (Geist + Inter), `next/image` where practical.

## Global Constraints

- **Color tokens** (final, replacing all old `--teal*`/`--surface` tokens): `--bg:#FFFFFF`, `--sky:#8ECFFB`, `--sky-deep:#5FB4F0`, `--sky-pale:#F7FBFF`, `--sky-tint:#EEF8FF`, `--warm-white:#FFFDF9`, `--navy:#0B2A4A`, `--navy-muted:#3D5A7A`, `--ink:#14181F`, `--muted:#6B7280`, `--border:#E7EAEE`.
- **Atmosphere is three layers**, not one gradient: (1) an organic mesh of several soft radial gradients composited into `body`'s `background`, with a brighter warm pool near the upper-left/hero and pale-blue/sky-tint pools scattered further down at non-aligned points; (2) a `body::after` grain texture (SVG `feTurbulence` data URI, ~3% opacity, `position:fixed`, `pointer-events:none`); (3) a `.tone-sky` section modifier class (soft edge-feathered `--sky-tint` wash, no hard boundary) applied to alternating sections — see Task 1 Step 1 for exact values and Tasks 7/9/11/13 for which sections use it.
- **Button classes** (renamed from `.btn--teal`/`.btn--navy`): `.btn--primary` (navy fill, white text — the main action everywhere), `.btn--secondary` (`--sky-tint` fill, navy text — secondary actions, and the ONLY primary-looking button usable on the navy Final CTA section since navy-on-navy is invisible), `.btn--ghost` (transparent, navy border/text), `.btn--ghost-dark` (transparent, white border/text — navy-background sections only).
- **Typography:** body font stays Inter; display font becomes Geist (`next/font/google`, CSS var `--font-geist`). No heading uses `textTransform: uppercase` inline styles — hierarchy comes from size/weight, not caps. `.eyebrow` kicker labels keep their existing small-caps uppercase treatment (that's a distinct, intentional pattern, not a headline).
- **Banned words** — must not appear anywhere in any copy touched by this plan: "industry-leading", "exceptional", "premier", "top-rated", "professional solutions".
- **No sparkle mascot anywhere** — the `Sparkles` icon may still be used as a plain service-type icon (Deep Cleaning) but never as a decorative brand mark next to the wordmark.
- **Real facts that must not change:** phone `(205) 888-0199`, service area (Pelham, Helena, Alabaster, Hoover, Columbiana, Chelsea, Calera), "Verity Cleaning, LLC, based in Pelham, AL", licensed/bonded/insured, 100% satisfaction guarantee, 5 real service types. No veteran-owned claim, no eco-friendly/green-product claim, no star-rating or review-count claim anywhere (page content or `JsonLd.tsx` structured data) — these were removed in an earlier session and must stay removed.
- **Image assets** (already sourced and license-verified this session, free Unsplash License, no attribution required):
  - Hero: `https://images.unsplash.com/photo-1768609239321-1cfe14893e80` (bright minimalist living room, natural light, candid person in motion — photographer rawkkim)
  - Before/after "after" state: `https://images.unsplash.com/photo-1771627278983-b07eb108e475` (sunlit living room — photographer Zahraa Hassan)
  - Before/after "before" state: `https://images.unsplash.com/photo-1694151569569-8288e3118519` (cluttered room, real photo — placeholder only, swap for a real job photo later)
- **Verification commands** (run after every task): `npx tsc --noEmit` must produce no output; `npm run build` must succeed. For visual verification, the dev server is already running at `http://localhost:3000` (background process from earlier in this session) — warm the route with `curl -sf http://localhost:3000 >/dev/null` twice, then screenshot with:
  ```
  "/c/Program Files/Google/Chrome/Application/chrome.exe" --headless --disable-gpu --no-sandbox --hide-scrollbars --window-size=1440,6000 --virtual-time-budget=6000 --screenshot="<scratchpad>/task-N.png" http://localhost:3000
  ```
  then view the PNG with the Read tool. If the dev server isn't running, start it with `npm run dev` (background) first.
- **No new npm dependencies** for any task in this plan.

---

### Task 1: Design tokens, ambient atmosphere layer, fonts, and layout cleanup

**Files:**
- Modify: `app/globals.css:1-27` (the `:root` block and immediately following base styles)
- Modify: `app/layout.tsx` (full file)
- Delete: `components/TopBar.tsx`

**Interfaces:**
- Produces: every CSS custom property listed in Global Constraints above, available to every later task's CSS. Produces `.wrap`, `.section`, `.eyebrow`, `.lead`, `.center`, `.btn`/`.btn--primary`/`.btn--secondary`/`.btn--ghost`/`.btn--ghost-dark`/`.btn--lg` base classes that every later task's markup will reference by class name.

- [ ] **Step 1: Replace the `:root` token block and base element styles in `app/globals.css`**

Replace lines 1–26 (the comment header and `:root` block) with:

```css
/* ============================================================
   Verity Cleaning — "A Clean Home. More Time Back."
   Design tokens & base. Fonts: Geist (display) + Inter (body).
   ============================================================ */
:root {
  --bg: #FFFFFF;
  --sky: #8ECFFB;
  --sky-deep: #5FB4F0;
  --sky-pale: #F7FBFF;
  --sky-tint: #EEF8FF;
  --warm-white: #FFFDF9;

  --navy: #0B2A4A;
  --navy-muted: #3D5A7A;
  --ink: #14181F;
  --muted: #6B7280;

  --border: #E7EAEE;
  --shadow: 0 4px 20px rgba(11, 42, 74, 0.05);
  --shadow-hover: 0 12px 32px rgba(11, 42, 74, 0.10);
  --ease: cubic-bezier(.25, .8, .25, 1);

  --font-display: var(--font-geist), system-ui, sans-serif;
  --font-body: var(--font-inter), system-ui, -apple-system, sans-serif;
}
```

Then replace the `body` rule (currently `body { margin: 0; ... }`) with:

```css
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--ink);
  /* Layer 1 — organic light-source mesh: several large, soft-edged
     radial gradients (default background-attachment, NOT `fixed` —
     unreliable on mobile Safari, and this needs to track document
     position anyway). A brighter warm pool sits near the upper-left,
     where the hero is, like morning sun through a window; pale-blue
     and sky-tint pools scatter at non-aligned points further down so
     the transition reads as organic, not a linear band. Every stop
     fades to transparent — no visible edge or "blob" shape. */
  background:
    radial-gradient(1100px 900px at 8% 6%, var(--warm-white) 0%, rgba(255, 253, 249, 0.5) 30%, transparent 62%),
    radial-gradient(1000px 800px at 88% 28%, var(--sky-pale) 0%, transparent 60%),
    radial-gradient(1100px 900px at 15% 60%, var(--sky-tint) 0%, transparent 62%),
    radial-gradient(1000px 800px at 82% 88%, var(--sky-tint) 0%, transparent 65%),
    var(--bg);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
  position: relative;
}
/* Layer 2 — grain texture: SVG feTurbulence noise, no image asset,
   no dependency. Fixed so it reads as a uniform viewport texture
   rather than scrolling with the document; pointer-events:none so it
   never blocks interaction; opacity kept low enough to break up flat
   digital color without being visible as texture in its own right. */
body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 999;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
}
/* Layer 3 — soft alternating section tone: a very soft, edge-feathered
   sky-tint wash applied to specific sections (see Tasks 7/9/11/13),
   never a hard-edged block. Fades to nothing at both the section's
   top and bottom so no boundary line is ever visible. */
.tone-sky {
  position: relative;
}
.tone-sky::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    var(--sky-tint) 25%,
    var(--sky-tint) 75%,
    transparent 100%
  );
  opacity: 0.6;
  pointer-events: none;
  z-index: -1;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  line-height: 1.1;
  margin: 0;
  letter-spacing: -.02em;
}
p { margin: 0; }
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
ul { margin: 0; padding: 0; list-style: none; }
button { font-family: inherit; }

.wrap { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.section { padding: 96px 0; position: relative; }
.eyebrow {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: .78rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--navy);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--sky-tint);
  padding: 6px 14px;
  border-radius: 20px;
}
.eyebrow svg { width: 14px; height: 14px; color: var(--sky-deep); }
.lead { color: var(--muted); font-size: 1.12rem; max-width: 60ch; line-height: 1.7; }
.center { text-align: center; }
.center .lead { margin-inline: auto; }

:focus-visible {
  outline: 3px solid var(--sky-deep);
  outline-offset: 3px;
  border-radius: 6px;
}

.skip {
  position: absolute;
  left: -9999px;
  background: #fff;
  padding: 12px 18px;
  z-index: 200;
  font-weight: 700;
  color: var(--navy);
}
.skip:focus { left: 0; }
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}
```

- [ ] **Step 2: Replace the `.btn` rules in `app/globals.css`**

Find the `/* Buttons */` block (currently defines `.btn`, `.btn--teal`, `.btn--navy`, `.btn--ghost`, `.btn--ghost-dark`, `.btn--lg`) and replace the whole block with:

```css
/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .55rem;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  padding: 14px 28px;
  border-radius: 12px;
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: transform .15s var(--ease), background .2s, box-shadow .2s, color .2s, border-color .2s;
  min-height: 52px;
  white-space: nowrap;
}
.btn svg { width: 18px; height: 18px; flex: none; }
.btn--primary {
  background: var(--navy);
  color: #fff;
  box-shadow: 0 8px 20px rgba(11, 42, 74, 0.18);
}
.btn--primary:hover {
  background: #123457;
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(11, 42, 74, 0.28);
}
.btn--secondary {
  background: var(--sky-tint);
  color: var(--navy);
}
.btn--secondary:hover {
  background: var(--sky-pale);
  transform: translateY(-2px);
}
.btn--ghost {
  background: transparent;
  color: var(--navy);
  border-color: var(--border);
}
.btn--ghost:hover {
  background: var(--sky-tint);
  transform: translateY(-2px);
}
.btn--ghost-dark {
  background: transparent;
  color: #fff;
  border-color: rgba(255, 255, 255, 0.3);
}
.btn--ghost-dark:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: #fff;
  transform: translateY(-2px);
}
.btn--lg {
  font-size: 1.05rem;
  padding: 16px 32px;
  min-height: 56px;
}
```

- [ ] **Step 3: Delete the `.topbar` CSS block**

Delete the `/* Topbar */` comment and the `.topbar`, `.topbar .wrap`, `.topbar a`, `.topbar a:hover`, `.topbar .r` rules immediately following it in `app/globals.css` (TopBar is being removed from the render tree in this task).

- [ ] **Step 4: Rewrite `app/layout.tsx`**

Replace the full file with:

```tsx
import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import ScrollReveal from "@/components/ScrollReveal";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veritycleaning.co"),
  title: "Verity Cleaning — A Clean Home, More Time Back",
  description:
    "Licensed, bonded, and insured home & office cleaning in Shelby County, AL. Personalized quotes, background-checked cleaners, and a modern, effortless experience. Call or text (205) 888-0199.",
  alternates: { canonical: "/" },
  keywords: [
    "cleaning service Shelby County",
    "home cleaning Pelham AL",
    "house cleaning Alabaster AL",
    "maid service Hoover AL",
    "deep cleaning Helena AL",
    "office cleaning Chelsea AL",
    "licensed insured cleaning company",
  ],
  icons: { icon: "/clean-home.png" },
  openGraph: {
    title: "Verity Cleaning — A Clean Home, More Time Back",
    description:
      "Licensed, bonded, and insured cleaning with a 100% satisfaction guarantee. Serving Pelham, Alabaster, Hoover, and Helena. Call or text (205) 888-0199.",
    type: "website",
    url: "https://veritycleaning.co",
    siteName: "Verity Cleaning, LLC",
    locale: "en_US",
    images: [{ url: "/clean-home.png", width: 800, height: 600, alt: "A tidy, sunlit home" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verity Cleaning — A Clean Home, More Time Back",
    description:
      "Licensed, bonded, and insured cleaning with a 100% satisfaction guarantee. Call or text (205) 888-0199.",
    images: ["/clean-home.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2A4A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${inter.variable}`}>
      <body>
        {/* Mark JS active before paint so the reveal animation only hides
            content when it can actually un-hide it (no-JS users see everything). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <MobileBar />
        <ScrollReveal />
        <Analytics />
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Delete `components/TopBar.tsx`**

```bash
rm "components/TopBar.tsx"
```

- [ ] **Step 6: Verify**

Run:
```bash
npx tsc --noEmit
```
Expected: no output (this WILL show errors right now because `Header.tsx` still imports things fine but the page will look broken until later tasks — that's expected. The type check should still pass since we haven't changed any component signatures yet, only deleted TopBar and removed its import from layout.tsx).

Run:
```bash
npm run build
```
Expected: build succeeds.

- [ ] **Step 7: Commit**

```bash
git add app/globals.css app/layout.tsx components/TopBar.tsx
git commit -m "Add design tokens, ambient atmosphere layer, and swap to Geist font

Foundation for the homepage redesign: new color tokens, renamed
button classes (primary/secondary/ghost/ghost-dark), the continuous
sunlit-room background gradient replacing flat section colors, Geist
display font, and removal of the dark utility TopBar."
```

---

### Task 2: Icons — add Heart, Yelp, Nextdoor

**Files:**
- Modify: `components/Icons.tsx` (append new exports)

**Interfaces:**
- Consumes: the existing `Base` helper component and `IconProps` type already defined in this file.
- Produces: `Heart`, `Yelp`, `Nextdoor` exported icon components, used by Task 6 (ProcessSection) and Task 14 (Footer).

- [ ] **Step 1: Append three new icon exports to `components/Icons.tsx`**

Add at the end of the file (after the `Map` export):

```tsx

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
```

These are deliberately generic marks (a speech bubble for a review platform, a simple house for a neighborhood platform) — not reproductions of the actual Yelp/Nextdoor logos.

- [ ] **Step 2: Verify**

```bash
npx tsc --noEmit
```
Expected: no output.

- [ ] **Step 3: Commit**

```bash
git add components/Icons.tsx
git commit -m "Add Heart, Yelp, and Nextdoor icons"
```

---

### Task 3: Header

**Files:**
- Modify: `components/Header.tsx` (full file)
- Modify: `app/globals.css` (header/nav section)

**Interfaces:**
- Produces: `.site-header`, `.nav`, `.brand`, `.brand-wordmark`, `.nav-links`, `.nav-cta`, `.nav-toggle` CSS classes used only by this component.

- [ ] **Step 1: Rewrite `components/Header.tsx`**

```tsx
"use client";

import { useState } from "react";
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
```

- [ ] **Step 2: Replace the header/nav CSS block in `app/globals.css`**

Find the `/* Header & Navigation (Glassmorphic) */` block (from `.site-header` through `.nav-toggle svg`) and replace it with:

```css
/* Header & Navigation (Glassmorphic) */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 0;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}
.brand-wordmark {
  display: flex;
  flex-direction: column;
  line-height: 1;
}
.brand-wordmark b {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.35rem;
  color: var(--navy);
  letter-spacing: -0.01em;
}
.brand-wordmark small {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: .72rem;
  color: var(--sky-deep);
  letter-spacing: 0.04em;
  margin-top: 2px;
}
.nav-links {
  display: flex;
  gap: 32px;
}
.nav-links a {
  font-weight: 500;
  color: var(--navy-muted);
  font-size: .95rem;
  transition: color 0.15s;
}
.nav-links a:hover {
  color: var(--navy);
}
.nav-cta {
  display: flex;
  align-items: center;
  gap: 16px;
}
.nav-toggle {
  display: none;
  background: none;
  border: 0;
  cursor: pointer;
  color: var(--navy);
  padding: 8px;
}
.nav-toggle svg { width: 26px; height: 26px; }
```

(This drops the old `.brand-mascot` rule entirely — Header no longer renders a sparkle icon.)

- [ ] **Step 3: Update the mobile nav-links override**

In the `@media(max-width:760px)` block, find `.nav-links.open { ... background: #fff; ... }` and change `background: #fff;` to `background: var(--bg);` (functionally identical, just using the token consistently — optional but keep consistent if touching the block; otherwise leave as-is, `#fff` and `var(--bg)` are the same value).

- [ ] **Step 4: Verify**

```bash
npx tsc --noEmit && npm run build
```
Expected: both succeed with no errors.

Then screenshot per the Global Constraints pattern and view it — confirm the header shows "Verity Cleaning / More Time Back" wordmark (no icon), 4 nav links, and a single navy "Get my quote" button, with a translucent blurred background on scroll.

- [ ] **Step 5: Commit**

```bash
git add components/Header.tsx app/globals.css
git commit -m "Redesign header: drop sparkle mark, simplify nav, single quote CTA"
```

---

### Task 4: Hero + hero image

**Files:**
- Modify: `components/Hero.tsx` (full file)
- Modify: `app/globals.css` (hero section)
- Create: `public/hero-home.jpg`

**Interfaces:**
- Produces: `.hero`, `.hero-grid`, `.hero h1`, `.hero .sub`, `.hero-cta`, `.trust-list`, `.trust-ck`, `.hero-photo` CSS classes.
- Consumes: `Check` icon from `components/Icons.tsx`.

- [ ] **Step 1: Download the hero photo**

```bash
curl -sL "https://images.unsplash.com/photo-1768609239321-1cfe14893e80?fm=jpg&q=80&w=1600&auto=format&fit=crop" -o "public/hero-home.jpg"
```

Verify it downloaded (should be a few hundred KB):
```bash
ls -la public/hero-home.jpg
```

- [ ] **Step 2: Rewrite `components/Hero.tsx`**

```tsx
import Image from "next/image";
import { Check } from "./Icons";

const TRUST = [
  "Fully licensed, bonded & insured",
  "100% satisfaction guarantee",
  "Background-checked cleaners",
  "Upfront pricing — no surprises",
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>
            A Clean Home.
            <br />
            More Time Back.
          </h1>
          <p className="sub">
            Life is busy enough. We&rsquo;ll take care of the cleaning so you can spend more
            time with your family, your hobbies, your pets &mdash; or simply relax.
          </p>

          <div className="hero-cta">
            <a href="#quote" className="btn btn--primary btn--lg">
              Get my personalized quote
            </a>
            <a href="#process" className="btn btn--secondary btn--lg">
              What to expect
            </a>
          </div>

          <ul className="trust-list">
            {TRUST.map((t) => (
              <li key={t}>
                <span className="trust-ck" aria-hidden="true"><Check /></span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-photo reveal">
          <Image
            src="/hero-home.jpg"
            alt="A bright, sunlit modern living room"
            fill
            priority
            sizes="(max-width: 960px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Replace the `/* Hero Section */` CSS block**

Replace everything from `/* Hero Section */` through `.trust-ck svg { ... }` with:

```css
/* Hero Section */
.hero {
  position: relative;
  padding-block: 64px 96px;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
}
.hero h1 {
  font-size: clamp(2.6rem, 5.2vw, 4.4rem);
  font-weight: 700;
  color: var(--navy);
  letter-spacing: -.03em;
}
.hero .sub {
  margin-top: 22px;
  font-size: 1.18rem;
  color: var(--navy-muted);
  max-width: 46ch;
  line-height: 1.65;
}
.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 34px;
}
.trust-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 24px;
  margin-top: 36px;
}
.trust-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: .93rem;
  color: var(--navy-muted);
  font-weight: 500;
}
.trust-ck {
  width: 20px;
  height: 20px;
  background: var(--sky-tint);
  color: var(--sky-deep);
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex: none;
}
.trust-ck svg { width: 11px; height: 11px; stroke-width: 3; }
.hero-photo {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: var(--shadow);
}
```

This removes the old `.hero::before` radial-glow gradient, `.tagstrip`, `.hero-rating`/`.hero-stars`/`.hero-rating-text` rules (no tag pill, no fake rating badge — none of these are used by the new markup).

- [ ] **Step 4: Add the mobile hero-photo max-width in the responsive block**

In the `@media(max-width:960px)` block, the existing line `.hero-grid, .why-grid, .area-grid { grid-template-columns: 1fr; gap: 40px; }` already stacks the hero grid to one column — add directly after it:

```css
  .hero-photo { aspect-ratio: 16/10; }
```

- [ ] **Step 5: Verify**

```bash
npx tsc --noEmit && npm run build
```
Expected: both succeed.

Screenshot and view: confirm the hero shows the two-line headline, subheadline, two buttons (navy primary + sky-tint secondary), a 2x2 trust list, and the photo fills a rounded card on the right with no visible gradient background behind it (just the ambient body wash).

- [ ] **Step 6: Commit**

```bash
git add components/Hero.tsx app/globals.css public/hero-home.jpg
git commit -m "Redesign hero: new headline/copy, lifestyle photo, no embedded form"
```

---

### Task 5: Trust strip (StatBand)

**Files:**
- Modify: `components/StatBand.tsx` (full file)
- Modify: `app/globals.css` (statband section)

- [ ] **Step 1: Rewrite `components/StatBand.tsx`**

```tsx
import { Shield, Users, CheckCircle, Clock } from "./Icons";

const STATS = [
  { icon: Shield, title: "Licensed & Bonded", sub: "Full peace of mind" },
  { icon: Users, title: "Background-Checked", sub: "Every cleaner vetted" },
  { icon: CheckCircle, title: "100% Guaranteed", sub: "We make it right, always" },
  { icon: Clock, title: "On Time", sub: "We respect your schedule" },
];

export default function StatBand() {
  return (
    <section className="statband" aria-label="Credentials">
      <div className="wrap">
        <div className="row">
          {STATS.map(({ icon: Icon, title, sub }) => (
            <div className="stat" key={title}>
              <span className="ic">
                <Icon />
              </span>
              <div>
                <b>{title}</b>
                <span>{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Replace the `/* Stat Band */` CSS block**

```css
/* Stat Band */
.statband {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.statband .row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 28px 0;
}
.stat {
  display: flex;
  align-items: center;
  gap: 14px;
  justify-content: center;
}
.stat .ic {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--sky-tint);
  display: grid;
  place-items: center;
  color: var(--sky-deep);
  flex: none;
}
.stat .ic svg { width: 20px; height: 20px; }
.stat b {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
  display: block;
  line-height: 1.2;
  color: var(--navy);
}
.stat span {
  font-size: .82rem;
  color: var(--muted);
}
```

(This removes `background: var(--surface)` from `.statband` — the strip now sits transparently on the ambient layer, per the retirement of `--surface`.)

- [ ] **Step 3: Verify**

```bash
npx tsc --noEmit && npm run build
```
Expected: both succeed.

- [ ] **Step 4: Commit**

```bash
git add components/StatBand.tsx app/globals.css
git commit -m "Restyle trust strip with new tokens, drop flat background"
```

---

### Task 6: What to Expect — flagship vertical timeline

This is the most visually important task in the plan (see spec rationale: this section replaces the old generic "Our Difference" concept entirely and must read as the standout section of the page).

**Files:**
- Modify: `components/ProcessSection.tsx` (full file)
- Modify: `app/globals.css` (process section)

**Interfaces:**
- Consumes: `Home`, `CheckCircle`, `Clock`, `Sms`, `Heart` icons from `components/Icons.tsx` (all exist after Task 2).

- [ ] **Step 1: Rewrite `components/ProcessSection.tsx`**

```tsx
import { Home, CheckCircle, Clock, Sms, Heart } from "./Icons";

const STEPS = [
  {
    Icon: Home,
    title: "Tell Us About Your Home",
    body: "Complete a simple questionnaire and optionally upload a few photos so we can understand your home's needs.",
  },
  {
    Icon: CheckCircle,
    title: "Receive Your Personalized Quote",
    body: "Every home is different. We carefully review your information and send a customized quote — no one-size-fits-all pricing.",
  },
  {
    Icon: Clock,
    title: "Schedule Your Cleaning",
    body: "Choose a date and time that works best for you.",
  },
  {
    Icon: Sms,
    title: "Stay Informed",
    body: "If you opt in, we'll keep you updated throughout the appointment.",
    checklist: ["Cleaner is on the way", "Cleaning has started", "Cleaning is complete"],
  },
  {
    Icon: Heart,
    title: "Enjoy Your Time Back",
    body: "Come home to a beautifully cleaned space and spend your time doing what matters most.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section process" id="process">
      <div className="wrap">
        <div className="center reveal">
          <span className="eyebrow">What to Expect</span>
          <h2 style={{ marginTop: "12px" }}>Here&rsquo;s exactly what happens</h2>
          <p className="lead" style={{ margin: "14px auto 0" }}>
            No guesswork, no hidden steps. Here&rsquo;s the whole process, start to finish.
          </p>
        </div>

        <ol className="timeline">
          {STEPS.map(({ Icon, title, body, checklist }, i) => (
            <li className="tstep reveal" key={title}>
              <div className="tstep-card">
                <span className="sr-only">Step {i + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
                {checklist && (
                  <ul className="tstep-check">
                    {checklist.map((c) => (
                      <li key={c}>
                        <CheckCircle />
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <span className="tstep-node" aria-hidden="true">
                <Icon />
              </span>
              <span className="tstep-spacer" />
            </li>
          ))}
        </ol>

        <div className="section-cta-row reveal">
          <a href="#quote" className="btn btn--primary btn--lg">
            Get my personalized quote
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Replace the `/* Process Section */` CSS block**

Replace everything from `/* Process Section */` through `.step p { ... }` with:

```css
/* Process Section — What to Expect (flagship vertical timeline) */
.process { position: relative; }
.timeline {
  position: relative;
  margin-top: 56px;
}
.timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
  transform: translateX(-50%);
}
.tstep {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 32px;
  padding: 24px 0;
}
.tstep-card {
  border-radius: 24px;
  padding: 28px 32px;
  border: 1px solid var(--border);
  background: #fff;
}
.tstep:nth-child(even) .tstep-card {
  grid-column: 3;
  background: var(--sky-tint);
  border-color: transparent;
}
.tstep:nth-child(even) .tstep-spacer {
  grid-column: 1;
}
.tstep-node {
  grid-column: 2;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--navy);
  color: #fff;
  display: grid;
  place-items: center;
  position: relative;
  z-index: 1;
  box-shadow: var(--shadow);
  flex: none;
}
.tstep-node svg { width: 24px; height: 24px; }
.tstep-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--navy);
}
.tstep-card p {
  color: var(--muted);
  margin-top: 10px;
  font-size: .96rem;
  line-height: 1.65;
}
.tstep-check {
  margin-top: 16px;
  display: grid;
  gap: 8px;
}
.tstep-check li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: .9rem;
  color: var(--navy-muted);
  font-weight: 500;
}
.tstep-check svg { width: 15px; height: 15px; color: var(--sky-deep); flex: none; }
```

- [ ] **Step 3: Add the mobile timeline layout to the `@media(max-width:760px)` block**

Add inside the existing `@media(max-width:760px) { ... }` block:

```css
  .timeline::before { left: 27px; }
  .tstep { grid-template-columns: 56px 1fr; gap: 16px; padding: 16px 0; }
  .tstep-node { grid-column: 1; }
  .tstep-card,
  .tstep:nth-child(even) .tstep-card { grid-column: 2; }
  .tstep-spacer,
  .tstep:nth-child(even) .tstep-spacer { display: none; }
```

- [ ] **Step 4: Verify**

```bash
npx tsc --noEmit && npm run build
```
Expected: both succeed.

Screenshot at both the default 1440px width and a mobile width (rerun the same chrome command with `--window-size=390,4000`) and view both. Confirm on desktop: a vertical center spine connects 5 numbered icon circles, cards alternate left/right and alternate white/sky-tint background, and step 4's card shows an actual 3-item checklist (not just a sentence). Confirm on mobile: everything collapses to one left-aligned column with icons on the left.

- [ ] **Step 5: Commit**

```bash
git add components/ProcessSection.tsx app/globals.css
git commit -m "Rebuild What to Expect as the flagship vertical timeline

Replaces the old generic 3-step grid with a 5-step alternating
vertical timeline per the amended spec — this is now the primary
differentiator section on the page, not a features list."
```

---

### Task 7: Why Verity

**Files:**
- Modify: `components/WhyUs.tsx` (full file)
- Modify: `app/globals.css` (why section)

- [ ] **Step 1: Rewrite `components/WhyUs.tsx`**

```tsx
import Image from "next/image";
import { Check, Phone } from "./Icons";

const REASONS = [
  ["No hidden fees", "the price we quote is the price you pay — no surprise add-ons."],
  ["A detailed checklist", "our cleaners follow the same thorough process every visit."],
  ["Licensed & insured", "every cleaner and every visit is fully covered for your peace of mind."],
  ["Background-checked staff", "trustworthy people you can feel comfortable welcoming into your home."],
];

export default function WhyUs() {
  return (
    <section className="section why tone-sky" id="why">
      <div className="wrap why-grid">
        <div className="why-art reveal">
          <Image
            src="/clean-home.png"
            alt="A tidy, sunlit home"
            width={800}
            height={600}
            style={{ width: "100%", height: "auto", borderRadius: "16px" }}
          />
          <span className="tag">Honest, from quote to clean</span>
        </div>

        <div className="reveal">
          <span className="eyebrow">Why Verity</span>
          <h2 style={{ marginTop: "12px" }}>We do what we say we&rsquo;ll do</h2>
          <p className="lead" style={{ marginTop: "14px" }}>
            &ldquo;Verity&rdquo; means truth. It&rsquo;s a simple idea we build everything
            around: transparent pricing, careful work, and a team you can trust in your home.
          </p>
          <ul className="checks">
            {REASONS.map(([title, rest]) => (
              <li key={title}>
                <span className="ck">
                  <Check />
                </span>
                <span>
                  <b>{title}</b> &mdash; {rest}
                </span>
              </li>
            ))}
          </ul>
          <div className="owners">
            <div className="owner">
              <b>Background-checked team</b>
              <span>Every cleaner vetted before they enter your home</span>
            </div>
            <div className="owner">
              <b>100% guaranteed</b>
              <span>Not happy? We&rsquo;ll make it right, free of charge</span>
            </div>
          </div>
          <div className="section-cta-row reveal" style={{ justifyContent: "flex-start", marginTop: "28px" }}>
            <a href="tel:+12058880199" className="btn btn--primary btn--lg">
              <Phone />
              Call or text (205) 888-0199
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Replace the `/* Why Us Section */` CSS block**

Replace everything from `/* Why Us Section */` through `.checks span { ... }` with:

```css
/* Why Verity Section */
.why { position: relative; }
.why-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.why-art {
  position: relative;
  border-radius: 24px;
  padding: 16px;
  background: #fff;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
}
.why-art img { width: 100%; height: auto; display: block; border-radius: 16px; }
.why-art .tag {
  position: absolute;
  right: -14px;
  top: 28px;
  background: var(--sky-deep);
  color: var(--navy);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: .78rem;
  padding: 10px 18px;
  border-radius: 10px;
  box-shadow: var(--shadow);
}
.why h2 {
  font-size: clamp(2rem, 4vw, 2.7rem);
  font-weight: 700;
  color: var(--navy);
}
.owners {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}
.owner b {
  font-family: var(--font-display);
  color: var(--navy);
  font-weight: 700;
  display: block;
  margin-bottom: 4px;
}
.owner span {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.5;
}
.section-cta-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  justify-content: center;
  margin-top: 32px;
}
.checks {
  margin-top: 28px;
  display: grid;
  gap: 16px;
}
.checks li {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  font-size: 1rem;
}
.checks .ck {
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background: var(--sky-tint);
  color: var(--sky-deep);
  display: grid;
  place-items: center;
  flex: none;
  margin-top: 2px;
}
.checks .ck svg { width: 14px; height: 14px; stroke-width: 3; }
.checks b {
  font-family: var(--font-display);
  color: var(--navy);
  font-weight: 700;
  display: block;
  margin-bottom: 2px;
}
.checks span {
  font-size: 0.95rem;
  color: var(--muted);
}
```

(This removes `background: var(--surface)` from `.why` — transparent over the ambient layer — and moves `.section-cta-row` here since this is the first section that defines it; later tasks reuse the class without redefining it.)

- [ ] **Step 3: Verify**

```bash
npx tsc --noEmit && npm run build
```
Expected: both succeed.

Screenshot and view: confirm no large blank gap in the photo card (this was the bug fixed earlier this session — should not recur since the old `clue-marker` element is long gone), and the sky-deep tag pill reads clearly against the photo.

- [ ] **Step 4: Commit**

```bash
git add components/WhyUs.tsx app/globals.css
git commit -m "Restyle Why Verity section, reframe copy around trust not just honesty"
```

---

### Task 8: See the Difference (before/after slider)

**Files:**
- Create: `components/BeforeAfterSlider.tsx`
- Modify: `app/globals.css` (append new section)
- Modify: `app/page.tsx` (add import + render — see Task 16 for final ordering; for this task, just add it temporarily after `WhyUs` so it's visible for review)
- Create: `public/after-placeholder.jpg`
- Create: `public/before-placeholder.jpg`

**Interfaces:**
- Produces: default-exported `BeforeAfterSlider` component, self-contained (owns its own `"use client"` state), rendered by `app/page.tsx`.

- [ ] **Step 1: Download the before/after placeholder photos**

```bash
curl -sL "https://images.unsplash.com/photo-1771627278983-b07eb108e475?fm=jpg&q=80&w=1600&auto=format&fit=crop" -o "public/after-placeholder.jpg"
curl -sL "https://images.unsplash.com/photo-1694151569569-8288e3118519?fm=jpg&q=80&w=1600&auto=format&fit=crop" -o "public/before-placeholder.jpg"
ls -la public/after-placeholder.jpg public/before-placeholder.jpg
```

- [ ] **Step 2: Create `components/BeforeAfterSlider.tsx`**

```tsx
"use client";

import { useState } from "react";

/* Placeholder before/after photos (see Global Constraints in the plan
   for sourcing/license) — swap public/before-placeholder.jpg and
   public/after-placeholder.jpg for real job photos once available.
   Plain <img> (not next/image) intentionally: this overlay technique
   needs both images absolutely positioned at the same natural size,
   which is simpler without next/image's wrapper/srcset behavior. */
export default function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);

  return (
    <section className="section seedifference" id="results">
      <div className="wrap center reveal">
        <span className="eyebrow">See the Difference</span>
        <h2 style={{ marginTop: "12px" }}>A space you&rsquo;ll actually enjoy coming home to</h2>
        <p className="lead" style={{ margin: "14px auto 0" }}>
          Drag the slider to see the kind of difference a Verity clean makes.
        </p>
      </div>

      <div className="wrap">
        <div className="baslider">
          <div className="baslider-frame">
            <img src="/after-placeholder.jpg" alt="A bright, freshly cleaned home" className="ba-img" />
            <img
              src="/before-placeholder.jpg"
              alt=""
              aria-hidden="true"
              className="ba-img ba-before"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            />
            <div className="ba-handle" style={{ left: `${pos}%` }} aria-hidden="true">
              <span className="ba-handle-grip" />
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              className="ba-range"
              aria-label="Drag to compare before and after cleaning"
            />
            <span className="ba-label ba-label--before">Before</span>
            <span className="ba-label ba-label--after">After</span>
          </div>
        </div>
      </div>
    </section>
  );
}
```

Note: a native `<input type="range">` is used as the interactive control — this gets keyboard support (arrow keys, Home/End) and touch/mouse dragging for free from the browser, satisfying the "keyboard accessible" requirement without custom pointer-event code. On `prefers-reduced-motion`, no JS-driven animation runs anyway (the clip-path updates instantly on input, no transition), so no extra handling is needed there.

- [ ] **Step 3: Append the before/after slider CSS to `app/globals.css`**

Add after the `.checks span { ... }` rule (end of the Why Verity block from Task 7):

```css

/* See the Difference — before/after slider */
.baslider { margin-top: 48px; }
.baslider-frame {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  user-select: none;
}
.ba-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.ba-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #fff;
  transform: translateX(-50%);
  pointer-events: none;
  box-shadow: 0 0 0 1px rgba(11,42,74,0.15);
}
.ba-handle-grip {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #fff;
  box-shadow: var(--shadow-hover);
}
.ba-range {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: ew-resize;
  appearance: none;
  -webkit-appearance: none;
}
.ba-range::-webkit-slider-thumb {
  appearance: none;
  -webkit-appearance: none;
  width: 44px;
  height: 44px;
}
.ba-range::-moz-range-thumb {
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
}
.ba-label {
  position: absolute;
  top: 16px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: .75rem;
  letter-spacing: .06em;
  text-transform: uppercase;
  padding: 6px 12px;
  border-radius: 20px;
  background: rgba(11, 42, 74, 0.55);
  color: #fff;
  pointer-events: none;
}
.ba-label--before { left: 16px; }
.ba-label--after { right: 16px; }
```

- [ ] **Step 4: Temporarily wire it into `app/page.tsx` for review**

Add the import and render it directly after `<WhyUs />`:

```tsx
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
```
```tsx
      <WhyUs />
      <BeforeAfterSlider />
```

(Task 16 will finalize the complete page order; this step just makes it visible now.)

- [ ] **Step 5: Verify**

```bash
npx tsc --noEmit && npm run build
```
Expected: both succeed.

Screenshot and view: confirm a labeled "Before"/"After" image comparison renders with a visible white divider handle around the middle. Then manually test in the dev server (not just screenshot) that dragging the slider or clicking it and pressing arrow keys moves the divider — this needs an interactive check, not just a static screenshot, so open `http://localhost:3000#results` in a real browser tab if available, or note in the task result that interaction was verified via the range input's native behavior (it's a standard HTML control, so keyboard/touch support is guaranteed by the browser once the element renders correctly).

- [ ] **Step 6: Commit**

```bash
git add components/BeforeAfterSlider.tsx app/globals.css app/page.tsx public/after-placeholder.jpg public/before-placeholder.jpg
git commit -m "Add See the Difference before/after slider

New section with a draggable, keyboard-accessible before/after image
comparison using placeholder photos (clearly swappable for real job
photos later)."
```

---

### Task 9: Get Your Quote (dedicated section) + bed/bath fields

**Files:**
- Create: `components/QuoteSection.tsx`
- Modify: `components/QuoteForm.tsx` (full file)
- Modify: `app/globals.css` (quote card section)
- Modify: `app/page.tsx` (add import + render, same temporary approach as Task 8)

**Interfaces:**
- Produces: default-exported `QuoteSection` component wrapping the existing `QuoteForm`.
- Consumes: `QuoteForm` default export from `components/QuoteForm.tsx`.

- [ ] **Step 1: Rewrite `components/QuoteForm.tsx`**

```tsx
"use client";

import { useState } from "react";
import { Sms } from "./Icons";

const PHONE = "2058880199";

function buildSmsHref(
  name: string,
  phone: string,
  service: string,
  bedrooms: string,
  bathrooms: string,
  message: string
) {
  const details = message.trim() ? ` Details: ${message.trim()}.` : "";
  const body = `Hi Verity Cleaning — I'd like a quote. My name is ${name || "(name)"}. Service needed: ${service}. Home size: ${bedrooms} bed / ${bathrooms} bath.${details} Best phone: ${phone || "(phone)"}.`;
  return `sms:+1${PHONE}?&body=${encodeURIComponent(body)}`;
}

export default function QuoteForm() {
  const [draftHref, setDraftHref] = useState<string | null>(null);

  function onSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const href = buildSmsHref(
      ((f.get("name") as string) || "").trim(),
      ((f.get("phone") as string) || "").trim(),
      (f.get("service") as string) || "",
      (f.get("bedrooms") as string) || "",
      (f.get("bathrooms") as string) || "",
      (f.get("message") as string) || ""
    );
    setDraftHref(href);
    window.location.href = href;
  }

  if (draftHref) {
    return (
      <div className="quote reveal" id="quote">
        <h2>Your text is ready</h2>
        <p className="note">
          We just opened your messaging app with the details filled in &mdash; review
          it and hit send. Didn&rsquo;t open?
        </p>
        <a className="btn btn--primary" href={draftHref} style={{ width: "100%" }}>
          <Sms />
          Open the text draft
        </a>
        <p className="or" style={{ marginTop: "12px" }}>
          or call <a href={`tel:+1${PHONE}`}>(205) 888-0199</a>
        </p>
        <button type="button" className="quote-edit" onClick={() => setDraftHref(null)}>
          &larr; Edit details
        </button>
      </div>
    );
  }

  return (
    <div className="quote reveal" id="quote">
      <h2>Tell us about your home</h2>
      <p className="note">Fill it out &mdash; we&rsquo;ll draft your text in one tap.</p>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="qn">Name</label>
          <input id="qn" name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="qp">Phone</label>
          <input id="qp" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(205) 555-0123" required />
        </div>
        <div className="quote-row">
          <div>
            <label htmlFor="qbed">Bedrooms</label>
            <select id="qbed" name="bedrooms" defaultValue="3">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </div>
          <div>
            <label htmlFor="qbath">Bathrooms</label>
            <select id="qbath" name="bathrooms" defaultValue="2">
              <option>1</option>
              <option>1.5</option>
              <option>2</option>
              <option>2.5</option>
              <option>3+</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="qs">Service needed</label>
          <select id="qs" name="service" defaultValue="Residential Cleaning">
            <option>Residential Cleaning</option>
            <option>Deep Cleaning</option>
            <option>Move-In / Move-Out Cleaning</option>
            <option>Commercial &amp; Office Cleaning</option>
            <option>Post-Construction Cleaning</option>
            <option>Something else</option>
          </select>
        </div>
        <div>
          <label htmlFor="qm">
            Anything else we should know <span className="label-opt">(optional)</span>
          </label>
          <textarea
            id="qm"
            name="message"
            rows={3}
            placeholder="E.g., pets in the home, preferred schedule, specific areas to focus on."
          />
        </div>
        <button className="btn btn--primary" type="submit">
          <Sms />
          Get my personalized quote
        </button>

        <p className="or">
          or just call/text <a href={`tel:+1${PHONE}`}>(205) 888-0199</a>
        </p>
      </form>
    </div>
  );
}
```

- [ ] **Step 2: Create `components/QuoteSection.tsx`**

```tsx
import QuoteForm from "./QuoteForm";

export default function QuoteSection() {
  return (
    <section className="section quote-section tone-sky">
      <div className="wrap center">
        <span className="eyebrow">Get Your Quote</span>
        <h2 style={{ marginTop: "12px" }}>Every home is different</h2>
        <p className="lead" style={{ margin: "14px auto 0" }}>
          Tell us a little about your space and we&rsquo;ll put together pricing that
          actually fits it &mdash; no one-size-fits-all packages.
        </p>
        <div className="quote-wrap">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
```

Note: `QuoteForm`'s root element keeps `id="quote"` (unchanged) — every `href="#quote"` link elsewhere in the site (Header, Hero, MobileBar, section CTAs) continues to work without modification because the anchor target didn't move, only its section wrapper changed.

- [ ] **Step 3: Replace the `/* Quote Form Card */` CSS block**

Replace everything from `/* Quote Form Card */` through `.quote-check { ... }` with:

```css
/* Quote Section */
.quote-wrap { max-width: 520px; margin: 40px auto 0; text-align: left; }
.quote {
  background: #ffffff;
  border-radius: 24px;
  padding: 32px;
  box-shadow: var(--shadow-hover);
  border: 1px solid var(--border);
}
.quote h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--navy);
}
.quote p.note {
  color: var(--muted);
  font-size: .9rem;
  margin-top: 4px;
}
.quote form {
  margin-top: 20px;
  display: grid;
  gap: 14px;
}
.quote-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.quote label {
  font-size: .76rem;
  font-weight: 600;
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: .05em;
  color: var(--navy-muted);
  display: block;
  margin-bottom: 6px;
}
.quote input, .quote select, .quote textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1.5px solid var(--border);
  border-radius: 12px;
  font: inherit;
  font-size: 0.95rem;
  background: #fff;
  min-height: 46px;
  color: var(--ink);
  transition: border-color 0.2s, box-shadow 0.2s;
}
.quote textarea {
  min-height: 90px;
  resize: vertical;
  line-height: 1.5;
}
.quote input:focus, .quote select:focus, .quote textarea:focus {
  border-color: var(--sky-deep);
  outline: none;
  box-shadow: 0 0 0 3px rgba(95, 180, 240, 0.18);
}
.quote .btn { width: 100%; }
.quote .or { text-align: center; font-size: .88rem; color: var(--muted); }
.quote .or a { color: var(--navy); font-weight: 600; }
.label-opt { font-weight: 400; text-transform: none; letter-spacing: 0; color: var(--muted); }

.quote-edit {
  display: block;
  margin: 16px auto 0;
  background: none;
  border: none;
  color: var(--navy);
  font-weight: 600;
  font-size: .9rem;
  cursor: pointer;
  text-align: center;
}
.quote-edit:hover {
  text-decoration: underline;
}
```

(This drops `.quote::before` — no more teal top accent bar — and `.quote-success`/`.quote-check`, which were unused by the existing markup already.)

- [ ] **Step 4: Wire `QuoteSection` into `app/page.tsx`**

Add the import and render it after `BeforeAfterSlider`:

```tsx
import QuoteSection from "@/components/QuoteSection";
```
```tsx
      <BeforeAfterSlider />
      <QuoteSection />
```

- [ ] **Step 5: Verify**

```bash
npx tsc --noEmit && npm run build
```
Expected: both succeed.

Screenshot and view: confirm a centered "Every home is different" heading above a form card with Name, Phone, a Bedrooms/Bathrooms two-column row, Service, and a message field. Then manually submit the form in a real browser and confirm the drafted SMS body includes "Home size: X bed / Y bath".

- [ ] **Step 6: Commit**

```bash
git add components/QuoteSection.tsx components/QuoteForm.tsx app/globals.css app/page.tsx
git commit -m "Add dedicated Get Your Quote section with bedroom/bathroom fields"
```

---

### Task 10: Services

**Files:**
- Modify: `components/Services.tsx` (full file)
- Modify: `app/globals.css` (service grid section)

- [ ] **Step 1: Rewrite `components/Services.tsx`**

```tsx
import {
  Home, Sparkles, Clock, Building, SprayBottle, ArrowRight, Phone
} from "./Icons";

const SERVICES = [
  {
    Icon: Home,
    title: "Residential Cleaning",
    body: "Weekly, biweekly, or monthly visits built around your household's routine.",
  },
  {
    Icon: Sparkles,
    title: "Deep Cleaning",
    body: "A thorough, top-to-bottom clean that covers baseboards, vents, and every hard-to-reach corner.",
  },
  {
    Icon: Clock,
    title: "Move-In / Move-Out Cleaning",
    body: "A detailed clean to help you settle into a new place or hand off your old one.",
  },
  {
    Icon: Building,
    title: "Commercial & Office Cleaning",
    body: "Clean, welcoming workspaces for offices, shops, and local businesses.",
  },
  {
    Icon: SprayBottle,
    title: "Post-Construction Cleaning",
    body: "We clear away dust, debris, and residue after a renovation or new build.",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="center reveal">
          <span className="eyebrow">Services</span>
          <h2 style={{ marginTop: "12px" }}>Cleaning for every kind of home</h2>
          <p className="lead" style={{ marginTop: "14px" }}>
            From a regular weekly visit to a full deep clean, we tailor each service to your space.
          </p>
        </div>

        <div className="svc">
          {SERVICES.map(({ Icon, title, body }) => (
            <article className="scard reveal" key={title}>
              <div className="scard-body">
                <span className="ic">
                  <Icon />
                </span>
                <h3>
                  <a href="#quote" className="scard-title-link">{title}</a>
                </h3>
                <p>{body}</p>
                <div className="scard-actions">
                  <a href="#quote" className="more" aria-label={`Get a quote for ${title.toLowerCase()}`}>
                    Get a quote <ArrowRight />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="section-cta-row reveal">
          <a href="tel:+12058880199" className="btn btn--primary btn--lg">
            <Phone />
            Call or text (205) 888-0199
          </a>
          <a href="#quote" className="btn btn--ghost btn--lg">Get your quote online</a>
        </div>
      </div>
    </section>
  );
}
```

Note: this simplifies each card from two redundant CTAs ("Book Service" and "Get Estimate," both pointing to the same `#quote` anchor) down to one clear "Get a quote" link — less clutter, same functionality.

- [ ] **Step 2: Replace the `/* Service Grid */` CSS block**

Replace everything from `/* Service Grid */` through `.scard-title-link:hover { ... }` with:

```css
/* Service Grid */
.svc {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 48px;
}
.scard {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 20px;
  transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease);
}
.scard:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}
.scard-body {
  padding: 32px;
}
.scard .ic {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--sky-tint);
  display: grid;
  place-items: center;
  color: var(--sky-deep);
}
.scard .ic svg { width: 22px; height: 22px; }
.scard h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 18px;
  color: var(--navy);
}
.scard p {
  color: var(--muted);
  margin-top: 10px;
  font-size: .95rem;
  line-height: 1.6;
}
.scard-actions {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}
.scard .more {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--navy);
  font-weight: 700;
  font-family: var(--font-display);
  font-size: .85rem;
}
.scard .more svg {
  width: 14px;
  height: 14px;
  transition: transform .2s;
}
.scard:hover .more svg {
  transform: translateX(4px);
}
.scard-title-link:hover {
  text-decoration: underline;
}
```

(This drops `.scard-img`/`.scard-img img` — never actually used, since service cards were always icon+text, not photo cards — `.scard .top`, `.scard .num` (the numbered badge, removed per spec), and `.more--secondary` (the second, now-removed CTA).)

- [ ] **Step 3: Verify**

```bash
npx tsc --noEmit && npm run build
```
Expected: both succeed.

- [ ] **Step 4: Commit**

```bash
git add components/Services.tsx app/globals.css
git commit -m "Simplify services grid: drop numbered badges and duplicate CTAs"
```

---

### Task 11: Follow Us (replaces the old fake Reviews slot)

**Files:**
- Create: `components/FollowUs.tsx`
- Modify: `app/globals.css` (append new section)
- Modify: `app/page.tsx` (add import + render)

**Interfaces:**
- Consumes: `FacebookIcon`, `InstagramIcon`, `Yelp`, `Nextdoor` from `components/Icons.tsx`.

- [ ] **Step 1: Create `components/FollowUs.tsx`**

```tsx
import { FacebookIcon, InstagramIcon, Yelp, Nextdoor } from "./Icons";

const PLATFORMS = [
  { name: "Facebook", href: "https://facebook.com/veritycleaning", Icon: FacebookIcon },
  { name: "Instagram", href: "https://instagram.com/veritycleaning", Icon: InstagramIcon },
  { name: "Nextdoor", href: "https://nextdoor.com/pages/verity-cleaning", Icon: Nextdoor },
  { name: "Yelp", href: "https://yelp.com/biz/verity-cleaning", Icon: Yelp },
];

export default function FollowUs() {
  return (
    <section className="section followus tone-sky" id="follow">
      <div className="wrap center reveal">
        <span className="eyebrow">Follow Along</span>
        <h2 style={{ marginTop: "12px" }}>We&rsquo;re just getting started</h2>
        <p className="lead" style={{ margin: "14px auto 0" }}>
          Verity Cleaning is new to Shelby County, and we&rsquo;d love for you to be one of
          our first customers. Find us and follow along as we grow.
        </p>
        <div className="follow-links">
          {PLATFORMS.map(({ name, href, Icon }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="follow-chip">
              <Icon />
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
```

Note: the four URLs above are placeholders (matching how Facebook/Instagram links were already placeholder'd in the current footer) — swap in real profile URLs once they exist.

- [ ] **Step 2: Delete the orphaned Reviews CSS block**

`components/Reviews.tsx` and `components/ReviewSlider.tsx` were deleted earlier this session (fabricated testimonials), but the CSS they used was never cleaned up. Find and delete the entire `/* Reviews / Testimonials */` block in `app/globals.css` — everything from that comment through the end of the `.rdot.active { ... }` rule (covers `.reviews`, `.rslider`, `.rslide`, `@keyframes rFadeIn`, `.rstars`, `.rtext`, `.rwho`, `.rav`, `.rtime`, `.rcontrols`, `.rarrow`, `.rdots`, `.rdot`, `.rdot.active`). No component references any of these classes anymore.

- [ ] **Step 3: Append the follow-links CSS to `app/globals.css`**

Add after the `.ba-label--after { right: 16px; }` rule from Task 8:

```css

/* Follow Us */
.follow-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
}
.follow-chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px 22px;
  font-weight: 600;
  font-family: var(--font-display);
  font-size: .95rem;
  color: var(--navy);
  transition: all 0.2s;
}
.follow-chip svg { width: 18px; height: 18px; color: var(--sky-deep); }
.follow-chip:hover {
  background: var(--sky-tint);
  transform: translateY(-2px);
}
```

- [ ] **Step 4: Wire `FollowUs` into `app/page.tsx`**

Add the import and render it after `Services`:

```tsx
import FollowUs from "@/components/FollowUs";
```
```tsx
      <Services />
      <FollowUs />
```

- [ ] **Step 5: Verify**

```bash
npx tsc --noEmit && npm run build
```
Expected: both succeed.

Screenshot and view: confirm 4 chips (Facebook, Instagram, Nextdoor, Yelp) render with icons, and no star rating or review count text appears anywhere on the page.

- [ ] **Step 6: Commit**

```bash
git add components/FollowUs.tsx app/globals.css app/page.tsx
git commit -m "Add honest Follow Us section, remove orphaned Reviews CSS

Also deletes the dead .reviews/.rslider CSS block left over from
when the fabricated-testimonial Reviews component was removed
earlier this session."
```

---

### Task 12: Service Area

**Files:**
- Modify: `components/ServiceArea.tsx` (full file)
- Modify: `app/globals.css` (area section)

- [ ] **Step 1: Rewrite `components/ServiceArea.tsx`**

```tsx
import { Pin, Map, Phone } from "./Icons";

const TOWNS = ["Pelham", "Helena", "Alabaster", "Hoover", "Columbiana", "Chelsea", "Calera"];

export default function ServiceArea() {
  return (
    <section className="section" id="area">
      <div className="wrap area-grid">
        <div className="reveal">
          <span className="eyebrow">Where We Clean</span>
          <h2 style={{ marginTop: "12px" }}>Serving Shelby County</h2>
          <p className="lead" style={{ marginTop: "14px" }}>
            We clean homes and offices across these communities &mdash; and everywhere in between.
          </p>
          <div className="chips">
            {TOWNS.map((t) => (
              <span className="chip2" key={t}>
                <Pin />
                {t}
              </span>
            ))}
            <span className="chip2">+ Nearby</span>
          </div>
          <div className="section-cta-row reveal" style={{ justifyContent: "flex-start", marginTop: "28px" }}>
            <a href="tel:+12058880199" className="btn btn--primary btn--lg">
              <Phone />
              Call or text now
            </a>
          </div>
        </div>

        <div className="areacard reveal">
          <div className="ic">
            <Map />
          </div>
          <h3>Proudly serving</h3>
          <div className="county">Shelby County, AL</div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Replace the `/* Area Section */` CSS block**

Replace everything from `/* Area Section */` through `.areacard .county { ... }` with:

```css
/* Service Area Section */
.area-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}
.chip2 {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 16px;
  font-weight: 600;
  font-family: var(--font-display);
  font-size: .88rem;
  color: var(--navy-muted);
}
.chip2 svg { width: 14px; height: 14px; color: var(--sky-deep); }

.areacard {
  background: var(--sky-tint);
  border-radius: 24px;
  padding: 48px;
  color: var(--navy);
  text-align: center;
  border: 1px solid var(--border);
}
.areacard .ic {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: #fff;
  display: grid;
  place-items: center;
  margin: 0 auto 20px;
  color: var(--sky-deep);
  box-shadow: var(--shadow);
}
.areacard .ic svg { width: 30px; height: 30px; }
.areacard h3 {
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  color: var(--navy-muted);
  font-weight: 600;
}
.areacard .county {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 2rem;
  color: var(--navy);
  margin-top: 6px;
}
```

(Drops `.area { background: var(--surface) }` and the `.areacard::before` navy radial-glow pseudo-element — the card is now a light sky-tint card, not a dark navy one.)

- [ ] **Step 3: Verify**

```bash
npx tsc --noEmit && npm run build
```
Expected: both succeed.

- [ ] **Step 4: Commit**

```bash
git add components/ServiceArea.tsx app/globals.css
git commit -m "Restyle service area card from dark navy to soft sky-tint"
```

---

### Task 13: FAQ

**Files:**
- Modify: `components/FAQ.tsx` (only the JSX styling, not the FAQ content/schema)
- Modify: `app/globals.css` (faq section)

- [ ] **Step 1: Update `components/FAQ.tsx`**

Keep the `FAQS` array and the `jsonLd` object exactly as they are (real content, already correct — no eco-friendly or veteran-owned mentions). Replace only the `return (...)` JSX block:

```tsx
  return (
    <section className="section faq tone-sky" id="faq">
      <div className="wrap">
        <div className="center reveal">
          <span className="eyebrow">Got Questions?</span>
          <h2 style={{ marginTop: "12px" }}>Frequently asked questions</h2>
          <p className="lead" style={{ marginTop: "12px" }}>
            Quick answers for Shelby County homeowners &amp; business owners &mdash; or call/text anytime.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((f) => (
            <details className="faq-item reveal" key={f.q}>
              <summary>
                <span>{f.q}</span>
                <span className="faq-ic" aria-hidden="true">+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
```

(This only removes the inline `style={{ fontSize: ..., textTransform: "uppercase", ... }}` from the `<h2>` — everything else, including the JSON-LD schema, is untouched.)

- [ ] **Step 2: Replace the `/* FAQ Details */` CSS block**

Replace everything from `/* FAQ Details */` through `.faq-item p { ... }` with:

```css
/* FAQ Details */
.faq-list {
  max-width: 800px;
  margin: 40px auto 0;
  display: grid;
  gap: 12px;
}
.faq-item {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 0 24px;
}
.faq-item summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 0;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.02rem;
  color: var(--navy);
}
.faq-item summary::-webkit-details-marker { display: none; }
.faq-ic {
  width: 26px;
  height: 26px;
  flex: none;
  border-radius: 8px;
  background: var(--sky-tint);
  color: var(--sky-deep);
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  transition: transform .2s var(--ease);
}
.faq-item[open] .faq-ic {
  transform: rotate(45deg);
}
.faq-item p {
  color: var(--muted);
  padding: 0 0 20px;
  margin: 0;
  font-size: .96rem;
  line-height: 1.65;
}
```

(Drops `.faq { background: var(--surface) }` and the box-shadow on `.faq-item` — hairline border only, per the "no heavy shadows" rule.)

- [ ] **Step 3: Verify**

```bash
npx tsc --noEmit && npm run build
```
Expected: both succeed.

- [ ] **Step 4: Commit**

```bash
git add components/FAQ.tsx app/globals.css
git commit -m "Restyle FAQ accordion, drop uppercase heading and heavy shadow"
```

---

### Task 14: Final CTA + Footer + MobileBar

**Files:**
- Modify: `components/FinalCTA.tsx` (full file)
- Modify: `components/Footer.tsx` (full file)
- Modify: `components/MobileBar.tsx` (full file)
- Modify: `app/globals.css` (cta, footer, mbar sections)

- [ ] **Step 1: Rewrite `components/FinalCTA.tsx`**

```tsx
import { Phone } from "./Icons";

export default function FinalCTA() {
  return (
    <section className="section cta">
      <div className="wrap">
        <h2 className="reveal">Ready for your time back?</h2>
        <p className="reveal">
          Let us take care of the cleaning, so you can get back to what matters.
        </p>
        <div className="acts reveal">
          <a href="tel:+12058880199" className="btn btn--secondary btn--lg">
            <Phone />
            Call or text (205) 888-0199
          </a>
          <a href="#quote" className="btn btn--ghost-dark btn--lg">
            Get my personalized quote
          </a>
        </div>
        <div className="reveal" style={{ marginTop: "20px" }}>
          <span className="emerg">
            100% satisfaction guarantee &bull; Licensed, bonded &amp; insured
          </span>
        </div>
      </div>
    </section>
  );
}
```

Note: this section's background is solid navy (see CSS below), so it deliberately uses `.btn--secondary` (sky-tint fill) instead of `.btn--primary` (navy fill) for the phone button — navy-on-navy would be invisible.

- [ ] **Step 2: Replace the `/* Final CTA Section */` CSS block**

Replace everything from `/* Final CTA Section */` through `.emerg { ... }` with:

```css
/* Final CTA Section */
.cta {
  background: var(--navy);
  color: #fff;
  text-align: center;
}
.cta h2 {
  font-size: clamp(2.1rem, 4.2vw, 3rem);
  font-weight: 700;
  letter-spacing: -.02em;
}
.cta p {
  color: rgba(255, 255, 255, 0.72);
  margin-top: 14px;
  font-size: 1.1rem;
}
.cta .acts {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 32px;
}
.emerg {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: .93rem;
  color: rgba(255, 255, 255, 0.85);
}
```

(Drops the diagonal teal gradient, the inset box-shadow, and the `.cta::before` radial-glow pseudo-element — solid navy only, per spec.)

- [ ] **Step 3: Rewrite `components/Footer.tsx`**

```tsx
import { Phone, Sms, FacebookIcon, InstagramIcon, Yelp, Nextdoor } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap fg">
        <div className="fb">
          <a className="brand" href="/" aria-label="Verity Cleaning — home">
            <span className="brand-wordmark">
              <b>Verity Cleaning</b>
              <small>More Time Back</small>
            </span>
          </a>
          <p>
            Licensed, bonded, and insured home and office cleaning for Shelby County, Alabama.
          </p>
          <div className="fsocials">
            <a href="https://facebook.com/veritycleaning" target="_blank" rel="noopener noreferrer" aria-label="Verity Cleaning on Facebook">
              <FacebookIcon style={{ width: "16px", height: "16px" }} />
            </a>
            <a href="https://instagram.com/veritycleaning" target="_blank" rel="noopener noreferrer" aria-label="Verity Cleaning on Instagram">
              <InstagramIcon style={{ width: "16px", height: "16px" }} />
            </a>
            <a href="https://nextdoor.com/pages/verity-cleaning" target="_blank" rel="noopener noreferrer" aria-label="Verity Cleaning on Nextdoor">
              <Nextdoor style={{ width: "16px", height: "16px" }} />
            </a>
            <a href="https://yelp.com/biz/verity-cleaning" target="_blank" rel="noopener noreferrer" aria-label="Verity Cleaning on Yelp">
              <Yelp style={{ width: "16px", height: "16px" }} />
            </a>
          </div>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Residential Cleaning</a></li>
            <li><a href="#services">Deep Cleaning</a></li>
            <li><a href="#services">Move-In / Move-Out</a></li>
            <li><a href="#services">Commercial &amp; Office</a></li>
            <li><a href="#services">Post-Construction</a></li>
          </ul>
        </div>

        <div>
          <h4>Service Area</h4>
          <ul>
            <li>Pelham &amp; Helena</li>
            <li>Alabaster &amp; Hoover</li>
            <li>Columbiana &amp; Chelsea</li>
            <li>Calera</li>
            <li>+ surrounding communities</li>
          </ul>
        </div>

        <div className="fc">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href="tel:+12058880199"><Phone />(205) 888-0199</a>
            </li>
            <li>
              <a href="sms:2058880199"><Sms />Text us anytime</a>
            </li>
            <li style={{ color: "var(--muted)", marginTop: "8px" }}>
              Verity Cleaning, LLC &bull; Based in Pelham, AL
            </li>
            <li style={{ color: "var(--muted)" }}>
              Licensed, bonded, &amp; insured
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap fbar">
        <span>&copy; {year} Verity Cleaning, LLC. All rights reserved.</span>
        <span>Shelby County, AL</span>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Replace the `/* Footer style */` CSS block**

Replace everything from `/* Footer style */` through `.fbar { ... }` with:

```css
/* Footer style */
.site-footer {
  color: var(--navy-muted);
  font-size: 0.9rem;
  border-top: 1px solid var(--border);
}
.fg {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr 0.9fr 1.1fr;
  gap: 40px;
  padding: 72px 0 40px;
}
.fb p { margin-top: 16px; max-width: 32ch; line-height: 1.6; color: var(--muted); }
.fsocials { display: flex; gap: 10px; margin-top: 20px; }
.fsocials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid var(--border);
  color: var(--navy);
  transition: all 0.2s;
}
.fsocials a:hover {
  background: var(--sky-tint);
}
.site-footer h4 {
  color: var(--navy);
  margin-bottom: 18px;
  font-family: var(--font-display);
  font-size: .88rem;
  letter-spacing: .04em;
  text-transform: uppercase;
  font-weight: 700;
}
.site-footer li { margin-bottom: 10px; }
.site-footer a { transition: color 0.15s; }
.site-footer a:hover { color: var(--navy); }
.fc a {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--navy);
  font-weight: 600;
}
.fc svg { width: 16px; height: 16px; color: var(--sky-deep); }
.fbar {
  border-top: 1px solid var(--border);
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  font-size: .82rem;
  color: var(--muted);
}
```

(Switches from the near-black `#090d16` dark theme to a transparent footer that sits on the naturally-cooled `--sky-tint` end of the ambient body gradient by this point in the page — text goes from light-on-dark to navy-on-light.)

- [ ] **Step 5: Rewrite `components/MobileBar.tsx`**

```tsx
import { Phone, Sms } from "./Icons";

/* Thumb-friendly fixed call/quote bar shown on small screens (< 760px). */
export default function MobileBar() {
  return (
    <div className="mbar" aria-label="Quick contact">
      <a href="tel:+12058880199" className="btn btn--primary">
        <Phone />
        Call now
      </a>
      <a href="#quote" className="btn btn--secondary">
        <Sms />
        Get quote
      </a>
    </div>
  );
}
```

(No CSS change needed for `.mbar` itself — it already references `var(--border)` and uses a translucent white blur background that still works with the new tokens; only the button classes inside it changed, from `.btn--teal`/`.btn--navy` to `.btn--primary`/`.btn--secondary`.)

- [ ] **Step 6: Verify**

```bash
npx tsc --noEmit && npm run build
```
Expected: both succeed.

Screenshot the full page (window-size=1440,6000) and view it: confirm the Final CTA is solid navy with a sky-tint phone button, and the footer is light (not dark) with navy text and 4 social icons.

- [ ] **Step 7: Commit**

```bash
git add components/FinalCTA.tsx components/Footer.tsx components/MobileBar.tsx app/globals.css
git commit -m "Redesign Final CTA (solid navy) and Footer (light theme, 4 socials)"
```

---

### Task 15: JsonLd slogan consistency

**Files:**
- Modify: `components/JsonLd.tsx` (one field)

- [ ] **Step 1: Update the `slogan` field**

In `components/JsonLd.tsx`, find:
```ts
    slogan: "Pure Spaces &bull; Pure Peace of Mind",
```
Replace with:
```ts
    slogan: "A Clean Home. More Time Back.",
```

(Every other visible tagline on the site changed from "Pure Spaces • Pure Peace of Mind" to the new brand line across this plan — the structured-data slogan should match rather than silently keep the old one.)

- [ ] **Step 2: Verify**

```bash
npx tsc --noEmit && npm run build
```
Expected: both succeed.

- [ ] **Step 3: Commit**

```bash
git add components/JsonLd.tsx
git commit -m "Sync JsonLd slogan with the new brand line"
```

---

### Task 16: Final page assembly, banned-words audit, and full verification pass

**Files:**
- Modify: `app/page.tsx` (final import/render order)

**Interfaces:**
- Consumes: every component created/modified in Tasks 3–15.

- [ ] **Step 1: Rewrite `app/page.tsx` with the final section order**

```tsx
import Hero from "@/components/Hero";
import StatBand from "@/components/StatBand";
import ProcessSection from "@/components/ProcessSection";
import WhyUs from "@/components/WhyUs";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import QuoteSection from "@/components/QuoteSection";
import Services from "@/components/Services";
import FollowUs from "@/components/FollowUs";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <main id="main">
      <span id="top" />
      <Hero />
      <StatBand />
      <ProcessSection />
      <WhyUs />
      <BeforeAfterSlider />
      <QuoteSection />
      <Services />
      <FollowUs />
      <ServiceArea />
      <FAQ />
      <FinalCTA />
      <JsonLd />
    </main>
  );
}
```

- [ ] **Step 2: Type-check and build**

```bash
npx tsc --noEmit
```
Expected: no output.

```bash
npm run build
```
Expected: build succeeds with no errors or warnings about missing images/components.

- [ ] **Step 3: Banned-words audit**

```bash
grep -rniE "industry-leading|exceptional|premier\b|top-rated|professional solutions" app components --include="*.tsx"
```
Expected: no matches. If any are found, edit the offending file to remove/rewrite that phrase before continuing.

- [ ] **Step 4: False-claims audit (regression check on the earlier session's fixes)**

```bash
grep -rniE "veteran|eco-friendly|eco friendly|4\.9|120\+|aggregateRating" app components --include="*.tsx"
```
Expected: no matches (aside from none expected at all — if `aggregateRating` or a star-rating claim appears, remove it; it must not have been reintroduced by any task in this plan).

- [ ] **Step 5: Full-page visual verification**

```bash
curl -sf http://localhost:3000 >/dev/null; sleep 1; curl -sf http://localhost:3000 >/dev/null
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless --disable-gpu --no-sandbox --hide-scrollbars --window-size=1440,7000 --virtual-time-budget=6000 --screenshot="<scratchpad>/final-desktop.png" http://localhost:3000
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless --disable-gpu --no-sandbox --hide-scrollbars --window-size=390,7000 --virtual-time-budget=6000 --screenshot="<scratchpad>/final-mobile.png" http://localhost:3000
```

View both PNGs with the Read tool. Walk through the full page top to bottom and confirm:
- Header: clean wordmark, 4 nav links, single navy "Get my quote" button.
- Hero: two-line headline, subheadline, two buttons, 2x2 trust list, lifestyle photo — no star-rating badge.
- Trust strip: 4 credentials, no heavy card boxes.
- What to Expect: the vertical alternating timeline is the first major section after the trust strip, with 5 steps and step 4 showing a real 3-item checklist.
- Why Verity: photo card renders correctly with no blank gap.
- See the Difference: before/after slider with visible handle.
- Get Your Quote: centered form card with bed/bath fields.
- Services: 5 cards, no numbered badges.
- Follow Us: 4 platform chips, no star ratings anywhere.
- Service Area: light sky-tint card (not dark navy).
- FAQ: light accordion, no heavy shadow.
- Final CTA: solid navy block with a visible sky-tint button.
- Footer: light background, navy text, 4 social icons.
- Across the whole page: an organic (not linear-banded) shift between a barely-warm pool near the hero and pale-blue/sky-tint pools further down — no visible "gradient shape," no per-section flat color blocks, no illustrations or clouds. Why Verity, Get Your Quote, Follow Us, and FAQ should read as very slightly cooler/tinted than Hero, trust strip, What to Expect, See the Difference, Services, and Service Area, but with no visible boundary line at the transition. The grain texture should be essentially invisible unless you're specifically looking for it.

If anything doesn't match, fix it in the relevant component/CSS before proceeding — do not defer visual bugs past this task.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx
git commit -m "Finalize homepage section order for the redesign

Completes the homepage redesign: Hero, trust strip, the flagship
What to Expect timeline, Why Verity, before/after comparison,
dedicated quote section, services, honest follow-us prompt, service
area, FAQ, and final CTA — all restyled per the amended design spec,
with no false claims and no banned marketing language."
```

- [ ] **Step 7: Report status to the user**

Summarize what was built, link to the running dev server (`http://localhost:3000`), and ask whether to push the commits from this plan to `origin/main` (do not push without being asked, per this project's established workflow this session).
