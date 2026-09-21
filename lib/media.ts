/**
 * Central config for Cloudflare R2-hosted media (real client work photos).
 * Served via the bucket's attached custom domain (Cloudflare CDN, immutable cache).
 */
export const MEDIA_BASE = 'https://images.impactcreativedesigns.co.ke';

/** URL for a branded-tape photo uploaded to R2 (tape-01..tape-26). */
export const tapePhoto = (n: number) => `${MEDIA_BASE}/branded-tapes/tape-${String(n).padStart(2, '0')}.webp`;

/** URL for an aluminium-tag photo uploaded to R2 (tag-01..tag-32). */
export const tagPhoto = (n: number) => `${MEDIA_BASE}/aluminium-tags/tag-${String(n).padStart(2, '0')}.webp`;
