# Website catalogue release

## Scope
Goal one updates the existing public Next.js site independently of the reusable agency CMS. Goal two remains deferred; there is no CMS, dashboard, authenticated preview, publication API or hosting change in this release.

`lib/catalogue.ts` defines six families and sixteen offerings. Only printed packaging tape (`/branded-tapes`) and aluminium/barcode asset tags (`/custom-tags`) are published. Fourteen new offerings remain draft. Their names are available for enquiries, explicitly subject to availability confirmation. Draft routes and duplicate legacy aliases return 404. Only the asset-identification category currently has a hub; other empty families lead to preselected enquiries. The sitemap uses the same publication selectors.

Do not publish additional offerings merely by changing their status: supply verified description, real imagery and alternative text, product-specific specifications/options, FAQs, quantities and timing first, and extend the generic product template with those approved details. The current generic template is a foundation, not a content-complete page for fourteen services.

## Enquiries
`/quote?product={known-product-or-family-slug}` preselects the general enquiry form. `tape` and `aluminium` aliases also select the corresponding existing calculator. Both historical calculator algorithms remain unchanged: the page has volume tiers, the modal does not. Estimates are not final quotations.

Continue on WhatsApp prepares an encoded message. The visitor must review and send it in WhatsApp. No enquiry is stored or delivered by this website and no submitted/received confirmation is displayed. Browser verification intercepts the handoff; it does not send a real customer message.

## Analytics
`CatalogueAnalytics` emits `impact:analytics` CustomEvents for product views, quote starts and WhatsApp handoffs. Payloads contain only event and an allowlisted product/family identifier or `general`; no message, URL query, phone, email or contact name is included. No analytics provider or persistent collection is configured. Connect a consent-appropriate provider later; these local events alone do not produce reports. Query-only changes on the same quote pathname are not a separate page-view event.

## Verification
- `npm run lint`: pass.
- `npx tsc --noEmit`: pass.
- `node --test tests/*.test.mjs`: 12 passed.
- `npm run build`: pass; existing routes retained, one category hub, dynamic quote route.
- Real Chromium production preview: 28 route/viewport checks across seven routes at 390, 768, 1280 and 1440px; no document overflow or uncaught page errors.
- Keyboard desktop dropdown; mobile family selection; draft product preselection; form validation and encoded WhatsApp requirements/contact/town; PII-free event payload; calculator preselection; modal estimate, Escape and focus restoration: pass.
- Draft/legacy product aliases and empty category routes: HTTP 404. Sitemap excludes draft/filter URLs.
- Impeccable detector: no findings on sampled changed UI files. Desktop/mobile first-viewport image review after eager image decoding: no material visual defects reported.

## Remaining gates
No live deployment, real message delivery, Search Console review, full-site WCAG audit, full gallery image availability audit or analytics storage verification performed. New product publishing requires client-approved content/photos. Reusable CMS tenant isolation, VPS deployment, backups/restoration, cache invalidation and CMS outage behaviour belong to goal two. Delegated implementation/review was unavailable because the configured child model was rejected before work began; controller implemented and verified directly. No independent subagent code-review approval is claimed.
