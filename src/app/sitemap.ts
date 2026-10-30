import type { MetadataRoute } from "next";
import { CIUDADES } from "@/data/ciudades";
import { RUBROS } from "@/data/rubros";
import { SITE_URL } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/agencias`, changeFrequency: "monthly", priority: 0.9 },
    ...CIUDADES.map((c) => ({ url: `${SITE_URL}/diseno-web/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...RUBROS.map((r) => ({ url: `${SITE_URL}/rubros/${r.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
