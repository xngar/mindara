import { MetadataRoute } from 'next';

const baseUrl = 'https://www.mindara.cl';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/politica-de-privacidad',
    '/politica-de-cookies',
    '/terminos-y-condiciones',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.6,
  }));
}
