import { writeFileSync } from 'node:fs';
const cities=[["New Delhi","Delhi","IN",28.6139,77.209,1],["Kochi","Kerala","IN",9.9312,76.2673,2]];
writeFileSync('src/data/cities.min.json', JSON.stringify(cities));
console.log('Wrote compact fallback city dataset. Replace with GeoNames export when network policy allows.');
