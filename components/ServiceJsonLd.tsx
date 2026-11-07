import type { FaqItem } from "./service/serviceDetailData";

const BASE = "https://www.veritycleaning.co";

/* Over-the-mountain suburbs first: they are the market these pages target.
   Every town must be one we actually serve (same list as JsonLd.tsx). */
const AREA_SERVED = [
  ["Vestavia Hills", "Jefferson County, AL"],
  ["Mountain Brook", "Jefferson County, AL"],
  ["Homewood", "Jefferson County, AL"],
  ["Hoover", "Jefferson & Shelby Counties, AL"],
  ["Pelham", "Shelby County, AL"],
  ["Helena", "Shelby County, AL"],
  ["Alabaster", "Shelby County, AL"],
  ["Columbiana", "Shelby County, AL"],
  ["Chelsea", "Shelby County, AL"],
  ["Calera", "Shelby County, AL"],
].map(([name, county]) => ({ "@type": "City", name, containedInPlace: { "@type": "AdministrativeArea", name: county } }));

/* Per-service structured data. Emits three linked graph nodes:
   - Service, pointing at the LocalBusiness @id declared in JsonLd.tsx
   - BreadcrumbList, so search results show Home > Services > [Service]
   - FAQPage, built from the FAQ block already rendered on the page
   No rating or review properties — the business has no published reviews,
   and fabricated review markup is both a policy violation and a manual-action risk. */
export default function ServiceJsonLd({
  title,
  summary,
  slug,
  faq,
}: {
  title: string;
  summary: string;
  slug: string;
  faq: FaqItem[];
}) {
  const url = `${BASE}/services/${slug}/`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: `${title} in Hoover, Vestavia Hills, Mountain Brook & Homewood, AL`,
      description: summary,
      serviceType: title,
      url,
      provider: { "@id": `${BASE}/#business` },
      areaServed: AREA_SERVED,
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: url,
        servicePhone: "+12059460304",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services/` },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
  ];

  if (faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
