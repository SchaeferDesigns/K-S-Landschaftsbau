import type { MetadataRoute } from 'next';
import { siteBase } from '@/config/site';
import { services } from '@/data/services';

// Noetig fuer den statischen Export nach GitHub Pages
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: { path: string; priority: number; frequency: 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1, frequency: 'weekly' },
    { path: '/leistungen', priority: 0.9, frequency: 'monthly' },
    { path: '/referenzen', priority: 0.8, frequency: 'monthly' },
    { path: '/ueber-uns', priority: 0.7, frequency: 'yearly' },
    { path: '/karriere', priority: 0.7, frequency: 'monthly' },
    { path: '/faq', priority: 0.6, frequency: 'monthly' },
    { path: '/kontakt', priority: 0.9, frequency: 'yearly' },
    { path: '/impressum', priority: 0.2, frequency: 'yearly' },
    { path: '/datenschutz', priority: 0.2, frequency: 'yearly' },
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${siteBase}${page.path}`,
      lastModified,
      changeFrequency: page.frequency,
      priority: page.priority,
    })),
    ...services.map((service) => ({
      url: `${siteBase}/leistungen/${service.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
