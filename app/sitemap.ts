import type { MetadataRoute } from "next";
import { SERVICES } from "@/components/servicesData";
import { AREAS } from "@/components/areasData";

export const dynamic = "force-static";

const BASE = "https://www.veritycleaning.co";

export default function sitemap(): MetadataRoute.Sitemap {
  /* No lastModified: a static export would stamp every URL with the build
     time on each deploy, and Google learns to ignore dates that always change. */
  return [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/services/`, changeFrequency: "monthly", priority: 0.9 },
    ...SERVICES.map((s) => ({
      url: `${BASE}/services/${s.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${BASE}/property-management-cleaning/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/quote/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/faq/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/before-and-after/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/areas/`, changeFrequency: "monthly", priority: 0.9 },
    ...AREAS.map((a) => ({
      url: `${BASE}/areas/${a.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${BASE}/privacy/`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms/`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
