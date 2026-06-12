/**
 * Fullscreen physically-based sky. The sun direction is fed from the
 * library's getSolarPosition() output (elevation + azimuth), so the colors
 * you see are the actual atmosphere for that place, date and time.
 */
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';

const deg = THREE.MathUtils.degToRad;
const clamp = THREE.MathUtils.clamp;

function lerpAngle(a: number, b: number, t: number): number {
    let d = (b - a) % (Math.PI * 2);
    if (d > Math.PI) d -= Math.PI * 2;
    if (d < -Math.PI) d += Math.PI * 2;
    return a + d * t;
}

function makeStars(count: number, size: number, color: number): THREE.Points {
    const r = 400_000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        let x = 0, y = -1, z = 0, len = 2;
        while (len > 1 || y < 0.015) {
            x = Math.random() * 2 - 1;
            y = Math.random() * 2 - 1;
            z = Math.random() * 2 - 1;
            len = x * x + y * y + z * z;
        }
        const n = Math.sqrt(len) || 1;
        pos[i * 3] = (x / n) * r;
        pos[i * 3 + 1] = (y / n) * r;
        pos[i * 3 + 2] = (z / n) * r;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
        color,
        size,
        sizeAttenuation: false,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
    });
    return new THREE.Points(geo, mat);
}

export class SkyScene {
    private renderer: THREE.WebGLRenderer;
    private scene = new THREE.Scene();
    private camera: THREE.PerspectiveCamera;
    private sky = new Sky();
    private sunDir = new THREE.Vector3();
    private starsSmall: THREE.Points;
    private starsBig: THREE.Points;

    private targetElev = NaN;
    private targetTheta = NaN;
    private elev = NaN;
    private theta = NaN;
    private needsRender = true;
    private ready = false;

    /** Fires on every rendered frame with the smoothed view azimuth/elevation,
     *  so DOM companions (panorama, compass) stay in lockstep with the camera. */
    onFrame?: (azimuthDeg: number, elevationDeg: number) => void;

    constructor(private canvas: HTMLCanvasElement) {
        this.renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: false,
            powerPreference: 'high-performance',
        });
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 0.5;

        this.camera = new THREE.PerspectiveCamera(62, 1, 100, 2_000_000);
        this.camera.position.set(0, 80, 0);

        this.sky.scale.setScalar(450_000);
        this.scene.add(this.sky);

        this.starsSmall = makeStars(1100, 1.5, 0xaebdff);
        this.starsBig = makeStars(220, 2.6, 0xe6edff);
        this.scene.add(this.starsSmall, this.starsBig);

        const parent = canvas.parentElement ?? document.body;
        new ResizeObserver(() => this.resize()).observe(parent);
        this.resize();
        requestAnimationFrame(this.tick);
    }

    /**
     * @param elevDeg solar elevation above the horizon, degrees
     * @param azDeg solar azimuth, degrees eastward from north
     *
     * The camera yaw tracks the sun's azimuth (smoothed), so sunrises and
     * sunsets always happen in frame regardless of hemisphere or season.
     */
    setSun(elevDeg: number, azDeg: number): void {
        this.targetElev = elevDeg;
        this.targetTheta = deg(azDeg);
        if (isNaN(this.elev)) {
            this.elev = this.targetElev;
            this.theta = this.targetTheta;
        }
        this.needsRender = true;
    }

    private apply(): void {
        const e = this.elev;
        this.sunDir.setFromSphericalCoords(1, deg(90 - e), this.theta);
        const u = (this.sky.material as THREE.ShaderMaterial).uniforms;
        u.sunPosition.value.copy(this.sunDir);

        // The camera always faces the sun's azimuth: the sun only ever moves
        // vertically on screen while the landscape pans past. A slight upward
        // tilt as the sun climbs keeps the bluer zenith in frame.
        const high = clamp((e - 10) / 25, 0, 1);
        const pitch = deg(15 + high * 10);
        this.camera.lookAt(
            Math.sin(this.theta) * 2000,
            this.camera.position.y + 2000 * Math.tan(pitch),
            Math.cos(this.theta) * 2000,
        );

        // Push scattering up as the sun nears the horizon for richer dawns/dusks.
        const low = clamp(1 - Math.abs(e) / 12, 0, 1);
        u.rayleigh.value = 1.2 + low * 2.5;
        u.mieCoefficient.value = 0.0022 + low * 0.0058;
        u.mieDirectionalG.value = 0.85;
        u.turbidity.value = 2 + low * 6;

        const dayT = clamp((e + 9) / 18, 0, 1);
        // Dip exposure again past the golden-hour band: full daylight is shown
        // darker than physically "white" so the dome keeps its saturated blue.
        const noonT = clamp((e - 12) / 30, 0, 1);
        this.renderer.toneMappingExposure =
            0.07 + Math.pow(dayT, 1.25) * 0.48 - noonT * 0.12;

        const starT = clamp((-e - 3) / 9, 0, 1);
        (this.starsSmall.material as THREE.PointsMaterial).opacity = starT * 0.75;
        (this.starsBig.material as THREE.PointsMaterial).opacity = starT * 0.95;
    }

    private tick = (): void => {
        if (!isNaN(this.elev)) {
            const dElev = this.targetElev - this.elev;
            const dTheta = Math.abs(lerpAngle(this.theta, this.targetTheta, 1) - this.theta);
            if (Math.abs(dElev) > 0.002 || dTheta > 0.0004) {
                this.elev += dElev * 0.14;
                this.theta = lerpAngle(this.theta, this.targetTheta, 0.14);
                this.needsRender = true;
            }
            const starsVisible = (this.starsBig.material as THREE.PointsMaterial).opacity > 0.01;
            if (starsVisible) {
                this.starsSmall.rotation.y += 0.00012;
                this.starsBig.rotation.y += 0.00012;
                this.needsRender = true;
            }
            if (this.needsRender) {
                this.apply();
                this.renderer.render(this.scene, this.camera);
                this.needsRender = false;
                if (!this.ready) {
                    this.ready = true;
                    this.canvas.classList.add('ready');
                }
                const azDeg = ((THREE.MathUtils.radToDeg(this.theta) % 360) + 360) % 360;
                this.onFrame?.(azDeg, this.elev);
            }
        }
        requestAnimationFrame(this.tick);
    };

    private resize(): void {
        const parent = this.canvas.parentElement ?? document.body;
        const w = parent.clientWidth || 1;
        const h = parent.clientHeight || 1;
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
        this.renderer.setSize(w, h, false);
        this.camera.aspect = w / h;
        this.camera.fov = w < h ? 78 : 62;
        this.camera.updateProjectionMatrix();
        this.needsRender = true;
    }
}
