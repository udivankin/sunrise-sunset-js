# sunrise-sunset-js

High-precision sunrise and sunset calculation library using NREL's Solar Position Algorithm (SPA).

[![npm version](https://img.shields.io/npm/v/sunrise-sunset-js.svg)](https://www.npmjs.com/package/sunrise-sunset-js)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)

## [Interactive Demo](https://udivankin.github.io/sunrise-sunset/)

Scrub through a day anywhere on Earth under a physically-based WebGL sky driven by the library's real solar position output. Explore every twilight phase on a 24-hour dial, drag across the "year of light" chart to watch the seasons reshape the day, and share any scene via URL (`?lat=…&lng=…&date=…&t=…`). Timezones are resolved offline; polar day and night are handled gracefully.

![Demo Screenshot](https://raw.githubusercontent.com/udivankin/sunrise-sunset/master/demo/screenshot.png)

## Overview

This library provides accurate solar position calculations with uncertainties of ±0.0003 degrees for dates from year -2000 to 6000. It's based on the **National Renewable Energy Laboratory's Solar Position Algorithm (SPA)**, which offers significantly improved accuracy over simplified algorithms.

### Algorithm Reference

The implementation is based on:

> Reda, I.; Andreas, A. (2004). Solar Position Algorithm for Solar Radiation Applications. *Solar Energy*, Vol. 76(5), pp. 577-589.
>
> NREL Technical Report: TP-560-34302, Revised January 2008

**Distributed by the National Renewable Energy Laboratory**  
Solar Radiation Research Laboratory

## Features

- ✅ **High-precision calculations** (±30 seconds accuracy)
- ✅ **Advanced twilight detection** (Civil, Nautical, Astronomical, Golden, and Blue hours)
- ✅ **Proper high-latitude handling** (returns `null` during polar day/night)
- ✅ **Full TypeScript support** with comprehensive type definitions
- ✅ **ESM and CommonJS** dual package exports
- ✅ **Zero dependencies** for runtime
- ✅ **Extended solar calculations** (solar noon, solar position, etc.)
- ✅ **Comprehensive timezone support** (implicit and explicit)
- ✅ **Native Temporal support** via `sunrise-sunset-js/temporal`
- ✅ **Tree-shakeable** modular architecture

## Installation

```bash
npm install sunrise-sunset-js
```

**Requirements:** Node.js ≥18.0.0

## Quick Start

```typescript
import { getSunrise, getSunset } from 'sunrise-sunset-js';

// Sunrise today in London
const sunrise = getSunrise(51.5074, -0.1278);

// Sunset on a specific date
const sunset = getSunset(51.5074, -0.1278, new Date('2024-06-21'));

console.log(`Sunrise: ${sunrise?.toLocaleTimeString()}`);
console.log(`Sunset: ${sunset?.toLocaleTimeString()}`);
```

## Native Temporal API

The main entrypoint keeps returning JavaScript `Date` objects for backward compatibility.
If your runtime supports native Temporal, import the Temporal entrypoint instead:

```typescript
import { getSunTimes } from 'sunrise-sunset-js/temporal';

const times = getSunTimes(
  40.7128,
  -74.0060,
  Temporal.PlainDate.from('2026-05-03'),
  { timezoneId: 'America/New_York' }
);

console.log(times.sunrise?.toString()); // Temporal.Instant
console.log(
  times.sunrise
    ?.toZonedDateTimeISO('America/New_York')
    .toPlainTime()
    .toString({ smallestUnit: 'minute' })
); // Local wall-clock time, e.g. "05:37"
```

The Temporal entrypoint exports the same function names as the main package:

```typescript
import {
  getSunrise,
  getSunset,
  getSolarNoon,
  getTwilight,
  getSunTimes,
} from 'sunrise-sunset-js/temporal';
```

These functions return `Temporal.Instant | null` instead of `Date | null`, and the `date`
argument accepts `Date`, `Temporal.Instant`, `Temporal.ZonedDateTime`,
`Temporal.PlainDateTime`, or `Temporal.PlainDate`.

Native Temporal is required only when calling `sunrise-sunset-js/temporal`. The main
`sunrise-sunset-js` entrypoint still works in Node.js 18+ and returns `Date` values.

### Temporal with `geo-tz`

`sunrise-sunset-js` does not depend on timezone boundary data. In Node.js or server-side
code, you can derive the IANA timezone from latitude/longitude with a package such as
`geo-tz`:

```bash
npm install sunrise-sunset-js geo-tz
```

```typescript
import { find } from 'geo-tz';
import { getSunTimes } from 'sunrise-sunset-js/temporal';

const latitude = 40.7128;
const longitude = -74.0060;
const timezoneId = find(latitude, longitude)[0]; // "America/New_York"

const times = getSunTimes(
  latitude,
  longitude,
  Temporal.PlainDate.from('2026-05-03'),
  { timezoneId }
);

const sunriseClockTime = times.sunrise
  ?.toZonedDateTimeISO(timezoneId)
  .toPlainTime();

console.log(sunriseClockTime?.toString({ smallestUnit: 'minute' }));
```

## API Reference

### `getSunrise(latitude, longitude, date?, options?)`

Calculate sunrise time for a given location and date.

**Parameters:**

- `latitude` (number): Latitude in decimal degrees (-90 to 90)
- `longitude` (number): Longitude in decimal degrees (-180 to 180)
- `date` (Date, optional): Date to calculate for (defaults to today)
- `options` (SpaOptions, optional): Additional calculation options

**Returns:** `Date | null`

- Returns `Date` object with sunrise time
- Returns `null` during polar night (sun never rises)

**Example:**

```typescript
// Basic usage
const sunrise = getSunrise(40.7128, -74.0060); // New York City

// Specific date
const summerSolstice = getSunrise(
  51.1788, 
  -1.8262, 
  new Date('2024-06-21')
); // Stonehenge

// High-latitude location during polar night
const arcticWinter = getSunrise(
  69.6496, 
  18.9560, 
  new Date('2024-12-21')
); // Tromsø, Norway
console.log(arcticWinter); // null (polar night)
```

### `getSunset(latitude, longitude, date?, options?)`

Calculate sunset time for a given location and date.

**Parameters:** Same as `getSunrise()`

**Returns:** `Date | null`

- Returns `Date` object with sunset time
- Returns `null` during polar day (midnight sun)

**Example:**

```typescript
const sunset = getSunset(40.7128, -74.0060);

// During midnight sun period
const arcticSummer = getSunset(
  67.9323, 
  13.0887, 
  new Date('2024-06-21')
); // Reine, Norway
console.log(arcticSummer); // null (midnight sun)
```

### `getSolarNoon(latitude, longitude, date?, options?)`

Calculate solar noon (sun transit) - when the sun reaches its highest point in the sky.

**Returns:** `Date | null`

**Example:**

```typescript
const solarNoon = getSolarNoon(51.5074, -0.1278);
console.log(`Solar noon: ${solarNoon?.toLocaleTimeString()}`);
```

### `getSolarPosition(latitude, longitude, date?, options?)`

Calculate the sun's position in the sky at a given time.

**Returns:** `SolarPosition | null`

```typescript
interface SolarPosition {
  zenith: number;           // Zenith angle (0° = directly overhead)
  azimuth: number;          // Azimuth angle (0° = North, 90° = East)
  azimuthAstro: number;     // Azimuth westward from South (astronomical)
  elevation: number;        // Elevation angle above horizon
  rightAscension: number;   // Right ascension (degrees)
  declination: number;      // Declination (degrees)
  hourAngle: number;        // Local hour angle (degrees)
}
```

**Example:**

```typescript
const position = getSolarPosition(51.5074, -0.1278);

if (position) {
  console.log(`Azimuth: ${position.azimuth.toFixed(2)}°`);
  console.log(`Elevation: ${position.elevation.toFixed(2)}°`);
  console.log(`Zenith: ${position.zenith.toFixed(2)}°`);
}
```

### `getTwilight(latitude, longitude, date?, options?)`

Calculate twilight times (civil, nautical, and astronomical).

**Returns:** `TwilightTimes | null`

```typescript
interface TwilightTimes {
  civilDawn: Date | null;           // Sun at -6° (before sunrise)
  civilDusk: Date | null;           // Sun at -6° (after sunset)
  nauticalDawn: Date | null;        // Sun at -12°
  nauticalDusk: Date | null;        // Sun at -12°
  astronomicalDawn: Date | null;    // Sun at -18°
  astronomicalDusk: Date | null;    // Sun at -18°
  goldenHour: {                     // Sun between 6° above and horizon
    morning: { start: Date | null, end: Date | null };
    evening: { start: Date | null, end: Date | null };
  } | null;
  blueHour: {                       // Sun between horizon and 4° below
    morning: { start: Date | null, end: Date | null };
    evening: { start: Date | null, end: Date | null };
  } | null;
}
```

**Example:**

```typescript
const twilight = getTwilight(51.5074, -0.1278);

if (twilight) {
  console.log(`Civil dawn: ${twilight.civilDawn?.toLocaleTimeString()}`);
  console.log(`Civil dusk: ${twilight.civilDusk?.toLocaleTimeString()}`);
  console.log(`Astronomical dawn: ${twilight.astronomicalDawn?.toLocaleTimeString()}`);
}
```

### `getSunTimes(latitude, longitude, date?, options?)`

Get all sun times in a single efficient calculation.

**Returns:** Object with all sun times

```typescript
interface SunTimes {
  sunrise: Date | null;
  sunset: Date | null;
  solarNoon: Date | null;
  twilight: TwilightTimes | null;
}
```

**Example:**

```typescript
const times = getSunTimes(51.5074, -0.1278);

console.log('Sunrise:', times.sunrise);
console.log('Solar Noon:', times.solarNoon);
console.log('Sunset:', times.sunset);
console.log('Civil Dawn:', times.twilight?.civilDawn);
console.log('Civil Dusk:', times.twilight?.civilDusk);
```

### Options

All functions accept an optional `SpaOptions` parameter:

```typescript
interface SpaOptions {
  temperature?: number;    // Temperature in °C (default: 15)
  pressure?: number;       // Atmospheric pressure in mbar (default: 1013)
  deltaT?: number;         // Earth rotation correction in seconds (default: 67)
  elevation?: number;      // Observer elevation in meters (default: 0)
  timezone?: number;       // Explicit timezone offset in hours (e.g. -5). Takes precedence over timezoneId
  timezoneId?: string;     // IANA Timezone ID used to resolve the local date and UTC offset when timezone is omitted
  atmosphericRefraction?: number; // Refraction at horizon in degrees (default: 0.5667)
}
```

Returned values are JavaScript `Date` objects, which always represent absolute instants.
If you want to display the result in a specific timezone, format it with `Intl.DateTimeFormat`
or `toLocaleString(..., { timeZone: 'America/New_York' })`.

**Example:**

```typescript
// Calculate for high-altitude location
const sunrise = getSunrise(
  27.9881, // Everest Base Camp
  86.9250,
  new Date(),
  {
    elevation: 5364,      // meters above sea level
    temperature: -10,     // °C
    pressure: 500         // mbar (lower at altitude)
  }
);
```

## Usage Examples

### Browser Integration with Geolocation

```typescript
import { getSunrise, getSunset } from 'sunrise-sunset-js';

navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;
  
  const sunrise = getSunrise(latitude, longitude);
  const sunset = getSunset(latitude, longitude);
  
  console.log(`Sunrise at your location: ${sunrise?.toLocaleTimeString()}`);
  console.log(`Sunset at your location: ${sunset?.toLocaleTimeString()}`);
});
```

### Annual Solar Events

```typescript
import { getSunrise, getSunset } from 'sunrise-sunset-js';

function getAnnualSolarEvents(latitude: number, longitude: number, year: number) {
  const events = [];
  const startDate = new Date(year, 0, 1);
  
  for (let day = 0; day < 365; day++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + day);
    
    const sunrise = getSunrise(latitude, longitude, date);
    const sunset = getSunset(latitude, longitude, date);
    
    if (sunrise) events.push({ type: 'sunrise', date: sunrise });
    if (sunset) events.push({ type: 'sunset', date: sunset });
  }
  
  return events;
}

// Get all sunrise/sunset times for 2024 in London
const events = getAnnualSolarEvents(51.5074, -0.1278, 2024);
```

### Day Length Calculation

```typescript
import { getSunrise, getSunset } from 'sunrise-sunset-js';

function getDaylightHours(latitude: number, longitude: number, date: Date) {
  const sunrise = getSunrise(latitude, longitude, date);
  const sunset = getSunset(latitude, longitude, date);
  
  if (!sunrise || !sunset) {
    // Polar day or polar night
    return sunrise === null && sunset === null ? 0 : 24;
  }
  
  const milliseconds = sunset.getTime() - sunrise.getTime();
  return milliseconds / (1000 * 60 * 60); // Convert to hours
}

const hours = getDaylightHours(51.5074, -0.1278, new Date('2024-06-21'));
console.log(`Daylight hours on summer solstice: ${hours.toFixed(2)}`);
```

### Golden Hour Detection

```typescript
import { getSunrise, getSunset, getSolarPosition } from 'sunrise-sunset-js';

function isGoldenHour(latitude: number, longitude: number, date: Date): boolean {
  const position = getSolarPosition(latitude, longitude, date);
  
  if (!position) return false;
  
  // Golden hour: sun elevation between 0° and 6° above horizon
  return position.elevation > 0 && position.elevation < 6;
}

const now = new Date();
if (isGoldenHour(51.5074, -0.1278, now)) {
  console.log('Perfect time for photography! 📸');
}
```

## Project Structure

```
src/
├── index.ts                    # Main API exports
├── temporal.ts                 # Native Temporal API exports
├── types.ts                    # TypeScript type definitions
├── constants.ts                # Physical constants & periodic terms
├── spa.ts                      # Main SPA calculation orchestrator
├── calculations/
│   ├── earth.ts               # Earth heliocentric position
│   ├── sun.ts                 # Geocentric sun position
│   ├── nutation.ts            # Nutation & obliquity calculations
│   ├── observer.ts            # Topocentric corrections
│   └── rts.ts                 # Rise/Transit/Set calculations
└── utils/
    ├── date.ts                # Julian day conversions
    ├── time.ts                # Time conversion utilities
    └── math.ts                # Mathematical helpers
```

## Testing

The library includes comprehensive test coverage:

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

**Test suite includes:**

- ✅ Basic sunrise/sunset calculations
- ✅ High-latitude edge cases (polar day/night)
- ✅ Solar noon calculations
- ✅ Solar position accuracy
- ✅ Twilight time calculations
- ✅ Timezone handling
- ✅ All sun times in single call

## Migration from v2.x

The v3.0.0 release brings significant improvements but maintains backward compatibility for basic usage:

**Breaking changes:**

- Node.js 18+ required (was Node 8+)
- Returns `null` instead of incorrect dates during polar day/night
- Slightly different times due to improved algorithm accuracy (±30 seconds vs ±1-2 minutes)

**What stays the same:**

- `getSunrise()` and `getSunset()` function signatures unchanged
- Still works in browser and Node.js
- TypeScript support (now with strict types)

**New features:**

```typescript
// v2.x - only sunrise/sunset
const sunrise = getSunrise(lat, lng);
const sunset = getSunset(lat, lng);

// v3.0 - extended API
const solarNoon = getSolarNoon(lat, lng);
const position = getSolarPosition(lat, lng);
const twilight = getTwilight(lat, lng);
const allTimes = getSunTimes(lat, lng); // Single efficient call
```

## Build & Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Type check
npm run type-check

# Run all checks (type-check + build + test)
npm run prepublishOnly
```

**Build outputs:**

- `dist/index.js` - ESM bundle with source maps
- `dist/index.cjs` - CommonJS bundle with source maps
- `dist/index.d.ts` - TypeScript declarations
- `dist/temporal.js` - ESM Temporal subpath bundle
- `dist/temporal.cjs` - CommonJS Temporal subpath bundle
- `dist/temporal.d.ts` - Temporal subpath declarations

## Algorithm Details

### Why SPA?

The previous version used a simplified USNO algorithm with ~1-2 minute accuracy. The NREL SPA algorithm provides:

1. **Higher accuracy**: ±30 seconds vs ±1-2 minutes
2. **Wider date range**: Year -2000 to 6000 (vs 1900-2100)
3. **Better high-latitude handling**: Proper polar day/night detection
4. **More comprehensive**: Includes nutation, aberration, atmospheric refraction

### Calculation Flow

```
1. Julian Day Calculation (date.ts)
   ↓
2. Earth Heliocentric Position (earth.ts)
   - Longitude, latitude, radius vector
   - ~250 periodic terms for precision
   ↓
3. Geocentric Sun Position (sun.ts)
   - Apply nutation corrections
   - Calculate apparent position
   ↓
4. Observer Corrections (observer.ts)
   - Topocentric adjustments
   - Atmospheric refraction
   ↓
5. Rise/Transit/Set Times (rts.ts)
   - Solve for horizon crossing
   - Handle polar day/night cases
```

### Accuracy Factors

The algorithm accounts for:

- Earth's elliptical orbit
- Axial precession and nutation
- Atmospheric refraction
- Observer elevation
- Temperature and pressure effects
- Gravitational aberration

### Development

To run the interactive demo locally:

```bash
cd demo
npm install
npm run dev
```

The demo will be available at `http://localhost:5173`.

## License

MIT

## Contributing

Contributions welcome! Please open an issue or submit a pull request.

## Acknowledgments

- **NREL** (National Renewable Energy Laboratory) for the SPA algorithm
- **Ibrahim Reda & Afshin Andreas** for their comprehensive research paper
- Original library contributors for establishing the foundation

## References

1. Reda, I.; Andreas, A. (2004). "Solar Position Algorithm for Solar Radiation Applications." *Solar Energy*, 76(5), 577-589.
2. NREL Technical Report TP-560-34302 (Revised January 2008)
3. [NREL Solar Position Algorithm](https://midcdmz.nrel.gov/spa/)

---

**Version 3.1.4** - Enhanced with full SPA implementation and extended twilight data.
