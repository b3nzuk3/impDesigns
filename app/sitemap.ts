import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl('/'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: absoluteUrl('/branded-tapes'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: absoluteUrl('/custom-tags'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: absoluteUrl('/our-work'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: absoluteUrl('/quote'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: absoluteUrl('/contact'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
