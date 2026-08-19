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
    description: "Perfect for regularly maintained homes that need routine upkeep.",
    chips: ["Weekly", "Biweekly", "Monthly"],
    photo: "/service-deep-cleaning.webp",
  },
  {
    slug: "deep-cleaning",
    badge: "Most Popular",
    title: "Deep Cleaning",
    description: "Our most popular first-time service, for homes that need a little extra attention.",
    chips: ["First Visit", "Seasonal", "One-Time"],
    photo: "/og-image.jpg",
  },
  {
    slug: "move-in-move-out",
    title: "Move-In / Move-Out",
    description: "Ideal for empty homes before moving in or after moving out.",
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

/* The comparison table covers the four room-based/property services —
   Commercial Cleaning uses a different checklist shape entirely (common
   areas, restrooms, break rooms) and doesn't map onto residential rows
   like "Bed Making" or "Ceiling Fans", so it's intentionally left out of
   this specific grid rather than padded with inaccurate "—" guesses. */
export type CompareState = "yes" | "addon" | "no";
export type CompareRow = { label: string; values: [CompareState, CompareState, CompareState, CompareState] };

export const COMPARE_SERVICES = ["Recurring", "Deep Clean", "Move-In / Out", "Post-Construction"] as const;

export const COMPARE_ROWS: CompareRow[] = [
  { label: "Kitchen", values: ["yes", "yes", "yes", "yes"] },
  { label: "Bathrooms", values: ["yes", "yes", "yes", "yes"] },
  { label: "Dusting", values: ["yes", "yes", "yes", "yes"] },
  { label: "Vacuuming", values: ["yes", "yes", "yes", "yes"] },
  { label: "Mopping", values: ["yes", "yes", "yes", "yes"] },
  { label: "Trash Removal", values: ["yes", "yes", "no", "addon"] },
  { label: "Baseboards", values: ["no", "yes", "yes", "yes"] },
  { label: "Doors", values: ["no", "yes", "no", "yes"] },
  { label: "Door Frames", values: ["no", "yes", "no", "yes"] },
  { label: "Light Switches", values: ["yes", "yes", "yes", "yes"] },
  { label: "Cabinet Fronts", values: ["no", "yes", "yes", "yes"] },
  { label: "Window Sills", values: ["no", "yes", "yes", "yes"] },
  { label: "Ceiling Fans", values: ["addon", "addon", "addon", "addon"] },
  { label: "Inside Oven", values: ["addon", "addon", "addon", "no"] },
  { label: "Inside Refrigerator", values: ["addon", "addon", "yes", "no"] },
  { label: "Interior Windows", values: ["addon", "addon", "addon", "yes"] },
  { label: "Laundry", values: ["addon", "addon", "no", "no"] },
  { label: "Bed Making", values: ["yes", "yes", "no", "no"] },
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

/* PLACEHOLDER PRICING — see components/service/serviceDetailData.tsx for
   the "sample pricing, clearly marked" convention this follows. Real
   add-on availability/pricing already lives per-service there; this grid
   is a friendly overview, not a new source of truth. */
export const ADD_ONS: AddOn[] = [
  { key: "oven", icon: "oven", title: "Inside Oven", description: "Removes baked-on grease & buildup." },
  { key: "fridge", icon: "fridge", title: "Inside Refrigerator", description: "Shelves, drawers & compartments." },
  { key: "windows", icon: "windows", title: "Interior Windows", description: "Streak-free glass throughout." },
  { key: "laundry", icon: "laundry", title: "Laundry", description: "Wash, dry, and fold a load." },
  { key: "linens", icon: "linens", title: "Linen Change", description: "Fresh sheets on every bed." },
  { key: "pet", icon: "pet", title: "Pet Hair Removal", description: "Targeted removal from floors & upholstery." },
  { key: "garage", icon: "garage", title: "Garage Sweep", description: "A quick sweep of floors and shelving." },
  { key: "cabinets", icon: "cabinets", title: "Inside Cabinets", description: "Wiped down, inside and out." },
  { key: "dusting", icon: "dusting", title: "High Dusting", description: "Ceiling fans, vents, and high shelves." },
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
