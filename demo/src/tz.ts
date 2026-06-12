/**
 * Timezone helpers built on Intl — no network, works for any IANA zone.
 */

const dtfCache = new Map<string, Intl.DateTimeFormat>();

function getDtf(tz: string): Intl.DateTimeFormat {
    let dtf = dtfCache.get(tz);
    if (!dtf) {
        dtf = new Intl.DateTimeFormat('en-US', {
            timeZone: tz,
            hourCycle: 'h23',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        dtfCache.set(tz, dtf);
    }
    return dtf;
}

function parts(tz: string, at: Date): Record<string, number> {
    const out: Record<string, number> = {};
    for (const p of getDtf(tz).formatToParts(at)) {
        if (p.type !== 'literal') out[p.type] = Number(p.value);
    }
    return out;
}

/** Offset in ms such that wallClock = utc + offset, at the given instant. */
export function tzOffsetMs(tz: string, at: Date): number {
    const p = parts(tz, at);
    const asUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
    return asUtc - Math.floor(at.getTime() / 1000) * 1000;
}

/** The instant corresponding to wall-clock (y, m, d, fractional hours) in tz. */
export function zonedTime(tz: string, y: number, m: number, d: number, hours = 0): Date {
    const wall = Date.UTC(y, m - 1, d) + hours * 3600_000;
    let offset = tzOffsetMs(tz, new Date(wall));
    offset = tzOffsetMs(tz, new Date(wall - offset));
    return new Date(wall - offset);
}

export interface YMD {
    y: number;
    m: number;
    d: number;
}

/** Calendar date of the instant, as observed in tz. */
export function ymdInTz(tz: string, at: Date): YMD {
    const p = parts(tz, at);
    return { y: p.year, m: p.month, d: p.day };
}

/** Fractional hour of day (0–24) of the instant, as observed in tz. */
export function fracHourInTz(tz: string, at: Date): number {
    const p = parts(tz, at);
    return p.hour + p.minute / 60 + p.second / 3600;
}

/** "UTC+05:30" style label for the zone at the given instant. */
export function offsetLabel(tz: string, at: Date): string {
    const mins = Math.round(tzOffsetMs(tz, at) / 60000);
    const sign = mins < 0 ? '−' : '+';
    const abs = Math.abs(mins);
    const h = String(Math.floor(abs / 60)).padStart(2, '0');
    const m = String(abs % 60).padStart(2, '0');
    return `UTC${sign}${h}:${m}`;
}

export function addDays(ymd: YMD, delta: number): YMD {
    const t = new Date(Date.UTC(ymd.y, ymd.m - 1, ymd.d + delta));
    return { y: t.getUTCFullYear(), m: t.getUTCMonth() + 1, d: t.getUTCDate() };
}

export function sameYmd(a: YMD, b: YMD): boolean {
    return a.y === b.y && a.m === b.m && a.d === b.d;
}
