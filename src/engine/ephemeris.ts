import { Body, Ecliptic, GeoVector, MoonPhase } from 'astronomy-engine'; import { norm, signName } from './util'; import type { PlanetPosition } from './types';
const bodies:[PlanetPosition['id'],Body][]=[['Sun',Body.Sun],['Moon',Body.Moon],['Mercury',Body.Mercury],['Venus',Body.Venus],['Mars',Body.Mars],['Jupiter',Body.Jupiter],['Saturn',Body.Saturn],['Uranus',Body.Uranus],['Neptune',Body.Neptune],['Pluto',Body.Pluto]];
export function eclipticLon(body:Body,t:any){return norm(Ecliptic(GeoVector(body,t,true)).elon)}
export function planetPositions(t:any):PlanetPosition[]{return bodies.map(([id,body])=>{const lon=eclipticLon(body,t); const d=.5; const before=eclipticLon(body,t.AddDays(-d)); const after=eclipticLon(body,t.AddDays(d)); let speed=norm(after-before); if(speed>180) speed-=360; speed/=2*d; return {id,lon,speed,retrograde:speed<0,sign:signName(lon)};});}
export function phase(t:any){const angle=MoonPhase(t); return {angle, illumination:(1-Math.cos(angle*Math.PI/180))/2};}
