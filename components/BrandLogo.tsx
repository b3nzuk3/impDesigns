'use client';

import Image from 'next/image';
import React from 'react';

/**
 * Site logo lockup — matches the client's paint-drops reference:
 * drops row on top, "Impact Creative Designs" wordmark (pink/blue/black),
 * navy "BRANDED TAPES • ASSET TAGS" subtext. Rendered from the same SVG
 * at every breakpoint so the mobile and PC logos are identical.
 */
export const BrandLogo: React.FC<{ className?: string; priority?: boolean }> = ({ className = '', priority = false }) => (
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