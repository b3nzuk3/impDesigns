import type { Metadata } from 'next';
import { StructuredData } from '@/components/StructuredData';
import { tagPhoto } from '@/lib/media';
import { absoluteUrl } from '@/lib/site';
import CustomTagsPage from './CustomTagsPage';

const title = 'Custom Aluminium & Asset Tags in Kenya';
const description =
  'Custom anodized aluminium tags, barcode asset labels, and industrial nameplates with logos, serial numbers, QR codes, adhesive backing, or rivet holes. Produced for projects in Nairobi and across Kenya.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/custom-tags' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    title,
    description:
      'Custom anodized aluminium tags, barcode asset labels, and industrial nameplates for organizations in Nairobi and across Kenya.',
    url: '/custom-tags',
    images: [
      {
        url: tagPhoto(16),
        alt: 'Anodized aluminium barcode asset tags',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [tagPhoto(16)],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': absoluteUrl('/custom-tags#service'),
  name: title,
  description,
  serviceType: 'Custom aluminium asset tags and industrial nameplates',
  provider: { '@id': absoluteUrl('/#business') },
  areaServed: { '@type': 'Country', name: 'Kenya' },
  url: absoluteUrl('/custom-tags'),
};

export default function Page() {
  return (
    <>
      <StructuredData data={structuredData} />
      <CustomTagsPage />
    </>
  );
}
