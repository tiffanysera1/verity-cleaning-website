import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Sparkle, Shield, Star } from "@/components/Icons";
import { QUOTE_FORM_URL } from "@/components/quoteLink";
import { GOOGLE_REVIEWS_URL, GOOGLE_RATING } from "@/components/googleBusiness";
import CallLine from "@/components/CallLine";
import { TRANSFORMATIONS } from "@/components/transformationsData";

const PATH = "/before-and-after/";
const BASE = "https://www.veritycleaning.co";

const TITLE = "Before & After Cleaning Photos | Verity Cleaning";
const DESCRIPTION =
  "Real before and after photos from Verity Cleaning jobs across Pelham, Shelby County and Birmingham — kitchens, bathrooms, refrigerators and appliances.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: "Before & After — Real Verity Cleaning Jobs",
    description: "Real before and after photos from cleans across Pelham and Birmingham.",
    url: PATH,
    images: [{ url: TRANSFORMATIONS[0].image, alt: TRANSFORMATIONS[0].alt }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

function JsonLd() {
  const graph = [
    {
      "@type": "CollectionPage",
      "@id": `${BASE}${PATH}#page`,
      name: "Before & After Cleaning Photos",
      description: DESCRIPTION,
      url: `${BASE}${PATH}`,
      isPartOf: { "@id": `${BASE}/#business` },
      /* Each entry names what actually changed, so the images carry meaning
         even though the text inside them is unreadable pixels. */
      hasPart: TRANSFORMATIONS.map((t) => ({
        "@type": "ImageObject",
        contentUrl: `${BASE}${t.image}`,
        name: t.title,
        description: t.caption,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE}${PATH}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Before & After", item: `${BASE}${PATH}` },
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

export default function BeforeAfterPage() {
  return (
    <main id="main">
      <JsonLd />

      <section className="section area-hero">
        <div className="wrap">
          <h1>Before &amp; After</h1>
          <p className="lead">
            Real homes we have cleaned across Pelham, Shelby County and Birmingham&rsquo;s
            over-the-mountain suburbs. Every photo below is our own work &mdash; no stock
            images, nothing staged.
          </p>

          <div className="area-hero-actions">
            <a
              className="btn btn--primary btn--lg"
              href={QUOTE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get My Free Quote
              <ArrowRight aria-hidden="true" />
            </a>
            <CallLine />
          </div>

          <div className="area-hero-meta">
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

      <section className="section tone-sky">
        <div className="wrap">
          <div className="ba-grid">
            {TRANSFORMATIONS.map((t, i) => (
              <figure className="ba-card reveal" key={t.image}>
                <Image
                  src={t.image}
                  alt={t.alt}
                  width={1000}
                  height={1000}
                  sizes="(max-width: 760px) 100vw, 560px"
                  priority={i < 2}
                />
                <figcaption>
                  <span className="ba-tag">{t.tag}</span>
                  <b>{t.title}</b>
                  <p>{t.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="area-cta">
            <div>
              <h2>Want your home to look like this?</h2>
              <p>
                Tell us about it and we&rsquo;ll send a personalized quote. No one needs to
                walk through your house first &mdash; photos are enough.
              </p>
            </div>
            <div className="area-cta-actions">
              <a
                className="btn btn--primary btn--lg"
                href={QUOTE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get My Free Quote
                <ArrowRight aria-hidden="true" />
              </a>
              <CallLine />
              <p className="payment-note">
                <Shield aria-hidden="true" />
                <span>Licensed, bonded &amp; insured.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
