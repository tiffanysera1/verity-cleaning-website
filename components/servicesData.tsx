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
    photo: "/service-deep-cleaning.jpg",
    title: "Recurring Cleaning",
    summary: "Weekly, biweekly, or monthly visits built around your household's routine.",
    goodFor:
      "Busy households who want a consistently clean home without carving out their own weekend to do it.",
    whatsIncluded: [
      "Dusting and vacuuming or mopping every floor",
      "Kitchen wipe-down — counters, sink, stovetop, and appliance exteriors",
      "Bathrooms — toilets, sinks, showers, tubs, and mirrors",
      "Trash removal and general tidying",
      "Bed-making, on request",
    ],
  },
  {
    slug: "deep-cleaning",
    Icon: Sparkles,
    photo: "/service-deep-cleaning.jpg",
    title: "Deep Cleaning",
    summary: "A thorough, top-to-bottom clean that covers baseboards, vents, and every hard-to-reach corner.",
    goodFor:
      "A first-time clean, a seasonal reset, or getting your home ready before switching to a regular schedule.",
    whatsIncluded: [
      "Everything in a recurring clean, plus:",
      "Baseboards, window sills, and door frames",
      "Vents and light switches",
      "Interior of the microwave",
      "Detailed appliance exteriors",
    ],
  },
  {
    slug: "move-in-move-out",
    Icon: Clock,
    photo: "/service-move.jpg",
    title: "Move-In / Move-Out Cleaning",
    summary: "A detailed clean to help you settle into a new place or hand off your old one.",
    goodFor:
      "Closing out a lease, prepping a home for new owners, or settling into a new place that needs a reset first.",
    whatsIncluded: [
      "Full-home detailed clean of an empty or nearly-empty space",
      "Inside cabinets, drawers, and closets",
      "Inside the oven and refrigerator, if present",
      "Baseboards and floors throughout",
      "Kitchen and bathroom deep clean",
    ],
  },
  {
    slug: "commercial-office-cleaning",
    Icon: Building,
    photo: "/service-commercial.jpg",
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
    photo: "/service-construction.jpg",
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
    photo: "/service-deep-cleaning.jpg",
    title: "Recurring Cleaning",
    summary: "Keep your home consistently clean.",
    href: "/services/recurring-cleaning/",
  },
  {
    key: "deep-cleaning",
    Icon: Sparkles,
    photo: "/clean-home.png",
    title: "Deep Cleaning",
    summary: "A detailed reset for homes that need extra attention.",
    href: "/services/deep-cleaning/",
  },
  {
    key: "move-in-move-out",
    Icon: Clock,
    photo: "/service-move.jpg",
    title: "Move-In / Move-Out",
    summary: "Perfect for new beginnings or transitions.",
    href: "/services/move-in-move-out/",
  },
  {
    key: "post-construction-cleaning",
    Icon: SprayBottle,
    photo: "/service-construction.jpg",
    title: "Post-Construction Cleaning",
    summary: "Dust, debris & detail before move-in.",
    href: "/services/post-construction-cleaning/",
  },
  {
    key: "commercial-office-cleaning",
    Icon: Building,
    photo: "/service-commercial.jpg",
    title: "Commercial Cleaning",
    summary: "Clean, welcoming workspaces for offices and local businesses.",
    href: "/services/commercial-office-cleaning/",
  },
];
