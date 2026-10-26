import Hero from "@/components/Hero";
import OperationalStrip from "@/components/OperationalStrip";
import MeetTheOwner from "@/components/MeetTheOwner";
import ProcessSection from "@/components/ProcessSection";
import Services from "@/components/Services";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <main id="main">
      <span id="top" />
      <Hero />
      <OperationalStrip />
      {/* Directly under the #trust strip, so the "Why Verity" menu link lands
          on the badges and the owner's own words together. */}
      <MeetTheOwner />
      <ProcessSection />
      <Services />
      <BeforeAfterSlider />
      <Reviews />
      <FinalCTA />
      <JsonLd />
    </main>
  );
}
