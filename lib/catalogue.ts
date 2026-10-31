export interface CatalogueCategory { slug: string; name: string; description: string }
export interface CatalogueProduct {
  slug: string; name: string; categorySlug: string; status: 'draft' | 'published';
  href: string; description: string; image?: string; imageAlt?: string;
}
export const catalogueCategories: CatalogueCategory[] = [
  { slug: 'branded-tapes', name: 'Branded Tapes', description: 'Printed packaging tapes for branded cartons and parcels.' },
  { slug: 'asset-tags-identification', name: 'Asset Tags & Identification', description: 'Aluminium asset identification and staff ID enquiries.' },
  { slug: 'apparel-workwear', name: 'Apparel & Workwear', description: 'Discuss jersey printing and branded reflector jackets.' },
  { slug: 'signs-banners-vehicle-branding', name: 'Signs, Banners & Vehicle Branding', description: 'Discuss banners, signs and vehicle branding.' },
  { slug: 'corporate-gifts-promotional-items', name: 'Corporate Gifts & Promotional Items', description: 'Discuss branded gifts for your next campaign or event.' },
  { slug: 'business-stationery-print', name: 'Business Stationery & Print', description: 'Discuss business cards, presentation folders and calendars.' },
];
const drafts: [string, string, string][] = [
  ['staff-id-cards', 'Staff ID cards', 'asset-tags-identification'],
  ['jersey-printing', 'Jersey printing', 'apparel-workwear'],
  ['branded-reflector-jackets', 'Branded reflector jackets', 'apparel-workwear'],
  ['roll-up-banners', 'Roll-up banners', 'signs-banners-vehicle-branding'],
  ['backdrop-banners', 'Backdrop banners', 'signs-banners-vehicle-branding'],
  ['3d-signs', '3D signs', 'signs-banners-vehicle-branding'],
  ['vehicle-branding-stickers', 'Vehicle branding and stickers', 'signs-banners-vehicle-branding'],
  ['branded-notebooks', 'Branded notebooks', 'corporate-gifts-promotional-items'],
  ['water-bottles', 'Water bottles', 'corporate-gifts-promotional-items'],
  ['fridge-magnets', 'Fridge magnets', 'corporate-gifts-promotional-items'],
  ['button-badges', 'Button badges', 'corporate-gifts-promotional-items'],
  ['business-cards', 'Business cards', 'business-stationery-print'],
  ['presentation-folders', 'Presentation folders', 'business-stationery-print'],
  ['calendars', 'Calendars', 'business-stationery-print'],
];
export const catalogueProducts: CatalogueProduct[] = [
  { slug: 'printed-packaging-tapes', name: 'Printed packaging tapes', categorySlug: 'branded-tapes', status: 'published', href: '/branded-tapes', description: 'Custom printed packaging tape with your business branding.', image: '/images/branded-tape-rolls.jpg', imageAlt: 'Printed packaging tape rolls with business branding' },
  { slug: 'aluminium-barcode-asset-tags', name: 'Aluminium and barcode asset tags', categorySlug: 'asset-tags-identification', status: 'published', href: '/custom-tags', description: 'Aluminium identification tags with logos, serial numbers and barcodes.', image: '/images/aluminium-tag-brushed-closeup.jpg', imageAlt: 'Close-up of a brushed aluminium barcode identification tag' },
  ...drafts.map(([slug, name, categorySlug]): CatalogueProduct => ({ slug, name, categorySlug, status: 'draft', href: `/products/${slug}`, description: `Discuss your ${name.toLowerCase()} requirements with our team. Availability and specifications require confirmation.` })),
];
export function getPublishedProducts(categorySlug?: string) {
  return catalogueProducts.filter((p) => p.status === 'published' && (!categorySlug || p.categorySlug === categorySlug));
}
export function getProductBySlug(slug: string) { return catalogueProducts.find((p) => p.slug === slug); }
export function getCategoryHref(category: CatalogueCategory) {
  if (category.slug === 'branded-tapes') return '/branded-tapes';
  return getPublishedProducts(category.slug).length ? `/categories/${category.slug}` : `/quote?product=${category.slug}`;
}
export function getRoutableProduct(slug: string) {
  const product = getProductBySlug(slug);
  return product?.status === 'published' && product.href === `/products/${slug}` && product.image && product.imageAlt ? product : undefined;
}
export function getPublishedCategory(slug: string) {
  return catalogueCategories.find((c) => c.slug === slug && c.slug !== 'branded-tapes' && getPublishedProducts(c.slug).length > 0);
}
export function resolveEnquiryProduct(value?: string) {
  const alias = value === 'tape' ? 'printed-packaging-tapes' : value === 'aluminium' ? 'aluminium-barcode-asset-tags' : value;
  return catalogueProducts.find((p) => p.slug === alias) || catalogueCategories.find((c) => c.slug === alias);
}
