export interface Preset {
    label: string;
    lat: number;
    lng: number;
}

/** A spread of latitudes, including polar day/night showcases. */
export const PRESETS: Preset[] = [
    { label: 'London', lat: 51.5074, lng: -0.1278 },
    { label: 'San Francisco', lat: 37.7749, lng: -122.4194 },
    { label: 'Tokyo', lat: 35.6762, lng: 139.6503 },
    { label: 'Nairobi', lat: -1.2921, lng: 36.8219 },
    { label: 'Sydney', lat: -33.8688, lng: 151.2093 },
    { label: 'Reykjavík', lat: 64.1466, lng: -21.9426 },
    { label: 'Longyearbyen', lat: 78.2232, lng: 15.6267 },
    { label: 'Ushuaia', lat: -54.8019, lng: -68.303 },
];
