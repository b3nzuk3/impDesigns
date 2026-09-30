# Client examples — September 28 batch

All 25 JPEGs supplied in `impact/branded_tapes/` (14) and `impact/aluminium_tags/` (11) are represented in `lib/client-photo-manifest.json`. Windows Zone.Identifier metadata is excluded. Source files are unchanged.

The set includes five workshop tape photographs and 20 promotional layouts. Captions distinguish photographs from promotional artwork; printed offer text inside supplied artwork is not a current website price or specification. No client identity was inferred from filenames.

Images were EXIF-normalized and converted to WebP (Pillow quality 82, method 6), retaining their original dimensions. Total source size: 8,992,606 bytes. Total WebP size: 3,732,510 bytes.

## Delivery

Existing Cloudflare account and `impact-designs-media` bucket were confirmed before upload. Only new, content-addressed keys beneath `branded-tapes/client-examples-2026-09-28/` and `aluminium-tags/client-examples-2026-09-28/` were written. Existing numbered media keys were not replaced.

All uploads used Wrangler `r2 object put` with `--remote`, `--content-type image/webp` and `--cache-control "public, max-age=31536000, immutable"`.

Every public URL at `https://images.impactcreativedesigns.co.ke/<manifest key>` was fetched successfully, decoded with Pillow, checked against manifest dimensions, and SHA-256 matched against the converted file. The response Content-Type and immutable cache headers were checked for all 25 objects.

The manifest records the original source path and SHA-256, public object key, converted SHA-256, dimensions, bytes, caption, alt text, and visual format. Treat keys as immutable: changed artwork must get a new content-hash key.

CDN uploads are live; the website source changes are local until a separately approved site deployment. No source images, videos, logos, or existing uploaded objects were deleted.
