import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'lib/client-photo-manifest.json'), 'utf8'));

function source(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

test('the supplied manifest contains all 25 new client examples', () => {
  assert.equal(manifest.length, 25);
  assert.equal(manifest.filter((photo) => photo.category === 'tape').length, 14);
  assert.equal(manifest.filter((photo) => photo.category === 'tag').length, 11);
  assert.equal(new Set(manifest.map((photo) => photo.key)).size, 25);
  assert.ok(manifest.every((photo) => photo.key && photo.width > 0 && photo.height > 0 && photo.alt));
});

test('both galleries render the manifest through the shared accessible viewer', () => {
  const catalog = source('lib/client-photos.ts');
  const primitive = source('components/ClientPhotoGallery.tsx');
  const tape = source('components/ClientTapeGallery.tsx');
  const tag = source('components/ClientTagGallery.tsx');

  assert.match(catalog, /client-photo-manifest/);
  assert.match(catalog, /CLIENT_PHOTOS/);
  assert.match(primitive, /<dialog/);
  assert.match(primitive, /showModal/);
  assert.match(primitive, /if \(!dialog\.open\) dialog\.showModal\(\)/);
  assert.match(primitive, /aria-label/);
  assert.match(primitive, /Escape/);
  assert.match(primitive, /focus\(\)/);
  assert.match(primitive, /overflow = 'hidden'/);
  assert.match(primitive, /handleCancel/);
  assert.match(tape, /CLIENT_PHOTOS/);
  assert.match(tag, /CLIENT_PHOTOS/);
});

test('artwork previews are uncropped and captions stay outside image buttons', () => {
  const primitive = source('components/ClientPhotoGallery.tsx');
  assert.match(primitive, /<\/button>\s*<figcaption/);
  assert.match(primitive, /photo\.format === 'promotional artwork' \? 'object-contain'/);
  assert.match(primitive, /grid-cols-1/);
});

test('legacy examples remain in both gallery sources', () => {
  const catalog = source('lib/client-photos.ts');
  const tape = source('components/ClientTapeGallery.tsx');
  const tag = source('components/ClientTagGallery.tsx');

  for (const id of ['legacy-tape-01', 'legacy-tape-10', 'legacy-tape-11', 'legacy-tape-16', 'legacy-tape-17', 'legacy-tape-21']) assert.match(catalog, new RegExp(id));
  for (const id of ['legacy-tag-01', 'legacy-tag-06', 'legacy-tag-15', 'legacy-tag-16', 'legacy-tag-28', 'legacy-tag-30', 'legacy-tag-32']) assert.match(catalog, new RegExp(id));
  assert.match(tape, /legacyTapePhotos/);
  assert.match(tag, /legacyTagPhotos/);
});
