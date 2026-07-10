/* LocalBusiness (HouseCleaningService) structured data for richer local SEO. 
   Rendered as a Server Component so it ships in the static HTML, no client JS. */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HouseCleaningService",
    "@id": "https://veritycleaning.com/#business",
    name: "Verity Cleaning, LLC",
    description:
      "Premium, veteran-owned residential and commercial cleaning service in Shelby County, AL. Offering house cleaning, deep cleaning, move-in/out cleanings, and office sanitization.",
    slogan: "Pure Spaces &bull; Pure Peace of Mind",
    telephone: "+12058880199",
    url: "https://veritycleaning.com",
    image: "https://veritycleaning.com/clean-home.png",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pelham",
      addressRegion: "AL",
      postalCode: "35124",
      addressCountry: "US",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        "Residential House Cleaning",
        "Deep Cleaning Services",
        "Move-In / Move-Out Cleaning",
        "Commercial & Office Cleaning",
        "Post-Construction Cleaning",
        "Eco-Friendly Green Cleaning",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, areaServed: "Shelby County, AL" },
      })),
    },
    areaServed: [
      "Pelham",
      "Helena",
      "Alabaster",
      "Hoover",
      "Columbiana",
      "Chelsea",
      "Calera",
    ].map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.3284,
      longitude: -86.7883,
    },
    knowsAbout: [
      "Residential cleaning",
      "Deep cleaning",
      "Move-in cleaning",
      "Move-out cleaning",
      "Office cleaning",
      "Eco-friendly cleaning supplies",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
