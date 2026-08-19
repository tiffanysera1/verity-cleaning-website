/* Service-area pages.

   These exist to rank for "[service] in [town]" searches, which is where local
   intent actually concentrates. They only work if each page says something
   true and specific about its town — Google treats near-identical pages with
   the place name swapped as doorway pages, and penalizes them. So every entry
   below carries its own intro, housing description, and reason a particular
   service leads there. If a town is ever added, write it properly or leave it
   off the list and let it sit on the hub page instead.

   Verity is based in Pelham. Drive times are from there and are deliberately
   given as ranges rather than false precision. */

export type Area = {
  slug: string;
  name: string;
  county: string;
  driveTime: string;
  /* Short line for the hub page and cards. */
  tagline: string;
  /* Two or three paragraphs, genuinely specific to the town. */
  intro: string[];
  /* Which service leads here and why — drives the page's emphasis. */
  leadService: { slug: string; title: string; reason: string };
  /* Neighborhoods and areas within the town. Verify before publishing —
     these are the strongest local signal on the page and the most
     embarrassing thing to get wrong. */
  neighborhoods: string[];
};

export const AREAS: Area[] = [
  {
    slug: "pelham",
    name: "Pelham",
    county: "Shelby County",
    driveTime: "This is home",
    tagline: "Where Verity is based — no travel time, no trip charge.",
    intro: [
      "Verity Cleaning is based in Pelham, so this is the one town where we are never more than a few minutes away. That matters more than it sounds: it means we can offer tighter arrival windows here, and it makes short-notice bookings far easier to fit in than they are further out.",
      "Pelham homes run the full range — established streets off Highway 31, newer construction closer to the interstate, and everything between. We clean all of it, and because we live and work here, we already know the neighborhoods.",
    ],
    leadService: {
      slug: "recurring-cleaning",
      title: "Recurring Cleaning",
      reason:
        "Most of our Pelham work is recurring — weekly, biweekly, or monthly visits for households who would rather not think about it again.",
    },
    neighborhoods: ["Ballantrae", "Chandalar", "Oak Mountain", "Indian Valley"],
  },
  {
    slug: "hoover",
    name: "Hoover",
    county: "Jefferson & Shelby Counties",
    driveTime: "10–15 minutes from Pelham",
    tagline: "Birmingham's largest suburb, and a short drive north of us.",
    intro: [
      "Hoover sits directly between us and Birmingham, which makes it one of the easiest places for us to serve. It is also one of the largest suburbs in the state, so the housing varies enormously — from the established streets around Riverchase to the newer subdivisions spreading south and west.",
      "Larger homes take longer to clean properly, and that is where people most often get disappointed by a cheap quote. We price on what the home actually needs after seeing photos, so the number you get is the number you pay.",
    ],
    leadService: {
      slug: "deep-cleaning",
      title: "Deep Cleaning",
      reason:
        "Bigger Hoover homes tend to start with a deep clean — baseboards, ceiling fans, grout, and the corners that routine cleaning skips — before moving onto a recurring schedule.",
    },
    neighborhoods: ["Riverchase", "Bluff Park", "Trace Crossings", "Greystone"],
  },
  {
    slug: "vestavia-hills",
    name: "Vestavia Hills",
    county: "Jefferson County",
    driveTime: "15–20 minutes from Pelham",
    tagline: "Over-the-mountain, established homes, mature streets.",
    intro: [
      "Vestavia Hills is an established over-the-mountain community, and the housing stock shows it — a lot of homes here have been lived in for decades, with the mature trees and settled landscaping that come with that.",
      "Older homes reward detail work. Trim, built-ins, tile grout, and window sills accumulate more than newer construction does, and a surface clean tends to leave them looking only half-done. Our checklists cover those areas as standard rather than as an upsell.",
      "Access is usually straightforward here, though a lot of Vestavia driveways are steep and tree-lined, and several streets are narrow enough that we park considerately rather than block a neighbor. If your home has a particular quirk — a gate code, a side entrance that works better, a dog who would rather we came through the back — tell us when you book and we will note it against your address so you never have to explain it twice.",
    ],
    leadService: {
      slug: "deep-cleaning",
      title: "Deep Cleaning",
      reason:
        "Established homes usually need a thorough first clean to reset them, after which a recurring visit keeps them there.",
    },
    neighborhoods: ["Cahaba Heights", "Liberty Park", "Vestavia Hills East"],
  },
  {
    slug: "homewood",
    name: "Homewood",
    county: "Jefferson County",
    driveTime: "15–20 minutes from Pelham",
    tagline: "Walkable neighborhoods and older, character-filled homes.",
    intro: [
      "Homewood is one of the most walkable parts of the Birmingham area, and its housing reflects that — smaller lots, older bungalows and cottages, hardwood floors, and a lot of original detail worth looking after.",
      "Character homes need a gentler, more careful approach than a large new build. Hardwood, original trim, and tile all want the right products and a bit of patience, and rushing them is how they get damaged.",
      "Homewood parking deserves a mention. Between the smaller lots, the on-street parking near the business districts, and the alleys behind some of the older blocks, it helps to know in advance where we should pull in. Tell us when you book and we will plan around it. It sounds like a small thing, but arriving and spending ten minutes hunting for a space is ten minutes not spent on your home.",
    ],
    leadService: {
      slug: "move-in-move-out",
      title: "Move-In / Move-Out Cleaning",
      reason:
        "Homewood turns over more than most neighborhoods nearby, so move-out cleans — the kind that decide whether a deposit comes back — are a regular request here.",
    },
    neighborhoods: ["Edgewood", "Hollywood", "West Homewood", "Rosedale"],
  },
  {
    slug: "mountain-brook",
    name: "Mountain Brook",
    county: "Jefferson County",
    driveTime: "20–25 minutes from Pelham",
    tagline: "Established homes where the detail work matters most.",
    intro: [
      "Mountain Brook has some of the oldest and most carefully kept homes in the Birmingham area. Cleaning them well is less about speed and more about knowing what to touch and what to leave alone.",
      "We work to a checklist and walk you through what was done at the end, room by room. In homes with original finishes and pieces that matter, being told exactly what happened is worth as much as the clean itself.",
    ],
    leadService: {
      slug: "recurring-cleaning",
      title: "Recurring Cleaning",
      reason:
        "Homes here are usually maintained on a standing schedule rather than cleaned in bursts, which keeps the detail work manageable visit to visit.",
    },
    neighborhoods: ["Crestline Village", "English Village", "Mountain Brook Village", "Cherokee Bend"],
  },
  {
    slug: "helena",
    name: "Helena",
    county: "Shelby County",
    driveTime: "10–15 minutes from Pelham",
    tagline: "A family suburb right next door to us.",
    intro: [
      "Helena is one of our closest neighbors, and it is overwhelmingly a family town — busy households, school schedules, and not a lot of spare weekend hours to spend cleaning.",
      "That shapes how we work here. Most Helena bookings are on a set schedule, so the same routine gets handled without anyone having to think about arranging it each time.",
      "Because so much of our Helena work is on a set schedule, most customers here end up with a standing arrangement: same day, same time, key or code on file, and no need to be home. If you would rather be there for every visit, that is fine too — we just want the arrangement to suit how your week actually runs rather than how a cleaning company would prefer it to.",
    ],
    leadService: {
      slug: "recurring-cleaning",
      title: "Recurring Cleaning",
      reason:
        "Weekly and biweekly visits are the norm here — the point is getting the weekend back, not deep-cleaning twice a year.",
    },
    neighborhoods: ["Old Town Helena", "Riverwoods", "Hillsboro", "Braeburn"],
  },
  {
    slug: "alabaster",
    name: "Alabaster",
    county: "Shelby County",
    driveTime: "10–15 minutes from Pelham",
    tagline: "Growing neighborhoods just south of us.",
    intro: [
      "Alabaster has grown quickly, and a lot of its housing is newer construction on larger lots — the kind of home that looks fine at a glance but collects dust in the places nobody gets to.",
      "Newer homes are usually quicker to clean than older ones, which tends to make a recurring schedule more affordable here than people expect before they ask.",
      "Newer construction has its own quirks. Builder dust keeps surfacing for a good while after a home is finished, settling into vents, window tracks and the tops of trim where nobody looks. If your house is relatively new and has never had a proper deep clean, that is usually where the difference shows most on a first visit — and it is why a first clean often takes longer than the recurring ones that follow.",
    ],
    leadService: {
      slug: "recurring-cleaning",
      title: "Recurring Cleaning",
      reason:
        "Newer homes hold a routine clean well, so most Alabaster households settle into a biweekly or monthly visit.",
    },
    neighborhoods: ["Weatherly", "Silver Creek", "Meadow Brook", "Kentwood"],
  },
];

export function getArea(slug: string) {
  return AREAS.find((a) => a.slug === slug);
}

/* Towns we serve that do not have their own page yet. They appear on the hub
   and in the schema, but no thin page is generated for them — an empty page
   ranks worse than no page. */
export const ADDITIONAL_AREAS = ["Chelsea", "Calera", "Columbiana"];
