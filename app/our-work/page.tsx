import type { Metadata } from 'next';
import { OurWorkPortfolio } from './OurWorkPortfolio';
import { tagPhoto } from '@/lib/media';
import { StructuredData } from '@/components/StructuredData';
import { absoluteUrl } from '@/lib/site';
import { portfolioProjects } from '@/lib/portfolio';

const pageTitle = 'Our Work | Branded Tapes & Aluminium Tags Kenya';
const pageDescription =
  'Explore real production photos of custom branded packaging tape and aluminium asset tags made for businesses and institutions across Kenya.';
const canonicalUrl = absoluteUrl('/our-work');

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    images: [
      {
        url: tagPhoto(30),
        width: 1600,
        height: 790,
        alt: 'KCB Foundation aluminium asset tag produced by Impact Creative Designs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [tagPhoto(30)],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: pageTitle,
  description: pageDescription,
  url: canonicalUrl,
  about: { '@id': absoluteUrl('/#business') },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: portfolioProjects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        image: project.image,
        creator: { '@id': absoluteUrl('/#business') },
        about: project.organizations.map((name) => ({
          '@type': 'Organization',
          name,
        })),
      },
    })),
  },
};

export default function OurWorkPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <OurWorkPortfolio />
    </>
  );
}
