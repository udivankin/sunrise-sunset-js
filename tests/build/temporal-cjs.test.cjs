const { test } = require('node:test');
const assert = require('node:assert');
const {
  getSunrise,
  getSunset,
  getSolarNoon,
  getTwilight,
  getSunTimes
} = require('../../dist/temporal.cjs');

test('SunriseSunsetJS Temporal CJS subpath should have all exported methods', () => {
  assert.strictEqual(typeof getSunrise, 'function');
  assert.strictEqual(typeof getSunset, 'function');
  assert.strictEqual(typeof getSolarNoon, 'function');
  assert.strictEqual(typeof getTwilight, 'function');
  assert.strictEqual(typeof getSunTimes, 'function');
});
