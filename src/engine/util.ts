export const signs=['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'] as const;
export const elements=['Fire','Earth','Air','Water'] as const;
export const modalities=['Cardinal','Fixed','Mutable'] as const;
export function norm(deg:number){return ((deg%360)+360)%360} export function angleDiff(a:number,b:number){const d=Math.abs(norm(a-b));return d>180?360-d:d} export function signIndex(lon:number){return Math.floor(norm(lon)/30)} export function degInSign(lon:number){return norm(lon)%30} export function dms(deg:number){const d=Math.floor(deg);const m=Math.floor((deg-d)*60);return `${d}°${String(m).padStart(2,'0')}′`} export function signName(lon:number){return signs[signIndex(lon)]}
export function addDays(date:Date,days:number){return new Date(date.getTime()+days*86400000)}
