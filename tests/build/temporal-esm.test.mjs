import { test } from 'node:test';
import assert from 'node:assert';
import {
  getSunrise,
  getSunset,
  getSolarNoon,
  getTwilight,
  getSunTimes
} from '../../dist/temporal.js';

test('SunriseSunsetJS Temporal ESM subpath should have all exported methods', () => {
  assert.strictEqual(typeof getSunrise, 'function');
  assert.strictEqual(typeof getSunset, 'function');
  assert.strictEqual(typeof getSolarNoon, 'function');
  assert.strictEqual(typeof getTwilight, 'function');
  assert.strictEqual(typeof getSunTimes, 'function');
});
