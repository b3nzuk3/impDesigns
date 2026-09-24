import { Inter, Barlow_Condensed } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { NavScrollWrapper } from '@/components/NavScrollWrapper';
import { Footer } from '@/components/Footer';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { StructuredData } from '@/components/StructuredData';
import { absoluteUrl, SITE_URL } from '@/lib/site';
import {
  SITE_EMAIL,
  SITE_GEO,
  SITE_NAME,
  SITE_OPENING_HOURS,
  SITE_PHONE_E164,
  SITE_POSTAL_ADDRESS,
  SITE_WHATSAPP_URL,
} from '@/lib/site-contact';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

/**
 * Brand wordmark face for the logo lockup (see components/BrandLogo.tsx).
 * Barlow Condensed ExtraBold matches the client artwork's condensed heavy
 * letterforms; loading it as a real webfont keeps the lockup crisp at any size.
 */
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-logo',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Custom Branded Tapes & Aluminium Tags Kenya | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Custom printed packaging tape and anodized aluminium tags for parcels, cartons, equipment, and products in Nairobi and across Kenya.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Custom Branded Tapes & Aluminium Tags Kenya | ${SITE_NAME}`,
    description:
      'Custom printed packaging tape and anodized aluminium tags for parcels, cartons, equipment, and products in Nairobi and across Kenya.',
    type: 'website',
    locale: 'en_KE',
    siteName: SITE_NAME,
    url: absoluteUrl('/'),
  },
  twitter: {
    card: 'summary_large_image',
    title: `Custom Branded Tapes & Aluminium Tags Kenya | ${SITE_NAME}`,
    description:
      'Custom printed packaging tape and anodized aluminium tags for parcels, cartons, equipment, and products in Nairobi and across Kenya.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const businessId = absoluteUrl('/#business');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': businessId,
        name: SITE_NAME,
        url: absoluteUrl('/'),
        telephone: SITE_PHONE_E164,
        email: SITE_EMAIL,
        address: {
          '@type': 'PostalAddress',
          ...SITE_POSTAL_ADDRESS,
        },
        geo: {
          '@type': 'GeoCoordinates',
          ...SITE_GEO,
        },
        openingHoursSpecification: SITE_OPENING_HOURS,
        sameAs: [SITE_WHATSAPP_URL],
      },
      {
        '@type': 'WebSite',
        '@id': absoluteUrl('/#website'),
        url: absoluteUrl('/'),
        publisher: { '@id': businessId },
        inLanguage: 'en-KE',
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <StructuredData data={jsonLd} />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${barlowCondensed.variable} font-sans min-h-screen flex flex-col selection:bg-orange-600 selection:text-white pb-20 md:pb-0`}>
        <NavScrollWrapper>
          <Navbar />
        </NavScrollWrapper>
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}

