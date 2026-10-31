import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';
const root = path.resolve(import.meta.dirname, '..');
function load(relative, globals = {}) {
  const filename = path.resolve(root, relative);
  const source = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const loaded = { exports: {} };
  vm.runInNewContext(source, { module: loaded, exports: loaded.exports, process: { env: {} }, URL, ...globals, require: (name) => load(path.relative(root, path.resolve(path.dirname(filename), `${name}.ts`)), globals) }, { filename });
  return loaded.exports;
}
const catalogue = load('lib/catalogue.ts');
test('catalogue contains six families, sixteen unique offerings and only two published legacy pages', () => {
  assert.equal(catalogue.catalogueCategories.length, 6);
  assert.equal(catalogue.catalogueProducts.length, 16);
  assert.equal(new Set(catalogue.catalogueProducts.map((p) => p.slug)).size, 16);
  assert.equal(catalogue.getPublishedProducts().length, 2);
  assert.deepEqual(Array.from(catalogue.getPublishedProducts(), (p) => p.href), ['/branded-tapes', '/custom-tags']);
});
test('drafts and duplicate legacy aliases cannot resolve as product pages', () => {
  for (const product of catalogue.catalogueProducts) assert.equal(catalogue.getRoutableProduct(product.slug), undefined);
  assert.equal(catalogue.getRoutableProduct('unknown'), undefined);
  assert.equal(catalogue.getPublishedCategory('branded-tapes'), undefined);
  assert.equal(catalogue.getPublishedCategory('apparel-workwear'), undefined);
  assert.ok(catalogue.getPublishedCategory('asset-tags-identification'));
  for (const category of catalogue.catalogueCategories) {
    const href = catalogue.getCategoryHref(category);
    if (!catalogue.getPublishedProducts(category.slug).length) assert.equal(href, `/quote?product=${category.slug}`);
  }
});
test('preselection accepts known products, families and calculator aliases only', () => {
  assert.equal(catalogue.resolveEnquiryProduct('tape').slug, 'printed-packaging-tapes');
  assert.equal(catalogue.resolveEnquiryProduct('aluminium').slug, 'aluminium-barcode-asset-tags');
  assert.equal(catalogue.resolveEnquiryProduct('staff-id-cards').name, 'Staff ID cards');
  assert.equal(catalogue.resolveEnquiryProduct('private@example.com'), undefined);
});
test('WhatsApp payload round-trips punctuation, contact fields, requirements and newlines', () => {
  const enquiry = load('lib/enquiry.ts');
  const details = { product: 'Staff ID cards', quantity: '12', requirements: 'Blue & orange\nLogo + QR #1?', businessName: 'A&B', contactName: 'Wanjikũ', phone: '+254700000000', email: 'qa@example.com', town: 'Nakuru' };
  const url = new URL(enquiry.enquiryWhatsAppUrl(details));
  assert.equal(url.hostname, 'wa.me');
  const message = url.searchParams.get('text');
  for (const value of Object.values(details)) assert.ok(message.includes(value));
  assert.ok(message.includes('\n'));
});
test('analytics exposes only allowlisted events and identifiers, never personal data', () => {
  const events = [];
  const analytics = load('lib/analytics.ts', { window: { dispatchEvent: (event) => events.push(event) }, CustomEvent: class { constructor(type, options) { this.type = type; this.detail = options.detail; } } });
  analytics.trackCatalogueEvent('quote_start', 'qa@example.com?phone=secret');
  analytics.trackCatalogueEvent('product_view', 'printed-packaging-tapes');
  analytics.trackCatalogueEvent('invalid', 'staff-id-cards');
  assert.equal(events.length, 2);
  assert.equal(JSON.stringify(events[0].detail), '{"event":"quote_start","product":"general"}');
  assert.equal(events[1].detail.product, 'printed-packaging-tapes');
});
test('quote surfaces have no fabricated submission confirmation', () => {
  for (const file of ['app/quote/QuotePage.tsx', 'components/QuoteModal.tsx']) {
    const source = fs.readFileSync(path.join(root, file), 'utf8');
    assert.doesNotMatch(source, /alert\(|Submit Factory Inquiry|has been received|has been submitted/);
    assert.match(source, /Continue on WhatsApp/);
    assert.match(source, /does not submit an enquiry/);
  }
});
test('page and modal calculator formulas remain unchanged from the pre-expansion baseline', () => {
  const checks = [
    ['app/quote/QuotePage.tsx', 'calculateTape', { tapeRolls: 360, tapeWidth: '48mm', tapeColors: 1 }, { unitPrice: 323, total: 116280 }],
    ['app/quote/QuotePage.tsx', 'calculateAluminium', { metalThickness: '0.5mm', metalMounting: '3m-adhesive', metalQuantity: 250 }, { unitPrice: 58, total: 14500 }],
    ['components/QuoteModal.tsx', 'calculateTapeEstimate', { tapeRolls: 360, tapeWidth: '48mm', tapeColors: 1 }, { unitPrice: 340, total: 122400 }],
    ['components/QuoteModal.tsx', 'calculateMetalEstimate', { metalThickness: '0.5mm', metalMounting: '3m-adhesive', metalQuantity: 250 }, { unitPrice: 60, total: 15000 }],
  ];
  for (const [file, name, inputs, expected] of checks) {
    const source = fs.readFileSync(path.join(root, file), 'utf8');
    const body = source.match(new RegExp(`const ${name} = \\(\\) => \\{([\\s\\S]*?)\\n  \\};`))[1];
    const actual = vm.runInNewContext(`(() => { ${body} })()`, inputs);
    assert.equal(JSON.stringify(actual), JSON.stringify(expected), name);
  }
});
