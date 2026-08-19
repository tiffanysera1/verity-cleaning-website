const BASE = "https://www.veritycleaning.co";

type HubItem = { name: string; url: string };

/* Structured data for the two hub pages, /services/ and /areas/.

   Both were the only content pages on the site emitting no JSON-LD, despite
   being the highest-value navigational pages. CollectionPage + ItemList tells
   search engines what the page collects and in what order; the BreadcrumbList
   completes the trail the child pages already declare. */
export default function HubJsonLd({
  path,
  name,
  description,
  breadcrumbName,
  items,
}: {
  path: string;
  name: string;
  description: string;
  breadcrumbName: string;
  items: HubItem[];
}) {
  const url = `${BASE}${path}`;

  const graph = [
    {
      "@type": "CollectionPage",
      "@id": `${url}#collection`,
      name,
      description,
      url,
      isPartOf: { "@id": `${BASE}/#business` },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: items.length,
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          url: `${BASE}${item.url}`,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: breadcrumbName, item: url },
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
