/**
 * Date and Julian day calculation utilities for Solar Position Algorithm
 */

export interface DateTimeComponents {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

const timeZoneDateTimeFormatters = new Map<string, Intl.DateTimeFormat>();

function getTimeZoneDateTimeFormatter(timezoneId: string): Intl.DateTimeFormat {
  let formatter = timeZoneDateTimeFormatters.get(timezoneId);

  if (!formatter) {
    formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timezoneId,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
    });
    timeZoneDateTimeFormatters.set(timezoneId, formatter);
  }

  return formatter;
}

function parseDateTimeComponents(
  date: Date,
  formatter: Intl.DateTimeFormat
): DateTimeComponents {
  const values = new Map<string, string>();

  for (const part of formatter.formatToParts(date)) {
    if (part.type !== 'literal') {
      values.set(part.type, part.value);
    }
  }

  return {
    year: parseInt(values.get('year') ?? '0', 10),
    month: parseInt(values.get('month') ?? '0', 10),
    day: parseInt(values.get('day') ?? '0', 10),
    hour: parseInt(values.get('hour') ?? '0', 10),
    minute: parseInt(values.get('minute') ?? '0', 10),
    second: parseInt(values.get('second') ?? '0', 10) + date.getUTCMilliseconds() / 1000,
  };
}

function getOffsetHoursFromComponents(
  date: Date,
  components: DateTimeComponents
): number {
  const wholeSeconds = Math.floor(components.second);
  const milliseconds = Math.round((components.second - wholeSeconds) * 1000);
  const zonedTimestamp = Date.UTC(
    components.year,
    components.month - 1,
    components.day,
    components.hour,
    components.minute,
    wholeSeconds,
    milliseconds
  );

  return (zonedTimestamp - date.getTime()) / 3600000;
}

/**
 * Calculate Julian Day from calendar date and time
 * @param year - 4-digit year
 * @param month - Month (1-12)
 * @param day - Day of month (1-31)
 * @param hour - Hour (0-24)
 * @param minute - Minute (0-59)
 * @param second - Second (0-59.999...)
 * @param deltaUt1 - Fractional second difference between UTC and UT
 * @param timezone - Timezone offset in hours (negative west of Greenwich)
 * @returns Julian Day number
 */
export function julianDay(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  deltaUt1: number,
  timezone: number
): number {
  let y = year;
  let m = month;

  const dayDecimal =
    day + (hour - timezone + (minute + (second + deltaUt1) / 60.0) / 60.0) / 24.0;

  if (m < 3) {
    m += 12;
    y--;
  }

  let jd =
    Math.floor(365.25 * (y + 4716.0)) +
    Math.floor(30.6001 * (m + 1)) +
    dayDecimal -
    1524.5;

  if (jd > 2299160.0) {
    const a = Math.floor(y / 100);
    jd += 2 - a + Math.floor(a / 4);
  }

  return jd;
}

/**
 * Calculate Julian Century from Julian Day
 * @param jd - Julian Day
 * @returns Julian Century
 */
export function julianCentury(jd: number): number {
  return (jd - 2451545.0) / 36525.0;
}

/**
 * Calculate Julian Ephemeris Day
 * @param jd - Julian Day
 * @param deltaT - Difference between earth rotation time and terrestrial time (seconds)
 * @returns Julian Ephemeris Day
 */
export function julianEphemerisDay(jd: number, deltaT: number): number {
  return jd + deltaT / 86400.0;
}

/**
 * Calculate Julian Ephemeris Century
 * @param jde - Julian Ephemeris Day
 * @returns Julian Ephemeris Century
 */
export function julianEphemerisCentury(jde: number): number {
  return (jde - 2451545.0) / 36525.0;
}

/**
 * Calculate Julian Ephemeris Millennium
 * @param jce - Julian Ephemeris Century
 * @returns Julian Ephemeris Millennium
 */
export function julianEphemerisMillennium(jce: number): number {
  return jce / 10.0;
}

/**
 * Extract date components from a JavaScript Date object
 * Returns components in local time
 */
export function extractLocalDateComponents(date: Date): {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  timezone: number;
} {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds() + date.getMilliseconds() / 1000,
    timezone: -date.getTimezoneOffset() / 60,
  };
}

/**
 * Extract date components from a JavaScript Date object
 * Interprets the instant in a fixed UTC offset
 */
export function extractFixedOffsetDateComponents(
  date: Date,
  timezone: number
): DateTimeComponents {
  const shifted = new Date(date.getTime() + timezone * 3600000);

  return {
    year: shifted.getUTCFullYear(),
    month: shifted.getUTCMonth() + 1,
    day: shifted.getUTCDate(),
    hour: shifted.getUTCHours(),
    minute: shifted.getUTCMinutes(),
    second: shifted.getUTCSeconds() + shifted.getUTCMilliseconds() / 1000,
  };
}

/**
 * Extract date components from a JavaScript Date object
 * Interprets the instant in the provided IANA timezone
 */
export function extractTimeZoneDateComponents(
  date: Date,
  timezoneId: string
): DateTimeComponents {
  return parseDateTimeComponents(date, getTimeZoneDateTimeFormatter(timezoneId));
}

/**
 * Get the UTC offset in hours for an IANA timezone at a specific instant
 */
export function getTimeZoneOffsetHours(
  date: Date,
  timezoneId: string
): number {
  return getOffsetHoursFromComponents(
    date,
    extractTimeZoneDateComponents(date, timezoneId)
  );
}

/**
 * Resolve the calendar date/time context used by SPA calculations.
 * Explicit numeric offsets take precedence over timezone IDs.
 */
export function resolveDateTimeComponents(
  date: Date,
  timezone?: number,
  timezoneId?: string
): DateTimeComponents & { timezone: number } {
  if (timezone !== undefined) {
    return {
      ...extractFixedOffsetDateComponents(date, timezone),
      timezone,
    };
  }

  if (timezoneId) {
    try {
      const components = extractTimeZoneDateComponents(date, timezoneId);
      return {
        ...components,
        timezone: getOffsetHoursFromComponents(date, components),
      };
    } catch {
      // Fall back to the runtime's local timezone if the IANA timezone ID is invalid.
    }
  }

  return extractLocalDateComponents(date);
}

/**
 * Extract date components from a JavaScript Date object
 * Returns components in UTC
 */
export function extractUTCDateComponents(date: Date): {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
} {
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds() + date.getUTCMilliseconds() / 1000,
  };
}
