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
    slug: 'kenya-revenue-authority-national-biosafety-authority-tape',
    category: 'tapes',
    title: 'Kenya Revenue Authority & National Biosafety Authority',
    organizations: [
      'Kenya Revenue Authority',
      'National Biosafety Authority',
      'Innovation for Poverty Action',
      'Maralal Safaris Investment',
    ],
    description:
      'A real production photo of custom printed packaging tape includes designs for the Kenya Revenue Authority, National Biosafety Authority, Innovation for Poverty Action and Maralal Safaris Investment.',
    image: tapePhoto(17),
    imageAlt:
      'Printed tape rolls showing designs for Kenya Revenue Authority, National Biosafety Authority, Innovation for Poverty Action and Maralal Safaris Investment.',
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
    slug: 'eysupply-sharpprint-safe-fuel-systems-tape',
    category: 'tapes',
    title: 'EYSUPPLY, SharpPrint & Safe Fuel Systems',
    organizations: ['EYSUPPLY', 'SharpPrint', 'Safe Fuel Systems'],
    description:
      'Printed packaging tape samples feature the EYSUPPLY, SharpPrint and Safe Fuel Systems brand marks.',
    image: tapePhoto(1),
    imageAlt:
      'Printed tape rolls featuring EYSUPPLY, SharpPrint and Safe Fuel Systems branding.',
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
    slug: 'action-against-hunger-flash-parcel-tape',
    category: 'tapes',
    title: 'Action Against Hunger & Flash Parcel',
    organizations: ['Action Against Hunger', 'Flash Parcel'],
    description:
      'Custom printed tape rolls show Action Against Hunger and Flash Parcel designs among the production samples.',
    image: tapePhoto(10),
    imageAlt:
      'Printed tape rolls with Action Against Hunger and Flash Parcel designs.',
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
    slug: 'union-meat-group-aberdair-aviation-tape',
    category: 'tapes',
    title: 'Union Meat Group & Aberdair Aviation',
    organizations: ['Union Meat Group', 'Aberdair Aviation'],
    description:
      'Printed tape samples include a Union Meat Group design and a partly visible Aberdair Aviation mark.',
    image: tapePhoto(11),
    imageAlt:
      'Printed tape rolls showing Union Meat Group branding and partly visible Aberdair Aviation artwork.',
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
