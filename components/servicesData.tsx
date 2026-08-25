import { Home, Sparkles, Clock, Building, SprayBottle } from "./Icons";
import type { ComponentType } from "react";
import type { IconProps } from "./Icons";

export type ServiceData = {
  slug: string;
  Icon: ComponentType<IconProps>;
  photo: string;
  title: string;
  summary: string;
  goodFor: string;
  whatsIncluded: string[];
};

export const SERVICES: ServiceData[] = [
  {
    slug: "recurring-cleaning",
    Icon: Home,
    photo: "/service-deep-cleaning.webp",
    title: "Recurring Cleaning",
    summary: "Routine maintenance visits — weekly, biweekly, or every four weeks — for a home already in generally maintained condition.",
    goodFor:
      "Busy households who want a consistently clean home without carving out their own weekend to do it.",
    whatsIncluded: [
      "Living areas & bedrooms — dusting of surfaces, décor, electronics, fans and fixtures; mirrors and glass; blinds and windowsills; beds made when linens are out",
      "Bathrooms — shower or tub, toilet, sink and faucets, mirrors, sanitized counters and cabinet exteriors",
      "Kitchen — counters and sink, stovetop, inside the microwave, appliance exteriors and cabinet fronts",
      "Throughout — light switches, reachable door frames, floors vacuumed and mopped, trash removed and liners replaced",
      "Extra rooms — basic upkeep of applicable laundry and utility rooms, washer and dryer exteriors, trash pickup",
    ],
  },
  {
    slug: "deep-cleaning",
    Icon: Sparkles,
    photo: "/service-deep-cleaning.webp",
    title: "Deep Cleaning",
    summary: "A detailed full-home reset with extra attention to buildup and the detail areas routine cleaning skips.",
    goodFor:
      "A first-time clean, a seasonal reset, or getting your home ready before switching to a regular schedule.",
    whatsIncluded: [
      "Everything in a standard clean, plus:",
      "Baseboards hand-detailed throughout",
      "Interior windowpanes",
      "Tile and grout detail-cleaned in bathrooms",
      "Kitchen hood vents and reachable walls spot-cleaned",
      "Floors in the laundry room, basement and garage when part of your booking",
    ],
  },
  {
    slug: "move-in-move-out",
    Icon: Clock,
    photo: "/service-move.webp",
    title: "Move-In / Move-Out Cleaning",
    summary: "A detailed turnover clean for an empty home, covering cabinet interiors, appliance interiors and move-ready detail.",
    goodFor:
      "Closing out a lease, prepping a home for new owners, or settling into a new place that needs a reset first.",
    whatsIncluded: [
      "Inside empty kitchen and bathroom cabinets and drawers",
      "Inside the refrigerator, freezer, stove and oven",
      "Inside empty closets vacuumed",
      "Interior windowpanes, hand-detailed baseboards, and tile and grout",
      "Hood vents, appliance exteriors and reachable walls spot-cleaned",
    ],
  },
  {
    slug: "commercial-office-cleaning",
    Icon: Building,
    photo: "/service-commercial.webp",
    title: "Commercial & Office Cleaning",
    summary: "Clean, welcoming workspaces for offices, shops, and local businesses.",
    goodFor:
      "Local businesses that want a clean, professional space for employees and customers without managing it in-house.",
    whatsIncluded: [
      "Common area and floor care",
      "Restrooms and kitchen or break room",
      "Trash removal",
      "Desk and surface wipe-down",
      "Scheduled recurring visits built around your business hours",
    ],
  },
  {
    slug: "post-construction-cleaning",
    Icon: SprayBottle,
    photo: "/service-construction.webp",
    title: "Post-Construction Cleaning",
    summary: "We clear away dust, debris, and residue after a renovation or new build.",
    goodFor:
      "Homeowners and contractors finishing a renovation or new build who want the space move-in ready.",
    whatsIncluded: [
      "Fine construction dust removal from every surface",
      "Windows and sills",
      "Floor cleaning",
      "Removing residue, stickers, and labels",
      "Detailed kitchen and bathroom clean-up",
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export type HomepageServiceCard = {
  key: string;
  Icon: ComponentType<IconProps>;
  photo: string;
  title: string;
  summary: string;
  href: string;
};

/* The homepage services grid shows Verity's 5 real services — every card
   links to its actual /services/ detail page. */
export const HOMEPAGE_SERVICES: HomepageServiceCard[] = [
  {
    key: "recurring-cleaning",
    Icon: Home,
    photo: "/service-deep-cleaning.webp",
    title: "Recurring Cleaning",
    summary: "Routine upkeep for an already-maintained home.",
    href: "/services/recurring-cleaning/",
  },
  {
    key: "deep-cleaning",
    Icon: Sparkles,
    photo: "/og-image.jpg",
    title: "Deep Cleaning",
    summary: "A detailed full-home reset for buildup and detail work.",
    href: "/services/deep-cleaning/",
  },
  {
    key: "move-in-move-out",
    Icon: Clock,
    photo: "/service-move.webp",
    title: "Move-In / Move-Out",
    summary: "A turnover clean for an empty home — cabinets and appliances included.",
    href: "/services/move-in-move-out/",
  },
  {
    key: "post-construction-cleaning",
    Icon: SprayBottle,
    photo: "/service-construction.webp",
    title: "Post-Construction Cleaning",
    summary: "Dust, debris & detail before move-in.",
    href: "/services/post-construction-cleaning/",
  },
  {
    key: "commercial-office-cleaning",
    Icon: Building,
    photo: "/service-commercial.webp",
    title: "Commercial Cleaning",
    summary: "Clean, welcoming workspaces for offices and local businesses.",
    href: "/services/commercial-office-cleaning/",
  },
];
