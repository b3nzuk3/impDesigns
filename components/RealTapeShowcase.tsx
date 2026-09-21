'use client';

import Image from 'next/image';
import React from 'react';
import { tapePhoto } from '@/lib/media';

interface RealTapeShowcaseProps {
  compact?: boolean;
  className?: string;
  id?: string;
}

/**
 * A static reference gallery using photographs of real printed tape produced
 * by Impact Creative Designs, served from Cloudflare R2 as WebP.
 */
export const RealTapeShowcase: React.FC<RealTapeShowcaseProps> = ({
  compact = false,
  className = '',
  id = 'real-tape-showcase',
}) => {
  return (
    <section
      className={`relative overflow-hidden border-2 border-neutral-900 bg-neutral-950 text-white shadow-[6px_6px_0px_#111111] ${
        compact ? 'p-3 sm:p-4' : 'p-4 sm:p-6'
      } ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="relative z-10 mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs sm:text-[10px] font-bold uppercase tracking-[0.1em] text-orange-200">
            Physical tape references
          </p>
          <h2
            id={`${id}-title`}
            className="mt-1 font-mono text-lg font-black uppercase tracking-tight text-white sm:text-2xl"
          >
            See the print on the real roll
          </h2>
        </div>
        <p className="max-w-sm font-sans text-xs leading-relaxed text-neutral-400">
          Printed tape rolls and an applied carton seal, photographed as material references—not animated illustrations.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-[1.35fr_0.85fr]">
        <figure className="group overflow-hidden border border-neutral-700 bg-neutral-900">
          <div className={`relative ${compact ? 'aspect-[1.45]' : 'aspect-[1.2]'}`}>
            <Image
              src={tapePhoto(16)}
              alt="A collection of real printed branded packing tape rolls produced by Impact Creative Designs"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 70vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-3 pt-10">
              <span className="font-mono text-[11px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                Printed tape roll samples
              </span>
            </div>
          </div>
          <figcaption className="border-t border-neutral-800 px-3 py-2 font-mono text-[11px] sm:text-[10px] uppercase tracking-[0.08em] text-neutral-300">
            Logo repeats, ink coverage, and core finish
          </figcaption>
        </figure>

        <figure className="group overflow-hidden border border-neutral-700 bg-neutral-900">
          <div className={`relative ${compact ? 'aspect-[1.45]' : 'aspect-[1.2]'}`}>
            <Image
              src={tapePhoto(17)}
              alt="Real branded packing tape shown on rolls and sealing a client carton"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 40vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-3 pt-10">
              <span className="font-mono text-[11px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                Tape in use
              </span>
            </div>
          </div>
          <figcaption className="border-t border-neutral-800 px-3 py-2 font-mono text-[11px] sm:text-[10px] uppercase tracking-[0.08em] text-neutral-300">
            Branded seal applied to a shipping carton
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
