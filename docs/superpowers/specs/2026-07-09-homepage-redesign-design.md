# Verity Cleaning Homepage Redesign — Design Spec

Date: 2026-07-09 (amended same day after factual corrections)
Status: Approved for planning

## Context

Verity Cleaning is a real, locally owned residential/commercial cleaning
business (Verity Cleaning, LLC, based in Pelham, AL, serving Shelby County:
Pelham, Helena, Alabaster, Hoover, Columbiana, Chelsea, Calera). Phone
(205) 888-0199. The current site (Next.js App Router, single homepage
route) is well-built but visually reads as a traditional local-service
business site (teal/navy palette, sparkle mascot, heavy card shadows,
uppercase headlines, dark footer, dashed step lines).

This spec redesigns the homepage into a premium, technology-forward
experience in the spirit of Apple / Linear / Stripe / Notion / Arc, centered
on the brand idea **"Giving you your time back"** — supported by a secondary
theme, **"We take care of the house, you take care of the memories that
matter."** All real business facts (phone, service area, credentials,
pricing philosophy) must be preserved — only visual language and copy tone
change.

This spec covers the **homepage redesign only**. A separate, later spec will
cover the "Ask Verity" AI chat widget (backend-powered assistant with lead
capture and escalation) — that is a distinct subsystem and is explicitly out
of scope here. This redesign should not add any non-functional chat UI
placeholder; it may only reference AI-powered support as a single quiet copy
line.

### Corrections made mid-review (binding for this spec)

During spec review, three factual/integrity issues were found in the
existing live site and corrected immediately (ahead of the full redesign),
and must **not** be reintroduced by the redesign:

1. **Not veteran-owned.** The business is not veteran-owned. Every
   "Veteran-Owned" claim (Hero trust list, StatBand, WhyUs copy and owner
   card, Footer, FinalCTA, JsonLd description, layout.tsx metadata/keywords,
   TopBar) has been removed from the live site and must stay removed.
2. **No eco-friendly / green product advertising.** The business does not
   market eco-friendly/green/non-toxic products as a feature. All mentions
   (Hero trust list, WhyUs reasons, FAQ answer, Footer services list,
   Services grid "Eco-Friendly Cleaning" entry, JsonLd catalog/knowsAbout,
   layout.tsx description, sample review text, QuoteForm placeholder) have
   been removed. The Services grid now lists 5 services, not 6. In their
   place, **licensing/bonding/insurance and background-checked staff** are
   the emphasized trust points.
3. **No reviews exist yet — no fabricated reviews or ratings.** The site
   previously showed a fabricated "4.9★, 120+ reviews" claim (Hero rating
   badge, Reviews section heading/proof line, JsonLd `aggregateRating`) and
   five entirely fabricated testimonials (`ReviewSlider.tsx`). All of this
   has been deleted (`components/Reviews.tsx` and
   `components/ReviewSlider.tsx` removed, `Reviews` nav link removed from
   Header, `aggregateRating` removed from JsonLd). **No star rating or
   review-count claim may appear anywhere until real reviews exist.** In its
   place, the redesign adds an honest "leave a review / follow us" section
   (see Page Structure item 9) with real platform links and no quotes.

The current live site (post these three fixes) is the accurate baseline
this redesign builds from.

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

- Remove the sparkle mascot and `Watermark.tsx` decoration entirely (already
  done — see prior fix; component deleted, all usages removed).
- Replace feature-card emoji (🏠📱⭐❤️) with custom thin-stroke (1.5px) line
  icons in navy, inside soft sky-tint circular badges — added to the
  existing hand-rolled `components/Icons.tsx` pattern (new icons needed:
  `Heart`, plus simple generic `Yelp` and `Nextdoor` marks for the footer
  socials).

## Brand narrative

Lead brand idea everywhere: **"Giving you your time back."** Supporting
theme, used as secondary copy (not the H1): **"We take care of the house,
you take care of the memories that matter"** — this appears specifically in
the "More Time for What Matters" feature card copy and may echo in the Why
Verity section. The prior "Verity means truth" narrative (transparency,
honesty, no hidden fees) is folded in as a **supporting** trust point inside
the Why Verity section — not retired, not given equal top billing.
Licensing, bonding, insurance, and background-checked staff are the
prominent trust facts (replacing the removed veteran-owned/eco-friendly
claims), restyled and reframed under the time-back narrative.

## Page Structure

Replaces `app/page.tsx` section order top to bottom:

1. **Header** (no separate TopBar — removed entirely; a dark utility strip
   reads as a local-service convention, not premium). Restyled glass-on-
   scroll header, clean wordmark (no sparkle icon), simplified nav (How It
   Works, Services, Why Verity, Service Area), single CTA button
   "Get My Quote."

2. **Hero** — full redesign, no form fields embedded. Large lifestyle photo
   (bright modern home, candid non-staged family moment — sourced as a
   free-license Unsplash photo, downloaded into `public/`). Headline "A
   Clean Home. More Time Back." Subheadline: "We make home cleaning
   effortless with trusted professionals, transparent communication, and a
   modern customer experience." Primary CTA "Get My Personalized Quote"
   (scrolls to `#quote`). Secondary CTA "What to Expect" (scrolls to
   `#process`). No star-rating badge (no reviews exist yet — do not add
   one).

3. **Trust strip** — restyled `StatBand`: slim row of 4 real credentials
   (Licensed & Bonded, Background-Checked Staff, 100% Guaranteed, On-Time)
   — small icons, no heavy card boxes. (Already updated on the live site;
   redesign only restyles visually.)

4. **Feature Cards** (`--sky-tint` background) — new `FeatureCards.tsx`
   component, 4 large rounded cards:
   - Personalized Quotes — "Every home is different. Receive a customized
     quote tailored to your space."
   - Stay Updated — "Get a fast, no-hassle quote, then simple notifications
     when your cleaner is on the way, when the job starts, and when it's
     complete." (Confirms the process: quote → on-the-way → job started →
     job completed notifications.)
   - Trusted Professionals — "Reliable, background-checked cleaners who
     treat your home with care and respect."
   - More Time for What Matters — "We take care of the house, you take
     care of the memories that matter."
   One quiet copy line inside the "Stay Updated" card references
   AI-powered support ("Ask Verity") as a value prop, with no functional
   chat UI.

5. **Why Verity** (white) — restyled `WhyUs`. Keeps real facts (transparent
   upfront pricing, background-checked staff, licensed & insured) reframed
   under the time-back narrative; transparency/honesty appears as one
   supporting trust line, not the section headline. Keeps existing home
   photo (`/clean-home.png`). No veteran-owned or eco-friendly language.

6. **See the Difference** (`--surface`, new section) — new
   `BeforeAfterSlider.tsx`: an interactive drag/touch slider comparing a
   "before" and "after" cleaning photo, built with placeholder imagery for
   now (clearly swappable — see Technical Plan). Keyboard accessible (arrow
   keys adjust the split), degrades to a static side-by-side on
   `prefers-reduced-motion` / no-JS.

7. **What to Expect** (`--surface` light gray, or alternated to white if
   section 6 uses `--surface` — alternation is preserved by picking
   whichever of white/`--surface` wasn't used immediately prior) — replaces
   the current 3-step `ProcessSection` with the specified 5-step horizontal
   timeline:
   1. Tell us about your home.
   2. Receive your personalized quote.
   3. Schedule your cleaning.
   4. Stay informed with optional text updates.
   5. Enjoy your time back.

8. **Get Your Quote** (`--sky-tint`, `id="quote"`) — restyled `QuoteForm`
   as its own dedicated section (not hero-embedded), headlined around
   "every home is different." Adds bedroom-count and bathroom-count
   `<select>` fields to the existing name/phone/service/message fields so
   "personalized pricing" is tangible. Submission mechanism unchanged (no
   backend): drafts an SMS via `sms:` link, as today.

9. **Services** (white) — keeps all 5 real service types (Residential,
   Deep Cleaning, Move-In/Move-Out, Commercial & Office, Post-Construction),
   restyled cards — numbered badges de-emphasized/removed.

10. **Follow Us** (`--surface`, replaces the old fake Reviews section) —
    new honest section (no fabricated quotes, no star-rating claim). Short
    copy inviting people to follow/find Verity as an early customer, with
    real platform links: Facebook, Instagram, Nextdoor, Yelp (placeholder
    URLs for now — see Technical Plan). No `aggregateRating` or review-count
    claim anywhere on the page or in JsonLd.

11. **Service Area** (white) — keeps real towns (Pelham, Helena, Alabaster,
    Hoover, Columbiana, Chelsea, Calera). The dark navy radial-glow
    "areacard" becomes a softer sky-tint card consistent with the new
    palette.

12. **FAQ** (`--surface`) — same real Q&A content (already corrected to
    remove the eco-friendly-supplies mention), restyled accordion (remove
    heavy card shadow, keep JSON-LD FAQ schema unchanged).

13. **Final CTA** — kept as the one deliberately deep-navy section for
    contrast/bookend (a common premium pattern), softened to the new
    `--navy` token rather than the current teal gradient. Copy already
    corrected to remove the veteran-owned claim.

14. **Footer** — switched from near-black (`#090d16`) to a light,
    Apple-style footer (light gray `--surface` background, navy text)
    instead of a dark theme. Same real content (services list, service
    area, contact, license facts, copyright — veteran-owned claim already
    removed). Social icons expanded from 2 to 4: Facebook, Instagram,
    Nextdoor, Yelp, all with placeholder URLs the user will swap in once
    profiles exist.

15. **MobileBar** — kept functionally identical, restyled to match new
    button/color system.

## Technical Plan

- **`app/layout.tsx`**: swap `Outfit` → `Geist` (`next/font/google`),
  rename CSS variable accordingly, remove `<TopBar />` render, update
  metadata title/description/OG copy to the new "time back" positioning
  while keeping real NAP (name/address/phone) facts and service-area
  keywords for SEO. (Veteran-owned/eco-friendly language already stripped
  from metadata — do not reintroduce.)
- **`app/globals.css`**: near-complete rewrite of design tokens and
  section styles per the Visual System above. Existing utility classes
  (`.wrap`, `.section`, `.reveal`, `.btn`) are kept as the structural base
  but restyled.
- **Deleted** (already done): `components/TopBar.tsx` — no, TopBar is
  removed from render in `layout.tsx` per item 1 above but the file
  deletion happens in this redesign's implementation, not yet;
  `components/Watermark.tsx`, `components/Reviews.tsx`,
  `components/ReviewSlider.tsx` are already deleted with all usages
  removed.
- **Rewritten** (markup + copy + styles, same component boundaries):
  `Header.tsx`, `Hero.tsx`, `StatBand.tsx`, `WhyUs.tsx`, `ProcessSection.tsx`
  (5-step), `QuoteForm.tsx` (+ bed/bath fields), `Services.tsx`,
  `ServiceArea.tsx`, `FAQ.tsx`, `FinalCTA.tsx`, `Footer.tsx`,
  `MobileBar.tsx`.
- **New**: `components/FeatureCards.tsx` (4-card section);
  `components/BeforeAfterSlider.tsx` (new "See the Difference" section,
  client component using a range input or pointer-drag to move a clip-path
  divider between two stacked `<Image>`s — no new dependency needed);
  `components/FollowUs.tsx` (replaces the old Reviews section with an
  honest follow-us/leave-a-review prompt linking to the 4 platforms); new
  icons added to `components/Icons.tsx`: `Heart`, `Yelp`, `Nextdoor`
  (simple generic line/fill marks, not literal trademarked logos).
- **`app/page.tsx`**: updated import list and section order per Page
  Structure above (Hero, StatBand, FeatureCards, WhyUs, BeforeAfterSlider,
  ProcessSection, QuoteSection, Services, FollowUs, ServiceArea, FAQ,
  FinalCTA).
- **Hero image**: source a free-license (Unsplash) photo of a bright
  modern home interior with a candid, non-staged family moment; download
  into `public/`; keep attribution/license terms satisfied (Unsplash
  License permits free commercial use without attribution, but the
  photographer will be noted in a code comment for reference).
- **Before/after images**: source two free-license placeholder photos (a
  cluttered/dusty room and a clean version of a similar space — exact
  before/after pair not required for placeholder purposes) into `public/`,
  clearly named (e.g. `before-placeholder.jpg`, `after-placeholder.jpg`) so
  they're trivial to swap for real job photos later.
- **Quote form**: add bedroom-count and bathroom-count `<select>` fields;
  keep the existing SMS-draft submission approach (no backend added).
- **Social links**: placeholder URLs (e.g. `https://facebook.com/...`,
  `https://instagram.com/...`, `https://nextdoor.com/...`,
  `https://yelp.com/...`) — matches how Facebook/Instagram links were
  already placeholder'd in the current footer. User will supply real URLs
  later.
- **No new dependencies** — Geist ships in `next/font/google` already; no
  backend, database, or chat infrastructure is added in this spec.

## Explicitly out of scope

- The "Ask Verity" AI chat widget (backend, knowledge base, lead
  persistence, escalation, future ScheduleDrop/SMS/email/voice
  integrations) — separate spec, separate implementation.
- Any customer portal, online payment flow, or digital scheduling system —
  referenced only as copy, not built.
- Any page other than the homepage (`app/page.tsx`).
- A real Reviews section with actual testimonials — will be a future
  addition once real reviews exist; this spec only adds the honest
  follow-us prompt.

## Testing / verification

This is a visual/content redesign with no new logic beyond the quote form's
new fields (extends the existing pure-client SMS-draft function) and the
before/after slider's pointer/keyboard interaction. No automated test suite
exists for this project currently, so verification is manual: run the dev
server, visually review each section at desktop and mobile widths, and
specifically confirm:
- All real facts (phone number, service area, license/insurance claims) are
  unchanged and accurate.
- No veteran-owned claim, no eco-friendly/green-product claim, and no
  star-rating or review-count claim appears anywhere (page content or
  JsonLd structured data).
- The quote form still produces a correct SMS draft including the new
  bed/bath fields.
- The before/after slider is operable by mouse drag, touch drag, and
  keyboard (arrow keys), and degrades sensibly with
  `prefers-reduced-motion`.
- Footer shows all 4 social links (Facebook, Instagram, Nextdoor, Yelp).
