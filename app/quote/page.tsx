import type { Metadata } from 'next';
import QuotePage from './QuotePage';

const title = 'Request a Printing, Branding or Signage Quote';
const description =
  'Prepare a printing, branding or signage enquiry, or configure a tape or aluminium tag estimate. Continue on WhatsApp to review and send your project requirements.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/quote' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    title,
    description,
    url: '/quote',
  },
};

export default async function Page({ searchParams }: { searchParams: Promise<{ product?: string | string[] }> }) {
  const value = (await searchParams).product;
  return <QuotePage key={typeof value === 'string' ? value : 'general'} initialProduct={typeof value === 'string' ? value : ''} />;
}
