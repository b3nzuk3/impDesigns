import type { Metadata } from 'next';
import { OurWorkPortfolio } from './OurWorkPortfolio';
import { portfolioProjects } from '@/lib/portfolio';
import { tagPhoto } from '@/lib/media';

const pageTitle = 'Our Work | Branded Tapes & Aluminium Tags Kenya';
const pageDescription =
  'See real branded packaging tape and aluminium asset-tag projects produced in Kenya for organizations including Kenya Pipeline Company, Equity Bank, KCB Foundation and Pumwani Hospital.';
const canonicalUrl = 'https://impactdesigns.co.ke/our-work';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: 'Impact Creative Designs Kenya',
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
        creator: {
          '@type': 'Organization',
          name: 'Impact Creative Designs Kenya',
        },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <OurWorkPortfolio />
    </>
  );
}
