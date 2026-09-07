import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Sparkle,
  Shield,
  Star,
  Pin,
  Camera,
  FileText,
  MessageCircle,
  Clock,
  Home,
  Building,
  Sparkles,
  Plus,
  Check,
} from "@/components/Icons";
import { QUOTE_FORM_URL } from "@/components/quoteLink";
import { GOOGLE_REVIEWS_URL, GOOGLE_RATING } from "@/components/googleBusiness";
import CallLine from "@/components/CallLine";
import { AREAS } from "@/components/areasData";
import { PM_PROOF, PM_STEPS, PM_TYPES, PM_FAQ } from "@/components/propertyManagerData";
import { pickTransformations } from "@/components/transformationsData";

const PATH = "/property-management-cleaning/";
const BASE = "https://www.veritycleaning.co";

const TITLE = "Property Management Cleaning | Birmingham & Shelby County";
const DESCRIPTION =
  "Turnover cleaning for property managers across Birmingham & Shelby County. Same or next-day turnover, photo record of every unit, standardized checklists. Call (205) 946-0304.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: "Turnover Cleaning for Property Managers | Verity Cleaning",
    description:
      "Same or next-day unit turnover with before, after and staging photos on every job.",
    url: PATH,
    images: [{ url: "/service-move.webp", alt: "A cleaned, move-ready rental unit" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const PROOF_ICONS: Record<string, typeof Camera> = {
  camera: Camera,
  file: FileText,
  message: MessageCircle,
  clock: Clock,
};
const TYPE_ICONS: Record<string, typeof Home> = {
  home: Home,
  building: Building,
  sparkles: Sparkles,
};

/* Service + FAQPage + BreadcrumbList, pointing back at the LocalBusiness on the
   homepage rather than redeclaring the business. No review markup — same
   position as everywhere else on this site. */
function JsonLd() {
  const graph = [
    {
      "@type": "Service",
      "@id": `${BASE}${PATH}#service`,
      name: "Property Management & Rental Turnover Cleaning",
      description: DESCRIPTION,
      serviceType: "Rental Turnover Cleaning",
      url: `${BASE}${PATH}`,
      provider: { "@id": `${BASE}/#business` },
      areaServed: AREAS.map((a) => ({ "@type": "City", name: a.name })),
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${BASE}${PATH}`,
        servicePhone: "+12059460304",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE}${PATH}#faq`,
      mainEntity: PM_FAQ.map(({ q, a }) => ({
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
        { "@type": "ListItem", position: 2, name: "Property Management Cleaning", item: `${BASE}${PATH}` },
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

const PREVIEW = pickTransformations([
  "kitchen-declutter",
  "refrigerator-emptied",
  "toilet-stain-removal",
]);

export default function PropertyManagementPage() {
  return (
    <main id="main">
      <JsonLd />

      <section className="section area-hero">
        <div className="wrap">
          <p className="area-eyebrow">
            <Pin aria-hidden="true" />
            Birmingham &amp; Shelby County
          </p>
          <h1>Turnover Cleaning for Property Managers</h1>
          <p className="lead">
            A vacant unit costs you rent every day it sits. We turn units around the same
            or next day, and send before, after and staging photos so you can sign it off
            without driving out to look.
          </p>

          <div className="area-hero-actions">
            <a
              className="btn btn--primary btn--lg"
              href={QUOTE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Request a Turnover Quote
              <ArrowRight aria-hidden="true" />
            </a>
            <CallLine />
          </div>

          <div className="area-hero-meta">
            <span className="payment-note">
              <Shield aria-hidden="true" />
              <span><strong>No trip charge.</strong> Licensed, bonded &amp; insured.</span>
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
          <div className="center section-head">
            <h2 className="section-title">
              You should not have to inspect it yourself
              <Sparkle aria-hidden="true" />
            </h2>
            <p className="lead">
              Managing units means trusting work you did not watch happen. Here is how we
              take that off you.
            </p>
          </div>
          <div className="pm-proof-grid">
            {PM_PROOF.map(({ icon, title, body }) => {
              const Icon = PROOF_ICONS[icon];
              return (
                <div className="pm-proof-card reveal" key={title}>
                  <span className="always-tile-ic" aria-hidden="true"><Icon /></span>
                  <b>{title}</b>
                  <p>{body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="center section-head">
            <h2 className="section-title">
              The photos you&rsquo;ll get
              <Sparkle aria-hidden="true" />
            </h2>
            <p className="lead">
              Real units we have turned over. This is what lands with your receipt.
            </p>
          </div>
          <div className="ba-grid ba-grid--three">
            {PREVIEW.map((t) => (
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

      <section className="section">
        <div className="wrap">
          <div className="center section-head">
            <h2 className="section-title">
              How a turnover works
              <Sparkle aria-hidden="true" />
            </h2>
          </div>
          <div className="pm-steps">
            {PM_STEPS.map(({ n, title, body }) => (
              <div className="pm-step reveal" key={n}>
                <span className="pm-step-n">{n}</span>
                <b>{title}</b>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <p className="homes-more">
            <a href={QUOTE_FORM_URL} target="_blank" rel="noopener noreferrer">
              Request a turnover quote <ArrowRight />
            </a>
          </p>
        </div>
      </section>

      <section className="section tone-sky">
        <div className="wrap">
          <div className="center section-head">
            <h2 className="section-title">
              Properties we turn over
              <Sparkle aria-hidden="true" />
            </h2>
          </div>
          <div className="pm-types">
            {PM_TYPES.map(({ icon, title, body }) => {
              const Icon = TYPE_ICONS[icon];
              return (
                <div className="pm-type-card reveal" key={title}>
                  <span className="always-tile-ic" aria-hidden="true"><Icon /></span>
                  <b>{title}</b>
                  <p>{body}</p>
                </div>
              );
            })}
          </div>
          <p className="homes-more">
            <a href="/services/move-in-move-out/">
              See the full turnover checklist <ArrowRight />
            </a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap area-body">
          <div className="area-copy">
            <h2 className="section-title">Where we turn over units</h2>
            <p>
              We cover Pelham and Shelby County plus Birmingham&rsquo;s over-the-mountain
              suburbs, and the price does not change based on which of them a unit sits in.
              There is no trip charge and no zone pricing &mdash; a quote reflects the size
              and condition of the unit and the service booked, nothing else.
            </p>
            <ul className="area-hoods">
              {AREAS.map((a) => (
                <li key={a.slug}>
                  <Check aria-hidden="true" />
                  <a href={`/areas/${a.slug}/`}>{a.name}</a>
                </li>
              ))}
            </ul>
            <p className="area-hoods-note">
              Managing something just outside that list? Ask &mdash; we would rather tell
              you honestly than have you guess.
            </p>
          </div>

          <aside className="area-lead-card">
            <p className="area-lead-label">Most requested</p>
            <h3>Move-Out Turnover</h3>
            <p>
              Cabinet and appliance interiors, closets, interior windowpanes, hand-detailed
              baseboards, tile and grout &mdash; the areas a final walkthrough actually
              checks.
            </p>
            <a className="review-more" href="/services/move-in-move-out/">
              See what&rsquo;s included <ArrowRight />
            </a>
          </aside>
        </div>
      </section>

      <section className="section tone-sky">
        <div className="wrap">
          <div className="center section-head">
            <h2 className="section-title">
              Property manager questions
              <Sparkle aria-hidden="true" />
            </h2>
          </div>
          <div className="faq-list area-faq-list">
            {PM_FAQ.map(({ q, a }) => (
              <details className="faq-item" key={q}>
                <summary>
                  <span>{q}</span>
                  <span className="faq-ic" aria-hidden="true"><Plus /></span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="area-cta">
            <div>
              <h2>Have a unit that needs turning over?</h2>
              <p>
                Tell us where it is and when it&rsquo;s empty. We&rsquo;ll send a quote,
                and you&rsquo;ll get photos and a receipt when it&rsquo;s done.
              </p>
            </div>
            <div className="area-cta-actions">
              <a
                className="btn btn--primary btn--lg"
                href={QUOTE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a Turnover Quote
                <ArrowRight aria-hidden="true" />
              </a>
              <CallLine />
              <p className="payment-note">
                <Shield aria-hidden="true" />
                <span>Card on file, charged after the clean is complete.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
