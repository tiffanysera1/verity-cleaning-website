/* Real Verity jobs, supplied by the owner as finished before/after graphics.
   Only real work belongs here — no stock, no repeated imagery, nothing
   staged.

   Two things carry the SEO and accessibility weight, because the text inside
   these graphics is baked into pixels and unreadable to search engines and
   screen readers:

     alt      describes what actually changed in the photo pair
     caption  restates it as page text, outside the image

   `tag` names which service covers that work, and every one is taken from the
   checklists in components/service/serviceDetailData.tsx rather than inferred
   from the photo. If a checklist changes, check these still hold. */

export type Transformation = {
  image: string;
  title: string;
  alt: string;
  caption: string;
  tag: string;
  /* Before and after supplied as two separate square graphics, joined side by
     side into one 2000x1000 image. Spans the full row of the gallery grid. */
  wide?: boolean;
};

export const TRANSFORMATIONS: Transformation[] = [
  {
    image: "/transformations/kitchen-declutter.webp",
    title: "Kitchen reset",
    alt: "A kitchen buried in bags, boxes and loose debris across the counters and tile floor, and the same kitchen afterwards with clear counters, a clean floor and wiped-down cabinet fronts",
    caption:
      "Counters cleared and cleaned underneath, tile floor swept and mopped, appliance exteriors and cabinet fronts wiped down.",
    tag: "Deep clean",
  },
  {
    image: "/transformations/toilet-stain-removal.webp",
    title: "Toilet, inside and out",
    alt: "A toilet bowl with heavy brown mineral staining around the waterline, and the same toilet afterwards clean and white",
    caption:
      "Heavy mineral staining lifted from the bowl. Cleaning inside, outside and around the toilet is part of every visit.",
    tag: "Every clean",
  },
  {
    image: "/transformations/refrigerator-interior.webp",
    title: "Inside the refrigerator",
    alt: "An empty refrigerator interior with dried spills and brown staining across the shelves and door bins, and the same refrigerator afterwards with clean white shelves and clear glass",
    caption:
      "Dried spills cleared from shelves, glass and door bins. Included in a move-out clean, and available as an add-on on any other visit.",
    tag: "Move-out clean",
  },
  {
    image: "/transformations/refrigerator-emptied.webp",
    title: "Refrigerator turnover",
    alt: "A refrigerator and freezer full of food, jars and containers, and the same refrigerator afterwards emptied with clean shelves and drawers",
    caption:
      "Emptied out, shelves and drawers cleaned, ready for whoever moves in next.",
    tag: "Move-out clean",
  },
  {
    image: "/transformations/kitchen-sink-debris.webp",
    title: "Kitchen sink",
    alt: "A stainless steel sink basin with food debris and rust-coloured staining, and the same sink afterwards clean and dry",
    caption:
      "Debris cleared, basin and drain cleaned, then wiped and dried so it does not spot.",
    tag: "Every clean",
  },
  {
    image: "/transformations/kitchen-sink-drain.webp",
    title: "Sink and drain",
    alt: "A stainless steel sink with dark buildup around the drain and stopper, and the same sink afterwards with a clean drain and stopper",
    caption:
      "Buildup removed from around the drain and stopper — the part of a sink that gets missed.",
    tag: "Every clean",
  },
  {
    image: "/transformations/refrigerator-exterior.webp",
    title: "Stainless steel",
    alt: "A stainless steel refrigerator door marked with spots and smears, and the same door afterwards clean and evenly finished",
    caption:
      "Spots and smears cleared from the door without leaving streaks behind.",
    tag: "Every clean",
  },

  /* One move-out job, October 2026. */
  {
    image: "/transformations/kitchen-sink-turnover.webp",
    title: "Kitchen sink and cabinets",
    alt: "A kitchen sink with items left in the basins and open cabinet doors showing clutter underneath, and the same sink afterwards with empty, clean basins, clear counters and closed cabinets",
    caption:
      "Left-behind items cleared, sink basins and counters cleaned, cabinet fronts wiped down.",
    tag: "Move-out clean",
  },
  {
    image: "/transformations/refrigerator-crisper.webp",
    title: "Refrigerator drawers",
    alt: "A refrigerator crisper drawer cover with crumbs, dried spills and debris, and the same refrigerator afterwards with clean shelves, clear drawers and wiped door bins",
    caption:
      "Crumbs and dried spills cleared from shelves, crisper drawers and door bins. The inside of the refrigerator is part of every move-out clean.",
    tag: "Move-out clean",
    wide: true,
  },
  {
    image: "/transformations/under-sink-cabinet.webp",
    title: "Under the sink",
    alt: "The cabinet under a kitchen sink with stains and rings on the base, and the same cabinet afterwards with a clean, even base",
    caption:
      "Stains and water rings cleaned from the cabinet base, the spot nobody looks until they move.",
    tag: "Move-out clean",
  },
  {
    image: "/transformations/inside-drawer.webp",
    title: "Inside the drawers",
    alt: "An empty drawer with crumbs, hair and brown spots across the bottom, and the same drawer afterwards clean",
    caption:
      "Crumbs, hair and spots cleaned out. The inside of empty cabinets and drawers is part of every move-out clean.",
    tag: "Move-out clean",
  },
  {
    image: "/transformations/pantry-shelves.webp",
    title: "Pantry",
    alt: "A pantry with open food bags and jars left on wire shelves, and the same pantry afterwards with empty, clean shelves",
    caption:
      "Left-behind food cleared and the wire shelves cleaned, ready for the next household.",
    tag: "Move-out clean",
  },
  {
    image: "/transformations/cabinet-door-drips.webp",
    title: "Cabinet fronts",
    alt: "A white cabinet door with dried brown drips and grime along the trim, and the same door afterwards clean",
    caption:
      "Dried drips and grime cleaned off the panels and trim, where they are easy to miss.",
    tag: "Move-out clean",
  },
  /* A wide entry must follow an even number of square ones, or it leaves an
     empty cell in the two-column grid before it. */
  {
    image: "/transformations/stovetop-burners.webp",
    title: "Stovetop",
    alt: "An electric stovetop scattered with crumbs and burnt-on food around the burners, and the same stove afterwards with a clean, glossy surface and control panel",
    caption:
      "Crumbs and burnt-on food cleared from around the burners, stovetop and control panel cleaned.",
    tag: "Move-out clean",
    wide: true,
  },
  {
    image: "/transformations/bathroom-vanity.webp",
    title: "Bathroom vanity",
    alt: "A bathroom vanity with hair, debris and residue across the counter and sink, and the same vanity afterwards with a clean counter, sink and mirror",
    caption:
      "Counter, sink and mirror cleaned, with hair and debris cleared from every corner.",
    tag: "Move-out clean",
  },
  {
    image: "/transformations/toilet-base-grime.webp",
    title: "Around the toilet",
    alt: "The base of a toilet with dark grime built up where it meets the floor, and the same toilet afterwards clean with a clean floor around it",
    caption:
      "Grime cleaned from the base of the toilet and the floor around it, not just the bowl.",
    tag: "Move-out clean",
  },
  {
    image: "/transformations/baseboard-dust-buildup.webp",
    title: "Baseboards",
    alt: "A baseboard thick with dust and cobwebs, and a baseboard afterwards hand-detailed and clean",
    caption:
      "Built-up dust and cobwebs removed. Baseboards are hand-detailed in every move-out clean.",
    tag: "Move-out clean",
  },
  {
    image: "/transformations/window-streaks.webp",
    title: "Interior windows",
    alt: "A window with heavy smeared streaks across the glass, and the same window afterwards clear with an unobstructed view outside",
    caption:
      "Streaks and residue cleaned from the glass. Interior windowpanes are included in every move-out clean.",
    tag: "Move-out clean",
  },
  {
    image: "/transformations/hallway-carpet-vacuum.webp",
    title: "Carpet",
    alt: "A hallway carpet scattered with debris and dirt, and the same carpet afterwards vacuumed clean with even lines",
    caption:
      "Debris cleared and the carpet vacuumed throughout, edges included.",
    tag: "Move-out clean",
  },
];

/* Pick a subset by image slug, preserving the order asked for. Throws on a
   typo rather than silently rendering fewer cards than intended. */
export function pickTransformations(slugs: string[]): Transformation[] {
  return slugs.map((slug) => {
    const found = TRANSFORMATIONS.find((t) => t.image.includes(`/${slug}.`));
    if (!found) throw new Error(`Unknown transformation: ${slug}`);
    return found;
  });
}
