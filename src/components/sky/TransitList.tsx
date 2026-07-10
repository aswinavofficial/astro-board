export function TransitList({aspects}:{aspects:any[]}){return <ul>{aspects.slice(0,8).map((a,i)=><li key={i}>{a.a} {a.type} {a.b} ({a.orb.toFixed(1)}°)</li>)}</ul>}
