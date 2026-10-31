# Agent instructions

## Start here

- Read `HANDOFF.md`, `PRODUCT.md`, `docs/website-catalogue.md` and the relevant plan under `docs/plans/` before changing behaviour.
- Recheck `git status --short`, the current branch and relevant source. Preserve unrelated work; do not reset, clean, commit, push or deploy without authorization.
- The parent `/home/luffy/projects/AGENTS.md` also applies in this checkout. When `graphify-out/graph.json` exists, use scoped `graphify query`, `path` or `explain` for codebase investigation, then verify important conclusions against source. After code edits, run `graphify update .`. Generated graph data is navigation evidence, not authoritative product truth or deployment proof.

## Scope and product rules

- This repository is Impact Creative Designs' public Next.js website, not the reusable agency CMS.
- Keep the two goals separate: website expansion first; the separately hosted, multi-client Payload CMS is deferred. Do not add a database, dashboard, tenant authentication or deployment infrastructure here as an incidental website change.
- Preserve `/branded-tapes` and `/custom-tags`. Do not create duplicate `/products/` aliases for them.
- `lib/catalogue.ts` is the current local catalogue source. It contains six families and sixteen offerings; only packaging tapes and aluminium/barcode asset tags are published. The other fourteen are drafts, although visitors may enquire about availability.
- Use the shared publication selectors for routes, internal catalogue links and sitemap. Draft product pages and empty hubs must not become public; empty families currently link to preselected enquiries.
- Do not publish a draft by changing status alone. Require approved copy, real photography and alt text, specifications/options, FAQs and confirmed quantity/timing information. Extend the generic template with approved content before publishing new offerings.
- Do not invent prices, reviews, clients, production methods, minimum quantities or lead times. Do not advertise laser-machine sales or claim laser marking without confirmation.

## Architecture and files

- `app/`: App Router routes, server metadata wrappers and client page components.
- `lib/catalogue.ts`: catalogue records, publication predicates, routing and enquiry lookup.
- `lib/portfolio.ts`, `lib/client-photos.ts`, `lib/client-photo-manifest.json`: attributed real-work and gallery data.
- `lib/media.ts`: existing public Cloudflare R2 photo/video URL helpers. Keep existing URLs working.
- `lib/site-contact.ts`, `lib/site.ts`: shared contact details, public origin and URL helpers.
- `app/quote/QuotePage.tsx`: existing volume-tier tape/tag calculators plus general enquiry surface.
- `components/QuoteModal.tsx`: historical modal calculators. These intentionally have different pricing formulas from the quote page; do not silently harmonize them.
- `components/GeneralEnquiryForm.tsx`, `lib/enquiry.ts`: labelled general form and encoded WhatsApp message construction.
- `components/CatalogueAnalytics.tsx`, `lib/analytics.ts`: browser event hooks, not a persistent analytics service.
- `tests/*.test.mjs`: Node test suite, including catalogue publication, message encoding and calculator regressions.

## UI, enquiries and privacy

- Preserve supplied logo artwork and the existing orange/charcoal/warm-background industrial visual system. The supporting tagline is “Printing • Branding • Signage”. Prefer scoped changes over redesigns.
- Keep mobile layouts usable, navigation keyboard-operable, inputs labelled, focus visible and images appropriately sized. Preserve modal Escape handling and focus restoration.
- “Continue on WhatsApp” prepares a message. The visitor must press Send inside WhatsApp. Never display an enquiry submitted/received confirmation unless a real accepted backend operation exists.
- Messages should include product, quantity, requirements, contact details and delivery town. Verify URL encoding with punctuation and line breaks.
- Analytics may emit only allowlisted events and catalogue identifiers. Never send form values, messages, contacts or URL queries to analytics. No persistent analytics provider is currently configured.
- Leave environment and credential files alone unless explicitly requested. Keep future integration credentials server-only. Do not send real enquiries during tests.

## Commands and verification

Use npm and the existing lockfile. Inspect `package.json` before assuming a script exists; there is currently no `npm test` script.

```sh
npm run dev -- --hostname 127.0.0.1 --port 3000
npm run lint
npx tsc --noEmit
node --test tests/*.test.mjs
npm run build
npm run start -- --hostname 127.0.0.1 --port 3119
git diff --check
```

- Run fresh relevant tests, lint, TypeScript and production build after significant source changes. The build skips lint, so run lint separately.
- Do not build concurrently with `next dev` against the same `.next` directory. Restart a production preview after rebuilding and verify its listener belongs to this checkout.
- Browser-check changed flows and desktop/mobile geometry; a successful build alone is insufficient. Test raw route statuses, publication/sitemap policy, preselection, calculators and WhatsApp handoff without sending a real message.
- Test-only dependencies and screenshots belong in runtime scratch space, not the application dependency manifest. Do not include compiler-cache churn, generated graph output or unrelated plans in a feature commit by accident.
- Report local verification separately from live deployment, actual message delivery, analytics collection and independent review. Do not claim checks that did not run.

## Documentation maintenance

Update `HANDOFF.md` when milestones, blockers, verification or next actions change. Update `docs/website-catalogue.md` when routing, publication, enquiries or analytics behaviour changes. Keep stable engineering rules here and session-specific status in the handoff.
