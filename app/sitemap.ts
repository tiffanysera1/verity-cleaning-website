import type { MetadataRoute } from "next";
import { SERVICES } from "@/components/servicesData";

export const dynamic = "force-static";

const BASE = "https://www.veritycleaning.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${BASE}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/services/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...SERVICES.map((s) => ({
      url: `${BASE}/services/${s.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${BASE}/privacy/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
