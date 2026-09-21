import Image from 'next/image';
import React from 'react';
import { tagPhoto } from '@/lib/media';

interface ClientTag {
  n: number;
  alt: string;
  label: string;
  aspect: string;
  span?: string;
}

/**
 * Real anodized aluminium asset tags photographed at the Impact Creative Designs
 * facility. Key numbering matches the uploaded R2 objects (aluminium-tags/tag-XX.webp).
 */
const CLIENT_TAGS: ClientTag[] = [
  {
    n: 16,
    alt: 'Grid of barcode asset tags produced for Kenya Pipeline, Cape Media and other organisations',
    label: 'MULTI-CLIENT RUN',
    aspect: 'aspect-[4/3]',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    n: 15,
    alt: 'Serialised QR asset tags produced for Pumwani Maternity and Referral Hospital',
    label: 'PUMWANI HOSPITAL',
    aspect: 'aspect-[9/16]',
  },
  {
    n: 1,
    alt: 'Brushed aluminium property tag with barcode produced for MUA',
    label: 'MUA',
    aspect: 'aspect-[8/3]',
  },
  {
    n: 28,
    alt: 'Anodized aluminium membership tags produced for The Mombasa Club, established 1897',
    label: 'MOMBASA CLUB',
    aspect: 'aspect-[4/3]',
  },
  {
    n: 30,
    alt: 'Brushed metal asset tag with barcode produced for KCB Foundation',
    label: 'KCB FOUNDATION',
    aspect: 'aspect-[4/3]',
  },
  {
    n: 6,
    alt: 'Metal asset tag with barcode produced for Equity Bank',
    label: 'EQUITY',
    aspect: 'aspect-[2/1]',
  },
  {
    n: 32,
    alt: 'Official asset tag with Kenyan coat of arms for the State Department for Science, Research and Innovation',
    label: "GOV'T OF KENYA",
    aspect: 'aspect-[3.5/1]',
  },
];

/**
 * Gallery of real client aluminium tag work served from Cloudflare R2 via
 * images.impactcreativedesigns.co.ke (WebP, CDN-cached).
 */
export const ClientTagGallery: React.FC<{ className?: string; id?: string }> = ({
  className = '',
  id = 'client-tag-gallery',
}) => {
  return (
    <section
      id={id}
      className={`border-2 border-neutral-900 bg-white p-6 sm:p-10 shadow-[6px_6px_0px_#111111] ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="mb-8 max-w-2xl">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-orange-600">
          Real client production
        </p>
        <h2
          id={`${id}-title`}
          className="mt-1 text-2xl sm:text-3xl font-black font-mono uppercase tracking-tight text-neutral-950"
        >
          Asset tags trusted by institutions
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
          Actual anodized aluminium tags produced by Impact Creative Designs — from banks and hospitals
          to government departments. Built to outlast the assets they mark.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {CLIENT_TAGS.map((w) => (
          <figure
            key={w.n}
            className={`group relative flex items-center justify-center overflow-hidden border border-neutral-300 bg-neutral-100 ${w.span ?? ''}`}
          >
            <div className={`relative w-full ${w.aspect} h-full`}>
              <Image
                src={tagPhoto(w.n)}
                alt={w.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute left-2 top-2 bg-neutral-950/90 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                {w.label}
              </span>
            </div>
          </figure>
        ))}
      </div>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.08em] text-neutral-400">
        Client names shown with production reference · new photos added as jobs ship
      </p>
    </section>
  );
};
