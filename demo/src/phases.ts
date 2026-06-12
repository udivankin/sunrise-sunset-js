/**
 * Per-day phase model. One computation feeds the hero scrubber,
 * the 24h dial and the year chart, so they can never disagree.
 */
import { getSunTimes, getSolarPosition, type TwilightTimes } from 'sunrise-sunset-js';
import { fracHourInTz, zonedTime, type YMD } from './tz';

export type PhaseId = 'night' | 'astro' | 'nautical' | 'civil' | 'day';

export interface PhaseSegment {
    phase: PhaseId;
    start: number; // fractional hours, 0–24, local to the day's timezone
    end: number;
}

export interface HourInterval {
    start: number | null;
    end: number | null;
}

export const PHASE_COLORS: Record<PhaseId, string> = {
    night: '#0a0f26',
    astro: '#101a3e',
    nautical: '#1e2d63',
    civil: '#48549b',
    day: '#f2c14e',
};

export const GOLDEN_COLOR = '#ff9233';
export const BLUE_COLOR = '#6386ff';

export const PHASE_LABELS: Record<PhaseId, string> = {
    night: 'Night',
    astro: 'Astronomical twilight',
    nautical: 'Nautical twilight',
    civil: 'Civil twilight',
    day: 'Daylight',
};

export interface DayInfo {
    ymd: YMD;
    tz: string;
    lat: number;
    lng: number;
    sunrise: Date | null;
    sunset: Date | null;
    solarNoon: Date | null;
    twilight: TwilightTimes | null;
    sunriseH: number | null;
    sunsetH: number | null;
    noonH: number | null;
    segments: PhaseSegment[];
    golden: { morning: HourInterval; evening: HourInterval };
    blue: { morning: HourInterval; evening: HourInterval };
    dayLengthMs: number | null;
    polar: 'day' | 'night' | null;
    noonElevation: number;
}

export function computeDay(lat: number, lng: number, ymd: YMD, tz: string): DayInfo {
    // Probe at local noon so the library resolves the intended calendar day.
    const probe = zonedTime(tz, ymd.y, ymd.m, ymd.d, 12);
    const opts = { timezoneId: tz };
    const times = getSunTimes(lat, lng, probe, opts);
    const tw = times.twilight;

    const toH = (d: Date | null | undefined): number | null =>
        d && !isNaN(d.getTime()) ? fracHourInTz(tz, d) : null;

    // Each boundary tells us the phase on either side of it; sorting the
    // ones that exist and sweeping 0→24h yields the day's segments even at
    // extreme latitudes where some thresholds are never crossed.
    const defs: Array<{ d: Date | null; before: PhaseId; after: PhaseId }> = [
        { d: tw?.astronomicalDawn ?? null, before: 'night', after: 'astro' },
        { d: tw?.nauticalDawn ?? null, before: 'astro', after: 'nautical' },
        { d: tw?.civilDawn ?? null, before: 'nautical', after: 'civil' },
        { d: times.sunrise, before: 'civil', after: 'day' },
        { d: times.sunset, before: 'day', after: 'civil' },
        { d: tw?.civilDusk ?? null, before: 'civil', after: 'nautical' },
        { d: tw?.nauticalDusk ?? null, before: 'nautical', after: 'astro' },
        { d: tw?.astronomicalDusk ?? null, before: 'astro', after: 'night' },
    ];
    const bounds = defs
        .map((b) => ({ t: toH(b.d), before: b.before, after: b.after }))
        .filter((b): b is { t: number; before: PhaseId; after: PhaseId } => b.t !== null)
        .sort((a, b) => a.t - b.t);

    const noonPos = getSolarPosition(lat, lng, times.solarNoon ?? probe, opts);
    const noonElevation = noonPos?.elevation ?? -90;

    const segments: PhaseSegment[] = [];
    if (bounds.length === 0) {
        const phase: PhaseId =
            noonElevation > -0.833 ? 'day'
                : noonElevation > -6 ? 'civil'
                    : noonElevation > -12 ? 'nautical'
                        : noonElevation > -18 ? 'astro'
                            : 'night';
        segments.push({ phase, start: 0, end: 24 });
    } else {
        let phase = bounds[0].before;
        let cursor = 0;
        for (const b of bounds) {
            if (b.t > cursor) segments.push({ phase, start: cursor, end: b.t });
            phase = b.after;
            cursor = Math.max(cursor, b.t);
        }
        if (cursor < 24) segments.push({ phase, start: cursor, end: 24 });
    }

    const interval = (iv?: { start: Date | null; end: Date | null } | null): HourInterval => ({
        start: toH(iv?.start),
        end: toH(iv?.end),
    });

    const polar: DayInfo['polar'] =
        !times.sunrise && !times.sunset
            ? noonElevation > -0.833 ? 'day' : 'night'
            : null;

    const dayLengthMs =
        times.sunrise && times.sunset
            ? times.sunset.getTime() - times.sunrise.getTime()
            : polar === 'day' ? 86_400_000
                : polar === 'night' ? 0
                    : null;

    return {
        ymd, tz, lat, lng,
        sunrise: times.sunrise,
        sunset: times.sunset,
        solarNoon: times.solarNoon,
        twilight: tw,
        sunriseH: toH(times.sunrise),
        sunsetH: toH(times.sunset),
        noonH: toH(times.solarNoon),
        segments,
        golden: { morning: interval(tw?.goldenHour?.morning), evening: interval(tw?.goldenHour?.evening) },
        blue: { morning: interval(tw?.blueHour?.morning), evening: interval(tw?.blueHour?.evening) },
        dayLengthMs,
        polar,
        noonElevation,
    };
}

export interface PhaseAt {
    id: PhaseId | 'golden' | 'blue';
    label: string;
    color: string;
}

const within = (h: number, iv: HourInterval) =>
    iv.start !== null && iv.end !== null && iv.start <= iv.end && h >= iv.start && h <= iv.end;

export function phaseAt(day: DayInfo, h: number): PhaseAt {
    if (within(h, day.golden.morning) || within(h, day.golden.evening)) {
        return { id: 'golden', label: 'Golden hour', color: GOLDEN_COLOR };
    }
    if (within(h, day.blue.morning) || within(h, day.blue.evening)) {
        return { id: 'blue', label: 'Blue hour', color: BLUE_COLOR };
    }
    const seg = day.segments.find((s) => h >= s.start && h < s.end) ?? day.segments[day.segments.length - 1];
    const id = seg?.phase ?? 'night';
    const color = id === 'day' ? GOLDEN_COLOR : id === 'night' ? '#8d9bce' : lighten(PHASE_COLORS[id]);
    return { id, label: PHASE_LABELS[id], color };
}

/** Phase ring colors are dark by design; lift them for use as text. */
function lighten(hex: string): string {
    const n = parseInt(hex.slice(1), 16);
    const ch = (v: number) => Math.min(255, Math.round(v + (255 - v) * 0.45));
    const r = ch((n >> 16) & 255), g = ch((n >> 8) & 255), b = ch(n & 255);
    return `rgb(${r}, ${g}, ${b})`;
}
