/* LocalBusiness (HouseCleaningService) structured data for richer local SEO. 
   Rendered as a Server Component so it ships in the static HTML, no client JS. */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HouseCleaningService",
    "@id": "https://www.veritycleaning.co/#business",
    name: "Verity Cleaning LLC",
    description:
      "Premium, licensed and insured residential and commercial cleaning service in Shelby County, AL. Offering house cleaning, deep cleaning, move-in/out cleanings, and office sanitization.",
    slogan: "A Clean Home. More Time Back.",
    telephone: "+12059460304",
    email: "hello@veritycleaning.co",
    url: "https://www.veritycleaning.co",
    /* sameAs ties this business entity to its off-site profiles, so a dead URL
       here is worse than an omission. Facebook, Instagram, and the Google
       listing were each confirmed to load and show the business. Nextdoor is
       owner-supplied and sits behind a login wall, so it could not be checked
       the same way. Yelp is absent — no page exists yet. */
    sameAs: [
      "https://www.facebook.com/profile.php?id=61588754895193",
      "https://www.instagram.com/veritycleaning/",
      "https://www.google.com/maps?cid=17576216227421438205",
      "https://nextdoor.com/profile/01RZrcssJXy3zcKc_",
    ],
    image: "https://www.veritycleaning.co/clean-home.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "103 Eagle Cove Drive",
      addressLocality: "Pelham",
      addressRegion: "AL",
      postalCode: "35124",
      addressCountry: "US",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        "Recurring House Cleaning",
        "Deep Cleaning Services",
        "Move-In / Move-Out Cleaning",
        "Commercial & Office Cleaning",
        "Post-Construction Cleaning",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, areaServed: "Shelby & Jefferson County, AL" },
      })),
    },
    /* Every town here must be one Verity will actually drive to — areaServed
       is a claim, and a lead from a town we decline wastes their time and
       ours. Jefferson County entries are Birmingham's over-the-mountain
       suburbs, all within about 25 minutes of Pelham. */
    areaServed: [
      "Pelham",
      "Helena",
      "Alabaster",
      "Hoover",
      "Vestavia Hills",
      "Homewood",
      "Mountain Brook",
      "Columbiana",
      "Chelsea",
      "Calera",
    ].map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.3284,
      longitude: -86.7883,
    },
    knowsAbout: [
      "Recurring cleaning",
      "Deep cleaning",
      "Move-in cleaning",
      "Move-out cleaning",
      "Office cleaning",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
