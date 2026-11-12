import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { AREAS, getArea, areaFaqs } from "@/components/areasData";
import { SERVICES } from "@/components/servicesData";
import { QUOTE_URL } from "@/components/quoteLink";
import { GOOGLE_REVIEWS_URL, GOOGLE_RATING } from "@/components/googleBusiness";
import { ArrowRight, Star, Sparkle, Shield, Pin, Plus, Check } from "@/components/Icons";
import AreaJsonLd from "@/components/AreaJsonLd";
import CallLine from "@/components/CallLine";
import Reviews from "@/components/Reviews";
import { AreaWhyVerity, AreaPricing, AreaHowItWorks, FocusPhotos } from "@/components/AreaSections";

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  /* "Maid service" is the other common way people search for this, and the
     site never said it anywhere. Brand suffix shortens to stay within 60. */
  const longTitle = `House Cleaning & Maid Service in ${area.name}, AL | Verity Cleaning`;
  const title = longTitle.length <= 60
    ? longTitle
    : `House Cleaning & Maid Service in ${area.name}, AL | Verity`;
  const description = area.metaDescription
    ?? `House cleaning and maid service in ${area.name}, AL: recurring, deep and move-out cleans. Licensed, bonded & insured. Call or text (205) 946-0304.`;

  return {
    title,
    description,
    alternates: { canonical: `/areas/${area.slug}/` },
    openGraph: {
      title,
      description,
      url: `/areas/${area.slug}/`,
      images: [{ url: "/og-image.jpg", alt: `House cleaning in ${area.name}, Alabama` }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function AreaPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const lead = SERVICES.find((s) => s.slug === area.leadService.slug);
  const others = SERVICES.filter((s) => s.slug !== area.leadService.slug);
  const focus = area.focus;
  const focusService = focus && SERVICES.find((s) => s.slug === focus.serviceSlug);
  const nearby = area.nearby
    .map((s) => getArea(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  const communities = (area.communities?.slugs ?? [])
    .map((s) => getArea(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  /* Sections below the hero alternate plain and sky backgrounds. Pages with
     a focus section have one more block than those without, so the tone is
     handed out in render order rather than fixed per section. */
  let sectionIndex = 0;
  const nextSky = () => sectionIndex++ % 2 === 1;

  return (
    <main id="main">
      <AreaJsonLd area={area} />

      <section className="section area-hero">
        <div className="wrap">
          <p className="area-eyebrow">
            <Pin aria-hidden="true" />
            {area.county}
          </p>
          <h1>House Cleaning in {area.name}, Alabama</h1>
          <p className="lead">{area.tagline}</p>

          <div className="area-hero-actions">
            <a
              className="btn btn--primary btn--lg"
              href={QUOTE_URL}
            >
              Get My Free Quote
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="btn btn--outline btn--lg" href="tel:+12059460304">
              Call or text (205) 946-0304
            </a>
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

      <section className={`section${nextSky() ? " tone-sky" : ""}`}>
        <div className="wrap area-body">
          <div className="area-copy">
            <h2 className="section-title">Cleaning {area.name} homes</h2>
            {area.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}

            {/* A metro page skips this line: where bookings start differs by
                community, and its FAQ says how. */}
            {lead && communities.length === 0 && (
              <p className="area-lead-line">
                Most {area.name} bookings start with{" "}
                <a href={`/services/${lead.slug}/`}>{area.leadService.title.toLowerCase()}</a>
                , though we handle every service listed below across the whole town.
              </p>
            )}

            <h3>Where we clean in {area.name}</h3>
            {communities.length > 0 ? (
              <>
                <ul className="area-communities">
                  {communities.map((c) => (
                    <li key={c.slug}>
                      <a href={`/areas/${c.slug}/`}>{c.name}</a>
                      <span>{c.neighborhoods.join(", ")}</span>
                    </li>
                  ))}
                </ul>
                <p className="area-hoods-note">
                  Elsewhere in the {area.name} area? <a href="tel:+12059460304">Call or text (205) 946-0304</a>{" "}and we&rsquo;ll tell you whether we can reach you.
                </p>
              </>
            ) : (
              <>
                <ul className="area-hoods">
                  {area.neighborhoods.map((n) => (
                    <li key={n}>
                      <Sparkle aria-hidden="true" />
                      {n}
                    </li>
                  ))}
                </ul>
                <p className="area-hoods-note">
                  Not listed? We serve all of {area.name}&nbsp;&mdash; just ask.
                </p>
              </>
            )}
            {nearby.length > 0 && (
              <p className="area-nearby">
                Nearby, we also clean homes in{" "}
                {nearby.map((n, i) => (
                  <span key={n.slug}>
                    {i > 0 && (i === nearby.length - 1 ? " and " : ", ")}
                    <a href={`/areas/${n.slug}/`}>{n.name}</a>
                  </span>
                ))}
                .
              </p>
            )}
          </div>

          {lead && (
            <aside className="area-lead-card">
              <p className="area-lead-label">Most requested here</p>
              <h3>{area.leadService.title}</h3>
              <p>{area.leadService.reason}</p>
              <a className="review-more" href={`/services/${lead.slug}/`}>
                See what&rsquo;s included <ArrowRight />
              </a>
            </aside>
          )}
        </div>
      </section>

      {focus && focusService && (
        <section className={`section${nextSky() ? " tone-sky" : ""}`} id={focus.serviceSlug}>
          <div className="wrap area-body">
            <div className="area-copy">
              <h2 className="section-title">{focus.heading}</h2>
              {focus.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              <h3>{focus.includesHeading}</h3>
              <ul className="area-focus-list">
                {focus.highlights.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="area-lead-card area-focus-card">
              <p className="area-lead-label">{focus.card.label}</p>
              <h3>{focusService.title}</h3>
              <p>{focus.card.note}</p>
              <a className="btn btn--primary" href={QUOTE_URL}>
                {focus.card.cta}
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="review-more" href={`/services/${focusService.slug}/`}>
                See the full checklist <ArrowRight />
              </a>
              <a className="review-more" href="/before-and-after/">
                {focus.card.proofText} <ArrowRight />
              </a>
            </aside>
          </div>
          <FocusPhotos
            serviceSlug={focusService.slug}
            label={`Real photos from our ${focusService.title.toLowerCase()} jobs`}
            seed={AREAS.filter((a) => a.focus?.serviceSlug === focusService.slug).indexOf(area)}
          />
        </section>
      )}

      <AreaWhyVerity city={area.name} sky={nextSky()} />

      <section className={`section${nextSky() ? " tone-sky" : ""}`}>
        <div className="wrap">
          <div className="center section-head">
            <h2 className="section-title">
              Every service, available in {area.name}
              <Sparkle aria-hidden="true" />
            </h2>
          </div>
          <div className="area-services-grid">
            {others.map((service) => (
              <a className="area-service-card" key={service.slug} href={`/services/${service.slug}/`}>
                <span className="area-service-photo">
                  <Image src={service.photo} alt="" fill sizes="220px" style={{ objectFit: "cover" }} />
                </span>
                <span className="area-service-body">
                  <strong>{service.title}</strong>
                  <span>{service.summary}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <AreaPricing city={area.name} sky={nextSky()} />
      <AreaHowItWorks city={area.name} sky={nextSky()} />

      <section className={`section${nextSky() ? " tone-sky" : ""}`}>
        <div className="wrap">
          <div className="center section-head">
            <h2 className="section-title">
              Cleaning in {area.name}{" "}
              &mdash; common questions
              <Sparkle aria-hidden="true" />
            </h2>
          </div>
          <div className="faq-list area-faq-list">
            {areaFaqs(area).map(({ q, a }) => (
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

      <Reviews sky={nextSky()} />

      <section className="section">
        <div className="wrap">
          <div className="area-cta">
            <div>
              <h2>Ready for a clean home in {area.name}?</h2>
              <p>
                Tell us about your home and we&rsquo;ll send a personalized quote &mdash;
                no hidden fees, and you don&rsquo;t pay until the work is done.
              </p>
            </div>
            <div className="area-cta-actions">
              <a
                className="btn btn--primary btn--lg"
                href={QUOTE_URL}
              >
                Get My Free Quote
                <ArrowRight aria-hidden="true" />
              </a>
              <CallLine />
              <p className="payment-note">
                <Shield aria-hidden="true" />
                <span>No payment today. Pay after your service is complete.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
