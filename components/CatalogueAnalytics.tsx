 'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { catalogueProducts } from '@/lib/catalogue';
import { trackCatalogueEvent } from '@/lib/analytics';
export function CatalogueAnalytics() {
  const pathname = usePathname();
  useEffect(() => {
    const product = catalogueProducts.find((p) => p.status === 'published' && p.href === pathname);
    if (product) trackCatalogueEvent('product_view', product.slug);
    if (pathname === '/quote') {
      trackCatalogueEvent('quote_start', new URLSearchParams(window.location.search).get('product') || 'general');
    }
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element)?.closest?.('a');
      if (!anchor) return;
      const target = new URL(anchor.href, window.location.origin);
      if (target.protocol === 'https:' && target.hostname === 'wa.me') {
        trackCatalogueEvent('whatsapp_handoff', anchor.dataset.product || product?.slug || 'general');
      }
    };
    document.addEventListener('click', onClick);
    const onPreparedHandoff = (event: Event) => trackCatalogueEvent('whatsapp_handoff', (event as CustomEvent<{ product: string }>).detail.product);
    document.addEventListener('impact:whatsapp', onPreparedHandoff);
    return () => { document.removeEventListener('click', onClick); document.removeEventListener('impact:whatsapp', onPreparedHandoff); };
  }, [pathname]);
  return null;
}
