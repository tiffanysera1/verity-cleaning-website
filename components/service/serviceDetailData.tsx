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
  /* Optional line under the checklist, for services whose displayed list is a
     grouped summary of a longer internal checklist. */
  scopeNote?: string;
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

/* The eight extras Verity actually sells. Each service picks from these,
   dropping any whose work its own checklist already covers — a Moving Clean
   must never offer "Clean Inside Fridge" as a paid extra, for instance. */
const A_OVEN = { title: "Inside Oven", description: "Baked-on grease and buildup removed from the oven interior." };
const A_PET = { title: "Extra Pet Hair Shed", description: "Targeted removal where shedding is heavier than a normal vacuum pass handles." };
const A_BLINDS = { title: "Detailed Wet-Wipe of Blinds", description: "Every base clean already dusts blinds. This is the slower wet-wipe, for grime dusting will not lift." };
const A_FRIDGE = { title: "Clean Inside Fridge", description: "Shelves, drawers and compartments cleaned out." };
const A_DISHWASHER = { title: "Inside Dishwasher", description: "The inside of the dishwasher cleaned." };
const A_LAUNDRY = { title: "Wash & Fold Laundry", description: "A load washed, dried and folded while we work." };
const A_DISHES = { title: "Sink of Dishes", description: "A sink of dishes hand-washed or loaded into the dishwasher." };
const A_WINDOWS = { title: "Interior Windows", description: "Interior-facing windowpanes cleaned throughout the home." };

/* Standard covers none of the eight, so all of them are genuinely optional. */
const STANDARD_ADD_ONS: AddOn[] = [A_OVEN, A_FRIDGE, A_WINDOWS, A_BLINDS, A_DISHWASHER, A_LAUNDRY, A_DISHES, A_PET];

/* Deep already cleans interior windowpanes. */
const DEEP_ADD_ONS: AddOn[] = [A_OVEN, A_FRIDGE, A_BLINDS, A_DISHWASHER, A_LAUNDRY, A_DISHES, A_PET];

/* Moving already covers interior windowpanes, the fridge/freezer and the oven. */
const MOVE_ADD_ONS: AddOn[] = [A_BLINDS, A_DISHWASHER, A_LAUNDRY, A_DISHES, A_PET];

/* PLACEHOLDER — Verity has no blog yet. Sample links for layout purposes;
   point these at real posts once the blog exists. */
function blogLinksFor(compareTopic: string, timeTopic: string): BlogLink[] {
  return [
    { title: `${compareTopic} vs. Standard Cleaning: Which Do You Need?`, image: "/service-deep-cleaning.webp" },
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
  "standard-cleaning": {
    tagline: "Keep it clean, so it never has to be reset.",
    description:
      "Routine maintenance for a home that is already in generally maintained condition, and the service behind every recurring visit. Booked one-off or on a weekly, biweekly or every-four-weeks schedule, it covers the everyday cleaning your home needs without the intensive detail work of a deep clean, so your home never reaches the stage where it needs a full reset. The more often we come, the less each visit costs: 5% off monthly, 10% off biweekly, and 20% off weekly.",
    scopeNote: "Exact scope follows Verity's Standard Clean checklist.",
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
          "Linens changed & beds made (when clean linens are out)",
          "Trash under beds checked and bagged (where accessible)",
          "Mirrors & glass items cleaned",
          "Ceiling fans & light fixtures dusted (within reach)",
          "Shelves, ledges, desks & accessible surfaces dusted",
          "Light switches dusted and wiped",
          "Windowsills & blinds dusted and wiped",
          "Door frames dusted (within reach)",
          "TVs, monitors & electronics dusted",
          "Wall art and around knickknacks feather-dusted (within reach)",
          "Trash removed, liners replaced (when liners are available)",
          "Ceiling cobwebs removed (within reach)",
          "Living-room items set and staged neatly",
          "Hard and tile flooring swept & mopped",
          "Inside accessible furniture vacuumed",
          "Carpet vacuumed, including around furniture",
        ],
      },
      {
        key: "bathrooms",
        label: "Bathrooms",
        icon: "spray",
        items: [
          "Ceiling cobwebs removed (within reach)",
          "Reachable vents dusted",
          "Ceiling fans & light fixtures dusted (within reach)",
          "Windowsills & blinds dusted and wiped",
          "Shelves, ledges & accessible surfaces dusted",
          "Wall art and around knickknacks feather-dusted (within reach)",
          "Light switches dusted and wiped",
          "Door frames dusted (within reach)",
          "Shower and/or tub cleaned",
          "Sinks & faucets wiped, cleaned and dried",
          "Toilet cleaned inside, outside and around",
          "Reachable walls spot-checked and cleaned",
          "Mirrors & glass items wiped",
          "Countertops & ledges cleaned and sanitized",
          "Cabinet & drawer exteriors cleaned",
          "Trash removed, liners replaced (when liners are available)",
          "Flooring swept & mopped",
        ],
      },
      {
        key: "kitchen",
        label: "Kitchen",
        icon: "home",
        items: [
          "Ceiling cobwebs removed (within reach)",
          "Reachable vents dusted",
          "Ceiling fans & light fixtures dusted (within reach)",
          "Shelves, ledges & accessible surfaces dusted",
          "Wall art and around knickknacks feather-dusted (within reach)",
          "Light switches dusted and wiped",
          "Door frames dusted (within reach)",
          "Inside the microwave cleaned",
          "Stovetop cleaned",
          "Refrigerator, stove, microwave & dishwasher exteriors cleaned",
          "Cabinet & drawer fronts cleaned",
          "Reasonable countertop items moved and surfaces cleaned underneath",
          "Countertops & ledges cleaned and sanitized",
          "Sinks & faucets wiped, cleaned and dried",
          "Mirrors & glass wiped where applicable",
          "Trash removed, liners replaced (when liners are available)",
          "Flooring swept & mopped",
        ],
      },
      {
        key: "extra",
        label: "Extra Rooms",
        icon: "bucket",
        items: [
          "Washer & dryer exteriors dusted and wiped",
          "Trash picked up and bagged",
        ],
      },
    ],
    notIncluded: {
      left: ["Hand-detailed baseboards", "Interior windowpanes (add-on)", "Tile & grout detailing", "Kitchen hood vent detailing", "Inside cabinets & drawers"],
      right: ["Inside refrigerator (add-on)", "Inside oven (add-on)", "Inside dishwasher (add-on)", "Full wall washing", "Heavy buildup restoration"],
    },
    addOns: STANDARD_ADD_ONS,
    tips: tipsFor("/service-deep-cleaning.webp"),
    blogLinks: blogLinksFor("Deep Cleaning", "a Deep Clean"),
    faq: [
      { q: "How often should I book a standard clean?", a: "Most households put it on a weekly or biweekly schedule. We'll help you pick a frequency that fits your home and routine when you request your quote, and you can also book a standard clean as a one-off." },
      { q: "Do I save money by cleaning more often?", a: "Yes. Standard cleans booked on a recurring schedule are discounted off the one-time rate — 5% off for monthly, 10% off for biweekly, and 20% off for weekly. The discount is applied to every visit for as long as you stay on the schedule, and it's already reflected in your quote." },
      { q: "Does a standard clean include baseboards or interior windows?", a: "Not as standard. Hand-detailed baseboards, interior windowpanes and tile-and-grout detailing belong to our deep clean, and interior windows can also be added to any visit. A standard clean does dust reachable windowsills, blinds, door frames and ceiling fans." },
      { q: "Can I skip or reschedule a visit?", a: "Yes — just let us know as far ahead as you can by call or text, and we'll find a new time that works." },
      { q: "Do I need to be home during the cleaning?", a: "No. Many customers provide entry instructions and go about their day. We'll keep you updated along the way if you opt in." },
      { q: "What if I'm not happy with a visit?", a: "Let us know within 24 hours and we'll make it right — that's part of our satisfaction guarantee." },
    ],
  },
  "deep-cleaning": {
    tagline: "A detailed reset for homes that need a little extra attention.",
    description:
      "A detailed full-home reset with extra attention to buildup and the detail areas routine cleaning does not reach — hand-detailed baseboards, interior windowpanes, tile and grout, hood vents, blinds and windowsills, doors and frames, and fixtures. Right for a first clean, a seasonal refresh, or a home that has not been done properly in a while.",
    includedTabs: [
      {
        key: "living",
        label: "Living, Bedrooms & Hallways",
        icon: "sparkles",
        items: [
          "Ceiling cobwebs removed (within reach)",
          "Ceiling fans & light fixtures dusted (within reach)",
          "Windowsills & blinds dusted and wiped",
          "Shelves, ledges, desks & accessible surfaces dusted",
          "Wall art and around knickknacks feather-dusted (within reach)",
          "TVs, monitors & electronics dusted",
          "Light switches dusted and wiped",
          "Door frames dusted (within reach)",
          "Mirrors & glass items cleaned",
          "Trash under beds checked and bagged (where accessible)",
          "Linens changed & beds made (when clean linens are out)",
          "Trash removed, liners replaced (when liners are available)",
          "Hard and tile flooring swept & mopped",
          "Carpet vacuumed, including around furniture",
          "Living-room items set and staged neatly",
          "Interior windowpanes cleaned",
          "Exposed baseboards hand-detailed",
        ],
      },
      {
        key: "bathrooms",
        label: "Bathrooms",
        icon: "spray",
        items: [
          "Ceiling cobwebs removed (within reach)",
          "Reachable vents dusted",
          "Ceiling fans & light fixtures dusted (within reach)",
          "Windowsills & blinds dusted and wiped",
          "Shelves, ledges & accessible surfaces dusted",
          "Wall art and around knickknacks feather-dusted (within reach)",
          "Light switches dusted and wiped",
          "Door frames dusted (within reach)",
          "Shower and/or tub cleaned",
          "Sinks & faucets wiped, cleaned and dried",
          "Toilet cleaned inside, outside and around",
          "Reachable walls spot-checked and cleaned",
          "Mirrors & glass items wiped",
          "Countertops & ledges cleaned and sanitized",
          "Cabinet & drawer exteriors cleaned",
          "Trash removed, liners replaced (when liners are available)",
          "Flooring swept & mopped",
          "Interior windowpanes cleaned",
          "Tile & grout detail-cleaned",
          "Baseboards hand-detailed",
        ],
      },
      {
        key: "kitchen",
        label: "Kitchen",
        icon: "home",
        items: [
          "Ceiling cobwebs removed (within reach)",
          "Reachable vents dusted",
          "Ceiling fans & light fixtures dusted (within reach)",
          "Shelves, ledges & accessible surfaces dusted",
          "Wall art and around knickknacks feather-dusted (within reach)",
          "Light switches dusted and wiped",
          "Door frames dusted (within reach)",
          "Inside the microwave cleaned",
          "Stovetop cleaned",
          "Refrigerator, stove, microwave & dishwasher exteriors cleaned",
          "Cabinet & drawer fronts cleaned",
          "Reasonable countertop items moved and surfaces cleaned underneath",
          "Countertops & ledges cleaned and sanitized",
          "Sinks & faucets wiped, cleaned and dried",
          "Mirrors & glass wiped where applicable",
          "Trash removed, liners replaced (when liners are available)",
          "Flooring swept & mopped",
          "Windowsills & blinds dusted and wiped",
          "Interior windowpanes cleaned",
          "Hood vents cleaned",
          "Exposed baseboards hand-detailed",
          "Reachable walls spot-checked and cleaned",
        ],
      },
      {
        key: "extra",
        label: "Extra Rooms",
        icon: "bucket",
        items: [
          "Washer & dryer exteriors dusted and wiped",
          "Trash picked up and bagged",
          "Cobwebs removed",
          "Interior-facing glass doors & windows cleaned",
          "Flooring swept",
          "Tile flooring mopped",
          "Carpet vacuumed, including around furniture",
        ],
      },
    ],
    notIncluded: {
      left: ["Inside cabinets & drawers", "Inside refrigerator (add-on)", "Inside oven (add-on)", "Exterior windows"],
      right: ["Full wall washing", "Wash & fold laundry (add-on)", "Moving heavy furniture", "Hazardous materials"],
    },
    addOns: DEEP_ADD_ONS,
    tips: tipsFor("/service-deep-cleaning.webp"),
    blogLinks: blogLinksFor("Deep Cleaning", "a Deep Clean"),
    faq: [
      { q: "How is a deep clean different from a standard clean?", a: "A deep clean covers everything in a standard visit and adds the detail work: baseboards hand-detailed throughout, interior windowpanes, tile and grout detail-cleaned in bathrooms, kitchen hood vents, reachable walls spot-cleaned, and floors in extra rooms like the laundry room, basement or garage." },
      { q: "Does a deep clean include the inside of my oven or refrigerator?", a: "No — those are separate add-ons you can select for any service. A deep clean does include the inside of the microwave, along with stovetop, hood vents and all appliance exteriors. Only our move-in/move-out clean covers appliance interiors as standard." },
      { q: "Should my first cleaning be a deep clean?", a: "We recommend it. Starting with a deep clean gives every future recurring visit a consistent baseline to maintain." },
      { q: "How long does a deep clean take?", a: "It depends on your home's size and condition — we'll give you a time estimate along with your personalized quote." },
      { q: "Do I need to be home?", a: "No, as long as we have entry instructions. Many customers schedule their deep clean while they're out." },
    ],
  },
  "move-in-move-out": {
    tagline: "A detailed clean to help you settle in or hand off your old place.",
    description:
      "A detailed turnover clean for an empty or substantially empty home — including inside cabinets and drawers, empty closets, interior windowpanes, the appliance interiors listed below, hand-detailed baseboards and tile and grout. Right for closing out a lease, prepping a home for new owners, or settling into a place that needs a reset first.",
    includedTabs: [
      {
        key: "living",
        label: "Living, Bedrooms & Hallways",
        icon: "sparkles",
        items: [
          "Ceiling cobwebs removed (within reach)",
          "Ceiling fans & light fixtures dusted (within reach)",
          "Windowsills & blinds dusted and wiped",
          "Interior windowpanes cleaned",
          "Shelves, ledges, desks & accessible surfaces dusted",
          "Light switches dusted and wiped",
          "Door frames dusted (within reach)",
          "Mirrors & glass items cleaned",
          "Exposed baseboards hand-detailed",
          "Hard and tile flooring swept & mopped",
          "Carpet vacuumed, including around furniture",
          "Inside empty closets vacuumed",
        ],
      },
      {
        key: "bathrooms",
        label: "Bathrooms",
        icon: "spray",
        items: [
          "Ceiling cobwebs removed (within reach)",
          "Reachable vents dusted",
          "Ceiling fans & light fixtures dusted (within reach)",
          "Windowsills & blinds dusted and wiped",
          "Shelves, ledges & accessible surfaces dusted",
          "Wall art and around knickknacks feather-dusted (within reach)",
          "Light switches dusted and wiped",
          "Door frames dusted (within reach)",
          "Shower and/or tub cleaned",
          "Sinks & faucets wiped, cleaned and dried",
          "Toilet cleaned inside, outside and around",
          "Reachable walls spot-checked and cleaned",
          "Mirrors & glass items wiped",
          "Countertops & ledges cleaned and sanitized",
          "Cabinet & drawer exteriors cleaned",
          "Trash removed, liners replaced (when liners are available)",
          "Flooring swept & mopped",
          "Interior windowpanes cleaned",
          "Tile & grout detail-cleaned",
          "Baseboards hand-detailed",
          "Inside empty cabinets & drawers cleaned",
        ],
      },
      {
        key: "kitchen",
        label: "Kitchen",
        icon: "home",
        items: [
          "Ceiling cobwebs removed (within reach)",
          "Reachable vents dusted",
          "Ceiling fans & light fixtures dusted (within reach)",
          "Windowsills & blinds dusted and wiped",
          "Interior windowpanes cleaned",
          "Shelves, ledges & accessible surfaces dusted",
          "Light switches dusted and wiped",
          "Door frames dusted (within reach)",
          "Inside the microwave cleaned",
          "Inside the refrigerator & freezer cleaned",
          "Inside the stove & oven cleaned",
          "Stovetop cleaned",
          "Hood vents cleaned",
          "Refrigerator, stove, microwave & dishwasher exteriors cleaned",
          "Inside empty cabinets & drawers cleaned",
          "Cabinet & drawer fronts cleaned",
          "Countertops & ledges cleaned and sanitized",
          "Sinks & faucets wiped, cleaned and dried",
          "Mirrors & glass wiped where applicable",
          "Exposed baseboards hand-detailed",
          "Reachable walls spot-checked and cleaned",
          "Flooring swept & mopped",
        ],
      },
      {
        key: "extra",
        label: "Extra Rooms",
        icon: "bucket",
        items: [
          "Cobwebs removed",
          "Washer & dryer exteriors dusted and wiped",
          "Interior-facing glass doors & windows cleaned",
          "Trash picked up and bagged",
          "Flooring swept",
          "Tile flooring mopped",
          "Carpet vacuumed, including around furniture",
        ],
      },
    ],
    notIncluded: {
      left: ["Exterior windows", "Full wall washing", "Moving heavy furniture", "Yard work"],
      right: ["Trash haul-away beyond normal scope", "Wash & fold laundry (add-on)", "Sink of dishes (add-on)", "Hazardous materials"],
    },
    addOns: MOVE_ADD_ONS,
    tips: tipsFor("/service-move.webp"),
    blogLinks: blogLinksFor("Move-Out Cleaning", "a Move-Out Clean"),
    faq: [
      { q: "When should I schedule a move-out cleaning?", a: "Ideally after your belongings are out, so we can access every surface — and before your final walkthrough or new tenants arrive." },
      { q: "Do I need to add on the oven, refrigerator or interior windows?", a: "No. A move-in/move-out clean already includes the inside of the refrigerator and freezer, the inside of the stove and oven, the inside of empty cabinets and drawers, and interior windowpanes. You are never charged extra for work this checklist already covers." },
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
