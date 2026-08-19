import type { Metadata } from "next";
import { AREAS, ADDITIONAL_AREAS } from "@/components/areasData";
import { QUOTE_FORM_URL } from "@/components/quoteLink";
import { ArrowRight, Sparkle, Pin } from "@/components/Icons";
import HubJsonLd from "@/components/HubJsonLd";

export const metadata: Metadata = {
  title: "Cleaning Service Areas | Shelby County & Birmingham AL",
  description:
    "Verity Cleaning serves Pelham, Hoover, Vestavia Hills, Homewood, Mountain Brook, Helena, and Alabaster. Licensed, bonded, insured. Call or text (205) 946-0304.",
  alternates: { canonical: "/areas/" },
  openGraph: {
    title: "Service Areas | Verity Cleaning",
    description:
      "House cleaning across Shelby County and Birmingham's over-the-mountain suburbs.",
    url: "/areas/",
    images: [{ url: "/og-image.jpg", alt: "A tidy, sunlit home cleaned by Verity Cleaning" }],
  },
};

export default function AreasPage() {
  return (
    <main id="main">
      <HubJsonLd
        path="/areas/"
        name="Cleaning Service Areas — Shelby County & Birmingham, AL"
        description="Verity Cleaning serves Pelham, Hoover, Vestavia Hills, Homewood, Mountain Brook, Helena, and Alabaster."
        breadcrumbName="Service Areas"
        items={AREAS.map((a) => ({ name: a.name, url: `/areas/${a.slug}/` }))}
      />
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

          <div className="areas-copy">
            <h2>How our coverage works</h2>
            <p>
              Verity Cleaning is based in Pelham, and everywhere we serve is within
              roughly twenty-five minutes of home. That is a deliberate limit rather than
              a lack of ambition. A cleaner who has driven an hour to reach you is a
              cleaner watching the clock, and the quality of the work shows it. Staying
              close means we arrive on time, we can offer tighter arrival windows, and
              short-notice bookings are genuinely possible rather than theoretical.
            </p>
            <p>
              Our coverage splits into two halves. <strong>Shelby County</strong> is home
              ground &mdash; Pelham, Helena, Alabaster and the communities around them,
              where most of our recurring work sits. North of us are Birmingham&rsquo;s{" "}
              <strong>over-the-mountain suburbs</strong>: Hoover, Vestavia Hills,
              Homewood and Mountain Brook. If you are not from the area,
              &ldquo;over-the-mountain&rdquo; is simply how locals describe the
              communities on the far side of Red Mountain from downtown Birmingham. They
              are older, established neighborhoods, and the homes there tend to reward
              the kind of detail work a rushed clean skips.
            </p>
            <p>
              What we charge does not change based on how far we drive within that range.
              There is no trip charge and no zone pricing. Your quote reflects the size
              and condition of your home and the service you have asked for &mdash;
              nothing else. Every town listed above gets the same checklist, the same
              background-checked cleaners, and the same guarantee: if something is missed,
              tell us within 24 hours and we come back.
            </p>
            <p>
              <strong>We also serve</strong> {ADDITIONAL_AREAS.join(", ")}, and the
              surrounding communities, though those towns do not have their own page yet.
              If you are near the edge of the map, it is worth asking rather than
              assuming &mdash; we would rather tell you honestly whether we can reach you
              than have you guess.
            </p>
          </div>

          <div className="areas-more">
            <p>
              Not sure if you&rsquo;re in range?{" "}
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
