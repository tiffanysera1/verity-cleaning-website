import {
  CalendarCheck,
  Shield,
  MessageCircle,
  Camera,
  FileText,
  Clock,
  CreditCard,
  HomeSparkle,
  CheckCircle,
} from "../Icons";

/* Tab icons are referenced by string key (not a component reference) because
   this data crosses the server → client component boundary as a prop, and
   React can't serialize function references across that boundary. The key
   is resolved to an actual icon component inside ServiceIncluded.tsx,
   which is a client component. */
export type IncludedTabIconKey = "home" | "spray" | "sparkles" | "home-sparkle" | "check" | "building" | "file" | "bucket";

export type IncludedTab = {
  key: string;
  label: string;
  icon: IncludedTabIconKey;
  items: string[];
};

export type AddOn = { title: string; description: string };
export type FaqItem = { q: string; a: string };
export type BlogLink = { title: string; image: string };
export type Tip = { title: string; body: string; image: string };

export type FrequencyTier = { label: string; discount: string; note: string };

export type ServiceDetail = {
  tagline: string;
  description: string;
  frequencyTiers?: FrequencyTier[];
  includedTabs: IncludedTab[];
  notIncluded: { left: string[]; right: string[] };
  addOns: AddOn[];
  tips: Tip[];
  blogLinks: BlogLink[];
  faq: FaqItem[];
};

/* Shared across every service page — not service-specific. */
export const MINI_TRUST = [
  { icon: CalendarCheck, title: "Request preferred times" },
  { icon: Shield, title: "No payment today", sub: "Pay after service" },
  { icon: MessageCircle, title: "Clear communication", sub: "from start to finish" },
  { icon: CheckCircle, title: "Satisfaction guaranteed" },
];

export const EXPECT_STEPS = [
  { Icon: Camera, title: "Request a Quote", body: "Tell us about your home and upload photos." },
  { Icon: FileText, title: "Receive Your Quote", body: "We create a personalized quote just for you." },
  { Icon: CalendarCheck, title: "Request Preferred Times", body: "Choose your preferred and alternate dates." },
  { Icon: Clock, title: "We Confirm Your Time", body: "We'll confirm the best time for your clean." },
  { Icon: HomeSparkle, title: "We Clean Your Home", body: "Our detail-focused team gets it done." },
  { Icon: CreditCard, title: "Pay After Completion", body: "You pay only after your service is completed." },
];

const COMMON_ADD_ONS: AddOn[] = [
  { title: "Inside Oven", description: "Removes baked-on grease & buildup." },
  { title: "Inside Refrigerator", description: "Deep clean shelves, drawers & compartments." },
  { title: "Dishes", description: "Hand-wash and load/unload the dishwasher." },
  { title: "Wet Wipe Blinds", description: "Removes dust & grime from blinds." },
  { title: "Extra Pet Hair Removal", description: "Targeted removal from floors & upholstery." },
];

/* PLACEHOLDER — Verity has no blog yet. Sample links for layout purposes;
   point these at real posts once the blog exists. */
function blogLinksFor(compareTopic: string, timeTopic: string): BlogLink[] {
  return [
    { title: `${compareTopic} vs. Recurring Cleaning: Which Do You Need?`, image: "/service-deep-cleaning.webp" },
    { title: `5 Signs It's Time for ${timeTopic}`, image: "/service-move.webp" },
    { title: "Why Soap Scum Keeps Coming Back", image: "/service-construction.webp" },
  ];
}

/* PLACEHOLDER — sample cleaning-advice content for layout purposes. */
function tipsFor(image: string): Tip[] {
  return [
    {
      title: "Kitchen grease builds up faster than you think.",
      body: "Cooking releases tiny grease particles that settle on cabinets, walls, and even ceilings. That's why kitchen cabinets often feel sticky — even when they look clean.",
      image,
    },
    {
      title: "Why baseboards are the most-missed spot.",
      body: "Dust settles low and stays put. A quick pass with a dry cloth once a week keeps baseboards from becoming a visible chore.",
      image: "/og-image.jpg",
    },
    {
      title: "The truth about 'spring cleaning.'",
      body: "A seasonal deep clean isn't just tradition — it catches the buildup that regular tidying doesn't reach.",
      image: "/service-deep-cleaning.webp",
    },
  ];
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "recurring-cleaning": {
    tagline: "Keep it clean, so it never has to be reset.",
    description:
      "A standing visit on your schedule — weekly, biweekly or monthly. The point is maintenance: your home stays at a level you are happy with, so it never reaches the stage where it needs a full reset. Most households settle into a rhythm and stop thinking about cleaning altogether. The more often we come, the less each visit costs: 5% off monthly, 10% off biweekly, and 20% off weekly.",
    frequencyTiers: [
      { label: "Weekly", discount: "20% off", note: "Every visit. Our best rate." },
      { label: "Biweekly", discount: "10% off", note: "Every other week — the most popular choice." },
      { label: "Monthly", discount: "5% off", note: "Once a month to stay ahead of it." },
    ],
    includedTabs: [
      {
        key: "living",
        label: "Living, Bedrooms & Hallways",
        icon: "sparkles",
        items: [
          "Change linens & make beds (if linens are available)",
          "Checking & bagging garbage or trash under beds (within reach)",
          "Clean & wipe mirrors & glass items",
          "Dust ceiling fans & light fixtures (within reach)",
          "Dusting & cleaning off of shelves, ledges, desks & other surfaces",
          "Dusting & wiping of light switches",
          "Dusting & wiping of windowsills & blinds",
          "Dusting of door frames (within reach)",
          "Dusting of TVs, monitors & other electronics",
          "Feather dust wall art & dust around knick-knacks (within reach)",
          "Remove trash & replace trash can liners (liners must be provided)",
          "Removing cobwebs from ceilings (within reach)",
          "Set & stage living room items",
          "Sweep & mop all flooring (hardwood, tile, etc.)",
          "Vacuum & clean inside furniture",
          "Vacuuming of carpet flooring & around furniture",
        ],
      },
      {
        key: "bathrooms",
        label: "Bathrooms",
        icon: "spray",
        items: [
          "Removing cobwebs from ceilings (within reach)",
          "Dust reachable vents",
          "Dust ceiling fans & light fixtures (within reach)",
          "Dusting & wiping of windowsills & blinds",
          "Dusting & cleaning off of shelves, ledges, desks & other surfaces",
          "Feather dust wall art & dust around knick-knacks (within reach)",
          "Dusting & wiping of light switches",
          "Dusting of door frames (within reach)",
          "Cleaning of shower and/or tub",
          "Wipe, clean & dry sink & faucets",
          "Cleaning of inside, outside & around toilet",
          "Clean & spot check walls (within reach)",
          "Wipe mirrors & glass items",
          "Clean & sanitize countertops & ledges",
          "Clean exteriors of cabinets & drawers",
          "Remove trash & replace trash can liners (liners must be provided)",
          "Sweep & mop all flooring (hardwood, tile, etc.)",
        ],
      },
      {
        key: "kitchen",
        label: "Kitchen",
        icon: "home",
        items: [
          "Removing cobwebs from ceilings (within reach)",
          "Dust reachable vents",
          "Dust ceiling fans & light fixtures (within reach)",
          "Dusting & cleaning off of shelves, ledges, desks & other surfaces",
          "Feather dust wall art & dust around knick-knacks (within reach)",
          "Dusting & wiping of light switches",
          "Dusting of door frames (within reach)",
          "Cleaning of the inside of microwaves",
          "Cleaning of stovetops",
          "Clean exterior surfaces of fridge, stove, microwave & dishwasher",
          "Clean exteriors of cabinet fronts & drawer fronts",
          "Removing of items from countertops & cleaning all countertops",
          "Clean & sanitize countertops & ledges",
          "Wipe, clean & dry sinks & faucets",
          "Wipe mirrors & glass items",
          "Remove trash & replace trash can liners (liners must be provided)",
          "Sweep & mop all flooring (hardwood, tile, etc.)",
        ],
      },
      {
        key: "extra",
        label: "Extra Rooms",
        icon: "bucket",
        items: [
          "Dust & wipe down outside of washer & dryer",
          "Picking up & bagging of trash",
        ],
      },
    ],
    notIncluded: {
      left: ["Inside oven (add-on)", "Inside refrigerator (add-on)", "Interior windows (add-on)", "Laundry (add-on)"],
      right: ["Dishes (add-on)", "Exterior cleaning", "Moving heavy furniture", "Hazardous materials"],
    },
    addOns: COMMON_ADD_ONS,
    tips: tipsFor("/service-deep-cleaning.webp"),
    blogLinks: blogLinksFor("Deep Cleaning", "a Deep Clean"),
    faq: [
      { q: "How often should I schedule recurring cleaning?", a: "Most households choose weekly or biweekly visits. We'll help you pick a frequency that fits your home and routine when you request your quote." },
      { q: "Do I save money by cleaning more often?", a: "Yes. Recurring visits are discounted off the one-time rate — 5% off for monthly, 10% off for biweekly, and 20% off for weekly. The discount is applied to every visit for as long as you stay on the schedule, and it's already reflected in your quote." },
      { q: "Can I skip or reschedule a visit?", a: "Yes — just let us know as far ahead as you can by call or text, and we'll find a new time that works." },
      { q: "Do I need to be home during the cleaning?", a: "No. Many customers provide entry instructions and go about their day. We'll keep you updated along the way if you opt in." },
      { q: "What if I'm not happy with a visit?", a: "Let us know within 24 hours and we'll make it right — that's part of our satisfaction guarantee." },
    ],
  },
  "deep-cleaning": {
    tagline: "A detailed reset for homes that need a little extra attention.",
    description:
      "A one-time reset that goes after what routine cleaning never reaches — baseboards, ceiling fans, grout, vents, and the tops of things nobody looks at. Right for a first clean, a seasonal refresh, or a home that has not been done properly in a while.",
    includedTabs: [
      {
        key: "living",
        label: "Living, Bedrooms & Hallways",
        icon: "sparkles",
        items: [
          "Removing cobwebs from ceilings (within reach)",
          "Dust ceiling fans & light fixtures (within reach)",
          "Dusting & wiping of windowsills & blinds",
          "Dusting & cleaning off of shelves, ledges, desks & other surfaces",
          "Feather dust wall art & dust around knick-knacks (within reach)",
          "Dusting of TVs, monitors & other electronics",
          "Dusting & wiping of light switches",
          "Dusting of door frames (within reach)",
          "Clean & wipe mirrors & glass items",
          "Checking & bagging garbage or trash under beds (within reach)",
          "Change linens & make beds (if linens are available)",
          "Remove trash & replace trash can liners (liners must be provided)",
          "Sweep & mop all flooring (hardwood, tile, etc.)",
          "Vacuuming of carpet flooring & around furniture",
          "Vacuum & clean inside furniture",
          "Set & stage living room items",
          "Cleaning of windowpanes (inside only)",
          "Hand detailing & cleaning of exposed baseboards",
        ],
      },
      {
        key: "bathrooms",
        label: "Bathrooms",
        icon: "spray",
        items: [
          "Removing cobwebs from ceilings (within reach)",
          "Dust reachable vents",
          "Dust ceiling fans & light fixtures (within reach)",
          "Dusting & wiping of windowsills & blinds",
          "Dusting & cleaning off of shelves, ledges, desks & other surfaces",
          "Feather dust wall art & dust around knick-knacks (within reach)",
          "Dusting & wiping of light switches",
          "Dusting of door frames (within reach)",
          "Cleaning of shower and/or tub",
          "Wipe, clean & dry sink & faucets",
          "Cleaning of inside, outside & around toilet",
          "Clean & spot check walls (within reach)",
          "Wipe mirrors & glass items",
          "Clean & sanitize countertops & ledges",
          "Clean exteriors of cabinets & drawers",
          "Remove trash & replace trash can liners (liners must be provided)",
          "Sweep & mop all flooring (hardwood, tile, etc.)",
          "Cleaning of windowpanes (inside only)",
          "Tile & grout cleaning",
          "Hand detailing & cleaning of baseboards",
        ],
      },
      {
        key: "kitchen",
        label: "Kitchen",
        icon: "home",
        items: [
          "Removing cobwebs from ceilings (within reach)",
          "Dust reachable vents",
          "Dust ceiling fans & light fixtures (within reach)",
          "Dusting & cleaning off of shelves, ledges, desks & other surfaces",
          "Feather dust wall art & dust around knick-knacks (within reach)",
          "Dusting & wiping of light switches",
          "Dusting of door frames (within reach)",
          "Cleaning of the inside of microwaves",
          "Cleaning of stovetops",
          "Clean exterior surfaces of fridge, stove, microwave & dishwasher",
          "Clean exteriors of cabinet fronts & drawer fronts",
          "Removing of items from countertops & cleaning all countertops",
          "Clean & sanitize countertops & ledges",
          "Wipe, clean & dry sinks & faucets",
          "Wipe mirrors & glass items",
          "Remove trash & replace trash can liners (liners must be provided)",
          "Sweep & mop all flooring (hardwood, tile, etc.)",
          "Dusting & wiping of windowsills & blinds",
          "Cleaning of windowpanes (inside only)",
          "Clean hood vents",
          "Hand detailing & cleaning of exposed baseboards",
          "Clean & spot check walls (within reach)",
        ],
      },
      {
        key: "extra",
        label: "Extra Rooms",
        icon: "bucket",
        items: [
          "Dust & wipe down outside of washer & dryer",
          "Picking up & bagging of trash",
          "Removing of cobwebs throughout",
          "Cleaning of glass doorways & windows (inside home only)",
          "Sweeping of complete flooring",
          "Mopping of tile flooring",
          "Vacuuming of carpet flooring & around furniture",
        ],
      },
    ],
    notIncluded: {
      left: ["Inside oven (add-on)", "Inside refrigerator (add-on)", "Exterior windows", "Laundry (add-on)"],
      right: ["Dishes (add-on)", "Exterior cleaning", "Moving heavy furniture", "Hazardous materials"],
    },
    addOns: COMMON_ADD_ONS,
    tips: tipsFor("/service-deep-cleaning.webp"),
    blogLinks: blogLinksFor("Deep Cleaning", "a Deep Clean"),
    faq: [
      { q: "How is a deep clean different from recurring cleaning?", a: "Deep cleaning covers everything in a standard visit plus detail work like baseboards, window sills, vents, and the inside of the microwave — areas a routine visit doesn't reach every time." },
      { q: "Should my first cleaning be a deep clean?", a: "We recommend it. Starting with a deep clean gives every future recurring visit a consistent baseline to maintain." },
      { q: "How long does a deep clean take?", a: "It depends on your home's size and condition — we'll give you a time estimate along with your personalized quote." },
      { q: "Do I need to be home?", a: "No, as long as we have entry instructions. Many customers schedule their deep clean while they're out." },
    ],
  },
  "move-in-move-out": {
    tagline: "A detailed clean to help you settle in or hand off your old place.",
    description:
      "Perfect for closing out a lease, prepping a home for new owners, or settling into a new place that needs a reset first.",
    includedTabs: [
      {
        key: "living",
        label: "Living, Bedrooms & Hallways",
        icon: "sparkles",
        items: [
          "Removing cobwebs from ceilings (within reach)",
          "Dust ceiling fans & light fixtures (within reach)",
          "Dusting & wiping of windowsills & blinds",
          "Cleaning of windowpanes (inside only)",
          "Dusting & cleaning off of shelves, ledges, desks & other surfaces",
          "Dusting & wiping of light switches",
          "Dusting of door frames (within reach)",
          "Clean & wipe mirrors & glass items",
          "Hand detailing & cleaning of exposed baseboards",
          "Sweep & mop all flooring (hardwood, tile, etc.)",
          "Vacuuming of carpet flooring & around furniture",
          "Vacuuming out of closets",
        ],
      },
      {
        key: "bathrooms",
        label: "Bathrooms",
        icon: "spray",
        items: [
          "Removing cobwebs from ceilings (within reach)",
          "Dust reachable vents",
          "Dust ceiling fans & light fixtures (within reach)",
          "Dusting & wiping of windowsills & blinds",
          "Dusting & cleaning off of shelves, ledges, desks & other surfaces",
          "Feather dust wall art & dust around knick-knacks (within reach)",
          "Dusting & wiping of light switches",
          "Dusting of door frames (within reach)",
          "Cleaning of shower and/or tub",
          "Wipe, clean & dry sink & faucets",
          "Cleaning of inside, outside & around toilet",
          "Clean & spot check walls (within reach)",
          "Wipe mirrors & glass items",
          "Clean & sanitize countertops & ledges",
          "Clean exteriors of cabinets & drawers",
          "Remove trash & replace trash can liners (liners must be provided)",
          "Sweep & mop all flooring (hardwood, tile, etc.)",
          "Cleaning of windowpanes (inside only)",
          "Tile & grout cleaning",
          "Hand detailing & cleaning of baseboards",
          "Clean inside of cabinets & drawers",
        ],
      },
      {
        key: "kitchen",
        label: "Kitchen",
        icon: "home",
        items: [
          "Removing cobwebs from ceilings (within reach)",
          "Dust reachable vents",
          "Dust ceiling fans & light fixtures (within reach)",
          "Dusting & wiping of windowsills & blinds",
          "Cleaning of windowpanes (inside only)",
          "Dusting & cleaning off of shelves, ledges, desks & other surfaces",
          "Dusting & wiping of light switches",
          "Dusting of door frames (within reach)",
          "Cleaning of the inside of microwaves",
          "Clean inside of fridge, freezer & stove",
          "Cleaning of stovetops",
          "Clean hood vents",
          "Clean exterior surfaces of fridge, stove, microwave & dishwasher",
          "Clean inside of cabinets & drawers",
          "Clean exteriors of cabinet fronts & drawer fronts",
          "Clean & sanitize countertops & ledges",
          "Wipe, clean & dry sinks & faucets",
          "Wipe mirrors & glass items",
          "Hand detailing & cleaning of exposed baseboards",
          "Clean & spot check walls (within reach)",
          "Sweep & mop all flooring (hardwood, tile, etc.)",
        ],
      },
      {
        key: "extra",
        label: "Extra Rooms",
        icon: "bucket",
        items: [
          "Removing of cobwebs throughout",
          "Dust & wipe down outside of washer & dryer",
          "Cleaning of glass doorways & windows (inside home only)",
          "Picking up & bagging of trash",
          "Sweeping of complete flooring",
          "Mopping of tile flooring",
          "Vacuuming of carpet flooring & around furniture",
        ],
      },
    ],
    notIncluded: {
      left: ["Inside oven deep-scrub (add-on)", "Exterior windows (add-on)", "Carpet shampoo (add-on)"],
      right: ["Trash haul-away", "Moving heavy furniture", "Yard work", "Hazardous materials"],
    },
    addOns: [
      { title: "Inside Oven Deep Scrub", description: "Removes baked-on grease & buildup." },
      { title: "Exterior Window Cleaning", description: "Streak-free glass, inside and out." },
      { title: "Carpet Shampoo", description: "Per room — deep clean and revive carpets." },
    ],
    tips: tipsFor("/service-move.webp"),
    blogLinks: blogLinksFor("Move-Out Cleaning", "a Move-Out Clean"),
    faq: [
      { q: "When should I schedule a move-out cleaning?", a: "Ideally after your belongings are out, so we can access every surface — and before your final walkthrough or new tenants arrive." },
      { q: "Do you clean empty homes only?", a: "We can clean occupied or empty homes, but move-in/move-out cleans are most thorough once the space is empty." },
      { q: "Will this help me get my deposit back?", a: "A thorough move-out clean addresses the areas most landlords check, though deposit decisions are ultimately up to your landlord or property manager." },
      { q: "Can you clean before the movers arrive?", a: "Yes — just let us know your timeline when you request a quote and we'll work around your move day." },
    ],
  },
  "commercial-office-cleaning": {
    tagline: "Clean, welcoming workspaces for offices, shops, and local businesses.",
    description:
      "A professional space for your employees and customers, cleaned on a schedule that works around your business hours.",
    includedTabs: [
      { key: "common", label: "Common Areas", icon: "building", items: ["Floor care", "Dusting", "Trash removal", "Entryway & glass doors", "Seating areas"] },
      { key: "restrooms", label: "Restrooms", icon: "spray", items: ["Toilets & fixtures", "Sinks & mirrors", "Restocking supplies (on request)", "Floors", "Trash removal"] },
      { key: "breakroom", label: "Break Room / Kitchen", icon: "home", items: ["Counters & sink", "Appliance exteriors", "Tables wiped down", "Trash removal", "Floors"] },
      { key: "offices", label: "Offices & Desks", icon: "file", items: ["Desk & surface wipe-down", "Trash removal", "Dusting", "Vacuuming"] },
      { key: "entry", label: "Entry & Exterior", icon: "check", items: ["Entry glass & doors", "Sweeping walkways", "Trash & recycling bins"] },
    ],
    notIncluded: {
      left: ["Interior windows (add-on)", "Carpet shampoo (add-on)", "Restocking supplies (add-on)", "Deep sanitizing (add-on)"],
      right: ["IT equipment cleaning", "Moving furniture", "Hazardous materials", "After-hours emergency cleanup"],
    },
    addOns: [
      { title: "Interior Window Cleaning", description: "Streak-free glass throughout your space." },
      { title: "Carpet Shampoo", description: "Per room — deep clean and revive carpets." },
      { title: "Restocking Supplies Program", description: "We track and restock restroom & break room supplies." },
      { title: "Deep Sanitizing Service", description: "High-touch surface sanitizing for shared spaces." },
    ],
    tips: [
      { title: "Why a clean office boosts employee morale.", body: "A tidy, well-maintained workspace signals that a business cares about its people — and it shows in day-to-day focus.", image: "/service-commercial.webp" },
      { title: "How often should a small office be cleaned?", body: "Most small offices do well with 2-3 visits a week, with daily touch-ups in high-traffic areas like restrooms and break rooms.", image: "/service-deep-cleaning.webp" },
      { title: "The first thing customers notice when they walk in.", body: "Entryways and glass doors set the tone before a customer says a word — keeping them spotless is one of the highest-impact details.", image: "/og-image.jpg" },
    ],
    blogLinks: blogLinksFor("Commercial Cleaning", "a Commercial Cleaning Service"),
    faq: [
      { q: "Can you clean after business hours?", a: "Yes — we build commercial schedules around your operating hours, including evenings and early mornings." },
      { q: "Do you bring your own supplies and equipment?", a: "Yes, our team arrives fully equipped unless we've agreed on a different arrangement." },
      { q: "Can we set up a recurring schedule?", a: "Absolutely — most of our commercial clients are on a set weekly or biweekly schedule." },
      { q: "Are your cleaners insured for commercial spaces?", a: "Yes, Verity Cleaning is licensed, bonded, and insured for both residential and commercial work." },
    ],
  },
  "post-construction-cleaning": {
    tagline: "We clear away dust, debris, and residue after a renovation or new build.",
    description:
      "For homeowners and contractors finishing a renovation or new build who want the space move-in ready.",
    includedTabs: [
      { key: "kitchen", label: "Kitchen", icon: "home", items: ["Cabinets inside & out", "Counters", "Appliance exteriors", "Sink & fixtures", "Floors", "Fine dust removal"] },
      { key: "bathrooms", label: "Bathrooms", icon: "spray", items: ["Fixtures & tile", "Cabinets", "Mirrors", "Floors", "Fine dust removal"] },
      { key: "floors", label: "Floors & Baseboards", icon: "sparkles", items: ["Fine dust removal", "Baseboards wiped down", "Vacuum & mop", "Corners & edges"] },
      { key: "windows", label: "Windows & Sills", icon: "home-sparkle", items: ["Interior glass", "Sills & tracks", "Screens wiped down"] },
      { key: "fixtures", label: "Fixtures & Detail", icon: "check", items: ["Light fixtures", "Switches & outlets", "Vents", "Door frames & hardware"] },
    ],
    notIncluded: {
      left: ["Exterior windows (add-on)", "Carpet shampoo (add-on)", "Heavy residue/sticker removal (add-on)", "Debris haul-away (add-on)"],
      right: ["Structural cleanup", "Hazardous materials", "Yard/exterior debris", "HVAC duct cleaning"],
    },
    addOns: [
      { title: "Exterior Window Cleaning", description: "Streak-free glass, inside and out." },
      { title: "Carpet Shampoo", description: "Per room — deep clean and revive carpets." },
      { title: "Heavy Residue & Sticker Removal", description: "Paint splatter, labels, and stubborn residue." },
      { title: "Debris Haul-Away", description: "Removal of leftover construction debris." },
    ],
    tips: [
      { title: "Why construction dust settles for weeks after the crew leaves.", body: "Fine dust from drywall and sanding can stay airborne and resettle for days — which is why a proper post-construction clean covers every surface, not just the visible ones.", image: "/service-construction.webp" },
      { title: "The difference between a rough clean and a final clean.", body: "A rough clean clears the worst of the debris so trades can keep working. A final clean is the move-in-ready pass — the one Verity specializes in.", image: "/service-deep-cleaning.webp" },
      { title: "When to schedule your post-construction clean.", body: "Book it for right after the last trade finishes, before furniture and belongings move back in.", image: "/og-image.jpg" },
    ],
    blogLinks: blogLinksFor("Post-Construction Cleaning", "a Post-Construction Clean"),
    faq: [
      { q: "When should I schedule the cleaning after construction finishes?", a: "As soon as the last trade is done and the space is clear — ideally before furniture and belongings move back in." },
      { q: "Can you remove paint splatter and stickers?", a: "Light residue is included; heavier paint splatter or sticker removal is available as an add-on." },
      { q: "Do you haul away construction debris?", a: "We focus on fine dust and surface cleaning. Larger debris haul-away is available as an add-on — just ask when you request your quote." },
      { q: "Is it safe to clean right after construction?", a: "Yes, as long as any hazardous materials have already been handled by your contractor. Let us know the project scope so we can plan accordingly." },
    ],
  },
};
