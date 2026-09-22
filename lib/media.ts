/**
 * Central config for Cloudflare R2-hosted media (real client work photos).
 * Served via the bucket's attached custom domain (Cloudflare CDN, immutable cache).
 */
export const MEDIA_BASE = 'https://images.impactcreativedesigns.co.ke';

/** URL for a branded-tape photo uploaded to R2 (tape-01..tape-26). */
export const tapePhoto = (n: number) => `${MEDIA_BASE}/branded-tapes/tape-${String(n).padStart(2, '0')}.webp`;

/** URL for an aluminium-tag photo uploaded to R2 (tag-01..tag-32). */
export const tagPhoto = (n: number) => `${MEDIA_BASE}/aluminium-tags/tag-${String(n).padStart(2, '0')}.webp`;

/**
 * Versioned video assets (immutable filenames; bump the -vN suffix when the
 * client supplies new footage — never edit an existing key in place).
 *
 * Kept separate from photo helpers so the delivery can later migrate to
 * Cloudflare Stream (HLS/ABR) by swapping only these constants.
 */
export const VIDEO_BASE = `${MEDIA_BASE}/videos`;

/** Optimized H.264 web MP4 of the client's tape-printing production footage. */
export const tapeManufacturingVideo = () => `${VIDEO_BASE}/branded-tape-manufacturing-v1.mp4`;

/** Poster frame (real footage, ~18s): AVIF primary, WebP fallback. */
export const tapeManufacturingPosterAvif = () => `${VIDEO_BASE}/tape-manufacturing-poster-v1.avif`;
export const tapeManufacturingPosterWebp = () => `${VIDEO_BASE}/tape-manufacturing-poster-v1.webp`;
