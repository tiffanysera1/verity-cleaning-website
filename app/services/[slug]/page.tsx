import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, Phone } from "@/components/Icons";
import { SERVICES, getService } from "@/components/servicesData";
import QuoteSection from "@/components/QuoteSection";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.title} in Shelby County, AL | Verity Cleaning`;
  const description = `${service.summary} Serving Pelham, Alabaster, Helena, Hoover, and surrounding Shelby County, AL. Call or text (205) 888-0199.`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: { title, description, url: `/services/${service.slug}/` },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const { Icon, title, summary, goodFor, whatsIncluded } = service;

  return (
    <main id="main">
      <section className="section service-hero">
        <div className="wrap">
          <a href="/#services" className="back-link">&larr; All services</a>
          <div className="service-hero-head reveal">
            <span className="ic-lg" aria-hidden="true">
              <Icon />
            </span>
            <div>
              <span className="eyebrow">Service</span>
              <h1>{title}</h1>
              <p className="lead">{summary}</p>
            </div>
          </div>
          <div className="section-cta-row reveal" style={{ justifyContent: "flex-start", marginTop: "28px" }}>
            <a href="#quote" className="btn btn--primary btn--lg">
              Get my personalized quote
            </a>
            <a href="tel:+12058880199" className="btn btn--ghost btn--lg">
              <Phone />
              Call or text (205) 888-0199
            </a>
          </div>
        </div>
      </section>

      <section className="section tone-sky">
        <div className="wrap service-detail-grid">
          <div className="reveal">
            <h2>What&rsquo;s included</h2>
            <ul className="checks">
              {whatsIncluded.map((item) => (
                <li key={item}>
                  <span className="ck">
                    <Check />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="good-for-card reveal">
            <h3>Good for</h3>
            <p>{goodFor}</p>
          </div>
        </div>
      </section>

      <QuoteSection />
    </main>
  );
}
