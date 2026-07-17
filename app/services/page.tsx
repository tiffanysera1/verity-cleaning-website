import type { Metadata } from "next";
import ServicesHero from "@/components/services-index/ServicesHero";
import ServicesCompare from "@/components/services-index/ServicesCompare";
import ServicesDecision from "@/components/services-index/ServicesDecision";
import ServicesAddOns from "@/components/services-index/ServicesAddOns";
import EveryCleaningIncludes from "@/components/services-index/EveryCleaningIncludes";
import ServicesCTA from "@/components/services-index/ServicesCTA";

export const metadata: Metadata = {
  title: "All Cleaning Services | Verity Cleaning",
  description:
    "Compare Verity Cleaning's residential and commercial services — recurring cleaning, deep cleaning, move-in/move-out, commercial cleaning, and post-construction — plus optional add-ons. Serving Shelby County, AL.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "All Cleaning Services | Verity Cleaning",
    description: "Compare Verity Cleaning's services and find the right fit for your home in seconds.",
    url: "/services/",
  },
};

export default function ServicesIndexPage() {
  return (
    <main id="main">
      <ServicesHero />
      <ServicesCompare />
      <ServicesDecision />
      <ServicesAddOns />
      <EveryCleaningIncludes />
      <ServicesCTA />
    </main>
  );
}
