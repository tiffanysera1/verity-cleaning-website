import type { Metadata } from "next";
import { AREAS, ADDITIONAL_AREAS } from "@/components/areasData";
import { QUOTE_FORM_URL } from "@/components/quoteLink";
import { ArrowRight, Sparkle, Pin } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Service Areas | Verity Cleaning, Shelby & Jefferson County AL",
  description:
    "Verity Cleaning serves Pelham, Hoover, Vestavia Hills, Homewood, Mountain Brook, Helena, and Alabaster. Licensed, bonded, insured. Call or text (205) 946-0304.",
  alternates: { canonical: "/areas/" },
  openGraph: {
    title: "Service Areas | Verity Cleaning",
    description:
      "House cleaning across Shelby County and Birmingham's over-the-mountain suburbs.",
    url: "/areas/",
    images: [{ url: "/clean-home.png", alt: "A tidy, sunlit home cleaned by Verity Cleaning" }],
  },
};

export default function AreasPage() {
  return (
    <main id="main">
      <section className="section">
        <div className="wrap">
          <div className="center section-head">
            <h1 className="section-title">
              Where We Clean
              <Sparkle aria-hidden="true" />
            </h1>
            <p className="lead">
              Verity Cleaning is based in Pelham and serves Shelby County plus
              Birmingham&rsquo;s over-the-mountain suburbs. Pick your town to see what
              we do there.
            </p>
          </div>

          <div className="areas-grid">
            {AREAS.map((area) => (
              <a className="area-card" key={area.slug} href={`/areas/${area.slug}/`}>
                <p className="area-card-county">
                  <Pin aria-hidden="true" />
                  {area.county}
                </p>
                <h2>{area.name}</h2>
                <p className="area-card-tagline">{area.tagline}</p>
                <p className="area-card-drive">{area.driveTime}</p>
                <span className="review-more">
                  Cleaning in {area.name} <ArrowRight />
                </span>
              </a>
            ))}
          </div>

          <div className="areas-more">
            <p>
              <strong>We also serve</strong> {ADDITIONAL_AREAS.join(", ")}, and the
              surrounding communities. Not sure if you&rsquo;re in range?{" "}
              <a href="tel:+12059460304">Call or text (205) 946-0304</a>
              {" "}and we&rsquo;ll tell you straight away.
            </p>
            <a
              className="btn btn--primary btn--lg"
              href={QUOTE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get My Free Quote
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
