import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'fs';
import yaml from 'js-yaml';
import { globSync } from 'glob';

mkdirSync('dist', { recursive: true });

const versions = {};
for (const file of globSync('../v*.yaml')) {
  const key = file.replace('../', '').replace('.yaml', '');
  versions[key] = yaml.load(readFileSync(file, 'utf-8'));
}

for (const [key, data] of Object.entries(versions)) {
  writeFileSync(`dist/${key}.json`, JSON.stringify(data, null, 2));
}

writeFileSync('dist/versions.json', JSON.stringify({ versions: Object.keys(versions).sort() }));
copyFileSync('index.html', 'dist/index.html');
copyFileSync('style.css', 'dist/style.css');

console.log(`Built ${Object.keys(versions).length} versions: ${Object.keys(versions).join(', ')}`);
