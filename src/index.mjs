import assert from 'node:assert/strict';
import { compileStory, renderSvg } from '@x12i/storyflow';
import { writeFile, readFile } from 'node:fs/promises';
const story = { title: 'Example review workflow', steps: [
  { id: 'draft', title: 'Draft' }, { id: 'review', title: 'Review' }, { id: 'publish', title: 'Publish' },
] };
const spec = compileStory('story-spine', story);
const svg = renderSvg(spec);
assert(svg.includes('<svg'));
assert(svg.includes('Review'));
await writeFile('workflow.svg', svg);
assert((await readFile('workflow.svg', 'utf8')).includes('Publish'));
console.log('Generated workflow.svg from the authored story.');
