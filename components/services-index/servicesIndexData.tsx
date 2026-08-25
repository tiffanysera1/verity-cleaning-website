/* Data for the /services/ "View All Services" index page. Comparison
   matrix and chips are derived from the real per-service checklists in
   components/service/serviceDetailData.tsx and components/servicesData.tsx
   so this page stays consistent with the individual service pages —
   nothing here is invented independently of that source data. */

export type FeaturedService = {
  slug: string;
  badge?: string;
  title: string;
  description: string;
  chips: string[];
  photo: string;
};

export const FEATURED_SERVICES: FeaturedService[] = [
  {
    slug: "recurring-cleaning",
    title: "Recurring Cleaning",
    description: "Routine upkeep for a home that is already in generally maintained condition.",
    chips: ["Weekly", "Biweekly", "Monthly"],
    photo: "/service-deep-cleaning.webp",
  },
  {
    slug: "deep-cleaning",
    badge: "Most Popular",
    title: "Deep Cleaning",
    description: "A detailed full-home reset for buildup and the detail areas routine cleaning skips.",
    chips: ["First Visit", "Seasonal", "One-Time"],
    photo: "/og-image.jpg",
  },
  {
    slug: "move-in-move-out",
    title: "Move-In / Move-Out",
    description: "A turnover clean for an empty home, including cabinet interiors and appliances.",
    chips: ["Empty Home", "Real Estate", "Rental"],
    photo: "/service-move.webp",
  },
  {
    slug: "commercial-office-cleaning",
    title: "Commercial Cleaning",
    description: "Clean, welcoming workspaces for offices, shops, and local businesses.",
    chips: ["Offices", "Retail", "Recurring"],
    photo: "/service-commercial.webp",
  },
  {
    slug: "post-construction-cleaning",
    title: "Post-Construction",
    description: "Clears away dust, debris, and residue after a renovation or new build.",
    chips: ["New Build", "Renovation", "Contractor"],
    photo: "/service-construction.webp",
  },
];

/* Three columns, not five. Commercial uses a different checklist shape
   entirely (common areas, restrooms, break rooms) and does not map onto
   rows like "Beds made". Post-Construction is left out because we do not
   hold its checklist — guessing at twenty rows would be worse than an
   honest omission. Both remain fully described on their own pages.

   Every value below is derived line-by-line from the checklists in
   components/service/serviceDetailData.tsx. "addon" means the task is one
   of the eight extras and is NOT already in that service's checklist. */
export type CompareState = "yes" | "addon" | "no";
export type CompareRow = { label: string; note?: string; values: [CompareState, CompareState, CompareState] };

export const COMPARE_SERVICES = ["Standard", "Deep Clean", "Move-In / Out"] as const;

export const COMPARE_ROWS: CompareRow[] = [
  { label: "Kitchen, bathrooms & living areas", values: ["yes", "yes", "yes"] },
  { label: "Dusting & accessible surfaces", values: ["yes", "yes", "yes"] },
  { label: "Ceiling fans & light fixtures (within reach)", values: ["yes", "yes", "yes"] },
  { label: "Light switches & door frames", values: ["yes", "yes", "yes"] },
  { label: "Blinds & windowsills dusted", values: ["yes", "yes", "yes"] },
  { label: "Cabinet & drawer fronts", values: ["yes", "yes", "yes"] },
  { label: "Inside microwave", values: ["yes", "yes", "yes"] },
  { label: "Stovetop & appliance exteriors", values: ["yes", "yes", "yes"] },
  { label: "Floors vacuumed & mopped", values: ["yes", "yes", "yes"] },
  { label: "Trash removed, liners replaced", values: ["yes", "yes", "no"] },
  { label: "TVs, monitors & electronics dusted", values: ["yes", "yes", "no"] },
  { label: "Beds made & linens changed", values: ["yes", "yes", "no"] },
  { label: "Hand-detailed baseboards", values: ["no", "yes", "yes"] },
  { label: "Interior windowpanes", values: ["addon", "yes", "yes"] },
  { label: "Tile & grout detailing", values: ["no", "yes", "yes"] },
  { label: "Kitchen hood vents", values: ["no", "yes", "yes"] },
  { label: "Kitchen walls spot-cleaned", values: ["no", "yes", "yes"] },
  {
    label: "Extra room floors (when applicable)",
    note: "Laundry rooms, indoor patios, basements & garages",
    values: ["no", "yes", "yes"],
  },
  { label: "Inside empty cabinets & drawers", values: ["no", "no", "yes"] },
  { label: "Inside refrigerator & freezer", values: ["addon", "addon", "yes"] },
  { label: "Inside oven", values: ["addon", "addon", "yes"] },
  { label: "Inside empty closets vacuumed", values: ["no", "no", "yes"] },
  { label: "Detailed wet-wipe of blinds", values: ["addon", "addon", "addon"] },
  { label: "Inside dishwasher", values: ["addon", "addon", "addon"] },
  { label: "Wash & fold laundry", values: ["addon", "addon", "addon"] },
  { label: "Sink of dishes", values: ["addon", "addon", "addon"] },
  { label: "Extra pet hair shed", values: ["addon", "addon", "addon"] },
];

export type DecisionPath = {
  question: string;
  answer: string;
  resultSlug: string;
  resultTitle: string;
};

export const DECISION_PATHS: DecisionPath[] = [
  {
    question: "Has your home been cleaned recently and just needs routine upkeep?",
    answer: "Yes, just keep it up",
    resultSlug: "recurring-cleaning",
    resultTitle: "Recurring Cleaning",
  },
  {
    question: "Has it been a while, or is this your first professional cleaning?",
    answer: "It needs extra attention",
    resultSlug: "deep-cleaning",
    resultTitle: "Deep Cleaning",
  },
  {
    question: "Are you moving into or out of the home?",
    answer: "Yes, it's empty or about to be",
    resultSlug: "move-in-move-out",
    resultTitle: "Move-In / Move-Out",
  },
];

export type AddOn = { key: string; icon: string; title: string; description: string };

/* The eight extras Verity actually sells, mirroring the per-service lists
   in components/service/serviceDetailData.tsx. Anything a given service's
   checklist already covers is dropped from that service's page, so nothing
   is ever offered as a paid extra twice. */
export const ADD_ONS: AddOn[] = [
  { key: "oven", icon: "oven", title: "Inside Oven", description: "Baked-on grease and buildup removed. Already included in a move-out clean." },
  { key: "fridge", icon: "fridge", title: "Clean Inside Fridge", description: "Shelves, drawers and compartments. Already included in a move-out clean." },
  { key: "windows", icon: "windows", title: "Interior Windows", description: "Interior-facing panes. Already included in deep and move-out cleans." },
  { key: "blinds", icon: "blinds", title: "Wet Wipe Window Blinds", description: "Wet-wiped rather than dusted, for grime dusting will not lift." },
  { key: "dishwasher", icon: "dishwasher", title: "Inside Dishwasher", description: "The inside of the dishwasher cleaned." },
  { key: "laundry", icon: "laundry", title: "Wash & Fold Laundry", description: "A load washed, dried and folded while we work." },
  { key: "dishes", icon: "dishes", title: "Sink of Dishes", description: "Hand-washed or loaded into the dishwasher." },
  { key: "pet", icon: "pet", title: "Extra Pet Hair Shed", description: "For shedding heavier than a normal vacuum pass handles." },
];

export type IncludedItem = { icon: string; title: string };

export const INCLUDED_ALWAYS: IncludedItem[] = [
  { icon: "supplies", title: "Professional supplies" },
  { icon: "insured", title: "Fully insured cleaners" },
  { icon: "guarantee", title: "Satisfaction guarantee" },
  { icon: "detail", title: "Attention to detail" },
  { icon: "respect", title: "Respectful service" },
  { icon: "communication", title: "Reliable communication" },
];
