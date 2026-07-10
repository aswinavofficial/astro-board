export function meanObliquity(jd:number){const T=(jd-2451545.0)/36525; const sec=21.448-46.8150*T-0.00059*T*T+0.001813*T*T*T; return 23+26/60+sec/3600;}
