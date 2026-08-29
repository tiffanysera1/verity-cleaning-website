/* Contextual cross-links for the service pages.

   The audit found every page on the site carrying identical inbound and
   outbound link counts, because all linking lived in the shared nav and
   footer. Nav links tell search engines nothing about which pages relate to
   which — in-body links do. These are the relationships worth stating.

   `areas` should name towns where the service genuinely leads, matching the
   leadService already declared in areasData.ts. Keep the two in agreement:
   a service page claiming Homewood while the Homewood page leads with
   something else is a contradictory signal. */

export type ServiceLinks = {
  areas: { slug: string; name: string }[];
  areaNote: string;
  related?: { slug: string; title: string; note: string };
};

export const SERVICE_LINKS: Record<string, ServiceLinks> = {
  "standard-cleaning": {
    areas: [
      { slug: "mountain-brook", name: "Mountain Brook" },
      { slug: "helena", name: "Helena" },
      { slug: "pelham", name: "Pelham" },
    ],
    areaNote:
      "Recurring visits are what we do most of in these towns, where households would rather have it handled than think about it.",
    related: {
      slug: "deep-cleaning",
      title: "Deep Cleaning",
      note: "Most recurring schedules start with one deep clean to reset the home, after which the routine visits keep it there.",
    },
  },
  "deep-cleaning": {
    areas: [
      { slug: "hoover", name: "Hoover" },
      { slug: "vestavia-hills", name: "Vestavia Hills" },
    ],
    areaNote:
      "Larger Hoover homes and older Vestavia Hills properties are where deep cleans come up most — both accumulate in places routine cleaning never reaches.",
    related: {
      slug: "standard-cleaning",
      title: "Standard Cleaning",
      note: "A deep clean is a one-off reset. If you would rather it never gets back to that point, recurring visits are the follow-on.",
    },
  },
  "move-in-move-out": {
    areas: [
      { slug: "homewood", name: "Homewood" },
      { slug: "alabaster", name: "Alabaster" },
    ],
    areaNote:
      "Homewood turns over more than most neighborhoods nearby, so move-out cleans are a regular request there.",
  },
  "commercial-office-cleaning": {
    areas: [
      { slug: "pelham", name: "Pelham" },
      { slug: "hoover", name: "Hoover" },
    ],
    areaNote:
      "Offices, shops and small businesses across Shelby County and the Birmingham suburbs.",
  },
  "post-construction-cleaning": {
    areas: [
      { slug: "alabaster", name: "Alabaster" },
      { slug: "hoover", name: "Hoover" },
    ],
    areaNote:
      "Both are still building, so new construction and renovation cleanup comes up there more than anywhere else we serve.",
  },
};
