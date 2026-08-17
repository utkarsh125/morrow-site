import type { MetadataRoute } from 'next';

const BASE = 'https://morrow.utkarshpandey.in';

// All known doc slugs derived from content/docs/
const docSlugs = [
  'index',
  'installation',
  'quickstart',
  'configuration',
  'commands',
  'shortcuts',
  'themes',
  'architecture',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const docUrls: MetadataRoute.Sitemap = docSlugs.map((slug) => ({
    url: slug === 'index' ? `${BASE}/docs` : `${BASE}/docs/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE}/docs`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...docUrls,
  ];
}
