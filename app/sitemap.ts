import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';
import { catalogueCategories, catalogueProducts, getPublishedCategory, getRoutableProduct } from '@/lib/catalogue';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...catalogueCategories.filter((category) => getPublishedCategory(category.slug)).map((category) => ({ url: absoluteUrl(`/categories/${category.slug}`), changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...catalogueProducts.filter((product) => getRoutableProduct(product.slug)).map((product) => ({ url: absoluteUrl(product.href), changeFrequency: 'monthly' as const, priority: 0.8 })),
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
