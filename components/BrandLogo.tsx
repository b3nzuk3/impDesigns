'use client';

import Image from 'next/image';
import React from 'react';

/**
 * Brand logo lockup — horizontal layout matching the client's mockup:
 * four paint-drop icons in a horizontal row on the left, stacked text on the right
 * (one-line "Impact Creative Designs" wordmark over the tagline).
 *
 * Assets are cropped from the client artwork (impact/logo.svg) at 2x:
 *   /images/impact-logo-paint-drops-160.png  — blue, magenta, yellow, black drops
 *   /images/impact-wordmark.png     380x43   — "Impact Creative Designs" line
 *   /images/impact-tagline.png      350x12   — "BRANDED TAPES • ASSET TAGS"
 *
 * The wordmark is sized to fill the text column's width; the icon strip
 * sits beside the vertically stacked wordmark and tagline.
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
    <div className={`flex h-full w-full items-center gap-[5%] pr-[2%] ${className}`}>
      {/* Four paint-drop icons — left-to-right order matches the client reference */}
      <div className="relative h-full w-[30%] shrink-0">
        <Image
          src="/images/impact-logo-paint-drops-160.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 768px) 66px, 96px"
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Text column: wordmark fills the width, tagline tracks it */}
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <Image
          src="/images/impact-wordmark.png"
          alt="Impact Creative Designs"
          width={380}
          height={43}
          priority={priority}
          sizes="(max-width: 640px) 140px, (max-width: 1024px) 170px, 190px"
          className="h-auto w-full"
        />
        <Image
          src="/images/impact-tagline.png"
          alt="Branded Tapes • Asset Tags"
          width={350}
          height={12}
          sizes="(max-width: 640px) 130px, (max-width: 1024px) 155px, 175px"
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
