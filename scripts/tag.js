import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';

const pkgPath = join(process.cwd(), 'package.json');
const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
const version = `v${pkg.version}`;

try {
  // Check if tag already exists
  const existingTags = execSync('git tag -l').toString().split('\n');
  if (existingTags.includes(version)) {
    console.log(`Tag ${version} already exists.`);
    process.exit(0);
  }

  // Add the tag
  execSync(`git tag ${version}`);
  console.log(`Added git tag: ${version}`);
} catch (error) {
  console.error('Error adding git tag:', error.message);
  process.exit(1);
}
