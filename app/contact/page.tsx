import type { Metadata } from 'next';
import ContactPage from './ContactPage';

const title = 'Contact Our Nairobi Tape & Tag Production Team';
const description =
  'Contact Impact Creative Designs at Kai Plaza, 6 Tom Mboya St in Nairobi about printed packaging tape, custom aluminium tags, quotations, and conditional sample options.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    title,
    description,
    url: '/contact',
  },
};

export default function Page() {
  return <ContactPage />;
}
