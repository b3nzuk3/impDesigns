# Expanded client photo galleries

Approved scope: expand existing tape and aluminium-tag galleries with all 25 supplied photos (14 tape, 11 tag), preserve current examples, and offer full-size viewing. No pagination, carousel-only hiding, or site deployment. Work on feature/expanded-client-photo-galleries; no commits/pushes.

1. Inventory all JPEG source files, excluding Zone.Identifier metadata. Create traceable manifest with source, SHA-256, dimensions, immutable new R2 key, caption and alt text. Convert EXIF-normalized images to WebP quality 82/method 6. Inspect contact sheets before assigning descriptions; do not infer client names.
2. Confirm Cloudflare account and existing bucket/domain. Upload only new immutable keys with remote, explicit image/webp content type and immutable cache control. Publicly fetch and decode every image, verifying byte hashes.
3. Write failing regression checks for source/manifest/gallery completeness. Add central catalog and reusable accessible full-size viewer; extend existing gallery components without altering existing examples. All new figures remain directly rendered, lazy loaded, with uncropped full-size viewing. Support keyboard dismissal, focus restoration and descriptive labels.
4. Run regression checks, TypeScript, lint, production build. Verify both product routes in a production browser at desktop and mobile: counts, unique sources, loaded images, viewer open/close/keyboard, no overflow or app console errors. Review specification and code quality via subagents.
5. Report exact changed files, uploaded/verified totals, tests and branch state. Distinguish live CDN uploads from undeployed local website changes. Preserve pre-existing untracked docs.
