import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://nbes.in", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://nbes.in/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://nbes.in/projects", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://nbes.in/about", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: "https://nbes.in/contact", lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
  ];
}
