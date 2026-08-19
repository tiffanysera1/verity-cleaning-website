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

export type ServiceDetail = {
  tagline: string;
  description: string;
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
    { title: `${compareTopic} vs. Recurring Cleaning: Which Do You Need?`, image: "/service-deep-cleaning.jpg" },
    { title: `5 Signs It's Time for ${timeTopic}`, image: "/service-move.jpg" },
    { title: "Why Soap Scum Keeps Coming Back", image: "/service-construction.jpg" },
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
      image: "/clean-home.png",
    },
    {
      title: "The truth about 'spring cleaning.'",
      body: "A seasonal deep clean isn't just tradition — it catches the buildup that regular tidying doesn't reach.",
      image: "/service-deep-cleaning.jpg",
    },
  ];
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "recurring-cleaning": {
    tagline: "Keep it clean, so it never has to be reset.",
    description:
      "A standing visit on your schedule — weekly, biweekly or monthly. The point is maintenance: your home stays at a level you are happy with, so it never reaches the stage where it needs a full reset. Most households settle into a rhythm and stop thinking about cleaning altogether.",
    includedTabs: [
      { key: "kitchen", label: "Kitchen", icon: "home", items: ["Counters & backsplash wiped down", "Sink & fixtures", "Stovetop", "Appliance exteriors", "Floors", "Trash removal"] },
      { key: "bathrooms", label: "Bathrooms", icon: "spray", items: ["Toilets", "Showers & tubs", "Sink & fixtures", "Mirrors", "Floors", "Trash removal"] },
      { key: "living", label: "Living Areas", icon: "sparkles", items: ["Dusting", "Vacuum & mop floors", "General tidying", "Trash removal", "Light switches"] },
      { key: "bedrooms", label: "Bedrooms", icon: "home-sparkle", items: ["Dusting", "Vacuum floors", "General tidying", "Bed-making (on request)"] },
      { key: "throughout", label: "Throughout Home", icon: "check", items: ["General tidying", "Trash removal", "Light switches & doorknobs", "Mirrors & glass"] },
    ],
    notIncluded: {
      left: ["Inside oven (add-on)", "Inside refrigerator (add-on)", "Interior windows (add-on)", "Laundry (add-on)"],
      right: ["Dishes (add-on)", "Exterior cleaning", "Moving heavy furniture", "Hazardous materials"],
    },
    addOns: COMMON_ADD_ONS,
    tips: tipsFor("/service-deep-cleaning.jpg"),
    blogLinks: blogLinksFor("Deep Cleaning", "a Deep Clean"),
    faq: [
      { q: "How often should I schedule recurring cleaning?", a: "Most households choose weekly or biweekly visits. We'll help you pick a frequency that fits your home and routine when you request your quote." },
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
      { key: "kitchen", label: "Kitchen", icon: "home", items: ["Countertops & backsplash", "Sink & fixtures", "Appliance exteriors", "Stovetop", "Cabinet fronts", "Inside microwave", "Floors"] },
      { key: "bathrooms", label: "Bathrooms", icon: "spray", items: ["Toilets & bases", "Showers & tubs", "Sink & fixtures", "Mirrors", "Cabinet fronts", "Floors", "Baseboards"] },
      { key: "living", label: "Living Areas", icon: "sparkles", items: ["Dust all accessible surfaces", "Vacuum & mop floors", "Baseboards & trim", "Window sills", "Light switches", "Cobwebs"] },
      { key: "bedrooms", label: "Bedrooms", icon: "home-sparkle", items: ["Dust all accessible surfaces", "Vacuum floors", "Baseboards", "Window sills", "Bed-making (on request)", "Light switches"] },
      { key: "throughout", label: "Throughout Home", icon: "check", items: ["Dust all accessible surfaces", "Remove fingerprints & smudges", "Clean switches & outlets", "Baseboards & trim", "Window sills", "Doors & frames wiped down"] },
    ],
    notIncluded: {
      left: ["Inside oven (add-on)", "Inside refrigerator (add-on)", "Interior windows (add-on)", "Laundry (add-on)"],
      right: ["Dishes (add-on)", "Exterior cleaning", "Moving heavy furniture", "Hazardous materials"],
    },
    addOns: COMMON_ADD_ONS,
    tips: tipsFor("/service-deep-cleaning.jpg"),
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
      { key: "kitchen", label: "Kitchen", icon: "home", items: ["Inside & outside cabinets", "Counters & backsplash", "Sink & fixtures", "Stovetop", "Inside refrigerator", "Appliance exteriors", "Floors"] },
      { key: "bathrooms", label: "Bathrooms", icon: "spray", items: ["Toilets", "Showers & tubs", "Sink & fixtures", "Mirrors", "Cabinets & drawers", "Floors"] },
      { key: "bedrooms", label: "Bedrooms & Closets", icon: "home-sparkle", items: ["Inside closets & shelving", "Baseboards", "Window sills", "Floors", "Light switches"] },
      { key: "living", label: "Living Areas", icon: "sparkles", items: ["Baseboards & trim", "Window sills", "Floors", "Light switches", "Cobwebs"] },
      { key: "garage", label: "Garage & Storage", icon: "bucket", items: ["Sweep floors", "Cobwebs", "Light fixtures", "Shelving wiped down"] },
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
    tips: tipsFor("/service-move.jpg"),
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
      { title: "Why a clean office boosts employee morale.", body: "A tidy, well-maintained workspace signals that a business cares about its people — and it shows in day-to-day focus.", image: "/service-commercial.jpg" },
      { title: "How often should a small office be cleaned?", body: "Most small offices do well with 2-3 visits a week, with daily touch-ups in high-traffic areas like restrooms and break rooms.", image: "/service-deep-cleaning.jpg" },
      { title: "The first thing customers notice when they walk in.", body: "Entryways and glass doors set the tone before a customer says a word — keeping them spotless is one of the highest-impact details.", image: "/clean-home.png" },
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
      { title: "Why construction dust settles for weeks after the crew leaves.", body: "Fine dust from drywall and sanding can stay airborne and resettle for days — which is why a proper post-construction clean covers every surface, not just the visible ones.", image: "/service-construction.jpg" },
      { title: "The difference between a rough clean and a final clean.", body: "A rough clean clears the worst of the debris so trades can keep working. A final clean is the move-in-ready pass — the one Verity specializes in.", image: "/service-deep-cleaning.jpg" },
      { title: "When to schedule your post-construction clean.", body: "Book it for right after the last trade finishes, before furniture and belongings move back in.", image: "/clean-home.png" },
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
