# Verity Cleaning Homepage Redesign — Design Spec

Date: 2026-07-09 (amended 2026-07-09 after factual corrections; amended
2026-07-11 with brand positioning/voice rewrite)
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
experience in the spirit of Apple / Airbnb / Stripe / Linear / Notion / Arc,
centered on the brand idea **"Giving you your time back"** — supported by a
secondary theme, **"We take care of the house, you take care of the
memories that matter."** All real business facts (phone, service area,
credentials, pricing philosophy) must be preserved — only visual language
and copy tone change.

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

## Brand Positioning & Voice (added 2026-07-11)

**Positioning:** Verity is a modern hospitality brand that happens to clean
homes — not a cleaning company. The product being sold is relief and peace
of mind, not clean countertops. Every section of copy must be written to
pass this test: **"How does this make this person's life easier?"**

**Customer persona:** a busy professional or family juggling work, kids,
pets, errands, and appointments. They are not price-shopping — they want
someone trustworthy who makes life easier. Copy should never lead with
price or "deals."

**Voice:** calm, premium, modern, trustworthy, friendly, organized,
reassuring, human. Never pushy, salesy, corporate, loud, flashy, generic,
or cheap-sounding. Write like a thoughtful person talking across a kitchen
table, not like marketing copy. If a sentence sounds like an ad, rewrite
it.

**Banned words (global constraint — audit all existing copy, not just new
copy, and remove every instance):** "industry-leading," "exceptional,"
"premier," "top-rated," "professional solutions." Example rewrite: instead
of "We provide exceptional residential cleaning," write "We take care of
the cleaning so you can spend more time doing what matters."

**Photography:** show the *result*, not the act of cleaning — no photos of
people holding spray bottles or wearing cleaning gloves. The hero photo
should suggest what the customer will do with their time back (a bright,
lived-in home; a candid family moment), not depict cleaning itself. Per
the photography-scope decision below, this redesign uses **one** strong
hero photo rather than lifestyle photos scattered across every section —
enough to set the emotional tone without tipping into generic stock-photo
clutter.

## Brand & Visual System

### Color tokens (replacing current teal/navy system)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FFFFFF` | Base page white |
| `--sky` | `#8ECFFB` | Primary accent — icon badges, highlights, secondary buttons |
| `--sky-deep` | `#5FB4F0` | Hover/active state of sky accent |
| `--sky-pale` | `#F7FBFF` | Very pale sky blue — ambient atmosphere layer, mid-page |
| `--sky-tint` | `#EEF8FF` | Soft blue tint — ambient atmosphere layer (deeper reads), card backgrounds (timeline, quote section), and the soft alternating-section tone wash |
| `--warm-white` | `#FFFDF9` | Barely-warm off-white — tiny warm cast near the hero only |
| `--navy` | `#0B2A4A` | Headline text, primary CTA background, footer text |
| `--ink` | `#14181F` | Body text |
| `--muted` | `#6B7280` | Secondary text |
| `--border` | `#E7EAEE` | Hairline borders (1px), used instead of most shadows |

Shadows capped at `0 4px 20px rgba(11,42,74,0.05)`, used sparingly (card
hover-lift only). No heavy drop shadows.

`--surface` (`#F6F8FA`, flat gray) is **retired** — see Atmosphere below.
Flat gray section blocks read as template/SaaS, not sunlit room.

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
- No full-bleed, visibly-edged gradients anywhere (current `.hero` and
  `.cta` full gradients are removed). The one exception is the ambient
  atmosphere layer described below, which must not read as "a gradient"
  at all — see that section for the distinction.
- Motion: keep existing scroll-reveal fade-up (`ScrollReveal.tsx`/`.reveal`
  class), add a subtle hover-lift (translateY + soft shadow) on cards. No
  parallax or scale gimmicks.

### Atmosphere (added 2026-07-11; refined into three layers 2026-07-12)

The page must not feel like a flat white background — it should feel like
standing in a bright, peaceful home on a Saturday morning, sunlight coming
through large windows. This is layered, not decorative: three subtle
layers plus a light touch of section-level tone variation, all engineered
to be *felt* rather than *noticed*. "Nice background" is a failure state —
the target reaction is "this feels incredibly pleasant," with the visitor
unable to point at what's producing that feeling.

**Layer 1 — organic light-source mesh (base).** Replaces the earlier
single top-to-bottom linear gradient. Several large, soft-edged radial
gradients composited into one `background` value on `<body>` (no fixed
attachment, no extra DOM element needed):
- A brighter, faintly warm pool anchored near the **upper-left** of the
  document (roughly where the hero sits) — like morning sun through a
  window — using `--warm-white` (`#FFFDF9`) easing to `--bg` (`#FFFFFF`).
- Several further pools of `--sky-pale` (`#F7FBFF`) and `--sky-tint`
  (`#EEF8FF`) scattered at different, non-aligned points further down the
  document (not stacked directly under each other) so the transition
  reads as organic/mesh-like rather than a linear band.
- Color deltas between every stop stay tiny (a handful of RGB points);
  every gradient has a long, slow falloff to `transparent` — no visible
  edge, ring, or "blob" shape at any point.

**Layer 2 — grain texture.** A tiny inline SVG noise texture
(`feTurbulence`, encoded as a `background-image` data URI — no image
asset, no new dependency) applied via a `position: fixed; inset: 0;
pointer-events: none;` pseudo-element (`body::after`) at roughly 2–4%
opacity, repeating across the full viewport. Purpose is to break up the
"digital perfection" of flat computer-generated color, not to be visible
as texture in its own right.

**Layer 3 — soft alternating section tone.** Reconciles "the page feels
too visually uniform" with the earlier decision to retire hard
per-section flat-color blocks: sections do **not** get an opaque
background color, but alternating sections get a very soft,
edge-feathered `--sky-tint` wash (fades to nothing at the section's top
and bottom edges — no hard boundary line is ever visible) layered on top
of the Layer 1 mesh. Applied to: Why Verity, Get Your Quote, Follow Us,
and FAQ. Left on the plain atmosphere (no extra tone): Hero, trust strip,
What to Expect, See the Difference, Services, Service Area. Two of those
already carry their own visual weight without needing a tone wash — What
to Expect has its own alternating white/sky-tint timeline cards (adding a
section-wide tint would muddy that internal contrast), and Get Your Quote
pairs its tone wash with a floating white form card for a clear
foreground/background split. Final CTA remains the one deliberately
opaque solid-navy block, sitting visually on top of the atmosphere rather
than being part of it — unchanged from the earlier decision.

**Hard constraints (unchanged):** no clouds, no illustrations, no
obvious/visible gradient shapes, no hard per-section color boundaries. If
someone isn't looking for it, it should almost disappear.

**What sits on top of all three layers:** cards (timeline steps, quote
form, service cards, the before/after frame) keep their own white or
`--sky-tint` backgrounds for contrast — those are foreground surfaces,
not part of the page atmosphere.

### Iconography

- Remove the sparkle mascot and `Watermark.tsx` decoration entirely (already
  done — see prior fix; component deleted, all usages removed).
- Timeline step icons reuse existing `components/Icons.tsx` icons (`Home`,
  `CheckCircle`, `Clock`, `Sms`) plus one new icon (`Heart`, for "Enjoy
  Your Time Back"), thin-stroke (1.5px) in navy inside soft sky-tint
  circular badges. Also needed: simple generic `Yelp` and `Nextdoor` marks
  for the footer socials.

## Brand narrative

Lead brand idea everywhere: **"Giving you your time back."** Supporting
theme, used as secondary copy (not the H1): **"We take care of the house,
you take care of the memories that matter"** — this appears specifically in
the "Enjoy Your Time Back" step of the What to Expect timeline (Page
Structure item 4) and may echo in the Why Verity section. The prior
"Verity means truth" narrative (transparency,
honesty, no hidden fees) is folded in as a **supporting** trust point inside
the Why Verity section — not retired, not given equal top billing.
Licensing, bonding, insurance, and background-checked staff are the
prominent trust facts (replacing the removed veteran-owned/eco-friendly
claims), restyled and reframed under the time-back narrative.

## Page Structure

Replaces `app/page.tsx` section order top to bottom. **Background note:**
per the Atmosphere section above, sections no longer each carry a discrete
flat background color — they sit transparently on the one continuous
ambient layer. Where an item below is parenthetically labeled with a
color, that describes a **foreground card/element** background (e.g. the
quote form card, timeline step cards), not a section-wide block.

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

4. **What to Expect** (added 2026-07-11: elevated to flagship status,
   replaces "Our Difference"/"Feature Cards" entirely — see rationale
   below) — `ProcessSection.tsx` rewritten as a vertical alternating
   timeline, not a generic feature grid. This is now one of the most
   important sections on the homepage: the goal is to remove uncertainty
   and make the process feel effortless, so a visitor thinks "oh, that's
   actually really simple" rather than being told about features. A thin
   center spine connects 5 numbered icon nodes; each step's card
   alternates left/right of the spine on desktop (stacks full-width on
   mobile), and alternates white/`--sky-tint` background going down the
   spine, so the "alternating light sky-blue cards" rhythm comes from both
   the alternating side and the alternating tint:
   1. **Tell Us About Your Home** (Home icon) — "Complete a simple
      questionnaire and optionally upload a few photos so we can
      understand your home's needs."
   2. **Receive Your Personalized Quote** (CheckCircle icon) — "Every
      home is different. We carefully review your information and send
      a customized quote — no one-size-fits-all pricing."
   3. **Schedule Your Cleaning** (Clock icon) — "Choose a date and time
      that works best for you."
   4. **Stay Informed** (Sms icon) — "If you opt in, we'll keep you
      updated throughout the appointment," followed by a small in-card
      checklist (not just prose) of the three notification states:
      Cleaner is on the way / Cleaning has started / Cleaning is
      complete. (One quiet mention of AI-powered support — "Ask Verity"
      — belongs here as a value prop, no functional chat UI.)
   5. **Enjoy Your Time Back** (Heart icon) — "Come home to a
      beautifully cleaned home and spend your time doing what matters
      most."

   **Rationale (why Our Difference was removed, not just reworded):**
   generic trust badges (licensed, insured, background-checked, on-time,
   satisfaction-guaranteed) are what every cleaning company says and are
   not differentiators — they stay in the trust strip (item 3) at
   appropriately modest visual weight, but do not get a second, larger
   showcase section. The real differentiator is how easy and
   transparent the *process* feels, so that gets the flagship treatment
   instead. Nothing replaces the removed 6-card grid — nothing should
   sell features; showing the effortless process sells convenience,
   communication, and trust implicitly.

5. **Why Verity** — restyled `WhyUs`. Keeps real facts (transparent
   upfront pricing, background-checked staff, licensed & insured) reframed
   under the time-back narrative; transparency/honesty appears as one
   supporting trust line, not the section headline. Keeps existing home
   photo (`/clean-home.png`). No veteran-owned or eco-friendly language.

6. **See the Difference** (new section) — new
   `BeforeAfterSlider.tsx`: an interactive drag/touch slider comparing a
   "before" and "after" cleaning photo, built with placeholder imagery for
   now (clearly swappable — see Technical Plan). Keyboard accessible (arrow
   keys adjust the split), degrades to a static side-by-side on
   `prefers-reduced-motion` / no-JS.

7. **Get Your Quote** (`id="quote"`, form card uses `--sky-tint`) — restyled `QuoteForm`
   as its own dedicated section (not hero-embedded), headlined around
   "every home is different." Adds bedroom-count and bathroom-count
   `<select>` fields to the existing name/phone/service/message fields so
   "personalized pricing" is tangible. Submission mechanism unchanged (no
   backend): drafts an SMS via `sms:` link, as today.

8. **Services** — keeps all 5 real service types (Residential,
   Deep Cleaning, Move-In/Move-Out, Commercial & Office, Post-Construction),
   restyled cards — numbered badges de-emphasized/removed.

9. **Follow Us** (replaces the old fake Reviews section) —
   new honest section (no fabricated quotes, no star-rating claim). Short
   copy inviting people to follow/find Verity as an early customer, with
   real platform links: Facebook, Instagram, Nextdoor, Yelp (placeholder
   URLs for now — see Technical Plan). No `aggregateRating` or review-count
   claim anywhere on the page or in JsonLd.

10. **Service Area** — keeps real towns (Pelham, Helena, Alabaster,
    Hoover, Columbiana, Chelsea, Calera). The dark navy radial-glow
    "areacard" becomes a softer sky-tint card consistent with the new
    palette.

11. **FAQ** — same real Q&A content (already corrected to
    remove the eco-friendly-supplies mention), restyled accordion (remove
    heavy card shadow, keep JSON-LD FAQ schema unchanged).

12. **Final CTA** — kept as the one deliberately deep-navy section for
    contrast/bookend (a common premium pattern), softened to the new
    `--navy` token rather than the current teal gradient. Copy already
    corrected to remove the veteran-owned claim.

13. **Footer** — switched from near-black (`#090d16`) to a light,
    Apple-style footer (sits on the naturally-cooled `--sky-tint` end of
    the ambient layer by this point in the page, navy text) instead of a
    dark theme. Same real content (services list, service
    area, contact, license facts, copyright — veteran-owned claim already
    removed). Social icons expanded from 2 to 4: Facebook, Instagram,
    Nextdoor, Yelp, all with placeholder URLs the user will swap in once
    profiles exist.

14. **MobileBar** — kept functionally identical, restyled to match new
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
  but restyled. Adds the three-layer atmosphere per the Atmosphere
  subsection: the mesh/light-source gradient composited into `body`'s
  `background` (no `background-attachment: fixed`), a `body::after` grain
  texture (fixed, `pointer-events: none`, ~3% opacity), and a `.tone-sky`
  section modifier class (soft edge-feathered tint, applied to Why
  Verity, Get Your Quote, Follow Us, FAQ) — removes hard per-section
  background-color rules in favor of these layers, retires `--surface`.
- **Deleted** (already done): `components/TopBar.tsx` — no, TopBar is
  removed from render in `layout.tsx` per item 1 above but the file
  deletion happens in this redesign's implementation, not yet;
  `components/Watermark.tsx`, `components/Reviews.tsx`,
  `components/ReviewSlider.tsx` are already deleted with all usages
  removed.
- **Rewritten** (markup + copy + styles, same component boundaries):
  `Header.tsx`, `Hero.tsx`, `StatBand.tsx`, `WhyUs.tsx`, `ProcessSection.tsx`
  (rewritten as the 5-step vertical alternating timeline — see Page
  Structure item 4; this component is not deleted, it absorbs the
  flagship treatment), `QuoteForm.tsx` (+ bed/bath fields), `Services.tsx`,
  `ServiceArea.tsx`, `FAQ.tsx`, `FinalCTA.tsx`, `Footer.tsx`,
  `MobileBar.tsx`.
- **New**: `components/BeforeAfterSlider.tsx` (new "See the Difference"
  section, client component using a range input or pointer-drag to move a
  clip-path divider between two stacked `<Image>`s — no new dependency
  needed); `components/FollowUs.tsx` (replaces the old Reviews section
  with an honest follow-us/leave-a-review prompt linking to the 4
  platforms); new icons added to `components/Icons.tsx`: `Heart`, `Yelp`,
  `Nextdoor` (simple generic line/fill marks, not literal trademarked
  logos). **Not built**: no `FeatureCards.tsx`/`OurDifference.tsx` —
  that section was removed from the design (see Page Structure item 4
  rationale), not merely renamed.
- **`app/page.tsx`**: updated import list and section order per Page
  Structure above (Hero, StatBand, ProcessSection, WhyUs,
  BeforeAfterSlider, QuoteSection, Services, FollowUs, ServiceArea, FAQ,
  FinalCTA).
- **Copy audit**: pass every string in every rewritten component through
  the banned-words list (see Brand Positioning & Voice above) before
  considering a task done.
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
  integrations) — separate spec, separate implementation. Requirements
  captured 2026-07-11 for that future spec: should feel like texting a
  helpful concierge, not a generic chatbot; should be able to answer
  questions about services, pets, deep-clean-vs-standard, recurring
  cleanings, the quote process, scheduling, and payments; when it can't
  answer confidently, it should collect contact info and hand off to
  Tiffany for personal follow-up rather than guessing.
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
- None of the banned words (see Brand Positioning & Voice) appear anywhere
  in the final copy.
