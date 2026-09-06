/* Content for /property-management-cleaning/.

   This page sells to a different buyer than the rest of the site. A homeowner
   buys a clean home; a property manager buys evidence the unit was cleaned and
   an absence of chasing. So the spine here is the portal, the photo record and
   the notifications — not a room-by-room checklist, which lives on the
   move-in/move-out page and is linked rather than repeated.

   Every claim below is owner-supplied and specific: same or next-day turnover,
   card on file with a pre-authorisation 24 hours ahead, before/after and
   staging photos on every job, standardised checklists, opt-in status
   notifications, and a portal for bookings, payments and card details. Nothing
   here is inferred. If any of it stops being true, this file is the one to
   change — the page reads entirely from it. */

export type PmProof = { icon: string; title: string; body: string };
export type PmStep = { n: string; title: string; body: string };
export type PmType = { icon: string; title: string; body: string };
export type PmFaq = { q: string; a: string };

export const PM_PROOF: PmProof[] = [
  {
    icon: "camera",
    title: "Photo record of every job",
    body: "Before, after and staging photos on every unit we turn over. You can confirm the work from your desk instead of driving out to check it.",
  },
  {
    icon: "file",
    title: "The same checklist every time",
    body: "Every turnover runs the same standardised checklist, so unit twelve is finished to the same standard as unit one, whoever is on the job.",
  },
  {
    icon: "message",
    title: "Live status notifications",
    body: "Opt in and you'll be told when the cleaner is on the way, when the clean starts, and when it's finished. No calling to ask where we are.",
  },
  {
    icon: "clock",
    title: "Same or next-day turnover",
    body: "A vacant unit is lost rent. Tell us it's empty and we can usually be in it the same day or the next.",
  },
];

export const PM_STEPS: PmStep[] = [
  {
    n: "01",
    title: "Request the booking",
    body: "Book through the customer portal, or call or text. You can see every booking you've placed in one list rather than digging through email.",
  },
  {
    n: "02",
    title: "Card on file, authorised ahead",
    body: "Keep a card on file in the portal. Twenty-four hours before the clean we place an authorisation to verify funds — the card is only charged once the work is done.",
  },
  {
    n: "03",
    title: "We clean and keep you posted",
    body: "Opt in to notifications and you'll know when we're on the way, when we've started, and when we're finished.",
  },
  {
    n: "04",
    title: "Photos and receipt",
    body: "Before, after and staging photos land with your receipt. Payment history and card details stay in the portal, so there's nothing to chase.",
  },
];

export const PM_TYPES: PmType[] = [
  {
    icon: "home",
    title: "Single-family rentals",
    body: "Houses and townhomes between tenants. Our full move-out checklist — cabinet and appliance interiors, closets, baseboards, tile and grout.",
  },
  {
    icon: "building",
    title: "Apartments & multi-unit",
    body: "Several units in one building, turned over together. The standardised checklist is what keeps quality even across a block of them.",
  },
  {
    icon: "sparkles",
    title: "Short-term rentals",
    body: "Airbnb and VRBO turnovers between guests, where the gap is hours rather than days and staging photos prove the unit was guest-ready.",
  },
];

export const PM_FAQ: PmFaq[] = [
  {
    q: "How quickly can you turn over a unit?",
    a: "Same or next day in most cases. Vacancy costs you rent, so turnover speed is the part of this we hold ourselves to hardest — tell us the unit is empty and we will get in it.",
  },
  {
    q: "How do I know the unit was actually cleaned properly?",
    a: "Every job comes with before, after and staging photos, and every job runs the same standardised checklist. You can confirm the work from the photos rather than driving out to inspect it.",
  },
  {
    q: "Can you handle several units at once?",
    a: "Yes. Multi-unit turnovers are a normal part of our work, and the standardised checklist is what keeps the last unit finished to the same standard as the first.",
  },
  {
    q: "How does billing work?",
    a: "You keep a card on file in the customer portal. Twenty-four hours before a booking we place an authorisation to verify funds, and the card is charged after the clean is finished. Receipts are sent automatically and your full payment history stays in the portal.",
  },
  {
    q: "Do you charge more for properties further out?",
    a: "No. There is no trip charge and no zone pricing anywhere in our service area, which covers Pelham, Helena, Alabaster, Hoover, Vestavia Hills, Homewood and Mountain Brook. Your quote reflects the size and condition of the unit and the service booked.",
  },
  {
    q: "What is included in a turnover clean?",
    a: "Our full move-in/move-out checklist: inside empty cabinets and drawers, inside the refrigerator, freezer, stove and oven, closets vacuumed, interior windowpanes, hand-detailed baseboards, tile and grout, hood vents and appliance exteriors.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Verity Cleaning LLC is licensed, bonded and insured for both residential and commercial work.",
  },
];
