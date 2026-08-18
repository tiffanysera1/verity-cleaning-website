import Hero from "@/components/Hero";
import OperationalStrip from "@/components/OperationalStrip";
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
      <ProcessSection />
      <Services />
      <BeforeAfterSlider />
      <Reviews />
      <FinalCTA />
      <JsonLd />
    </main>
  );
}
