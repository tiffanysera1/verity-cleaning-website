# Verity Cleaning Homepage Redesign — Design Spec

Date: 2026-07-09
Status: Approved for planning

## Context

Verity Cleaning is a real, veteran-owned residential/commercial cleaning
business (Verity Cleaning, LLC, based in Pelham, AL, serving Shelby County:
Pelham, Helena, Alabaster, Hoover, Columbiana, Chelsea, Calera). Phone
(205) 888-0199. 4.9★ rating, 120+ reviews. The current site (Next.js App
Router, single homepage route) is well-built but visually reads as a
traditional local-service business site (teal/navy palette, sparkle mascot,
heavy card shadows, uppercase headlines, dark footer, dashed step lines).

This spec redesigns the homepage into a premium, technology-forward
experience in the spirit of Apple / Linear / Stripe / Notion / Arc, centered
on the brand idea **"Giving you your time back."** All real business facts
(phone, service area, credentials, review count, FAQ answers, pricing
philosophy) must be preserved — only visual language and copy tone change.

This spec covers the **homepage redesign only**. A separate, later spec will
cover the "Ask Verity" AI chat widget (backend-powered assistant with lead
capture and escalation) — that is a distinct subsystem and is explicitly out
of scope here. This redesign should not add any non-functional chat UI
placeholder; it may only reference AI-powered support as a single quiet copy
line.

## Brand & Visual System

### Color tokens (replacing current teal/navy system)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FFFFFF` | Page background |
| `--sky` | `#8ECFFB` | Primary accent — icon badges, highlights, secondary buttons |
| `--sky-deep` | `#5FB4F0` | Hover/active state of sky accent |
| `--navy` | `#0B2A4A` | Headline text, primary CTA background, footer text |
| `--ink` | `#14181F` | Body text |
| `--muted` | `#6B7280` | Secondary text |
| `--surface` | `#F6F8FA` | Very light gray — alternating section background |
| `--sky-tint` | `#EFF8FF` | Soft sky-blue section background (feature cards, quote section) |
| `--border` | `#E7EAEE` | Hairline borders (1px), used instead of most shadows |

Shadows capped at `0 4px 20px rgba(11,42,74,0.05)`, used sparingly (card
hover-lift only). No heavy drop shadows.

### Typography

- Body: **Inter** (kept from current setup).
- Display/headlines: **Geist** (`next/font/google`), replacing Outfit.
  Large `clamp()` headline scale (up to ~4.5rem), tight letter-spacing,
  normal case (current site's heavy uppercase H2 styling is removed —
  hierarchy comes from size/weight, not caps).

### Shape & motion

- Corner radius: 20–28px on cards, 12px on buttons/inputs.
- Glassmorphism restricted to: the sticky header, and the floating quote
  card. Not used elsewhere.
- Gradients restricted to faint radial glows behind the hero image only —
  never a full-bleed gradient section background (current `.hero` and
  `.cta` full gradients are removed/replaced).
- Motion: keep existing scroll-reveal fade-up (`ScrollReveal.tsx`/`.reveal`
  class), add a subtle hover-lift (translateY + soft shadow) on cards. No
  parallax or scale gimmicks.

### Iconography

- Remove the sparkle mascot and `Watermark.tsx` decoration entirely (all
  usages in `WhyUs`, `ProcessSection`, `ServiceArea`, `Header`, `Footer`).
- Replace feature-card emoji (🏠📱⭐❤️) with custom thin-stroke (1.5px) line
  icons in navy, inside soft sky-tint circular badges — added to the
  existing hand-rolled `components/Icons.tsx` pattern (new icons needed:
  home, message-bubble, badge/star, heart).

## Brand narrative

Lead brand idea everywhere: **"Giving you your time back."** The existing
"Verity means truth" narrative (transparency, honesty, no hidden fees) is
folded in as a **supporting** trust point inside the Why Verity section —
not retired, not given equal top billing. Veteran-owned status, licensing,
background checks, and the satisfaction guarantee remain prominent as trust
facts, just restyled and reframed under the time-back narrative rather than
under an "absolute honesty" headline.

## Page Structure

Replaces `app/page.tsx` section order top to bottom:

1. **Header** (no separate TopBar — removed entirely; a dark utility strip
   reads as a local-service convention, not premium). Restyled glass-on-
   scroll header, clean wordmark (no sparkle icon), simplified nav (How It
   Works, Services, Reviews, FAQ), single CTA button "Get My Quote."

2. **Hero** — full redesign, no form fields embedded. Large lifestyle photo
   (bright modern home, candid non-staged family moment — sourced as a
   free-license Unsplash photo, downloaded into `public/`). Headline "A
   Clean Home. More Time Back." Subheadline: "We make home cleaning
   effortless with trusted professionals, transparent communication, and a
   modern customer experience." Primary CTA "Get My Personalized Quote"
   (scrolls to `#quote`). Secondary CTA "What to Expect" (scrolls to
   `#process`). Small 4.9★ / 120+ reviews trust line retained.

3. **Trust strip** — restyled `StatBand`: slim row of 4 real credentials
   (Licensed & Bonded, Veteran-Owned, Background-Checked Staff, On-Time
   Guarantee) — small icons, no heavy card boxes.

4. **Feature Cards** (`--sky-tint` background) — new `FeatureCards.tsx`
   component, 4 large rounded cards:
   - Personalized Quotes — "Every home is different. Receive a customized
     quote tailored to your space."
   - Stay Updated — "Receive optional text updates when your cleaner is on
     the way, when cleaning begins, and when your home is ready."
   - Trusted Professionals — "Reliable, carefully selected cleaners who
     treat your home with care and respect."
   - More Time for What Matters — "Spend less time cleaning and more time
     with family, friends, hobbies, or simply relaxing."
   One quiet copy line inside the "Stay Updated" card references
   AI-powered support ("Ask Verity") as a value prop, with no functional
   chat UI.

5. **Why Verity** (white) — restyled `WhyUs`. Keeps real facts (transparent
   upfront pricing, background-checked staff, eco-friendly option
   available, veteran-owned) reframed under the time-back narrative;
   transparency/honesty appears as one supporting trust line, not the
   section headline. Keeps existing home photo (`/clean-home.png`).

6. **What to Expect** (`--surface` light gray) — replaces the current
   3-step `ProcessSection` with the specified 5-step horizontal timeline:
   1. Tell us about your home.
   2. Receive your personalized quote.
   3. Schedule your cleaning.
   4. Stay informed with optional text updates.
   5. Enjoy your time back.

7. **Get Your Quote** (`--sky-tint`, `id="quote"`) — restyled `QuoteForm`
   as its own dedicated section (not hero-embedded), headlined around
   "every home is different." Adds bedroom-count and bathroom-count
   `<select>` fields to the existing name/phone/service/message fields so
   "personalized pricing" is tangible. Submission mechanism unchanged (no
   backend): drafts an SMS via `sms:` link, as today.

8. **Services** (white) — keeps all 6 real service types (Residential,
   Deep Cleaning, Move-In/Move-Out, Commercial & Office, Post-Construction,
   Eco-Friendly), restyled cards — numbered badges de-emphasized/removed.

9. **Reviews** (`--surface`) — keeps real 4.9★/120+ review content and
   existing slider mechanism, restyled card treatment.

10. **Service Area** (white) — keeps real towns (Pelham, Helena, Alabaster,
    Hoover, Columbiana, Chelsea, Calera). The dark navy radial-glow
    "areacard" becomes a softer sky-tint card consistent with the new
    palette.

11. **FAQ** (`--surface`) — same real Q&A content, restyled accordion
    (remove heavy card shadow, keep JSON-LD FAQ schema unchanged).

12. **Final CTA** — kept as the one deliberately deep-navy section for
    contrast/bookend (a common premium pattern), softened to the new
    `--navy` token rather than the current teal gradient.

13. **Footer** — switched from near-black (`#090d16`) to a light,
    Apple-style footer (light gray `--surface` background, navy text)
    instead of a dark theme. Same real content (services list, service
    area, contact, license/veteran-owned facts, copyright).

14. **MobileBar** — kept functionally identical, restyled to match new
    button/color system.

## Technical Plan

- **`app/layout.tsx`**: swap `Outfit` → `Geist` (`next/font/google`),
  rename CSS variable accordingly, remove `<TopBar />` render, update
  metadata title/description/OG copy to the new "time back" positioning
  while keeping real NAP (name/address/phone) facts and service-area
  keywords for SEO.
- **`app/globals.css`**: near-complete rewrite of design tokens and
  section styles per the Visual System above. Existing utility classes
  (`.wrap`, `.section`, `.reveal`, `.btn`) are kept as the structural base
  but restyled.
- **Deleted**: `components/TopBar.tsx`, `components/Watermark.tsx` (and
  all its usages).
- **Rewritten** (markup + copy + styles, same component boundaries):
  `Header.tsx`, `Hero.tsx`, `StatBand.tsx`, `WhyUs.tsx`, `ProcessSection.tsx`
  (5-step), `QuoteForm.tsx` (+ bed/bath fields), `Services.tsx`,
  `Reviews.tsx`/`ReviewSlider.tsx`, `ServiceArea.tsx`, `FAQ.tsx`,
  `FinalCTA.tsx`, `Footer.tsx`, `MobileBar.tsx`.
- **New**: `components/FeatureCards.tsx` (4-card section); new line icons
  added to `components/Icons.tsx` (home, message-bubble, badge/star,
  heart).
- **`app/page.tsx`**: updated import list and section order per Page
  Structure above.
- **Hero image**: source a free-license (Unsplash) photo of a bright
  modern home interior with a candid, non-staged family moment; download
  into `public/`; keep attribution/license terms satisfied (Unsplash
  License permits free commercial use without attribution, but the
  photographer will be noted in a code comment for reference).
- **No new dependencies** — Geist ships in `next/font/google` already; no
  backend, database, or chat infrastructure is added in this spec.

## Explicitly out of scope

- The "Ask Verity" AI chat widget (backend, knowledge base, lead
  persistence, escalation, future ScheduleDrop/SMS/email/voice
  integrations) — separate spec, separate implementation.
- Any customer portal, online payment flow, or digital scheduling system —
  referenced only as copy, not built.
- Any page other than the homepage (`app/page.tsx`).

## Testing / verification

This is a visual/content redesign with no new logic beyond the quote form's
new fields (which extend the existing pure-client SMS-draft function). No
automated test suite exists for this project currently, so verification is
manual: run the dev server, visually review each section at desktop and
mobile widths, confirm all real facts (phone number, service area, review
count, FAQ content, license/veteran-owned claims) are unchanged, and confirm
the quote form still produces a correct SMS draft with the new fields
included.
