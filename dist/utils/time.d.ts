/**
 * Time conversion utilities for Solar Position Algorithm
 */
/**
 * Convert day fraction to local hour
 * @param dayfrac - Day fraction (0-1)
 * @param timezone - Timezone offset in hours
 * @returns Local hour (0-24)
 */
export declare function dayfracToLocalHr(dayfrac: number, timezone: number): number;
/**
 * Convert fractional hours to Date object
 * @param year - Local calendar year for the calculated sun time
 * @param month - Local calendar month for the calculated sun time
 * @param day - Local calendar day for the calculated sun time
 * @param fractionalHour - Hour as fractional value (0-24)
 * @param timezone - Timezone offset in hours (negative west of Greenwich)
 * @returns Date object representing the time
 */
export declare function fractionalHourToDate(year: number, month: number, day: number, fractionalHour: number, timezone: number): Date;
/**
 * Convert fractional hours to time string (HH:MM:SS.mmm)
 * @param fractionalHour - Hour as fractional value (0-24)
 * @returns Formatted time string
 */
export declare function fractionalHourToString(fractionalHour: number): string;
//# sourceMappingURL=time.d.ts.map