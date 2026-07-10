/// <reference types="vite/client" />

declare module 'tz-lookup' {
  export default function tzLookup(latitude: number, longitude: number): string;
}
