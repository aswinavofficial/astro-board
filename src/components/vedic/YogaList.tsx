export function YogaList({items}:{items:any[]}){return <ul className="grid gap-2">{items.map(y=><li key={y.name}><b>{y.name}</b>: {y.text}</li>)}</ul>}
