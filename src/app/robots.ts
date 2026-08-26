import type { MetadataRoute } from 'next';
import { siteBase } from '@/config/site';

// Noetig fuer den statischen Export nach GitHub Pages
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${siteBase}/sitemap.xml`,
    host: siteBase,
  };
}
