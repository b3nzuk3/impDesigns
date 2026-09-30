import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const home = fs.readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const section = home.slice(home.indexOf('id="our-work"'), home.indexOf('FACTORY DIRECT QUOTE BANNER'));
test('homepage showcase uses existing portfolio clients instead of fictional companies', () => {
  assert.doesNotMatch(section, /Savannah|Kilima|QuickDrop|Eliminated carton tampering/);
  assert.match(home, /import \{ portfolioProjects \} from '@\/lib\/portfolio'/);
  for (const slug of ['adhi-pharmacy-branded-tape', 'kitui-green-run-event-tape', 'kcb-foundation-asset-tag']) assert.ok(home.includes(slug));
  for (const field of ['project.title', 'project.image', 'project.imageAlt', 'project.description', 'project.productLabel']) assert.ok(section.includes(field));
});
