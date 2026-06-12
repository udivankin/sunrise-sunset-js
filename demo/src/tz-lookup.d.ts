declare module 'tz-lookup' {
    /** Returns the IANA timezone ID for the given coordinates. */
    export default function tzlookup(latitude: number, longitude: number): string;
}
