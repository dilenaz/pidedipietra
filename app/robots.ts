import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://pidedipietra.com.tr/sitemap.xml",
    host: "https://pidedipietra.com.tr",
  };
}
