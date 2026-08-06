import type { MetadataRoute } from "next";
import { brands } from "@/lib/brands";

const BASE_URL = "https://www.denovatec.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/products`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const brandRoutes: MetadataRoute.Sitemap = brands.map((brand) => ({
    url: `${BASE_URL}/products/${brand.id}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...brandRoutes];
}
