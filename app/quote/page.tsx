import type { Metadata } from 'next';
import QuotePage from './QuotePage';

const title = 'Request a Branded Tape or Aluminium Tag Quote';
const description =
  'Configure a tape or aluminium tag estimate, then send your specifications to request a project-specific quotation. Calculator results are estimates and require confirmation.';

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

export default function Page() {
  return <QuotePage />;
}
