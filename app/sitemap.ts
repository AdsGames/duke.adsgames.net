import type { MetadataRoute } from "next";

import { SAYINGS } from "@/constants/sayings";
import { WEBSITE_INFO } from "@/constants/website-info";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = SAYINGS.map(
    (saying) =>
      ({
        url: `${WEBSITE_INFO.url}/${saying.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      }) as const,
  );

  return [
    {
      url: WEBSITE_INFO.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...paths,
  ];
}
