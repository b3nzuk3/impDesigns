# Impact website expansion Implementation Plan
> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.
**Goal:** Ship the public website expansion independently, then tackle the reusable agency CMS as a separate project.
**Architecture:** A typed local catalogue registry is the website's content source for this release. Published-only selectors drive routes, category visibility and sitemap; unapproved offerings remain drafts. CMS integration is explicitly deferred to goal two, not simulated.
**Tech Stack:** Existing Next.js 15, React 19, TypeScript, Tailwind 4, Node tests.

## Goal one — website (implemented and locally verified; not deployed)
Baseline: master, unrelated untracked SEO plan preserved. npm run lint and five Node tests pass. Existing quote page and modal have different formulas; preserve both rather than silently changing prices. Images use the existing R2 domain and local assets. No analytics provider found. Next output is standalone; actual production hosting configuration is not available here.

### Task 1: Catalogue foundation
Create lib/catalogue.ts, category and product routes, published-only selectors and catalogue regression tests. Six families, sixteen offerings, two published and fourteen drafts. Preserve legacy routes with no duplicate product aliases. Hide empty hubs and return 404 for drafts. Add metadata, breadcrumbs and price-free Service schema.
### Task 2: Enquiries
Modify app/quote/QuotePage.tsx, app/quote/page.tsx and components/QuoteModal.tsx. Preserve tape/tag calculations. Add product preselection, general enquiries, requirements, contacts and delivery town. Remove fake submissions. Use Continue on WhatsApp with explicit send-in-WhatsApp disclosure. Test encoded punctuation/newlines and absence of personal details in analytics.
### Task 3: Public shell and homepage
Modify app/page.tsx, components/Navbar.tsx, Footer.tsx, BrandLogo.tsx and MobileStickyBar.tsx. Keep incumbent industrial design and real portfolio. Add six family entry points; empty families link to preselected enquiry, not empty hubs. Broaden hero and metadata. Preserve ordering steps and final CTA.
### Task 4: Integration and verification
Run TypeScript, lint, Node tests, production build and browser flows at desktop/mobile. Verify drafts/aliases 404, sitemap publication policy, calculator outputs, menus and WhatsApp payloads. Inspect console and geometry; record limitations. No commit, push or live deployment without request.

## Goal two — reusable agency CMS (not started)
Separate application/repository: Payload tenant models and permissions, isolation tests, VPS Docker/Postgres/Caddy, R2, encrypted off-server backups and restore test. Only then integrate server-side credentials, authenticated previews, signed webhooks, client-aware caches and outage fallback into websites. Infrastructure and production access remain prerequisites.

## Publication gate
Only tapes and aluminium tags launch in goal one. Draft priorities: staff IDs, jerseys, reflector jackets, roll-up banners, vehicle branding, business cards. Do not invent production methods, prices, minimum quantities, lead times or images.

## Verification handoff
See `docs/website-catalogue.md`: twelve tests, lint, TypeScript, production build and 28 real-browser route/viewport checks passed. No uncaught browser errors or tested document overflow. WhatsApp handoff intercepted, not sent. Analytics events are local hooks, not persistent reporting. Generic future product template needs approved specifications/options/FAQs before any new offering is published. Goal two has not started.
