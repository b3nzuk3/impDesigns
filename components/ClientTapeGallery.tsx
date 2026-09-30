import React from 'react';
import { ClientPhotoGallery } from '@/components/ClientPhotoGallery';
import { CLIENT_PHOTOS, legacyTapePhotos } from '@/lib/client-photos';

const tapePhotos = [
  ...legacyTapePhotos,
  ...CLIENT_PHOTOS.filter((photo) => photo.category === 'tape'),
];

/** Gallery of real client tape work, including every supplied new example. */
export const ClientTapeGallery: React.FC<{ className?: string; id?: string }> = ({
  className = '',
  id = 'client-tape-gallery',
}) => (
  <section
    id={id}
    className={`border-2 border-neutral-900 bg-white p-6 shadow-[6px_6px_0px_#111111] sm:p-10 ${className}`}
    aria-labelledby={`${id}-title`}
  >
    <div className="mb-8 max-w-2xl">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-orange-600">Real client production</p>
      <h2 id={`${id}-title`} className="mt-1 font-mono text-2xl font-black uppercase tracking-tight text-neutral-950 sm:text-3xl">
        Branded for businesses across Kenya
      </h2>
      <p className="mt-2 font-sans text-sm leading-relaxed text-neutral-600">
        Actual tape printed and delivered by Impact Creative Designs — from pharmacies and logistics
        fleets to event organisers. Your logo could be on the next roll.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
        Browse production photos and promotional designs. Select any example for a full-size view.
      </p>
    </div>

    <ClientPhotoGallery photos={tapePhotos} imageClassName="object-cover" />

    <p className="mt-6 text-xs leading-relaxed text-neutral-600">
      Promotional artwork is shown as a design example. Contact us for current pricing and specifications.
    </p>
  </section>
);
