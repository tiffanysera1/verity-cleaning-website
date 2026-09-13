import type { Metadata } from "next";
import Image from "next/image";
import { Sparkle, Shield, Star, Camera, Clock, CheckCircle, ArrowRight, Plus, Check } from "@/components/Icons";
import { SURVEY_EMBED_URL, SURVEY_EMBED_SCRIPT } from "@/components/quoteLink";
import { GOOGLE_REVIEWS_URL, GOOGLE_RATING } from "@/components/googleBusiness";
import CallLine from "@/components/CallLine";
import MeetTheOwner from "@/components/MeetTheOwner";
import { pickTransformations } from "@/components/transformationsData";
import { WIDGET_SRC, WIDGET_LOADER } from "@/components/Reviews";
import { SERVICE_TIERS } from "@/components/services-index/servicesIndexData";

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
      "@type": "FAQPage",
      "@id": `${BASE}${PATH}#faq`,
      mainEntity: QUOTE_FAQ.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
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

/* Quote-stage objections only. Deliberately not a rerun of the service-page
   FAQs: this page answers what stops someone finishing the form, not what a
   given clean includes. Every answer restates something already true and
   published elsewhere on the site. */
const QUOTE_FAQ = [
  {
    q: "Am I committing to anything by requesting a quote?",
    a: "No. The quote is free and there is no obligation. You are telling us about your home so we can put a real number in front of you \u2014 nothing is booked and nothing is charged until you say yes.",
  },
  {
    q: "Do you need to come to my house before quoting?",
    a: "No. That is what the questions in the form are for. Tell us the size and condition of the home and the service you want, add photos if you like, and we price it from that. No visit to schedule, and nobody in your home before you have decided.",
  },
  {
    q: "What if my home is in really bad shape?",
    a: "Then answer the condition question honestly \u2014 it helps us rather than putting us off. We would far rather know in advance than surprise a cleaner on the day, and an accurate answer is what makes the quote accurate. We have cleaned homes at every point on that scale.",
  },
  {
    q: "How do you work out the price?",
    a: "Square footage, bedrooms and bathrooms, the service you picked, and the condition of the home. That is it. There is no trip charge and no zone pricing anywhere in our service area, so where you live does not change the number.",
  },
  {
    q: "Do I pay anything now?",
    a: "No. There is no payment at the quote stage and no card needed to get a price. You pay after your service is complete.",
  },
];

/* Everyday household grime rather than the turnover set used on the property
   manager page \u2014 different reader, different worry. */
const PROOF_PHOTOS = pickTransformations([
  "toilet-stain-removal",
  "kitchen-sink-debris",
  "refrigerator-interior",
]);

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
      <section className="section quote-embed-section" id="quote-form">
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

      <section className="section">
        <div className="wrap">
          <div className="center section-head">
            <h2 className="section-title">
              Which clean do you need?
              <Sparkle aria-hidden="true" />
            </h2>
            <p className="lead">
              The form asks you to pick one. Here is the difference in short.
            </p>
          </div>
          <div className="tier-grid">
            {SERVICE_TIERS.map((tier) => (
              <div className="tier-card reveal" key={tier.name}>
                <b>{tier.name}</b>
                <p className="tier-blurb">{tier.blurb}</p>
                {tier.intro && <p className="tier-intro">{tier.intro}</p>}
                <ul>
                  {tier.points.map((p) => (
                    <li key={p}><Check aria-hidden="true" /><span>{p}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="homes-more">
            <a href="/services/#compare">See the full side-by-side comparison <ArrowRight /></a>
          </p>
        </div>
      </section>

      <section className="section tone-sky">
        <div className="wrap">
          <div className="center section-head">
            <h2 className="section-title">
              What we actually leave behind
              <Sparkle aria-hidden="true" />
            </h2>
            <p className="lead">Real homes, our own photos. Nothing staged.</p>
          </div>
          <div className="ba-grid ba-grid--three">
            {PROOF_PHOTOS.map((t) => (
              <figure className="ba-card reveal" key={t.image}>
                <Image
                  src={t.image}
                  alt={t.alt}
                  width={1000}
                  height={1000}
                  sizes="(max-width: 760px) 100vw, 380px"
                />
                <figcaption>
                  <span className="ba-tag">{t.tag}</span>
                  <b>{t.title}</b>
                  <p>{t.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="homes-more">
            <a href="/before-and-after/">See all before &amp; after photos <ArrowRight /></a>
          </p>
        </div>
      </section>

      {/* Reviews sit below the form and load lazily. A second cross-origin
          iframe on a conversion page is real weight, and it must never compete
          with the survey for bandwidth on first paint. */}
      <section className="section">
        <div className="wrap">
          <div className="center section-head">
            <h2 className="section-title">
              What your neighbors said
              <Sparkle aria-hidden="true" />
            </h2>
            <p className="lead">
              Verified Google reviews from real Verity customers, synced live from our
              Business Profile.
            </p>
          </div>
          <div className="reviews-widget reveal">
            <iframe
              className="lc_reviews_widget"
              src={WIDGET_SRC}
              title="Verity Cleaning reviews on Google"
              frameBorder="0"
              scrolling="no"
              loading="lazy"
              style={{ minWidth: "100%", width: "100%" }}
            />
          </div>
          <script src={WIDGET_LOADER} type="text/javascript" />
        </div>
      </section>

      <MeetTheOwner heading="Who you're trusting with your home" />

      <section className="section tone-sky">
        <div className="wrap">
          <div className="center section-head">
            <h2 className="section-title">
              Before you fill it in
              <Sparkle aria-hidden="true" />
            </h2>
          </div>
          <div className="faq-list area-faq-list">
            {QUOTE_FAQ.map(({ q, a }) => (
              <details className="faq-item" key={q}>
                <summary>
                  <span>{q}</span>
                  <span className="faq-ic" aria-hidden="true"><Plus /></span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
          <div className="quote-back">
            <a className="btn btn--primary btn--lg" href="#quote-form">
              Get My Free Quote
              <ArrowRight aria-hidden="true" />
            </a>
            <CallLine />
          </div>
        </div>
      </section>
    </main>
  );
}
