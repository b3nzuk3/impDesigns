import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { NavScrollWrapper } from '@/components/NavScrollWrapper';
import { Footer } from '@/components/Footer';
import { MobileStickyBar } from '@/components/MobileStickyBar';

export const metadata: Metadata = {
  title: 'Impact Designs - Custom Branded Tapes & Tags Kenya',
  description:
    "Kenya's specialized manufacturer of custom printed packaging tapes and anodized aluminium product tags. Durable branding for parcels, cartons, equipment, and products in Nairobi and nationwide.",
  keywords: [
    'Branded tapes Kenya',
    'Branded tapes Nairobi',
    'Custom branded tapes Kenya',
    'Custom printed tape Kenya',
    'Printed packaging tape Kenya',
    'Logo tape Kenya',
    'Packing tape printing Kenya',
    'Sellotape printing Kenya',
    'Custom tags Kenya',
    'Printed tags Kenya',
    'Product tags Kenya',
    'Custom aluminium tags Kenya',
  ],
  openGraph: {
    title: 'Impact Designs - Custom Branded Tapes & Tags Kenya',
    description:
      "Kenya's specialized manufacturer of custom printed packaging tapes and anodized aluminium product tags. Durable branding for parcels, cartons, equipment, and products in Nairobi and nationwide.",
    type: 'website',
    locale: 'en_KE',
    siteName: 'Impact Designs Kenya',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impact Designs - Custom Branded Tapes & Tags Kenya',
    description:
      "Kenya's specialized manufacturer of custom printed packaging tapes and anodized aluminium product tags. Durable branding for parcels, cartons, equipment, and products in Nairobi and nationwide.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Impact Designs Kenya',
    description:
      'Kenya specialized manufacturer of custom printed packaging tapes and anodized aluminium product tags.',
    url: 'https://impactdesigns.co.ke',
    telephone: '+254722404647',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Enterprise Road, Industrial Area',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi County',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -1.3032,
      longitude: 36.8521,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
    ],
    priceRange: 'KES',
    sameAs: ['https://wa.me/254722404647'],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col selection:bg-red-700 selection:text-white pb-20 md:pb-0">
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

