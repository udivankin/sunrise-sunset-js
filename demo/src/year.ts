/**
 * "A year of light" — a solar ring. Every day of the year is one thin spoke:
 * midnight at the core, midnight at the rim, painted with its real phase
 * boundaries. The seasons swell and shrink the golden band; polar locations
 * grow solid gold or indigo sectors. Computation is chunked so the ring
 * sweeps in clockwise without blocking the UI; results are cached per location.
 */
import { computeDay, PHASE_COLORS, type DayInfo } from './phases';
import { sameYmd, zonedTime, type YMD } from './tz';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const GOLDEN_FILL = 'rgba(255, 146, 51, 0.6)';
const TAU = Math.PI * 2;

function daysInYear(y: number): number {
    return (Date.UTC(y + 1, 0, 1) - Date.UTC(y, 0, 1)) / 86_400_000;
}

interface Geom {
    w: number;
    h: number;
    cx: number;
    cy: number;
    r0: number; // 00:00
    r1: number; // 24:00
}

export class YearChart {
    private ctx: CanvasRenderingContext2D;
    private days: (DayInfo | null)[] = [];
    private total = 365;
    private year = 0;
    private selected: YMD | null = null;
    private today: YMD | null = null;
    private job = 0;
    private cache = new Map<string, DayInfo[]>();
    private drawQueued = false;

    constructor(
        private canvas: HTMLCanvasElement,
        private onSelect: (ymd: YMD) => void,
    ) {
        this.ctx = canvas.getContext('2d')!;
        new ResizeObserver(() => this.queueDraw()).observe(canvas);
        this.attachPointer();
    }

    load(lat: number, lng: number, tz: string, year: number, today: YMD | null): void {
        this.year = year;
        this.today = today;
        this.total = daysInYear(year);
        const key = `${lat.toFixed(4)},${lng.toFixed(4)},${tz},${year}`;
        const cached = this.cache.get(key);
        if (cached) {
            this.days = cached;
            this.job++; // cancel any in-flight job
            this.queueDraw();
            return;
        }

        const token = ++this.job;
        const days: (DayInfo | null)[] = new Array(this.total).fill(null);
        this.days = days;
        let i = 0;
        const step = (): void => {
            if (token !== this.job) return;
            const end = Math.min(i + 14, this.total);
            for (; i < end; i++) {
                const dt = new Date(Date.UTC(year, 0, 1 + i));
                days[i] = computeDay(lat, lng, {
                    y: dt.getUTCFullYear(), m: dt.getUTCMonth() + 1, d: dt.getUTCDate(),
                }, tz);
            }
            this.queueDraw();
            if (i < this.total) {
                setTimeout(step, 0);
            } else {
                if (this.cache.size > 8) {
                    const oldest = this.cache.keys().next().value;
                    if (oldest) this.cache.delete(oldest);
                }
                this.cache.set(key, days as DayInfo[]);
            }
        };
        step();
    }

    setSelected(ymd: YMD): void {
        this.selected = ymd;
        this.queueDraw();
    }

    private queueDraw(): void {
        if (this.drawQueued) return;
        this.drawQueued = true;
        requestAnimationFrame(() => {
            this.drawQueued = false;
            this.draw();
        });
    }

    private geom(): Geom {
        const w = this.canvas.clientWidth;
        const h = this.canvas.clientHeight;
        const R = Math.min(w, h) / 2;
        const r1 = R - 34;
        const r0 = Math.max(48, R * 0.34);
        return { w, h, cx: w / 2, cy: h / 2, r0, r1 };
    }

    private angleOf(i: number): number {
        return -Math.PI / 2 + (i / this.total) * TAU;
    }

    private dayIndexOf(ymd: YMD): number {
        return (Date.UTC(ymd.y, ymd.m - 1, ymd.d) - Date.UTC(this.year, 0, 1)) / 86_400_000;
    }

    private draw(): void {
        const { canvas, ctx } = this;
        const g = this.geom();
        if (g.w < 10 || g.h < 10) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        if (canvas.width !== Math.round(g.w * dpr) || canvas.height !== Math.round(g.h * dpr)) {
            canvas.width = Math.round(g.w * dpr);
            canvas.height = Math.round(g.h * dpr);
        }
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, g.w, g.h);

        const rOf = (hr: number) => g.r0 + (hr / 24) * (g.r1 - g.r0);
        const overlap = Math.max(0.002, TAU / this.total / 3);

        // day spokes
        for (let i = 0; i < this.total; i++) {
            const d = this.days[i];
            if (!d) continue;
            const a0 = this.angleOf(i);
            const a1 = this.angleOf(i + 1) + overlap;
            for (const seg of d.segments) {
                const rA = rOf(seg.start);
                const rB = rOf(seg.end);
                ctx.strokeStyle = PHASE_COLORS[seg.phase];
                ctx.lineWidth = rB - rA;
                ctx.beginPath();
                ctx.arc(g.cx, g.cy, (rA + rB) / 2, a0, a1);
                ctx.stroke();
            }
            ctx.strokeStyle = GOLDEN_FILL;
            for (const iv of [d.golden.morning, d.golden.evening]) {
                if (iv.start === null || iv.end === null || iv.end <= iv.start) continue;
                const rA = rOf(iv.start);
                const rB = Math.max(rOf(iv.end), rA + 1);
                ctx.lineWidth = rB - rA;
                ctx.beginPath();
                ctx.arc(g.cx, g.cy, (rA + rB) / 2, a0, a1);
                ctx.stroke();
            }
        }

        // hour rings (06 / 12 / 18) + rim hairlines
        for (const hr of [6, 12, 18]) {
            ctx.strokeStyle = 'rgba(255,255,255,0.06)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(g.cx, g.cy, rOf(hr), 0, TAU);
            ctx.stroke();
        }
        for (const r of [g.r0 - 1, g.r1 + 1]) {
            ctx.strokeStyle = 'rgba(255,255,255,0.1)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(g.cx, g.cy, r, 0, TAU);
            ctx.stroke();
        }
        // tiny hour labels along the Jan-1 spoke
        ctx.font = '9px "Space Grotesk", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'rgba(244,241,234,0.42)';
        for (const hr of [6, 12, 18]) {
            ctx.fillText(String(hr).padStart(2, '0'), g.cx, g.cy - rOf(hr));
        }

        const jan1 = Date.UTC(this.year, 0, 1);
        const idxOf = (m: number, d: number) => (Date.UTC(this.year, m, d) - jan1) / 86_400_000;

        // month boundaries + labels
        ctx.font = '10.5px "Space Grotesk", sans-serif';
        for (let m = 0; m < 12; m++) {
            const aB = this.angleOf(idxOf(m, 1));
            ctx.strokeStyle = 'rgba(5,7,15,0.55)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(g.cx + Math.cos(aB) * g.r0, g.cy + Math.sin(aB) * g.r0);
            ctx.lineTo(g.cx + Math.cos(aB) * g.r1, g.cy + Math.sin(aB) * g.r1);
            ctx.stroke();

            const aM = this.angleOf(idxOf(m, 15));
            const rL = g.r1 + 17;
            ctx.fillStyle = 'rgba(244,241,234,0.5)';
            ctx.fillText(MONTHS[m], g.cx + Math.cos(aM) * rL, g.cy + Math.sin(aM) * rL);
        }

        // solstice / equinox spokes
        ctx.save();
        ctx.setLineDash([2, 5]);
        ctx.strokeStyle = 'rgba(255,255,255,0.22)';
        for (const [m, d] of [[2, 20], [5, 21], [8, 22], [11, 21]]) {
            const a = this.angleOf(idxOf(m, d) + 0.5);
            ctx.beginPath();
            ctx.moveTo(g.cx + Math.cos(a) * g.r0, g.cy + Math.sin(a) * g.r0);
            ctx.lineTo(g.cx + Math.cos(a) * (g.r1 + 6), g.cy + Math.sin(a) * (g.r1 + 6));
            ctx.stroke();
        }
        ctx.restore();

        // today marker
        if (this.today && this.today.y === this.year) {
            const a = this.angleOf(this.dayIndexOf(this.today) + 0.5);
            ctx.fillStyle = '#f2c14e';
            ctx.beginPath();
            ctx.arc(g.cx + Math.cos(a) * (g.r1 + 8), g.cy + Math.sin(a) * (g.r1 + 8), 3, 0, TAU);
            ctx.fill();
        }

        // selected-day spoke + center readout
        let selDay: DayInfo | null = null;
        if (this.selected && this.selected.y === this.year) {
            const idx = this.dayIndexOf(this.selected);
            selDay = this.days[idx] ?? null;
            const a = this.angleOf(idx + 0.5);
            ctx.save();
            ctx.strokeStyle = 'rgba(255,255,255,0.95)';
            ctx.lineWidth = 1.4;
            ctx.shadowColor = 'rgba(255,255,255,0.8)';
            ctx.shadowBlur = 7;
            ctx.beginPath();
            ctx.moveTo(g.cx + Math.cos(a) * (g.r0 - 4), g.cy + Math.sin(a) * (g.r0 - 4));
            ctx.lineTo(g.cx + Math.cos(a) * (g.r1 + 5), g.cy + Math.sin(a) * (g.r1 + 5));
            ctx.stroke();
            ctx.restore();
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(g.cx + Math.cos(a) * (g.r1 + 5), g.cy + Math.sin(a) * (g.r1 + 5), 2.6, 0, TAU);
            ctx.fill();
        }
        this.drawCenter(g, selDay);
    }

    private drawCenter(g: Geom, d: DayInfo | null): void {
        const { ctx } = this;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        if (!d) {
            if (this.selected) {
                ctx.fillStyle = 'rgba(244,241,234,0.4)';
                ctx.font = '11px "Space Grotesk", sans-serif';
                ctx.fillText('computing…', g.cx, g.cy);
            }
            return;
        }

        const probe = zonedTime(d.tz, d.ymd.y, d.ymd.m, d.ymd.d, 12);
        const dateLabel = new Intl.DateTimeFormat('en-US', {
            timeZone: d.tz, weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
        }).format(probe).toUpperCase();

        ctx.fillStyle = 'rgba(244,241,234,0.55)';
        ctx.font = '500 10px "Space Grotesk", sans-serif';
        ctx.fillText(dateLabel, g.cx, g.cy - 30);

        const lenLabel = d.dayLengthMs === null
            ? '—'
            : `${Math.floor(d.dayLengthMs / 3_600_000)}h ${String(Math.round(d.dayLengthMs / 60_000) % 60).padStart(2, '0')}m`;
        ctx.fillStyle = '#f2c14e';
        ctx.font = `${Math.round(Math.min(30, g.r0 * 0.42))}px "Instrument Serif", serif`;
        ctx.fillText(lenLabel, g.cx, g.cy - 2);

        ctx.fillStyle = 'rgba(244,241,234,0.45)';
        ctx.font = '10px "Space Grotesk", sans-serif';
        ctx.fillText('of daylight', g.cx, g.cy + 20);

        const fmtH = (h: number | null): string => {
            if (h === null) return '—';
            const t = Math.floor(h * 60);
            return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`;
        };
        ctx.fillStyle = 'rgba(244,241,234,0.7)';
        ctx.font = '11px "Space Grotesk", sans-serif';
        const detail = d.polar === 'day'
            ? 'midnight sun'
            : d.polar === 'night'
                ? 'polar night'
                : `↑ ${fmtH(d.sunriseH)}   ↓ ${fmtH(d.sunsetH)}`;
        ctx.fillText(detail, g.cx, g.cy + 40);
    }

    private attachPointer(): void {
        let dragging = false;
        const pick = (e: PointerEvent): boolean => {
            const g = this.geom();
            const rect = this.canvas.getBoundingClientRect();
            const dx = e.clientX - rect.left - g.cx;
            const dy = e.clientY - rect.top - g.cy;
            const dist = Math.hypot(dx, dy);
            if (dist < g.r0 - 14 || dist > g.r1 + 30) return false;
            const a = (Math.atan2(dy, dx) + Math.PI / 2 + TAU) % TAU;
            const idx = Math.max(0, Math.min(this.total - 1, Math.floor((a / TAU) * this.total)));
            const dt = new Date(Date.UTC(this.year, 0, 1 + idx));
            const ymd: YMD = { y: dt.getUTCFullYear(), m: dt.getUTCMonth() + 1, d: dt.getUTCDate() };
            if (!this.selected || !sameYmd(this.selected, ymd)) {
                this.onSelect(ymd);
            }
            return true;
        };
        this.canvas.addEventListener('pointerdown', (e) => {
            if (pick(e)) {
                dragging = true;
                this.canvas.setPointerCapture(e.pointerId);
            }
        });
        this.canvas.addEventListener('pointermove', (e) => {
            if (dragging) pick(e);
        });
        this.canvas.addEventListener('pointerup', () => { dragging = false; });
        this.canvas.addEventListener('pointercancel', () => { dragging = false; });
    }
}
