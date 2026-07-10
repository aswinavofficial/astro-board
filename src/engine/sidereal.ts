export function precessionArcsec(jd:number){const T=(jd-2451545)/36525; return 5028.796195*T+1.1054348*T*T+0.00007964*T*T*T}
export function lahiriAyanamsa(jd:number){const t0=2435553.5, ayan0=(23+15/60+0.658/3600); return ayan0+(precessionArcsec(jd)-precessionArcsec(t0))/3600}
