/**
 * 24-hour radial dial. Solar noon sits at the top; phases are drawn as
 * ring arcs, golden/blue hour as a thin outer ring, and a hand tracks the
 * scrubbed time. Dragging the dial scrubs the day.
 */
import {
    PHASE_COLORS, GOLDEN_COLOR, BLUE_COLOR,
    type DayInfo, type HourInterval, type PhaseAt,
} from './phases';

const C = 180; // center
const R_PHASE = 128;
const W_PHASE = 30;
const R_EXTRA = 152;
const W_EXTRA = 7;
const R_TICK = 104;

function pt(r: number, h: number): [number, number] {
    const a = ((h - 12) / 24) * Math.PI * 2;
    return [C + r * Math.sin(a), C - r * Math.cos(a)];
}

function arc(r: number, h1: number, h2: number, stroke: string, width: number, opacity = 1): string {
    if (h2 - h1 >= 23.999) {
        return `<circle cx="${C}" cy="${C}" r="${r}" fill="none" stroke="${stroke}" stroke-width="${width}" opacity="${opacity}"/>`;
    }
    const [x1, y1] = pt(r, h1);
    const [x2, y2] = pt(r, h2);
    const large = h2 - h1 > 12 ? 1 : 0;
    return `<path d="M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}" fill="none" stroke="${stroke}" stroke-width="${width}" opacity="${opacity}"/>`;
}

function intervalArc(iv: HourInterval, color: string): string {
    if (iv.start === null || iv.end === null || iv.end <= iv.start) return '';
    return arc(R_EXTRA, iv.start, iv.end, color, W_EXTRA, 0.95);
}

export interface DialState {
    hours: number;
    timeLabel: string;
    phase: PhaseAt;
    nowH: number | null; // marker for "right now", when viewing today
}

export function renderDial(svg: SVGSVGElement, day: DayInfo, st: DialState): void {
    const parts: string[] = [];

    parts.push(`<defs>
        <filter id="dialGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
    </defs>`);

    // phase ring
    for (const seg of day.segments) {
        parts.push(arc(R_PHASE, seg.start, seg.end, PHASE_COLORS[seg.phase], W_PHASE));
    }
    // hairline separators at sunrise/sunset
    for (const h of [day.sunriseH, day.sunsetH]) {
        if (h === null) continue;
        const [x1, y1] = pt(R_PHASE - W_PHASE / 2, h);
        const [x2, y2] = pt(R_PHASE + W_PHASE / 2, h);
        parts.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(255,255,255,0.9)" stroke-width="1.4"/>`);
    }

    // golden / blue hour outer ring
    parts.push(intervalArc(day.blue.morning, BLUE_COLOR));
    parts.push(intervalArc(day.blue.evening, BLUE_COLOR));
    parts.push(intervalArc(day.golden.morning, GOLDEN_COLOR));
    parts.push(intervalArc(day.golden.evening, GOLDEN_COLOR));

    // hour ticks + labels
    for (let h = 0; h < 24; h++) {
        const major = h % 6 === 0;
        const [x1, y1] = pt(R_TICK, h);
        const [x2, y2] = pt(R_TICK - (major ? 9 : 5), h);
        parts.push(`<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="rgba(244,241,234,${major ? 0.5 : 0.18})" stroke-width="${major ? 1.5 : 1}"/>`);
        if (major) {
            const [tx, ty] = pt(R_TICK - 22, h);
            parts.push(`<text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="middle" dominant-baseline="central" fill="rgba(244,241,234,0.45)" font-size="11" font-family="inherit">${String(h).padStart(2, '0')}</text>`);
        }
    }

    // "now" dot
    if (st.nowH !== null) {
        const [nx, ny] = pt(R_PHASE + W_PHASE / 2 + 11, st.nowH);
        parts.push(`<circle cx="${nx.toFixed(1)}" cy="${ny.toFixed(1)}" r="3" fill="#fff" opacity="0.9"><title>now</title></circle>`);
    }

    // hand + sun knob
    const [hx, hy] = pt(R_PHASE - W_PHASE / 2 - 12, st.hours);
    const [kx, ky] = pt(R_PHASE, st.hours);
    parts.push(`<line x1="${C}" y1="${C}" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="rgba(242,193,78,0.65)" stroke-width="1.6"/>`);
    parts.push(`<circle cx="${kx.toFixed(1)}" cy="${ky.toFixed(1)}" r="8" fill="#f2c14e" filter="url(#dialGlow)"/>`);
    parts.push(`<circle cx="${kx.toFixed(1)}" cy="${ky.toFixed(1)}" r="3" fill="#0a0d1c"/>`);

    // center readout
    parts.push(`<text x="${C}" y="${C - 6}" text-anchor="middle" fill="#f4f1ea" font-size="46" font-family="'Instrument Serif', serif">${st.timeLabel}</text>`);
    parts.push(`<text x="${C}" y="${C + 26}" text-anchor="middle" fill="${st.phase.color}" font-size="10.5" letter-spacing="3.2" font-family="inherit">${st.phase.label.toUpperCase()}</text>`);

    svg.innerHTML = parts.join('');
}

export function attachDialDrag(svg: SVGSVGElement, onScrub: (hours: number) => void): void {
    let dragging = false;
    const toHours = (e: PointerEvent): number => {
        const r = svg.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        const a = Math.atan2(x, -y); // 0 at top, clockwise
        return ((a / (Math.PI * 2)) * 24 + 12 + 24) % 24;
    };
    svg.addEventListener('pointerdown', (e) => {
        dragging = true;
        svg.setPointerCapture(e.pointerId);
        onScrub(toHours(e));
    });
    svg.addEventListener('pointermove', (e) => {
        if (dragging) onScrub(toHours(e));
    });
    svg.addEventListener('pointerup', () => { dragging = false; });
    svg.addEventListener('pointercancel', () => { dragging = false; });
}
