import type { Metadata } from "next";
import { Sparkle, Shield, Star, Camera, Clock, CheckCircle } from "@/components/Icons";
import { SURVEY_EMBED_URL, SURVEY_EMBED_SCRIPT } from "@/components/quoteLink";
import { GOOGLE_REVIEWS_URL, GOOGLE_RATING } from "@/components/googleBusiness";
import CallLine from "@/components/CallLine";

const PATH = "/quote/";
const BASE = "https://www.veritycleaning.co";

const TITLE = "Get a Free Cleaning Quote | Verity Cleaning";
const DESCRIPTION =
  "Get a personalized cleaning quote for your Pelham or Birmingham home. No in-home estimate needed — answer a few questions and we'll send your price. Call (205) 946-0304.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: "Get a Free Cleaning Quote | Verity Cleaning",
    description: "A few questions about your home and we'll send a personalized quote. No in-home visit needed.",
    url: PATH,
    images: [{ url: "/og-image.jpg", alt: "A tidy, sunlit home cleaned by Verity Cleaning" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

function JsonLd() {
  const graph = [
    {
      "@type": "WebPage",
      "@id": `${BASE}${PATH}#page`,
      name: TITLE,
      description: DESCRIPTION,
      url: `${BASE}${PATH}`,
      isPartOf: { "@id": `${BASE}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE}${PATH}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Get a Quote", item: `${BASE}${PATH}` },
      ],
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

const STEPS = [
  {
    icon: CheckCircle,
    title: "Tell us about the home",
    body: "Size, bedrooms and bathrooms, the service you want, and how the place is actually looking. Takes a couple of minutes.",
  },
  {
    icon: Camera,
    title: "Send photos if you like",
    body: "Photos help us price accurately, especially if there are areas needing extra attention. Optional, but they help.",
  },
  {
    icon: Clock,
    title: "We send your price",
    body: "A personalized quote based on what you told us. Nobody needs to walk through your house first.",
  },
];

export default function QuotePage() {
  return (
    <main id="main">
      <JsonLd />

      <section className="section quote-hero">
        <div className="wrap">
          <div className="center section-head">
            <h1>Get Your Free Quote</h1>
            <p className="lead">
              Answer a few questions about your home and we&rsquo;ll send a personalized
              price. No in-home estimate, no visit to schedule, no obligation.
            </p>
          </div>

          <div className="quote-meta">
            <span className="payment-note">
              <Shield aria-hidden="true" />
              <span><strong>No payment today.</strong> Pay after your service.</span>
            </span>
            <a
              className="hero-rating"
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hero-rating-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </span>
              <span className="hero-rating-text">
                <strong>{GOOGLE_RATING}</strong> on Google
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* The survey itself. GHL's form_embed.js sizes the iframe by postMessage,
          which is why it carries scrolling="no" and why the script has to be a
          plain server-rendered tag rather than next/script — it must be in the
          static HTML to run on load. */}
      <section className="section quote-embed-section">
        <div className="wrap">
          <div className="quote-embed">
            <iframe
              src={SURVEY_EMBED_URL}
              id="J7e942vcUtuGMIlHPv2t"
              title="Request a cleaning quote"
              scrolling="no"
              style={{ border: "none", width: "100%" }}
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
            />
          </div>
          <script src={SURVEY_EMBED_SCRIPT} />

          <p className="quote-fallback">
            Trouble with the form? <CallLine />
          </p>
        </div>
      </section>

      <section className="section tone-sky">
        <div className="wrap">
          <div className="center section-head">
            <h2 className="section-title">
              How it works
              <Sparkle aria-hidden="true" />
            </h2>
          </div>
          <div className="quote-steps">
            {STEPS.map(({ icon: Icon, title, body }) => (
              <div className="quote-step reveal" key={title}>
                <span className="always-tile-ic" aria-hidden="true"><Icon /></span>
                <b>{title}</b>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <p className="quote-note">
            Every quote covers the same checklist we clean to, and the price is the same
            across our whole service area &mdash; there is no trip charge and no zone
            pricing. Book a standard clean on a schedule and it costs less every visit:
            5% off monthly, 10% off biweekly, 20% off weekly.
          </p>
        </div>
      </section>
    </main>
  );
}
