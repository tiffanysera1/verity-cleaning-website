import Hero from "@/components/Hero";
import StatBand from "@/components/StatBand";
import WhyUs from "@/components/WhyUs";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import QuoteSection from "@/components/QuoteSection";
import Services from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
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
      <WhyUs />
      <BeforeAfterSlider />
      <QuoteSection />
      <Services />
      <ProcessSection />
      <ServiceArea />
      <FAQ />
      <FinalCTA />
      <JsonLd />
    </main>
  );
}
