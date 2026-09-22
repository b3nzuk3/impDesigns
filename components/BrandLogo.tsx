'use client';

import Image from 'next/image';
import React from 'react';

/**
 * Brand logo lockup — horizontal layout matching the client's mockup:
 * square 2x2 paint-drop icon on the left, stacked text on the right
 * (one-line "Impact Creative Designs" wordmark over the tagline).
 *
 * Assets are cropped from the client artwork (impact/logo.svg) at 2x:
 *   /images/impact-drops-icon.png   504x647  — 4 CMYK drops in a 2x2 grid
 *   /images/impact-wordmark.png    2967x337  — "Impact Creative Designs" line
 *   /images/impact-tagline.png     2805x98   — "BRANDED TAPES • ASSET TAGS"
 *
 * The wordmark is sized to fill the text column's width; the icon height
 * equals wordmark + gap + tagline so the lockup is vertically tight.
 * Everything scales together — box grows, font grows with it.
 *
 * The old footer variant (LegacyBrandLogo) is unchanged below.
 */

export type BrandLogoSize = 'nav' | 'box';

export const BrandLogo: React.FC<{
  className?: string;
  priority?: boolean;
  /** kept for API compatibility; the lockup scales with its container */
  size?: BrandLogoSize;
}> = ({ className = '', priority = false }) => {
  return (
    <div className={`flex h-full w-full items-center gap-[7%] pr-[2%] ${className}`}>
      {/* Paint-drop icon — square, spans the full text-column height */}
      <div className="relative h-full shrink-0 aspect-square">
        <Image
          src="/images/impact-drops-icon.png"
          alt=""
          aria-hidden="true"
          fill
          priority={priority}
          unoptimized
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Text column: wordmark fills the width, tagline tracks it */}
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <Image
          src="/images/impact-wordmark.png"
          alt="Impact Creative Designs"
          width={2967}
          height={337}
          priority={priority}
          unoptimized
          className="h-auto w-full"
        />
        <Image
          src="/images/impact-tagline.png"
          alt="Branded Tapes • Asset Tags"
          width={2805}
          height={98}
          priority={priority}
          unoptimized
          className="mt-[4%] h-auto w-[92%]"
        />
      </div>
    </div>
  );
};

/**
 * Footer variant. The footer is #111111 and the client artwork's "Designs" is
 * near-black (#050505) — illegible there — so this slot keeps the older
 * hand-built lockup (impact-designs-logo-v2.svg) tuned for dark backgrounds.
 */
export const LegacyBrandLogo: React.FC<{ className?: string; priority?: boolean }> = ({
  className = '',
  priority = false,
}) => (
  <Image
    src="/images/impact-designs-logo-v2.svg"
    alt="Impact Creative Designs — Branded Tapes • Asset Tags"
    width={360}
    height={100}
    priority={priority}
    unoptimized
    sizes="220px"
    className={`h-full w-full object-contain ${className}`}
  />
);
