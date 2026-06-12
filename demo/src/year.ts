/**
 * "A year of light" — every day of the year painted column by column with
 * its real phase boundaries. Computation is chunked so the chart paints in
 * progressively without blocking the UI; results are cached per location.
 */
import { computeDay, PHASE_COLORS, type DayInfo } from './phases';
import { sameYmd, type YMD } from './tz';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const GOLDEN_FILL = 'rgba(255, 146, 51, 0.55)';

function daysInYear(y: number): number {
    return (Date.UTC(y + 1, 0, 1) - Date.UTC(y, 0, 1)) / 86_400_000;
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

    private layout() {
        const w = this.canvas.clientWidth;
        const h = this.canvas.clientHeight;
        const narrow = w < 560;
        const ml = narrow ? 30 : 40;
        const mr = narrow ? 6 : 12;
        const mt = 16;
        const mb = 26;
        return { w, h, ml, mr, mt, mb, pw: w - ml - mr, ph: h - mt - mb, narrow };
    }

    private dayX(i: number, l: ReturnType<YearChart['layout']>): number {
        return l.ml + (i / this.total) * l.pw;
    }

    private draw(): void {
        const { canvas, ctx } = this;
        const l = this.layout();
        if (l.w < 10 || l.h < 10) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        if (canvas.width !== Math.round(l.w * dpr) || canvas.height !== Math.round(l.h * dpr)) {
            canvas.width = Math.round(l.w * dpr);
            canvas.height = Math.round(l.h * dpr);
        }
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, l.w, l.h);

        const yOf = (hr: number) => l.mt + (hr / 24) * l.ph;
        const colW = l.pw / this.total + 0.7;

        // day columns
        ctx.fillStyle = 'rgba(255,255,255,0.02)';
        ctx.fillRect(l.ml, l.mt, l.pw, l.ph);
        for (let i = 0; i < this.total; i++) {
            const d = this.days[i];
            if (!d) continue;
            const x = this.dayX(i, l);
            for (const seg of d.segments) {
                ctx.fillStyle = PHASE_COLORS[seg.phase];
                ctx.fillRect(x, yOf(seg.start), colW, yOf(seg.end) - yOf(seg.start));
            }
            ctx.fillStyle = GOLDEN_FILL;
            for (const iv of [d.golden.morning, d.golden.evening]) {
                if (iv.start !== null && iv.end !== null && iv.end > iv.start) {
                    ctx.fillRect(x, yOf(iv.start), colW, Math.max(1, yOf(iv.end) - yOf(iv.start)));
                }
            }
        }

        // hour grid + labels
        ctx.font = '10px "Space Grotesk", sans-serif';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        for (let hr = 0; hr <= 24; hr += 6) {
            const y = yOf(hr);
            ctx.strokeStyle = 'rgba(255,255,255,0.07)';
            ctx.beginPath();
            ctx.moveTo(l.ml, y);
            ctx.lineTo(l.w - l.mr, y);
            ctx.stroke();
            ctx.fillStyle = 'rgba(244,241,234,0.4)';
            ctx.fillText(String(hr).padStart(2, '0'), l.ml - 7, y);
        }

        // month boundaries + labels
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';
        const jan1 = Date.UTC(this.year, 0, 1);
        for (let m = 0; m < 12; m++) {
            const startIdx = (Date.UTC(this.year, m, 1) - jan1) / 86_400_000;
            const endIdx = (Date.UTC(this.year, m + 1, 1) - jan1) / 86_400_000;
            const x = this.dayX(startIdx, l);
            if (m > 0) {
                ctx.strokeStyle = 'rgba(255,255,255,0.06)';
                ctx.beginPath();
                ctx.moveTo(x, l.mt);
                ctx.lineTo(x, l.mt + l.ph);
                ctx.stroke();
            }
            ctx.fillStyle = 'rgba(244,241,234,0.45)';
            const cx = this.dayX((startIdx + endIdx) / 2, l);
            const label = l.narrow ? MONTHS[m][0] : MONTHS[m];
            ctx.fillText(label, cx, l.h - 9);
        }

        // solstices & equinoxes
        if (!l.narrow) {
            ctx.save();
            ctx.setLineDash([2, 5]);
            ctx.strokeStyle = 'rgba(255,255,255,0.22)';
            ctx.fillStyle = 'rgba(244,241,234,0.4)';
            ctx.font = '9px "Space Grotesk", sans-serif';
            const marks: Array<[number, number, string]> = [
                [2, 20, 'EQUINOX'], [5, 21, 'SOLSTICE'], [8, 22, 'EQUINOX'], [11, 21, 'SOLSTICE'],
            ];
            for (const [m, d, label] of marks) {
                const idx = (Date.UTC(this.year, m, d) - jan1) / 86_400_000;
                const x = this.dayX(idx, l) + colW / 2;
                ctx.beginPath();
                ctx.moveTo(x, l.mt);
                ctx.lineTo(x, l.mt + l.ph);
                ctx.stroke();
                ctx.fillText(label, x, l.mt - 4);
            }
            ctx.restore();
        }

        // today marker
        if (this.today && this.today.y === this.year) {
            const idx = (Date.UTC(this.today.y, this.today.m - 1, this.today.d) - jan1) / 86_400_000;
            const x = this.dayX(idx, l) + colW / 2;
            ctx.fillStyle = '#f2c14e';
            ctx.beginPath();
            ctx.moveTo(x - 4, l.mt + l.ph + 9);
            ctx.lineTo(x + 4, l.mt + l.ph + 9);
            ctx.lineTo(x, l.mt + l.ph + 2);
            ctx.closePath();
            ctx.fill();
        }

        // selected-day crosshair
        if (this.selected && this.selected.y === this.year) {
            const idx = (Date.UTC(this.selected.y, this.selected.m - 1, this.selected.d) - jan1) / 86_400_000;
            const x = this.dayX(idx, l) + colW / 2;
            ctx.save();
            ctx.strokeStyle = 'rgba(255,255,255,0.95)';
            ctx.lineWidth = 1.2;
            ctx.shadowColor = 'rgba(255,255,255,0.7)';
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.moveTo(x, l.mt - 3);
            ctx.lineTo(x, l.mt + l.ph + 3);
            ctx.stroke();
            ctx.restore();
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(x, l.mt - 3, 2.6, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    private attachPointer(): void {
        let dragging = false;
        const pick = (e: PointerEvent): void => {
            const l = this.layout();
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const i = Math.round(((x - l.ml) / l.pw) * this.total - 0.5);
            const idx = Math.max(0, Math.min(this.total - 1, i));
            const dt = new Date(Date.UTC(this.year, 0, 1 + idx));
            const ymd: YMD = { y: dt.getUTCFullYear(), m: dt.getUTCMonth() + 1, d: dt.getUTCDate() };
            if (!this.selected || !sameYmd(this.selected, ymd)) {
                this.onSelect(ymd);
            }
        };
        this.canvas.addEventListener('pointerdown', (e) => {
            dragging = true;
            this.canvas.setPointerCapture(e.pointerId);
            pick(e);
        });
        this.canvas.addEventListener('pointermove', (e) => {
            if (dragging) pick(e);
        });
        this.canvas.addEventListener('pointerup', () => { dragging = false; });
        this.canvas.addEventListener('pointercancel', () => { dragging = false; });
    }
}
