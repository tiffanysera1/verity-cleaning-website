/* The condition scale behind every quote. The quote form asks customers to
   rate their home from 1 (cleanest) to 10, and quotes come back priced at
   light, moderate and heavy, so this maps one onto the other. Shown on every
   service page, the quote page and /faq/ (once, under Quotes & payment).
   The levels and the custom pricing at 10 are Tiffany's; change them here
   and every page follows. */
export const CONDITION_FAQ = {
  q: "What do light, moderate and heavy condition mean?",
  a: "Our quote form asks you to rate your home's condition from 1 to 10, with 1 the cleanest. 1–3 is light: the home is kept up regularly, with everyday dust and no buildup in the kitchen or bathrooms. 4–6 is moderate: lived-in, with visible dust on surfaces and baseboards, soap scum or water spots in the bathrooms, some grease on the stovetop, pet hair and a little clutter to work around. 7–9 is heavy: significant buildup such as thick dust, grease on cabinets and appliances, hard-water staining, mildew in the shower, or clutter that needs organizing before we can clean. A 10, meaning extraordinary clutter, is custom priced after we see photos or talk it through with you. If the home turns out to be at a different level than described, we talk with you before doing any additional work, then adjust the price and document why.",
};
