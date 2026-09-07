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
