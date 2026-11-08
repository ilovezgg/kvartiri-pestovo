import type { MetadataRoute } from "next";
import { FLATS } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/orgs`, changeFrequency: "monthly", priority: 0.9 },
    ...FLATS.map((f) => ({
      url: `${SITE_URL}/flats/${f.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
