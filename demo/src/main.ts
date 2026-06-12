import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import tzlookup from 'tz-lookup';
import { getSolarPosition } from 'sunrise-sunset-js';
import { SkyScene } from './sky';
import {
    computeDay, phaseAt, PHASE_COLORS, PHASE_LABELS, GOLDEN_COLOR, BLUE_COLOR,
    type DayInfo, type PhaseId,
} from './phases';
import {
    zonedTime, ymdInTz, fracHourInTz, offsetLabel, addDays, sameYmd, type YMD,
} from './tz';
import { renderDial, attachDialDrag } from './dial';
import { YearChart } from './year';
import { PRESETS } from './locations';

gsap.registerPlugin(ScrollTrigger);

/* ============ helpers ============ */

const $ = <T extends HTMLElement = HTMLElement>(sel: string): T =>
    document.querySelector(sel) as T;

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function fmtHM(h: number): string {
    const total = Math.floor(clamp(h, 0, 24) * 60) % 1440;
    return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

function fmtTime(tz: string, d: Date | null): string {
    if (!d || isNaN(d.getTime())) return '—';
    return new Intl.DateTimeFormat('en-GB', {
        timeZone: tz, hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
    }).format(d);
}

function fmtDate(tz: string, ymd: YMD, long = false): string {
    const probe = zonedTime(tz, ymd.y, ymd.m, ymd.d, 12);
    return new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        weekday: long ? 'long' : 'short',
        month: long ? 'long' : 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(probe);
}

function fmtDur(ms: number | null): string {
    if (ms === null) return '—';
    const m = Math.round(ms / 60000);
    return `${Math.floor(m / 60)}h ${String(m % 60).padStart(2, '0')}m`;
}

function fmtDelta(ms: number): string {
    const s = Math.round(ms / 1000);
    const sign = s < 0 ? '−' : '+';
    const abs = Math.abs(s);
    return `${sign}${Math.floor(abs / 60)}m ${String(abs % 60).padStart(2, '0')}s`;
}

const WINDS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
const compass = (az: number) => WINDS[Math.round(((az % 360) + 360) % 360 / 45) % 8];

/* ============ state ============ */

interface AppState {
    lat: number;
    lng: number;
    tz: string;
    label: string;
    date: YMD;
    hours: number;
}

const PREFS_KEY = 'ssjs-demo-prefs';
const GEO_CACHE_KEY = 'ssjs-demo-geo';

function loadPrefs(): { lat: number; lng: number; label: string } {
    try {
        const raw = JSON.parse(localStorage.getItem(PREFS_KEY) || '');
        if (typeof raw.lat === 'number' && typeof raw.lng === 'number') return raw;
    } catch { /* fall through */ }
    return { ...PRESETS[0], label: PRESETS[0].label };
}

const initial = loadPrefs();

// Shareable state via URL: ?lat=48.86&lng=2.35&date=2026-06-21&t=21.5
const params = new URLSearchParams(location.search);
const pLat = parseFloat(params.get('lat') ?? '');
const pLng = parseFloat(params.get('lng') ?? '');
if (!isNaN(pLat) && !isNaN(pLng)) {
    initial.lat = clamp(pLat, -90, 90);
    initial.lng = clamp(pLng, -180, 180);
    initial.label = `${Math.abs(pLat).toFixed(2)}°${pLat >= 0 ? 'N' : 'S'}, ${Math.abs(pLng).toFixed(2)}°${pLng >= 0 ? 'E' : 'W'}`;
}
const initialTz = tzlookup(initial.lat, initial.lng);
const pDate = /^(\d{4})-(\d{2})-(\d{2})$/.exec(params.get('date') ?? '');
const pHours = parseFloat(params.get('t') ?? '');
if (params.has('shot')) document.documentElement.classList.add('shot');

const state: AppState = {
    lat: initial.lat,
    lng: initial.lng,
    tz: initialTz,
    label: initial.label,
    date: pDate
        ? { y: Number(pDate[1]), m: Number(pDate[2]), d: Number(pDate[3]) }
        : ymdInTz(initialTz, new Date()),
    hours: !isNaN(pHours) ? clamp(pHours, 0, 24) : fracHourInTz(initialTz, new Date()),
};

let day: DayInfo;
let prevDay: DayInfo;

/* ============ dom ============ */

const els = {
    bigTime: $('#bigTime'),
    phaseLabel: $('#phaseLabel'),
    dateText: $('#dateText'),
    dateInput: $<HTMLInputElement>('#dateInput'),
    tzText: $('#tzText'),
    locBtn: $('#locBtn'),
    polarBadge: $('#polarBadge'),
    statElev: $('#statElev'),
    statAz: $('#statAz'),
    statDayLen: $('#statDayLen'),
    scrubber: $('#scrubber'),
    scrubTrack: $('#scrubTrack'),
    scrubMarkers: $('#scrubMarkers'),
    playhead: $('#playhead'),
    playBtn: $('#playBtn'),
    playIcon: document.getElementById('playIcon') as unknown as SVGPathElement,
    nowBtn: $('#nowBtn'),
    locPanel: $('#locPanel'),
    locClose: $('#locClose'),
    presetChips: $('#presetChips'),
    latInput: $<HTMLInputElement>('#latInput'),
    lngInput: $<HTMLInputElement>('#lngInput'),
    applyLoc: $('#applyLoc'),
    geoBtn: $('#geoBtn'),
    dial: document.getElementById('dial') as unknown as SVGSVGElement,
    cards: $('#cards'),
    yearCanvas: $<HTMLCanvasElement>('#yearCanvas'),
    yearReadout: $('#yearReadout'),
    legend: $('#legend'),
    copyBtn: $('#copyBtn'),
};

const sky = new SkyScene($<HTMLCanvasElement>('#sky'));

/* ============ rendering ============ */

function renderBigTime(h: number): void {
    const txt = fmtHM(h);
    if (els.bigTime.dataset.v === txt) return;
    els.bigTime.dataset.v = txt;
    els.bigTime.innerHTML = txt
        .split('')
        .map((c) => `<span${c === ':' ? ' class="colon"' : ''}>${c}</span>`)
        .join('');
}

function renderScrubTrack(): void {
    const stops: string[] = [];
    for (const seg of day.segments) {
        const c = PHASE_COLORS[seg.phase];
        stops.push(`${c} ${(seg.start / 24) * 100}%`, `${c} ${(seg.end / 24) * 100}%`);
    }
    const phaseLayer = `linear-gradient(to right, ${stops.join(', ')})`;
    const goldStops: string[] = ['rgba(255,146,51,0) 0%'];
    for (const iv of [day.golden.morning, day.golden.evening]) {
        if (iv.start === null || iv.end === null || iv.end <= iv.start) continue;
        const a = (iv.start / 24) * 100;
        const b = (iv.end / 24) * 100;
        goldStops.push(
            `rgba(255,146,51,0) ${a}%`, `rgba(255,146,51,0.75) ${a}%`,
            `rgba(255,146,51,0.75) ${b}%`, `rgba(255,146,51,0) ${b}%`,
        );
    }
    goldStops.push('rgba(255,146,51,0) 100%');
    const goldLayer = `linear-gradient(to right, ${goldStops.join(', ')})`;
    els.scrubTrack.style.background = `${goldLayer}, ${phaseLayer}`;

    const markers: string[] = [];
    const mark = (h: number | null, label: string) => {
        if (h === null) return;
        const pct = (h / 24) * 100;
        markers.push(`<div class="scrub-marker" style="left:${pct}%"></div>`);
        if (label) {
            markers.push(`<div class="scrub-mlabel" style="left:${pct}%">${label}</div>`);
        }
    };
    mark(day.sunriseH, day.sunriseH !== null ? `↑ ${fmtHM(day.sunriseH)}` : '');
    mark(day.noonH, '');
    mark(day.sunsetH, day.sunsetH !== null ? `↓ ${fmtHM(day.sunsetH)}` : '');
    els.scrubMarkers.innerHTML = markers.join('');
}

interface CardDef {
    key: string;
    label: string;
    value: string;
    sub: string;
    dot: string;
    jump: number | null;
}

function eventAzimuth(d: Date | null): string {
    if (!d) return '';
    const p = getSolarPosition(state.lat, state.lng, d, { timezoneId: state.tz });
    return p ? `az ${p.azimuth.toFixed(0)}° ${compass(p.azimuth)}` : '';
}

function buildCards(): void {
    const tw = day.twilight;
    const t = (d: Date | null | undefined) => fmtTime(state.tz, d ?? null);
    const iv = (a: Date | null | undefined, b: Date | null | undefined) =>
        a && b ? `${t(a)} – ${t(b)}` : '—';
    const hOf = (d: Date | null | undefined) =>
        d ? fracHourInTz(state.tz, d) : null;
    const pc = (p: PhaseId) => PHASE_COLORS[p];

    const dayLenDelta =
        day.dayLengthMs !== null && prevDay.dayLengthMs !== null
            ? `${fmtDelta(day.dayLengthMs - prevDay.dayLengthMs)} vs yesterday`
            : '';

    const defs: CardDef[] = [
        { key: 'ad', label: 'Astro dawn', value: t(tw?.astronomicalDawn), sub: 'sun at −18°', dot: pc('astro'), jump: hOf(tw?.astronomicalDawn) },
        { key: 'nd', label: 'Nautical dawn', value: t(tw?.nauticalDawn), sub: 'sun at −12°', dot: pc('nautical'), jump: hOf(tw?.nauticalDawn) },
        { key: 'cd', label: 'Civil dawn', value: t(tw?.civilDawn), sub: 'sun at −6°', dot: pc('civil'), jump: hOf(tw?.civilDawn) },
        { key: 'bm', label: 'Blue hour · am', value: iv(tw?.blueHour?.morning.start, tw?.blueHour?.morning.end), sub: 'before sunrise', dot: BLUE_COLOR, jump: hOf(tw?.blueHour?.morning.start) },
        { key: 'sr', label: 'Sunrise', value: t(day.sunrise), sub: eventAzimuth(day.sunrise), dot: pc('day'), jump: day.sunriseH },
        { key: 'gm', label: 'Golden hour · am', value: iv(tw?.goldenHour?.morning.start, tw?.goldenHour?.morning.end), sub: 'after sunrise', dot: GOLDEN_COLOR, jump: hOf(tw?.goldenHour?.morning.start) },
        { key: 'noon', label: 'Solar noon', value: t(day.solarNoon), sub: `max elevation ${day.noonElevation.toFixed(1)}°`, dot: '#fff', jump: day.noonH },
        { key: 'ge', label: 'Golden hour · pm', value: iv(tw?.goldenHour?.evening.start, tw?.goldenHour?.evening.end), sub: 'before sunset', dot: GOLDEN_COLOR, jump: hOf(tw?.goldenHour?.evening.start) },
        { key: 'ss', label: 'Sunset', value: t(day.sunset), sub: eventAzimuth(day.sunset), dot: pc('day'), jump: day.sunsetH },
        { key: 'be', label: 'Blue hour · pm', value: iv(tw?.blueHour?.evening.start, tw?.blueHour?.evening.end), sub: 'after sunset', dot: BLUE_COLOR, jump: hOf(tw?.blueHour?.evening.start) },
        { key: 'cdk', label: 'Civil dusk', value: t(tw?.civilDusk), sub: 'sun at −6°', dot: pc('civil'), jump: hOf(tw?.civilDusk) },
        { key: 'ndk', label: 'Nautical dusk', value: t(tw?.nauticalDusk), sub: 'sun at −12°', dot: pc('nautical'), jump: hOf(tw?.nauticalDusk) },
        { key: 'adk', label: 'Astro dusk', value: t(tw?.astronomicalDusk), sub: 'sun at −18°', dot: pc('astro'), jump: hOf(tw?.astronomicalDusk) },
        { key: 'len', label: 'Day length', value: fmtDur(day.dayLengthMs), sub: dayLenDelta, dot: GOLDEN_COLOR, jump: null },
    ];

    els.cards.innerHTML = defs
        .map(
            (c) => `<button class="card" data-jump="${c.jump ?? ''}">
                <span class="card-k"><span class="dot" style="background:${c.dot}"></span>${c.label}</span>
                <span class="card-v">${c.value}</span>
                <span class="card-s">${c.sub || '&nbsp;'}</span>
            </button>`,
        )
        .join('');

    if (!reducedMotion) {
        gsap.fromTo(els.cards.children, { autoAlpha: 0.4, y: 5 }, {
            autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.012, ease: 'power2.out', overwrite: true,
        });
    }
}

let dialQueued = false;

function renderDialNow(): void {
    const ph = phaseAt(day, state.hours);
    const today = ymdInTz(state.tz, new Date());
    const nowH = sameYmd(today, state.date) ? fracHourInTz(state.tz, new Date()) : null;
    renderDial(els.dial, day, {
        hours: state.hours,
        timeLabel: fmtHM(state.hours),
        phase: ph,
        nowH,
    });
}

function queueDial(): void {
    if (dialQueued) return;
    dialQueued = true;
    requestAnimationFrame(() => {
        dialQueued = false;
        renderDialNow();
    });
}

/** Cheap updates that run every frame while scrubbing/playing. */
function refreshInstant(): void {
    const h = state.hours;
    const instant = zonedTime(state.tz, state.date.y, state.date.m, state.date.d, h);
    const pos = getSolarPosition(state.lat, state.lng, instant, { timezoneId: state.tz });

    if (pos) {
        sky.setSun(pos.elevation, pos.azimuth);
        els.statElev.textContent = `${pos.elevation.toFixed(1)}°`;
        els.statAz.textContent = `${pos.azimuth.toFixed(0)}° ${compass(pos.azimuth)}`;
    }

    renderBigTime(h);
    const ph = phaseAt(day, h);
    els.phaseLabel.textContent = ph.label;
    els.phaseLabel.style.color = ph.color;
    els.playhead.style.left = `${(clamp(h, 0, 24) / 24) * 100}%`;
    els.scrubber.setAttribute('aria-valuenow', h.toFixed(2));
    els.scrubber.setAttribute('aria-valuetext', `${fmtHM(h)}, ${ph.label}`);
    queueDial();
}

/** Full refresh for a new day / location. */
function refreshDay(): void {
    day = computeDay(state.lat, state.lng, state.date, state.tz);
    prevDay = computeDay(state.lat, state.lng, addDays(state.date, -1), state.tz);

    els.dateText.textContent = fmtDate(state.tz, state.date);
    els.dateInput.value = `${state.date.y}-${String(state.date.m).padStart(2, '0')}-${String(state.date.d).padStart(2, '0')}`;
    els.locBtn.textContent = state.label;
    els.tzText.textContent = `${offsetLabel(state.tz, zonedTime(state.tz, state.date.y, state.date.m, state.date.d, 12))}`;
    els.statDayLen.textContent = fmtDur(day.dayLengthMs);

    if (day.polar) {
        els.polarBadge.hidden = false;
        els.polarBadge.textContent =
            day.polar === 'day' ? '☀ Polar day — the sun never sets' : '☾ Polar night — the sun never rises';
    } else {
        els.polarBadge.hidden = true;
    }

    renderScrubTrack();
    buildCards();
    els.yearReadout.innerHTML =
        `<b>${fmtDate(state.tz, state.date, true)}</b> — ${fmtDur(day.dayLengthMs)} of daylight` +
        (day.sunriseH !== null && day.sunsetH !== null
            ? ` · ↑ ${fmtHM(day.sunriseH)} ↓ ${fmtHM(day.sunsetH)}`
            : '');
    refreshInstant();
}

/* ============ state transitions ============ */

let yearChart: YearChart;
let chartKey = '';

function syncYearChart(): void {
    const key = `${state.lat.toFixed(4)},${state.lng.toFixed(4)},${state.tz},${state.date.y}`;
    if (key !== chartKey) {
        chartKey = key;
        yearChart.load(state.lat, state.lng, state.tz, state.date.y, ymdInTz(state.tz, new Date()));
    }
    yearChart.setSelected(state.date);
}

function setHours(h: number, byUser = true): void {
    if (byUser) stopPlay();
    state.hours = clamp(h, 0, 24);
    refreshInstant();
}

function setDate(ymd: YMD): void {
    state.date = ymd;
    refreshDay();
    syncYearChart();
}

function setLocation(lat: number, lng: number, label?: string): void {
    state.lat = clamp(lat, -90, 90);
    state.lng = clamp(lng, -180, 180);
    state.tz = tzlookup(state.lat, state.lng);
    state.label = label ?? `${Math.abs(lat).toFixed(2)}°${lat >= 0 ? 'N' : 'S'}, ${Math.abs(lng).toFixed(2)}°${lng >= 0 ? 'E' : 'W'}`;
    els.latInput.value = state.lat.toFixed(4);
    els.lngInput.value = state.lng.toFixed(4);
    markActiveChip();
    localStorage.setItem(PREFS_KEY, JSON.stringify({ lat: state.lat, lng: state.lng, label: state.label }));
    refreshDay();
    syncYearChart();
    if (!label) reverseGeocode(state.lat, state.lng);
}

/* ============ reverse geocoding (label only, cached) ============ */

async function reverseGeocode(lat: number, lng: number): Promise<void> {
    const key = `${lat.toFixed(2)},${lng.toFixed(2)}`;
    let cache: Record<string, string> = {};
    try {
        cache = JSON.parse(localStorage.getItem(GEO_CACHE_KEY) || '{}');
    } catch { /* ignore */ }
    if (cache[key]) {
        state.label = cache[key];
        els.locBtn.textContent = state.label;
        return;
    }
    try {
        const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10`,
            { headers: { 'Accept-Language': 'en' } },
        );
        const data = await res.json();
        const a = data.address ?? {};
        const city = a.city || a.town || a.village || a.county || a.state || '';
        const cc = (a.country_code || '').toUpperCase();
        const label = [city, cc].filter(Boolean).join(', ');
        if (label && lat === state.lat && lng === state.lng) {
            state.label = label;
            els.locBtn.textContent = label;
            const keys = Object.keys(cache);
            if (keys.length > 50) delete cache[keys[0]];
            cache[key] = label;
            localStorage.setItem(GEO_CACHE_KEY, JSON.stringify(cache));
            localStorage.setItem(PREFS_KEY, JSON.stringify({ lat: state.lat, lng: state.lng, label }));
        }
    } catch { /* offline is fine — coords label stays */ }
}

/* ============ play / now ============ */

let playTween: gsap.core.Tween | null = null;
let introTween: gsap.core.Tween | null = null;
const HOURS_PER_SECOND = 2.2;

function setPlayIcon(playing: boolean): void {
    els.playIcon.setAttribute(
        'd',
        playing ? 'M6 4 H10 V20 H6 Z M14 4 H18 V20 H14 Z' : 'M7 4 L20 12 L7 20 Z',
    );
    els.playBtn.setAttribute('aria-label', playing ? 'Pause' : 'Play the day');
}

function stopPlay(): void {
    if (introTween) {
        introTween.kill();
        introTween = null;
    }
    if (playTween) {
        playTween.kill();
        playTween = null;
        setPlayIcon(false);
    }
}

function startPlay(): void {
    stopPlay();
    setPlayIcon(true);
    const proxy = { h: state.hours >= 23.99 ? 0 : state.hours };
    const run = (from: number): void => {
        proxy.h = from;
        playTween = gsap.to(proxy, {
            h: 24,
            duration: (24 - from) / HOURS_PER_SECOND,
            ease: 'none',
            onUpdate: () => setHours(proxy.h, false),
            onComplete: () => run(0),
        });
    };
    run(proxy.h);
}

function goNow(): void {
    stopPlay();
    const now = new Date();
    const today = ymdInTz(state.tz, now);
    if (!sameYmd(today, state.date)) {
        setDate(today);
    }
    setHours(fracHourInTz(state.tz, now), false);
}

/* ============ wiring ============ */

function markActiveChip(): void {
    for (const chip of Array.from(els.presetChips.children) as HTMLElement[]) {
        const p = PRESETS[Number(chip.dataset.i)];
        chip.classList.toggle(
            'active',
            Math.abs(p.lat - state.lat) < 0.01 && Math.abs(p.lng - state.lng) < 0.01,
        );
    }
}

function wire(): void {
    // scrubber
    let scrubbing = false;
    const scrubTo = (e: PointerEvent): void => {
        const r = els.scrubber.getBoundingClientRect();
        setHours(((e.clientX - r.left) / r.width) * 24);
    };
    els.scrubber.addEventListener('pointerdown', (e) => {
        scrubbing = true;
        els.scrubber.setPointerCapture(e.pointerId);
        scrubTo(e);
    });
    els.scrubber.addEventListener('pointermove', (e) => {
        if (scrubbing) scrubTo(e);
    });
    els.scrubber.addEventListener('pointerup', () => { scrubbing = false; });
    els.scrubber.addEventListener('pointercancel', () => { scrubbing = false; });
    els.scrubber.addEventListener('keydown', (e) => {
        const step = e.shiftKey ? 1 : 0.25;
        if (e.key === 'ArrowLeft') { setHours(state.hours - step); e.preventDefault(); }
        if (e.key === 'ArrowRight') { setHours(state.hours + step); e.preventDefault(); }
    });

    els.playBtn.addEventListener('click', () => (playTween ? stopPlay() : startPlay()));
    els.nowBtn.addEventListener('click', goNow);

    // date controls
    $('#datePrev').addEventListener('click', () => setDate(addDays(state.date, -1)));
    $('#dateNext').addEventListener('click', () => setDate(addDays(state.date, 1)));
    els.dateInput.addEventListener('change', () => {
        const [y, m, d] = els.dateInput.value.split('-').map(Number);
        if (y && m && d) setDate({ y, m, d });
    });

    // location panel
    els.presetChips.innerHTML = PRESETS
        .map((p, i) => `<button class="chip" data-i="${i}">${p.label}</button>`)
        .join('');
    els.presetChips.addEventListener('click', (e) => {
        const chip = (e.target as HTMLElement).closest('.chip') as HTMLElement | null;
        if (!chip) return;
        const p = PRESETS[Number(chip.dataset.i)];
        setLocation(p.lat, p.lng, p.label);
    });
    const togglePanel = (open: boolean): void => {
        els.locPanel.classList.toggle('open', open);
        els.locBtn.setAttribute('aria-expanded', String(open));
    };
    els.locBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePanel(!els.locPanel.classList.contains('open'));
    });
    els.locClose.addEventListener('click', () => togglePanel(false));
    document.addEventListener('pointerdown', (e) => {
        if (!els.locPanel.contains(e.target as Node) && e.target !== els.locBtn) {
            togglePanel(false);
        }
    });
    els.applyLoc.addEventListener('click', () => {
        const lat = parseFloat(els.latInput.value);
        const lng = parseFloat(els.lngInput.value);
        if (!isNaN(lat) && !isNaN(lng)) setLocation(lat, lng);
    });
    els.geoBtn.addEventListener('click', () => {
        navigator.geolocation?.getCurrentPosition(
            (p) => setLocation(p.coords.latitude, p.coords.longitude),
            () => { els.geoBtn.textContent = '⌖ Location unavailable'; },
        );
    });

    // dial + cards
    attachDialDrag(els.dial, (h) => setHours(h));
    els.cards.addEventListener('click', (e) => {
        const card = (e.target as HTMLElement).closest('.card') as HTMLElement | null;
        if (!card || card.dataset.jump === '') return;
        setHours(Number(card.dataset.jump));
        if (window.innerWidth < 860) {
            window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
        }
    });

    // copy install command
    els.copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText('npm install sunrise-sunset-js');
            els.copyBtn.textContent = '✓';
            setTimeout(() => { els.copyBtn.textContent = '⧉'; }, 1500);
        } catch { /* ignore */ }
    });

    // legend
    const legendItems: Array<[string, string]> = [
        [PHASE_COLORS.day, PHASE_LABELS.day],
        ['rgba(255,146,51,0.8)', 'Golden hour'],
        [PHASE_COLORS.civil, PHASE_LABELS.civil],
        [PHASE_COLORS.nautical, PHASE_LABELS.nautical],
        [PHASE_COLORS.astro, PHASE_LABELS.astro],
        [PHASE_COLORS.night, PHASE_LABELS.night],
    ];
    els.legend.innerHTML = legendItems
        .map(([c, l]) => `<span class="lg"><span class="sw" style="background:${c}"></span>${l}</span>`)
        .join('');

    // parallax on the mountain layers
    if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
        const backTo = gsap.quickTo('.m-back', 'x', { duration: 0.8, ease: 'power2.out' });
        const frontTo = gsap.quickTo('.m-front', 'x', { duration: 0.6, ease: 'power2.out' });
        $('#hero').addEventListener('pointermove', (e) => {
            const dx = e.clientX / window.innerWidth - 0.5;
            backTo(dx * -14);
            frontTo(dx * -26);
        });
    }

    // scroll reveals
    if (!reducedMotion) {
        for (const el of Array.from(document.querySelectorAll('.reveal'))) {
            gsap.from(el, {
                y: 36,
                autoAlpha: 0,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 88%' },
            });
        }
    }
}

/* ============ boot ============ */

yearChart = new YearChart(els.yearCanvas, (ymd) => {
    stopPlay();
    setDate(ymd);
});

els.latInput.value = state.lat.toFixed(4);
els.lngInput.value = state.lng.toFixed(4);
wire();
refreshDay();
syncYearChart();
markActiveChip();
if (initial.label === PRESETS[0].label && !localStorage.getItem(PREFS_KEY)) {
    // first visit: keep London until the user picks something
    localStorage.setItem(PREFS_KEY, JSON.stringify(initial));
}

// console handle — handy for poking the demo from devtools
Object.assign(window as unknown as Record<string, unknown>, {
    __demo: { setHours, setDate, setLocation, goNow, state },
});

// cinematic intro: sweep the last few hours of sky into "now"
if (!reducedMotion && isNaN(pHours)) {
    const target = state.hours;
    const from = Math.max(0, target - (target > 7 ? 7 : 2));
    if (target - from > 0.2) {
        const proxy = { h: from };
        introTween = gsap.to(proxy, {
            h: target,
            duration: 3,
            ease: 'power2.inOut',
            onUpdate: () => setHours(proxy.h, false),
            onComplete: () => { introTween = null; },
        });
    }
}
