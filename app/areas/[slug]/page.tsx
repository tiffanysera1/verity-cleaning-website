import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { AREAS, getArea } from "@/components/areasData";
import { SERVICES } from "@/components/servicesData";
import { QUOTE_FORM_URL } from "@/components/quoteLink";
import { GOOGLE_REVIEWS_URL, GOOGLE_RATING } from "@/components/googleBusiness";
import { ArrowRight, Star, Sparkle, Shield, Pin } from "@/components/Icons";
import AreaJsonLd from "@/components/AreaJsonLd";
import CallLine from "@/components/CallLine";

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  const title = `House Cleaning in ${area.name}, AL | Verity Cleaning`;
  const description = `House cleaning in ${area.name}, AL — recurring, deep, and move-out cleans. Licensed, bonded, insured, with upfront quotes. Call or text (205) 946-0304.`;

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
              href={QUOTE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
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
              <span><strong>{area.driveTime}.</strong> Licensed, bonded &amp; insured.</span>
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

      <section className="section">
        <div className="wrap area-body">
          <div className="area-copy">
            <h2 className="section-title">Cleaning {area.name} homes</h2>
            {area.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}

            {lead && (
              <p className="area-lead-line">
                Most {area.name} bookings start with{" "}
                <a href={`/services/${lead.slug}/`}>{area.leadService.title.toLowerCase()}</a>
                , though we handle every service listed below across the whole town.
              </p>
            )}

            <h3>Where we clean in {area.name}</h3>
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

      <section className="section tone-sky">
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
                <span>No payment today. Pay after your service is complete.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
