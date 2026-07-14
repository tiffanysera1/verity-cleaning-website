import Hero from "@/components/Hero";
import OperationalStrip from "@/components/OperationalStrip";
import ProcessSection from "@/components/ProcessSection";
import QuoteSection from "@/components/QuoteSection";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import StatBand from "@/components/StatBand";
import FollowUs from "@/components/FollowUs";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <main id="main">
      <span id="top" />
      <Hero />
      <OperationalStrip />
      <ProcessSection />
      <QuoteSection />
      <Services />
      <WhyUs />
      <BeforeAfterSlider />
      <FollowUs />
      <ServiceArea />
      <FAQ />
      <FinalCTA />
      <StatBand />
      <JsonLd />
    </main>
  );
}
