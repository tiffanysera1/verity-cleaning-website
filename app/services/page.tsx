import type { Metadata } from "next";
import ServicesHero from "@/components/services-index/ServicesHero";
import ServicesCompare from "@/components/services-index/ServicesCompare";
import ServicesDecision from "@/components/services-index/ServicesDecision";
import ServicesAddOns from "@/components/services-index/ServicesAddOns";
import EveryCleaningIncludes from "@/components/services-index/EveryCleaningIncludes";
import ServicesCTA from "@/components/services-index/ServicesCTA";
import HubJsonLd from "@/components/HubJsonLd";
import { SERVICES } from "@/components/servicesData";

export const metadata: Metadata = {
  title: "Cleaning Services in Shelby County, AL | Verity Cleaning",
  description:
    "Compare recurring, deep, move-in/move-out, commercial, and post-construction cleaning in Pelham & Shelby County, AL. Find the right fit in seconds.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "All Cleaning Services | Verity Cleaning",
    description: "Compare Verity Cleaning's services and find the right fit for your home in seconds.",
    url: "/services/",
    images: [{ url: "/clean-home.png", alt: "A tidy, sunlit home cleaned by Verity Cleaning" }],
  },
};

export default function ServicesIndexPage() {
  return (
    <main id="main">
      <HubJsonLd
        path="/services/"
        name="Cleaning Services in Shelby County, AL"
        description="Compare recurring, deep, move-in/move-out, commercial, and post-construction cleaning from Verity Cleaning."
        breadcrumbName="Services"
        items={SERVICES.map((s) => ({ name: s.title, url: `/services/${s.slug}/` }))}
      />
      <ServicesHero />
      <ServicesCompare />
      <ServicesDecision />
      <ServicesAddOns />
      <EveryCleaningIncludes />
      <ServicesCTA />
    </main>
  );
}
