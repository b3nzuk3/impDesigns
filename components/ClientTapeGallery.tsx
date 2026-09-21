import Image from 'next/image';
import React from 'react';
import { tapePhoto } from '@/lib/media';

interface ClientWork {
  n: number;
  alt: string;
  label: string;
  aspect: string;
  span?: string;
}

/**
 * Real client work photographed at the Impact Creative Designs facility.
 * Key numbering matches the uploaded R2 objects (branded-tapes/tape-XX.webp).
 */
const CLIENT_WORK: ClientWork[] = [
  {
    n: 16,
    alt: 'Wide display of multiple branded packing tape rolls produced for Kenyan companies',
    label: 'PRODUCTION FLOOR',
    aspect: 'aspect-[4/3]',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    n: 17,
    alt: 'Carton sealed with custom branded tape printed for Adhi Pharmacy Limited',
    label: 'ADHI PHARMACY',
    aspect: 'aspect-[3/4]',
  },
  {
    n: 1,
    alt: 'Branded tape rolls printed for Cameron, Eyesupply, Sharp Prints, Safe Fuel Systems and other clients',
    label: 'MULTI-CLIENT RUN',
    aspect: 'aspect-[4/3]',
  },
  {
    n: 10,
    alt: 'Branded tape rolls for Aberdair Aviation, NICCO Movers, MTAPAI and S/R Coach Sacco',
    label: 'LOGISTICS & AVIATION',
    aspect: 'aspect-[3/4]',
  },
  {
    n: 11,
    alt: 'Event branded tape printed for Kitui Green Run — Run for Rain campaign',
    label: 'KITUI GREEN RUN',
    aspect: 'aspect-[3/4]',
  },
  {
    n: 21,
    alt: 'Assorted printed tape rolls stacked on a shipping carton at the production facility',
    label: 'ROLL LIBRARY',
    aspect: 'aspect-[4/3]',
  },
];

/**
 * Gallery of real client work served from Cloudflare R2 via
 * images.impactcreativedesigns.co.ke (WebP, CDN-cached).
 */
export const ClientTapeGallery: React.FC<{ className?: string; id?: string }> = ({
  className = '',
  id = 'client-tape-gallery',
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
          Branded for businesses across Kenya
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
          Actual tape printed and delivered by Impact Creative Designs — from pharmacies and logistics
          fleets to event organisers. Your logo could be on the next roll.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {CLIENT_WORK.map((w) => (
          <figure
            key={w.n}
            className={`group relative overflow-hidden border border-neutral-300 bg-neutral-100 ${w.span ?? ''}`}
          >
            <div className={`relative ${w.aspect} h-full`}>
              <Image
                src={tapePhoto(w.n)}
                alt={w.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-2.5 pt-8">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                  {w.label}
                </span>
              </div>
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
