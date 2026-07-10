import type { signs } from './util';

export type SignName=(typeof signs)[number];
export type PlanetId='Sun'|'Moon'|'Mercury'|'Venus'|'Mars'|'Jupiter'|'Saturn'|'Uranus'|'Neptune'|'Pluto'|'Rahu'|'Ketu'|'Lilith'|'Fortune';
export type HouseSystem='whole-sign'|'equal'|'porphyry'|'placidus'; export type ZodiacMode='tropical'|'sidereal';
export interface BirthData{name:string;date:string;time:string;timeUnknown?:boolean;lat:number;lon:number;place:string;zone?:string}
export interface PlanetPosition{id:PlanetId;lon:number;lat?:number;speed:number;retrograde:boolean;sign:SignName;house?:number;note?:string}
export interface AngleSet{asc:number;mc:number;vertex:number;ramc:number}
export interface HouseSet{system:HouseSystem;cusps:number[];fallback?:string}
export interface Aspect{a:PlanetId;b:PlanetId;type:string;angle:number;orb:number;applying:boolean;exactness:number}
export interface NatalChart{birth:BirthData;jd:number;utc:string;zone:string;zodiac:ZodiacMode;ayanamsa:number;planets:PlanetPosition[];angles?:AngleSet;houses?:HouseSet;aspects:Aspect[];moonPhase:{angle:number;illumination:number};analytics:any;vedic:any;extras:any;warnings:string[]}
