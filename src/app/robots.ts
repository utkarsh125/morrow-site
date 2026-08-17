import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://morrow.utkarshpandey.in/sitemap.xml',
    host: 'https://morrow.utkarshpandey.in',
  };
}
