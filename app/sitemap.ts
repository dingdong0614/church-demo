import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dasom-church.kr";
const PATHS = ["", "/about", "/visit", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((p) => ({
    url: `${BASE_URL}${p}`,
    lastModified: new Date(),
  }));
}
