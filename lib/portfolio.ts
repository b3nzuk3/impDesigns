import { tagPhoto, tapePhoto } from '@/lib/media';

export type PortfolioCategory = 'tapes' | 'tags';

export interface PortfolioProject {
  slug: string;
  category: PortfolioCategory;
  title: string;
  organizations: string[];
  description: string;
  image: string;
  imageAlt: string;
  productLabel: string;
}

/**
 * Selected client work matched to the original Cloudflare R2 photographs.
 * Organization names are limited to marks visible in those photos or already
 * attributed to the corresponding production image in the client gallery.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'adhi-pharmacy-branded-tape',
    category: 'tapes',
    title: 'Adhi Pharmacy',
    organizations: ['Adhi Pharmacy Limited'],
    description: 'A carton sealed with custom branded tape printed for Adhi Pharmacy Limited.',
    image: tapePhoto(17),
    imageAlt: 'Carton sealed with custom branded tape printed for Adhi Pharmacy Limited.',
    productLabel: 'Branded packaging tape',
  },
  {
    slug: 'kenya-pipeline-company-cape-media-asset-tags',
    category: 'tags',
    title: 'Kenya Pipeline Company & Cape Media',
    organizations: ['Kenya Pipeline Company Limited', 'Cape Media Limited'],
    description:
      'A panel of aluminium barcode asset tags includes tags marked for Kenya Pipeline Company Limited and Cape Media Limited.',
    image: tagPhoto(16),
    imageAlt:
      'Grid of aluminium barcode asset tags, including tags marked Kenya Pipeline Company Limited and Cape Media Limited.',
    productLabel: 'Aluminium barcode asset tags',
  },
  {
    slug: 'cameron-eyesupply-sharp-prints-safe-fuel-systems-tape',
    category: 'tapes',
    title: 'Cameron, Eyesupply, Sharp Prints & Safe Fuel Systems',
    organizations: ['Cameron', 'Eyesupply', 'Sharp Prints', 'Safe Fuel Systems'],
    description: 'Branded tape rolls printed for Cameron, Eyesupply, Sharp Prints, Safe Fuel Systems and other clients.',
    image: tapePhoto(1),
    imageAlt: 'Branded tape rolls printed for Cameron, Eyesupply, Sharp Prints, Safe Fuel Systems and other clients.',
    productLabel: 'Branded packaging tape',
  },
  {
    slug: 'pumwani-hospital-asset-tags',
    category: 'tags',
    title: 'Pumwani Hospital',
    organizations: ['Pumwani Hospital'],
    description:
      'Serialised aluminium tags carrying the Pumwani Hospital name and barcode identification.',
    image: tagPhoto(15),
    imageAlt:
      'Rows of aluminium barcode tags printed with Pumwani Hospital identification.',
    productLabel: 'Serialised aluminium asset tags',
  },
  {
    slug: 'aberdair-nicco-mtapai-sr-coach-tape',
    category: 'tapes',
    title: 'Aberdair Aviation, NICCO Movers, MTAPAI & S/R Coach Sacco',
    organizations: ['Aberdair Aviation', 'NICCO Movers', 'MTAPAI', 'S/R Coach Sacco'],
    description: 'Branded tape rolls for Aberdair Aviation, NICCO Movers, MTAPAI and S/R Coach Sacco.',
    image: tapePhoto(10),
    imageAlt: 'Branded tape rolls for Aberdair Aviation, NICCO Movers, MTAPAI and S/R Coach Sacco.',
    productLabel: 'Branded packaging tape',
  },
  {
    slug: 'mua-aluminium-asset-tag',
    category: 'tags',
    title: 'MUA',
    organizations: ['MUA'],
    description:
      'A brushed aluminium identification tag marked “Property of MUA” with a barcode.',
    image: tagPhoto(1),
    imageAlt: 'Brushed aluminium barcode tag marked “Property of MUA”.',
    productLabel: 'Aluminium asset tag',
  },
  {
    slug: 'kitui-green-run-event-tape',
    category: 'tapes',
    title: 'Kitui Green Run',
    organizations: ['Kitui Green Run'],
    description: 'Event branded tape printed for the Kitui Green Run — Run for Rain campaign.',
    image: tapePhoto(11),
    imageAlt: 'Event branded tape printed for the Kitui Green Run — Run for Rain campaign.',
    productLabel: 'Branded packaging tape',
  },
  {
    slug: 'mombasa-club-membership-tags',
    category: 'tags',
    title: 'The Mombasa Club',
    organizations: ['The Mombasa Club'],
    description:
      'Aluminium membership and property tags marked for The Mombasa Club.',
    image: tagPhoto(28),
    imageAlt:
      'Aluminium tags marked as property of The Mombasa Club.',
    productLabel: 'Aluminium membership tags',
  },
  {
    slug: 'kcb-foundation-asset-tag',
    category: 'tags',
    title: 'KCB Foundation',
    organizations: ['KCB Foundation'],
    description:
      'A brushed metal asset tag featuring KCB Foundation identification and a barcode.',
    image: tagPhoto(30),
    imageAlt: 'Brushed metal KCB Foundation asset tag with a barcode.',
    productLabel: 'Metal barcode asset tag',
  },
  {
    slug: 'equity-bank-asset-tag',
    category: 'tags',
    title: 'Equity Bank',
    organizations: ['Equity Bank'],
    description:
      'A metal asset tag with barcode identification and Equity branding.',
    image: tagPhoto(6),
    imageAlt: 'Metal barcode asset tag with Equity branding.',
    productLabel: 'Metal barcode asset tag',
  },
  {
    slug: 'science-research-innovation-state-department-tag',
    category: 'tags',
    title: 'State Department for Science, Research and Innovation',
    organizations: ['State Department for Science, Research and Innovation'],
    description:
      'A wide aluminium asset tag displaying the State Department for Science, Research and Innovation name and Kenya’s coat of arms.',
    image: tagPhoto(32),
    imageAlt:
      'Wide aluminium asset tag bearing the State Department for Science, Research and Innovation name and the Kenyan coat of arms.',
    productLabel: 'Aluminium institutional asset tag',
  },
];
