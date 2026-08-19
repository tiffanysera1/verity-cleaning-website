import type { Area } from "./areasData";

const BASE = "https://www.veritycleaning.co";

/* Per-town structured data. The Service node points back at the LocalBusiness
   declared on the homepage rather than redeclaring the business, so search
   engines see one entity serving many places instead of several businesses.

   areaServed here names only this town — the sitewide list lives in JsonLd.tsx.
   No rating or review markup: self-serving review markup earns no rich result
   on LocalBusiness and carries manual-action risk. */
export default function AreaJsonLd({ area }: { area: Area }) {
  const url = `${BASE}/areas/${area.slug}/`;

  const graph = [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: `House Cleaning in ${area.name}, AL`,
      serviceType: "House Cleaning",
      url,
      provider: { "@id": `${BASE}/#business` },
      areaServed: {
        "@type": "City",
        name: area.name,
        containedInPlace: { "@type": "AdministrativeArea", name: `${area.county}, Alabama` },
      },
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
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BASE}/areas/` },
        { "@type": "ListItem", position: 3, name: area.name, item: url },
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
