import {
  getSunrise as getDateSunrise,
  getSunset as getDateSunset,
  getSolarNoon as getDateSolarNoon,
  getTwilight as getDateTwilight,
  getSunTimes as getDateSunTimes,
} from './index';
import { SpaOptions } from './types';

declare global {
  namespace Temporal {
    interface Instant {
      readonly epochMilliseconds: number;
      toZonedDateTimeISO(timeZone: string): ZonedDateTime;
      toString(options?: unknown): string;
    }

    interface PlainDate {
      readonly year: number;
      readonly month: number;
      readonly day: number;
      toPlainDateTime(time?: PlainTimeLike): PlainDateTime;
    }

    interface PlainDateTime {
      readonly year: number;
      readonly month: number;
      readonly day: number;
      readonly hour: number;
      readonly minute: number;
      readonly second: number;
      readonly millisecond: number;
      toZonedDateTime(timeZone: string): ZonedDateTime;
    }

    interface PlainTime {
      readonly hour: number;
      readonly minute: number;
      readonly second: number;
      readonly millisecond: number;
      toString(options?: unknown): string;
    }

    interface ZonedDateTime {
      readonly epochMilliseconds: number;
      readonly timeZoneId?: string;
      toInstant(): Instant;
      toPlainDate(): PlainDate;
      toPlainTime(): PlainTime;
      toString(options?: unknown): string;
    }
  }
}

interface PlainTimeLike {
  hour?: number;
  minute?: number;
  second?: number;
  millisecond?: number;
}

interface TemporalConstructor {
  Instant: {
    fromEpochMilliseconds(epochMilliseconds: number): Temporal.Instant;
  };
}

export type TemporalDateInput =
  | Date
  | Temporal.Instant
  | Temporal.ZonedDateTime
  | Temporal.PlainDate
  | Temporal.PlainDateTime;

export type TemporalTwilightTimes = {
  civilDawn: Temporal.Instant | null;
  civilDusk: Temporal.Instant | null;
  nauticalDawn: Temporal.Instant | null;
  nauticalDusk: Temporal.Instant | null;
  astronomicalDawn: Temporal.Instant | null;
  astronomicalDusk: Temporal.Instant | null;
  goldenHour: {
    morning: { start: Temporal.Instant | null; end: Temporal.Instant | null };
    evening: { start: Temporal.Instant | null; end: Temporal.Instant | null };
  } | null;
  blueHour: {
    morning: { start: Temporal.Instant | null; end: Temporal.Instant | null };
    evening: { start: Temporal.Instant | null; end: Temporal.Instant | null };
  } | null;
};

export type TemporalSunTimes = {
  sunrise: Temporal.Instant | null;
  sunset: Temporal.Instant | null;
  solarNoon: Temporal.Instant | null;
  twilight: TemporalTwilightTimes | null;
};

function getNativeTemporal(): TemporalConstructor {
  const temporal = (globalThis as unknown as { Temporal?: TemporalConstructor }).Temporal;

  if (!temporal) {
    throw new Error(
      'Temporal is not available in this runtime. Use Node.js 26+ or a runtime with native Temporal support.'
    );
  }

  return temporal;
}

function isDate(value: TemporalDateInput): value is Date {
  return value instanceof Date;
}

function isInstant(value: TemporalDateInput): value is Temporal.Instant {
  return (
    typeof (value as Temporal.Instant).epochMilliseconds === 'number' &&
    typeof (value as Temporal.Instant).toZonedDateTimeISO === 'function'
  );
}

function isZonedDateTime(value: TemporalDateInput): value is Temporal.ZonedDateTime {
  return (
    typeof (value as Temporal.ZonedDateTime).epochMilliseconds === 'number' &&
    typeof (value as Temporal.ZonedDateTime).toInstant === 'function' &&
    typeof (value as Temporal.ZonedDateTime).toPlainDate === 'function'
  );
}

function isPlainDateTime(value: TemporalDateInput): value is Temporal.PlainDateTime {
  return (
    typeof (value as Temporal.PlainDateTime).toZonedDateTime === 'function' &&
    typeof (value as Temporal.PlainDateTime).hour === 'number'
  );
}

function isPlainDate(value: TemporalDateInput): value is Temporal.PlainDate {
  return typeof (value as Temporal.PlainDate).toPlainDateTime === 'function';
}

function getTimezoneId(
  date: TemporalDateInput,
  options?: SpaOptions
): string | undefined {
  if (options?.timezoneId) return options.timezoneId;
  if (isZonedDateTime(date)) return date.timeZoneId;
  return undefined;
}

function getTimezone(options?: SpaOptions): number | undefined {
  return options?.timezone;
}

function localNoonDateFromCalendar(
  year: number,
  month: number,
  day: number,
  options?: SpaOptions
): Date {
  return localDateTimeFromCalendar(year, month, day, 12, 0, 0, 0, options);
}

function localDateTimeFromCalendar(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  millisecond: number,
  options?: SpaOptions
): Date {
  const timezone = getTimezone(options);

  if (timezone !== undefined) {
    return new Date(Date.UTC(year, month - 1, day, hour - timezone, minute, second, millisecond));
  }

  return new Date(year, month - 1, day, hour, minute, second, millisecond);
}

function toDate(date: TemporalDateInput, options?: SpaOptions): Date {
  if (isDate(date)) return date;
  if (isInstant(date) || isZonedDateTime(date)) {
    return new Date(date.epochMilliseconds);
  }

  const timezoneId = getTimezoneId(date, options);

  if (timezoneId) {
    if (isPlainDateTime(date)) {
      return new Date(date.toZonedDateTime(timezoneId).toInstant().epochMilliseconds);
    }

    if (isPlainDate(date)) {
      return new Date(
        date
          .toPlainDateTime({ hour: 12, minute: 0, second: 0, millisecond: 0 })
          .toZonedDateTime(timezoneId)
          .toInstant().epochMilliseconds
      );
    }
  }

  if (isPlainDateTime(date)) {
    return localDateTimeFromCalendar(
      date.year,
      date.month,
      date.day,
      date.hour,
      date.minute,
      date.second,
      date.millisecond,
      options
    );
  }

  return localNoonDateFromCalendar(date.year, date.month, date.day, options);
}

function mergeOptions(date: TemporalDateInput, options?: SpaOptions): SpaOptions | undefined {
  const timezoneId = getTimezoneId(date, options);

  if (!timezoneId || options?.timezoneId) {
    return options;
  }

  return { ...options, timezoneId };
}

function toInstant(date: Date | null): Temporal.Instant | null {
  if (!date) return null;
  return getNativeTemporal().Instant.fromEpochMilliseconds(date.getTime());
}

function toTemporalTwilight(
  twilight: ReturnType<typeof getDateTwilight>
): TemporalTwilightTimes | null {
  if (!twilight) return null;

  return {
    civilDawn: toInstant(twilight.civilDawn),
    civilDusk: toInstant(twilight.civilDusk),
    nauticalDawn: toInstant(twilight.nauticalDawn),
    nauticalDusk: toInstant(twilight.nauticalDusk),
    astronomicalDawn: toInstant(twilight.astronomicalDawn),
    astronomicalDusk: toInstant(twilight.astronomicalDusk),
    goldenHour: twilight.goldenHour
      ? {
          morning: {
            start: toInstant(twilight.goldenHour.morning.start),
            end: toInstant(twilight.goldenHour.morning.end),
          },
          evening: {
            start: toInstant(twilight.goldenHour.evening.start),
            end: toInstant(twilight.goldenHour.evening.end),
          },
        }
      : null,
    blueHour: twilight.blueHour
      ? {
          morning: {
            start: toInstant(twilight.blueHour.morning.start),
            end: toInstant(twilight.blueHour.morning.end),
          },
          evening: {
            start: toInstant(twilight.blueHour.evening.start),
            end: toInstant(twilight.blueHour.evening.end),
          },
        }
      : null,
  };
}

export function getSunrise(
  latitude: number,
  longitude: number,
  date: TemporalDateInput = new Date(),
  options?: SpaOptions
): Temporal.Instant | null {
  return toInstant(
    getDateSunrise(latitude, longitude, toDate(date, options), mergeOptions(date, options))
  );
}

export function getSunset(
  latitude: number,
  longitude: number,
  date: TemporalDateInput = new Date(),
  options?: SpaOptions
): Temporal.Instant | null {
  return toInstant(
    getDateSunset(latitude, longitude, toDate(date, options), mergeOptions(date, options))
  );
}

export function getSolarNoon(
  latitude: number,
  longitude: number,
  date: TemporalDateInput = new Date(),
  options?: SpaOptions
): Temporal.Instant | null {
  return toInstant(
    getDateSolarNoon(latitude, longitude, toDate(date, options), mergeOptions(date, options))
  );
}

export function getTwilight(
  latitude: number,
  longitude: number,
  date: TemporalDateInput = new Date(),
  options?: SpaOptions
): TemporalTwilightTimes | null {
  return toTemporalTwilight(
    getDateTwilight(latitude, longitude, toDate(date, options), mergeOptions(date, options))
  );
}

export function getSunTimes(
  latitude: number,
  longitude: number,
  date: TemporalDateInput = new Date(),
  options?: SpaOptions
): TemporalSunTimes {
  const dateOptions = mergeOptions(date, options);
  const times = getDateSunTimes(latitude, longitude, toDate(date, options), dateOptions);

  return {
    sunrise: toInstant(times.sunrise),
    sunset: toInstant(times.sunset),
    solarNoon: toInstant(times.solarNoon),
    twilight: toTemporalTwilight(times.twilight),
  };
}
