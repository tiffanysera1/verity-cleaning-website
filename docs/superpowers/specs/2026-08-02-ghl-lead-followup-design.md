# Verity Cleaning — GoHighLevel Lead → Quote → Booking Flow

**Date:** 2026-08-02
**Status:** Design approved, pending spec review
**Owner:** Tiffany Sera (Verity Cleaning)

## Background

Verity Cleaning is a home-cleaning business (Pelham, AL). An AI voice agent in GoHighLevel
(GHL) will answer inbound calls, collect the caller's information, and hand off to a manual
quoting step. Quotes are produced and sent in **ScheduleDrop** (a separate system), which
sends its own quote text + email to the customer. GHL's job is everything *around* the quote:
capturing the lead, confirming receipt to the customer, alerting Tiffany, collecting photos of
the home when needed, and running a follow-up sequence after the quote is sent.

Current GHL state: a single default **"Marketing Pipeline"** (stages New Lead → Contacted →
Qualified → Proposal Sent → Negotiation → Closed), untouched since account creation. No
customers or calls yet — greenfield.

Business identity for messaging: **Verity Cleaning**, owner **Tiffany**, number **(new GHL number,
local 205 — replaces the Google Voice line 205-202-0506)**, email **hello@veritycleaning.co**,
timezone **America/Chicago**.

## Goals / success criteria

- Every inbound caller **and website form submission** becomes a Contact **and** an Opportunity in
  the pipeline — no lead lost.
- Customer gets an instant "request received, hear back within 24 hours" confirmation.
- Tiffany is alerted instantly and has a 24-hour task, so she keeps the 24-hour promise.
- When home condition is unknown, photos are collected by text so quotes are accurate.
- After a quote is sent (marked manually), a warm 3-touch / 7-day follow-up runs automatically
  and stops the moment the customer responds or books.
- After a job is completed, prompt a review: 5★ → Google, ≤4★ → private follow-up (Google link
  still offered to everyone).
- Tiffany runs the whole thing from the pipeline board; Claude operates/monitors on demand.

## Prerequisite (parallel track — does not block building)

Texting and the AI voice agent require a **GHL-native (LeadConnector/Twilio) phone number**.
A Google Voice number cannot send/receive SMS through GHL or host the voice agent.

Chosen path: **Provision a new GHL number (local 205 area code) and adopt it as the official
business number**, replacing the Google Voice line. One number handles everything — inbound calls
(AI agent answers), outbound calls (LeadConnector mobile app / web dialer, with call logging and
optional recording), SMS, and photo MMS. Faster and lower-risk than porting; the only tradeoff is
giving up the exact digits 205-202-0506 (acceptable — no customers yet, nothing printed).

Follow-on steps once the number is provisioned:
1. **A2P 10DLC registration approved** — US carriers require every business texting number to be
   registered (brand + campaign, small fee, a few days). Gates **SMS only**; calling works the
   moment the number is live.
2. **Update the number everywhere it's published** — the website (every reference currently shows
   205-202-0506) and the Google Business Profile. Claude updates the website repo; Tiffany updates
   the Google listing.

Calling works immediately; texting waits on A2P approval. The pipeline + workflows + templates get
built and staged meanwhile. Email-only operation is possible in the interim if desired.

## Architecture overview

```
Lead sources (both create/update a Contact):
  • Inbound call → AI voice agent captures caller
  • Website form submission (embedded GHL form)
      │
      ▼
[Workflow 1: New Lead Intake]
   • create Opportunity @ "New Lead"
   • customer confirmation SMS + email
   • internal alert to Tiffany (SMS + email)
   • 24h task "Send quote to [name]"
   • if condition unknown: photo-request SMS + tag "awaiting-photos"
      │
      ▼
Tiffany reviews info (+ photos) → sends quote in ScheduleDrop
   (ScheduleDrop sends its own quote text + email)
      │
      ▼
Tiffany drags card → "Quote Sent"  ── manual trigger ──►
      │
      ▼
[Workflow 2: Quote Follow-Up]  (offset after ScheduleDrop messages)
   • Day 1 SMS nudge
   • Day 3 email check-in
   • Day 7 final SMS
   • auto-stop on reply/booking → "Booked"; else → "Lost (Cold)"
      │  (booking won)
      ▼
Job runs in ScheduleDrop → status updates sent to customer
      │
      ▼
Opportunity → "Job Complete"  (Tiffany, or Claude bridges from ScheduleDrop)
      │
      ▼
Review request (manual) → star survey
   • 5★ → Google review link
   • ≤4★ → thank + private feedback + follow-up task (Google link still offered)
```

## 1. Pipeline

Reshape the existing pipeline into five stages (the board doubles as the to-do list):

`New Lead → Quote Sent → Booked → Job Complete → Lost (Cold)`

- *New Lead → Quote Sent → Booked* is the sales path; *Job Complete* marks a finished job awaiting
  a review request; *Lost (Cold)* is the drop-out for leads that don't convert.

Tags avoid extra stages while tracking sub-states:
- `awaiting-photos` — photo request sent, waiting on the customer.
- `needs-more-photos` — Tiffany requested additional photos after the fact.
- `review-5star` — customer rated 5★ and was sent to Google.
- `review-needs-followup` — customer rated ≤4★; internal follow-up owed.

## 2. Workflow 1 — "New Lead Intake"

**Trigger:** voice agent captures a caller (contact created).

**Actions:**
1. Create an Opportunity at stage *New Lead*.
2. Send customer **confirmation SMS + email** (received / 24-hour promise).
3. Send Tiffany an **instant SMS + email** alert with the lead's details.
4. Create a **task** "Send quote to [name]", due in 24 hours.
5. **Conditional:** if the agent flags condition unknown, send the **photo-request SMS** and
   apply tag `awaiting-photos`.

## Website lead form (second lead source)

The website (a static Next.js site with no backend) captures leads via an **embedded GHL form** —
the right pattern for a static site, since submissions go straight into GHL with no server needed.

- **Fields** mirror what the voice agent collects: name, phone, email, address, service type,
  home size (beds/baths), condition/notes, preferred date/time, and an optional **photo upload**
  (lets web visitors attach photos of their home up front, often skipping the text-photo step).
- **On submit:** creates/updates the Contact and triggers the same **New Lead Intake** workflow —
  a web lead gets the identical confirmation, internal alert, 24h task, and pipeline opportunity.
  One pipeline, two entry points (phone + web).
- **Build:** the form is built in GHL's UI (no MCP create-form endpoint); Claude designs the fields
  + click steps and embeds the form on the website, replacing the current SMS-link QuoteForm.
- **Styling choice (finalize at build):** default is GHL's embedded form (fastest, supports photo
  upload, some CSS customization). Alternative: keep the site's custom form UI and pipe submissions
  to GHL via an inbound webhook — better-looking but more work and harder for photo uploads.

## 3. Photo collection sub-flow

- **On the call:** the agent asks *"Is it okay if I text you so you can send a few photos of the
  areas you'd like cleaned?"* A verbal yes both triggers the photo-request text **and serves as
  SMS consent** for later follow-ups.
- **After the call (need more):** a reusable **"Request more photos"** message — Tiffany sends it
  in one click, or asks Claude to send it; applies `needs-more-photos`.
- **Inbound photos** arrive as MMS in the contact's conversation thread. Claude can retrieve and
  summarize them and flag contacts still missing photos.
- Requires the ported GHL number to have **MMS enabled** (covered by A2P registration).

## 4. Workflow 2 — "Quote Follow-Up"

**Trigger:** Opportunity moved to stage *Quote Sent* (manual, by Tiffany, after sending the quote
in ScheduleDrop).

**Sequence** (first step waits long enough to sit *after* ScheduleDrop's own quote messages):
- **Day 1:** SMS nudge.
- **Day 3:** email check-in.
- **Day 7:** final SMS.

**Rules:**
- Auto-stop the instant the customer replies or books → move to *Booked (Won)* and alert Tiffany.
- No response after Day 7 → move to *Lost (Cold)*.
- Send **only during business hours** (America/Chicago).
- Every SMS includes a **"Reply STOP"** opt-out.

## Post-booking: job completion & review request

After a job is booked, ScheduleDrop runs the job and sends the customer its own status updates
(on the way / in progress / complete). GHL's role is to track completion and drive the review ask.

**Marking a job complete** — the Opportunity moves to *Job Complete* either:
- manually by Tiffany, or
- via Claude bridging the two systems: Claude reads ScheduleDrop for completed bookings and moves
  the matching GHL opportunity to *Job Complete*.

**Review request (manual trigger)** — when ready, Tiffany (or Claude) sends a review request that
links to a short GHL survey (*"How was your cleaning?"*, 1–5 stars). A routing workflow branches on
the rating (**middle-ground policy — not gating**):
- **5★** → thank-you + **Google review link**, tag `review-5star`.
- **≤4★** → warm thank-you + private feedback capture (saved as an internal note), a **follow-up
  task** for Tiffany to make it right, tag `review-needs-followup` — **and the Google link is still
  offered**, so no customer is blocked from reviewing publicly.

**Needed from Tiffany:** her Google Business Profile "leave a review" short link.

**Build:** the star survey and the routing workflow are UI-built in GHL (Claude designs the
questions + click steps); Claude drafts all review-request copy and operates the ScheduleDrop→GHL
completion bridge + review sends on demand.

## 5. Message copy (drafts — warm & friendly, signed "Tiffany from Verity Cleaning")

GHL merge fields shown as `{{contact.first_name}}` etc. Final wording tweakable after review.

**Confirmation SMS (customer):**
> Hi {{contact.first_name}}! 😊 This is Tiffany at Verity Cleaning — we got your request and I'll
> personally get back to you within 24 hours. Talk soon! (Reply STOP to opt out.)

**Confirmation email (customer)** — subject *"We got your request, {{contact.first_name}}! ✨"*:
> Hi {{contact.first_name}},
> Thank you so much for reaching out to Verity Cleaning! We've received your request and I'll
> personally get back to you within 24 hours with the next steps. If there's anything you'd like
> me to know in the meantime, just reply to this email.
> Talk soon,
> Tiffany — Verity Cleaning · 205-202-0506

**Internal alert (to Tiffany):**
> 🔔 New lead: {{contact.first_name}} {{contact.last_name}} · {{contact.phone}}
> Service: {{opportunity.name}}. Confirmation sent. Send a quote within 24h.

**Photo-request SMS (customer):**
> Hi {{contact.first_name}}! It's Tiffany at Verity Cleaning 😊 To get you the most accurate quote,
> could you reply here with a few photos of the areas you'd like cleaned? Thank you so much!
> (Reply STOP to opt out.)

**"Request more photos" SMS (customer, re-sendable):**
> Hi {{contact.first_name}}! Tiffany here at Verity Cleaning — could you send a couple more photos
> so I can finalize your quote? Really appreciate it! 📸 (Reply STOP to opt out.)

**Follow-up Day 1 SMS:**
> Hi {{contact.first_name}}! 😊 Just making sure your quote from Verity Cleaning came through okay —
> any questions, I'm happy to help! Ready to get your cleaning scheduled whenever you are.
> (Reply STOP to opt out.)

**Follow-up Day 3 email** — subject *"Still thinking it over, {{contact.first_name}}?"*:
> Hi {{contact.first_name}},
> Just circling back on your Verity Cleaning quote. I'd love to help get your home sparkling — if
> you have any questions about what's included or want to adjust anything, just reply and I'll take
> care of it. Whenever you're ready, we'll find a time that works for you.
> Warmly, Tiffany — Verity Cleaning

**Follow-up Day 7 SMS:**
> Hi {{contact.first_name}}! Tiffany at Verity Cleaning — I'll be closing out your quote soon, but
> I'd love to get your home sparkling ✨ Just reply and we'll find a time that works!
> (Reply STOP to opt out.)

## 6. Responsibilities

**Claude builds now (via GHL MCP connection):**
- All email templates + all message copy.
- Verifies/creates the tag structure where the API allows; pre-stages what's possible.
- Once the number is live: updates every phone-number reference on the website to the new number.
- Embeds the GHL lead form on the website (replacing the current SMS-link QuoteForm).
- Drafts the review-request messages + the star-survey questions.

**Tiffany clicks once (with Claude's step-by-step guide):**
- Reshape the five pipeline stages.
- Build Workflow 1 and Workflow 2 in the GHL Workflow builder.
- Build the website lead form in GHL.
- Build the review star-survey + rating-routing workflow; provide the Google review link.
- Point the AI voice agent at the new number and set its photo-consent question.
- Set up the "Request more photos" quick-send.

**Tiffany / GHL telephony:**
- Provision the new GHL number (local 205); complete A2P 10DLC registration; update the Google
  Business Profile to the new number.

**Claude operates ongoing (on demand):**
- Move stalled leads, send/re-send photo requests, retrieve inbound photos, report on pipeline
  health, surface leads that need attention.
- Bridge ScheduleDrop→GHL to mark jobs complete; send review requests; log ≤4★ feedback and open
  follow-up tasks.

## 7. Compliance

- Verbal SMS consent captured by the voice agent.
- "Reply STOP" opt-out on every outbound text.
- Business-hours-only sending (America/Chicago).
- A2P 10DLC registered before the first SMS is sent.
- Review flow is middle-ground (non-gating): the Google review link is offered to all customers
  regardless of star rating.

## Platform constraints (why the work splits the way it does)

- **GHL workflows, pipelines, forms, and surveys are built in the UI**, not via API/MCP — no
  create-workflow/create-form endpoint exists for anyone. Claude cannot build them directly; it
  designs, guides, and then operates.
- **GHL MCP capabilities available to Claude:** read/create/update contacts, tags, tasks; read
  pipelines; read/update/search opportunities; send/read conversation messages; create/read email
  templates; read locations/custom fields. (No create-pipeline, create-workflow, or
  create-opportunity via the current toolset.)
- **Google Voice cannot text through GHL** or host the voice agent — hence the dedicated GHL number.

## Out of scope (YAGNI for launch)

- Long-term "cold lead" re-engagement campaigns beyond Day 7.
- A separate "Following Up" pipeline stage (the follow-up runs while the card sits in *Quote Sent*).
- Tag-per-state architecture (kept to two photo tags only).
- Automated quote generation (quotes stay manual in ScheduleDrop).

## Open items / risks

- **A2P approval timeline** can delay the first SMS by several days (calling is unaffected).
- Exact **voice-agent trigger** (contact-created vs. tag vs. inbound-call) to be finalized during
  build against the actual agent configuration.
- Confirm the new GHL number supports **MMS** for photo replies (local numbers generally do).
- New number means updating the website + Google listing; old Google Voice number should forward
  or carry a "we've moved to a new number" note during the transition if it's anywhere public.
- Need Tiffany's **Google Business review link** for the 5★ route.
- Confirm **ScheduleDrop exposes booking completion status** to its MCP so Claude can bridge it
  (verify with a read).
