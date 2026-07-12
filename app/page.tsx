import Hero from "@/components/Hero";
import StatBand from "@/components/StatBand";
import ProcessSection from "@/components/ProcessSection";
import WhyUs from "@/components/WhyUs";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import QuoteSection from "@/components/QuoteSection";
import Services from "@/components/Services";
import FollowUs from "@/components/FollowUs";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <main id="main">
      <span id="top" />
      <Hero />
      <StatBand />
      <ProcessSection />
      <WhyUs />
      <BeforeAfterSlider />
      <QuoteSection />
      <Services />
      <FollowUs />
      <ServiceArea />
      <FAQ />
      <FinalCTA />
      <JsonLd />
    </main>
  );
}
