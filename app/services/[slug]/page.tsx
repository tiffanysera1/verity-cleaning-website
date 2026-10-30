import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES, getService } from "@/components/servicesData";
import { SERVICE_DETAILS } from "@/components/service/serviceDetailData";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceIncluded from "@/components/service/ServiceIncluded";
import ServiceExpect from "@/components/service/ServiceExpect";
import ServiceResources from "@/components/service/ServiceResources";
import ServiceCTA from "@/components/service/ServiceCTA";
import ServiceCrossLinks from "@/components/service/ServiceCrossLinks";
import ServiceProof, { hasServiceProof } from "@/components/service/ServiceProof";
import ServiceJsonLd from "@/components/ServiceJsonLd";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  /* Hoover and Vestavia Hills are the towns we are working to rank in, so
     they sit in every service title beside Pelham. Titles over 60 characters
     get cut off in results, so the brand suffix shortens, then drops, and
     the longest service names keep only the two target towns. */
  const place = "in Pelham, Hoover & Vestavia Hills";
  const title = [
    `${service.title} ${place} | Verity Cleaning`,
    `${service.title} ${place} | Verity`,
    `${service.title} ${place}`,
  ].find((t) => t.length <= 60) ?? `${service.title} in Hoover & Vestavia Hills`;
  /* Kept under 160 characters so the town names are not cut off. */
  const fullDescription = `${service.summary} Serving Hoover, Vestavia Hills & Pelham, AL.`;
  const description = fullDescription.length <= 160
    ? fullDescription
    : `${service.summary} Serving Hoover & Vestavia Hills.`;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      title,
      description,
      url: `/services/${service.slug}/`,
      images: [{ url: service.photo, alt: `${service.title} by Verity Cleaning` }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = getService(slug);
  const detail = SERVICE_DETAILS[slug];
  if (!service || !detail) notFound();

  return (
    <main id="main">
      <ServiceJsonLd
        title={service.title}
        summary={service.summary}
        slug={service.slug}
        faq={detail.faq}
      />

      <ServiceHero title={service.title}
        aka={service.aka} photo={service.photo} tagline={detail.tagline} description={detail.description} tips={detail.tips} />

      <section className="section service-included-section">
        <div className="wrap">
          <ServiceIncluded tabs={detail.includedTabs} notIncluded={detail.notIncluded} addOns={detail.addOns} frequencyTiers={detail.frequencyTiers} scopeNote={detail.scopeNote} />
        </div>
      </section>

      {hasServiceProof(service.slug) && (
        <section className="section tone-sky">
          <div className="wrap">
            <ServiceProof slug={service.slug} />
          </div>
        </section>
      )}

      <section className="section service-expect-section">
        <div className="wrap">
          <ServiceExpect />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ServiceCrossLinks slug={service.slug} serviceTitle={service.title} />
        </div>
      </section>

      <section className="section service-resources-section">
        <div className="wrap">
          <ServiceResources serviceTitle={service.title} currentSlug={service.slug} faq={detail.faq} />
        </div>
      </section>

      <section className="section service-cta-section">
        <div className="wrap">
          <ServiceCTA />
        </div>
      </section>
    </main>
  );
}
