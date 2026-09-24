import type { Metadata } from 'next';
import { StructuredData } from '@/components/StructuredData';
import { tapePhoto } from '@/lib/media';
import { absoluteUrl } from '@/lib/site';
import BrandedTapesPage from './BrandedTapesPage';

const title = 'Custom Branded Packaging Tape in Kenya';
const description =
  'Printed BOPP logo tape for cartons and parcel packaging, with production in Nairobi and delivery options for businesses across Kenya. Review tape specifications and request a project-specific quote.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/branded-tapes' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    title,
    description:
      'Custom printed BOPP packaging tape with logo options for businesses in Nairobi and across Kenya.',
    url: '/branded-tapes',
    images: [
      {
        url: tapePhoto(2),
        alt: 'Custom printed branded packaging tape',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [tapePhoto(2)],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': absoluteUrl('/branded-tapes#service'),
  name: title,
  description,
  serviceType: 'Custom printed BOPP packaging tape',
  provider: { '@id': absoluteUrl('/#business') },
  areaServed: { '@type': 'Country', name: 'Kenya' },
  url: absoluteUrl('/branded-tapes'),
};

export default function Page() {
  return (
    <>
      <StructuredData data={structuredData} />
      <BrandedTapesPage />
    </>
  );
}
