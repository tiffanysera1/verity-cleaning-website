import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES, getService } from "@/components/servicesData";
import { SERVICE_DETAILS } from "@/components/service/serviceDetailData";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceIncluded from "@/components/service/ServiceIncluded";
import ServiceExpect from "@/components/service/ServiceExpect";
import ServiceResources from "@/components/service/ServiceResources";
import ServiceCTA from "@/components/service/ServiceCTA";
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

  const title = `${service.title} in Pelham, AL | Verity Cleaning`;
  const description = `${service.summary} Serving Pelham & Shelby County, AL. Call or text (205) 946-0304.`;

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

      <ServiceHero title={service.title} photo={service.photo} tagline={detail.tagline} description={detail.description} tips={detail.tips} />

      <section className="section service-included-section">
        <div className="wrap">
          <ServiceIncluded tabs={detail.includedTabs} notIncluded={detail.notIncluded} addOns={detail.addOns} />
        </div>
      </section>

      <section className="section service-expect-section">
        <div className="wrap">
          <ServiceExpect />
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
