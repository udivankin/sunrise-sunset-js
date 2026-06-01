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
export type TemporalDateInput = Date | Temporal.Instant | Temporal.ZonedDateTime | Temporal.PlainDate | Temporal.PlainDateTime;
export type TemporalTwilightTimes = {
    civilDawn: Temporal.Instant | null;
    civilDusk: Temporal.Instant | null;
    nauticalDawn: Temporal.Instant | null;
    nauticalDusk: Temporal.Instant | null;
    astronomicalDawn: Temporal.Instant | null;
    astronomicalDusk: Temporal.Instant | null;
    goldenHour: {
        morning: {
            start: Temporal.Instant | null;
            end: Temporal.Instant | null;
        };
        evening: {
            start: Temporal.Instant | null;
            end: Temporal.Instant | null;
        };
    } | null;
    blueHour: {
        morning: {
            start: Temporal.Instant | null;
            end: Temporal.Instant | null;
        };
        evening: {
            start: Temporal.Instant | null;
            end: Temporal.Instant | null;
        };
    } | null;
};
export type TemporalSunTimes = {
    sunrise: Temporal.Instant | null;
    sunset: Temporal.Instant | null;
    solarNoon: Temporal.Instant | null;
    twilight: TemporalTwilightTimes | null;
};
export declare function getSunrise(latitude: number, longitude: number, date?: TemporalDateInput, options?: SpaOptions): Temporal.Instant | null;
export declare function getSunset(latitude: number, longitude: number, date?: TemporalDateInput, options?: SpaOptions): Temporal.Instant | null;
export declare function getSolarNoon(latitude: number, longitude: number, date?: TemporalDateInput, options?: SpaOptions): Temporal.Instant | null;
export declare function getTwilight(latitude: number, longitude: number, date?: TemporalDateInput, options?: SpaOptions): TemporalTwilightTimes | null;
export declare function getSunTimes(latitude: number, longitude: number, date?: TemporalDateInput, options?: SpaOptions): TemporalSunTimes;
export {};
//# sourceMappingURL=temporal.d.ts.map