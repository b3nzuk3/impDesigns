import { resolveEnquiryProduct } from './catalogue';
export type CatalogueEvent = 'product_view' | 'quote_start' | 'whatsapp_handoff';
export function trackCatalogueEvent(event: CatalogueEvent, product: string) {
  if (typeof window === 'undefined') return;
  if (!['product_view', 'quote_start', 'whatsapp_handoff'].includes(event)) return;
  const identifier = resolveEnquiryProduct(product)?.slug || 'general';
  // Intentionally no URLs, query strings, form values, contact details or message text.
  window.dispatchEvent(new CustomEvent('impact:analytics', { detail: { event, product: identifier } }));
}
