import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.mindara.cl',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add other pages here as the site grows
  ];
}
