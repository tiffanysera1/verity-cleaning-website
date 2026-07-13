import Hero from "@/components/Hero";
import StatBand from "@/components/StatBand";
import WhyUs from "@/components/WhyUs";
import ProcessSection from "@/components/ProcessSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
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
      <Services />
      <StatBand />
      <WhyUs />
      <ProcessSection />
      <BeforeAfterSlider />
      <FollowUs />
      <ServiceArea />
      <FAQ />
      <FinalCTA />
      <JsonLd />
    </main>
  );
}
